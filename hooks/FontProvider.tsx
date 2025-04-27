"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { Font } from "@/app/type";

interface FontContextType {
  bodyFont: string;
  headerFont: string;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({
  children,
  font,
}: {
  children: ReactNode;
  font: Font | undefined;
}) {
  const parseFontFamily = (fontName: string | undefined): string => {
    if (!fontName) return "Roboto";
    if (fontName.startsWith("http://") || fontName.startsWith("https://")) {
      const url = new URL(fontName);
      return url.searchParams.get("family") || "Roboto";
    }
    return fontName;
  };

  const bodyFont = parseFontFamily(font?.name);
  const headerFont = font?.headers ? parseFontFamily(font.headers) : bodyFont;
  const weights = font?.weights?.join(";") ?? "400;700";
  const subsets = font?.subsets?.join(",") ?? "arabic";

  useEffect(() => {
    if (!font?.name) return;

    const loadFont = (fontName: string) => {
      let fontUrl: string;

      if (fontName.startsWith("http://") || fontName.startsWith("https://")) {
        fontUrl = fontName;
      } else {
        const formatted = fontName.replace(/\s+/g, "+");
        fontUrl = `https://fonts.googleapis.com/css2?family=${formatted}:wght@${weights}&subset=${subsets}&display=swap`;
      }

      if (!document.querySelector(`link[href="${fontUrl}"]`)) {
        const link = document.createElement("link");
        link.href = fontUrl;
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
          document.head.removeChild(link);
        };
      }
    };

    loadFont(font.name);
    if (font?.headers && font.headers !== font.name) {
      loadFont(font.headers);
    }
  }, [font?.name, font?.headers, weights, subsets]);

  return (
    <FontContext.Provider value={{ bodyFont, headerFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
