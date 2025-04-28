"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents1 } from "@/mdx-component";
import { useData } from "@/hooks/DataProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontProvider } from "@/hooks/FontProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, loading } = useData();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const localePrefix = pathSegments[0] || "ir";
  const mdxComponents = useMDXComponents1({});

  const font = data?.brand?.font;

  const parseFontFamily = (fontName?: string): string => {
    if (!fontName) return "Roboto";
    if (fontName.startsWith("http://") || fontName.startsWith("https://")) {
      const url = new URL(fontName);
      return url.searchParams.get("family") || "KalamehWebFaNum";
    }
    return fontName;
  };

  const fontFamily = parseFontFamily(font?.name);
  const headerFont = parseFontFamily(font?.headers);
  const weights = font?.weights?.join(";") ?? "400;700";
  const subsets = font?.subsets?.join(",") ?? "arabic";

  useEffect(() => {
    const loadFont = (fontName: string) => {
      if (!fontName) return;

      const fontUrl = fontName.startsWith("http")
        ? fontName
        : `https://fonts.googleapis.com/css2?family=${fontName.replace(
            /\s+/g,
            "+"
          )}:wght@${weights}&subset=${subsets}&display=swap`;

      if (!document.querySelector(`link[href="${fontUrl}"]`)) {
        const link = document.createElement("link");
        link.href = fontUrl;
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => document.head.removeChild(link);
      }
    };

    loadFont(font?.name || "");
    if (font?.headers && font.headers !== font.name) {
      loadFont(font.headers);
    }
  }, [font, weights, subsets]);

  if (loading || !data) {
    return (
      <div className="space-y-6 py-5">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
      </div>
    );
  }

  const primaryColor = data.brand.primaryColor;
  const textColor = getContrastYIQ(primaryColor);
  const menuItems = Object.values(data.menu).flatMap((menu) => menu.items);
  const currentType = menuItems.find((item) =>
    pathname.includes(item.id)
  )?.type;
  const section = data.sections?.find((sec) => sec.type === currentType);
  const currentIndex = menuItems.findIndex((item) => item.type === currentType);
  const nextItem = menuItems[currentIndex + 1];
  const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null;

  function getContrastYIQ(hexColor: string): "black" | "white" {
    let color = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  const renderSectionContent = () => {
    if (!currentType || !section) {
      return (
        <div
          className="relative min-h-[50vh] flex items-center justify-center rounded-xl px-10 py-5"
          style={{
            backgroundColor: primaryColor,
            fontFamily: fontFamily,
            direction: "rtl",
          }}
        >
          <h2 className="text-2xl font-bold text-black">
            هیچ مسیری مطابقت ندارد
          </h2>
        </div>
      );
    }

    const hasMedia = section.video || section.img;

    return (
      <div style={{ fontFamily: fontFamily, direction: "rtl" }}>
        <div
          className={`relative min-h-[50vh] md:flex items-center justify-between rounded-xl gap-1 px-10 py-5 overflow-hidden ${
            hasMedia ? "block" : "md:flex"
          }`}
          style={{ backgroundColor: primaryColor, color: textColor }}
        >
          {section.pattern && (
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                backgroundImage: `url('${section.pattern}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
            />
          )}

          <div className="relative text-sm">
            <h1
              className="font-bold md:font-black text-display-lg lg:text-4xl text-3xl m-0"
              style={{ fontFamily: headerFont }}
            >
              {section.title && (
                <MDXRemote
                  {...(section.title as MDXRemoteSerializeResult)}
                  components={mdxComponents}
                />
              )}
            </h1>

            <h5 className="text-display-sm md:text-display-md m-0 mt-2 lg:mt-4">
              {section.description && (
                <MDXRemote
                  {...(section.description as MDXRemoteSerializeResult)}
                  components={mdxComponents}
                />
              )}
            </h5>
          </div>
          {hasMedia && (
            <div className="relative flex right-0 justify-end">
              {section.video ? (
                <motion.video
                  src={section.video}
                  autoPlay
                  loop
                  muted
                  className="max-w-full h-auto rounded-lg shadow-lg max-h-[50vh]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              ) : (
                <motion.img
                  src={section.img}
                  alt="تصویر کلی"
                  className="max-w-full h-auto rounded-lg shadow-lg max-h-[50vh]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <FontProvider font={data.brand.font}>
      <div
        className="space-y-8"
        style={{ fontFamily: fontFamily, direction: "rtl" }}
      >
        {renderSectionContent()}
        {children}
        <footer className="bg-neutral-100 dark:bg-neutral-900 h-20 rounded-2xl font-bold px-4 items-center w-full flex justify-between">
          {nextItem ? (
            <Link
              href={`/${localePrefix}/${nextItem.id}`}
              className="flex gap-2 text-right text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"
            >
              <div className="pt-2">
                <ChevronRight size={32} />
              </div>
              <div>
                <p className="font-light text-neutral-500 text-sm">بعدی</p>
                <p>{nextItem.title}</p>
              </div>
            </Link>
          ) : (
            <span>پایان بخش‌ها</span>
          )}
          {prevItem ? (
            <Link
              href={`/${localePrefix}/${prevItem.id}`}
              className="flex gap-2 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"
            >
              <div>
                <p className="font-light text-neutral-500 text-sm">قبلی</p>
                <p>{prevItem.title}</p>
              </div>
              <div className="pt-2">
                <ChevronLeft size={32} />
              </div>
            </Link>
          ) : (
            <span></span>
          )}
        </footer>
      </div>
    </FontProvider>
  );
}
