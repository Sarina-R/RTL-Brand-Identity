import { NextResponse } from "next/server";

const BrandIdentity = `<div className="flex flex-col lg:flex-row justify-between p-10 min-h-[300px] text-sm">
      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//portfolio-svgrepo-com.svg"
          alt="Vision Icon"
          className="w-15 h-15 py-2 mt-2 mx-auto mb-3 dark:invert"
        />
        <h2 className="sm:text-2xl text-lg font-bold sm:mb-4 mb-2">چشم انداز</h2>
        <p className="leading-relaxed sm:text-sm text-xs">
          برای تبدیل شدن به صحنه جهانی پیشرو برای رباتیک و هوش مصنوعی، شکل دادن به جهانی که در آن نوآوری های تکنولوژیکی صنایع را متحول می کند، زندگی را غنی می کند و پیشرفت پایدار را برای بشریت تقویت می کند.
        </p>
      </div>

      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//file-2-svgrepo-com.svg"
          alt="Mission Icon"
          className="w-15 h-15 py-2 mt-2 mx-auto mb-3 dark:invert"
        />
        <h2 className="sm:text-2xl text-lg font-bold sm:mb-4 mb-2">ماموریت</h2>
        <p className="leading-relaxed sm:text-sm text-xs">
          برای الهام بخشیدن و توانمندسازی جامعه جهانی روباتیک با ایجاد بستری پویا برای نوآوری، همکاری و تعالی. FIRA CUP 2025 متعهد به پیشرفت فناوری، پرورش استعدادهای جوان، و پیش بردن مرزهای آنچه که رباتیک می تواند برای آینده ای بهتر به دست آورد، است.
        </p>
      </div>

      <div className="border rounded-2xl m-3 flex-1 text-center px-5 dark:bg-neutral-900">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//trophy-svgrepo-com.svg"
          alt="Target Icon"
          className="w-15 h-15 py-2 mt-2 mx-auto mb-3 dark:invert"
        />
        <h2 className="sm:text-2xl text-lg font-bold sm:mb-4 mb-2">هدف</h2>
        <p className="leading-relaxed sm:text-sm text-xs">
          ایجاد روابط قوی با مشتریان در بخش های مختلف بازار، شامل مصرف کنندگان فردی و فراتر از آن.
        </p>
      </div>
    </div>`;

const item2 = `شخصیت برند فیرا ایران بر اساس کهن الگوی شعبده باز تعریف می شود – نوعی شعبده باز که آینده را به زمان حال می آورد و تجارب دگرگون کننده را برای مخاطبان خود خلق می کند.
«جسارت برای نوآوری»، «ماهیت پویا سفر» و «هوشمندی در درک نیازهای حال و آینده مشتریان و صنعت» در ایجاد این تجربیات ضروری است. این عناصر به تثبیت موقعیت فیرا ایران به عنوان برند پیشرو در صنعت مسافرت کمک می کند و آن را از رقبا متمایز می کند و در عین حال به طور مداوم برای پاسخگویی به نیازهای متنوع مشتریان ارزش ایجاد می کند.
نوآوری، شکل دادن به آینده، پیشگام بودن و انطباق با الگوهای رفتاری مدرن مخاطب، موضوعات کلیدی هستند که ما را در بازتعریف هویت برند فیرا ایران راهنمایی کرده‌اند.`;

const ToneOfVoice = `
<div className="w-full px-6 py-10 space-y-16">
          <div className="space-y-6">
            <h1 className="text-xl font-bold">لحن غالب</h1>
            <p className="text-neutral-700 dark:text-neutral-300 mx-auto leading-relaxed">
              لحن برند ما حرفه ای بودن و دوستی را با هم ترکیب می کند خدمات
              استثنایی به مشتریان را در اولویت قرار دهید. سازگار با آن باقی می
              ماند زمینه ها و مخاطبان مختلف
            </p>
          </div>
          <div className="w-full overflow-x-auto">
            <img
              src="https://cdn.alibaba.ir/cms/uploads/dominate_tone_5ec412f50a.svg"
              alt="Mew reveal chart"
              className="min-w-[900px] max-w-none mx-auto"
            />
          </div>
        </div>

        <div className="min-h-[500px] py-10 px-6">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
            <div className="relative flex-1 text-center">
              <div className="bg-gradient-to-r p-8 transform lg:-skew-y-6 rounded-3xl border dark:bg-zinc-900">
                <div className="transform lg:skew-y-6">
                  <div className="relative">
                    <img
                      src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(4).png"
                      alt="Friendly Icon"
                      className="w-24 h-24 rounded-full mx-auto mb-6 border-4 p-1"
                    />
                  </div>
                  <h6 className="text-3xl font-extrabold mb-4 tracking-wide glow-text">
                    دوستانه
                  </h6>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    ما تلاش می کنیم تا محیطی مهمان نواز و فراگیر را برای مشتریان
                    و شرکای خود ایجاد کنیم و ارتباطات شفاف و مشارکت های تعاونی
                    را پرورش دهیم.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex-1 text-center">
              <div className="p-8 transform lg:skew-y-6 rounded-3xl border dark:bg-zinc-900">
                <div className="transform lg:-skew-y-6">
                  <div className="relative">
                    <img
                      src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(5).png"
                      alt="Professional Icon"
                      className="w-24 h-24 rounded-full mx-auto mb-6 border-4"
                    />
                  </div>
                  <h6 className="text-3xl font-extrabold mb-4 tracking-wide glow-text">
                    حرفه‌ای
                  </h6>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    فیرا کاپ لحن حرفه ای و رسمی را در همه ارتباطات حفظ می کند و
                    نشان دهنده تعهد ما به تعالی و قابل اعتماد بودن است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
`;

const Mascot = `<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-6 sm:p-8 bg-[#FDB813]">
          <div className="absolute inset-0 bg-[url('https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//18.png')] bg-cover bg-center bg-no-repeat opacity-5 rounded-2xl"></div>
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
                  مسکات
                </h2>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  طلسم جام فیرا 2025 در ایران از ایرانی الهام گرفته شده است
                  یوزپلنگ، نماد سرعت، چابکی و انعطاف پذیری است. این رباتیک
                  یوزپلنگ مظهر روح نوآوری و تعالی است که تعریف می کند مسابقات
                  رباتیک فیرا ترکیب تکنولوژی پیشرفته با الف نماد فرهنگی، طلسم
                  نشان دهنده هر دو پیشرفت فناوری است و میراث غنی ایران. این به
                  عنوان یک پر جنب و جوش و پویا عمل می کند نشان این رویداد، به
                  نمایش گذاشتن ادغام سنت و رباتیک پیشرفته
                </p>
              </div>{" "}
              <div className="w-full">
                <img
                  src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy_of_FIRA_CUP_2025_BRAND_BOOK__7_-removebg-preview%20(1).png"
                  alt="FIRA Cup 2025 Mascot - Iranian Cheetah"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>`;

const DesignPrinciples = `
 <div className="flex items-center justify-center gap-4 w-full flex-wrap">
      <div className="flex items-center justify-center">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//cheata.png"
          alt="cheetah"
          width={150}
          height={70}
          className="dark:invert object-contain"
        />
      </div>

      <span className="text-4xl dark:text-white">→</span>

      <div className="flex items-center justify-center">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Fire.png"
          alt="fire"
          width={100}
          height={70}
          className="dark:invert object-contain"
        />
      </div>

      <span className="text-4xl dark:text-white">→</span>

      <div className="flex items-center justify-center">
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg"
          alt="FIRA Cup Logo"
          width={200}
          height={150}
          className="object-contain dark:hidden block"
        />
        <img
          src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-logo.png"
          alt="FIRA Cup Logo"
          width={200}
          height={150}
          className="object-contain dark:block hidden"
        />
      </div>
    </div>`;

const IdentityInUse = `<div className=" px-6 py-12 space-y-12">
  <section>
    <h2 className="text-2xl font-semibold mb-4">پست اینستاگرام</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(19).png" alt="Post 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(18).png" alt="Post 2" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(19).png" alt="Post 3" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">استوری اینستاگرام</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(20).png" alt="Story 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(21).png" alt="Story 2" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(22).png" alt="Story 3" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">فرمت و سایز</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(23).png" alt="Story Size" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(24).png" alt="Poster Size" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(25).png" alt="Post Size" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">پرچم‌ها و پوسترها</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(26).png" alt="Flag 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(27).png" alt="Flag 2" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(28).png" alt="Flag 3" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(29).png" alt="City 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(30).png" alt="City 2" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(31).png" alt="City 3" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(32).png" alt="City 4" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">ماگ و تیشرت</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(33).png" alt="T-shirt" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(34).png" alt="Mug" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">کارت شناسایی</h2>
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(35).png" alt="ID Back" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(36).png" alt="ID Front" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(37).png" alt="ID Ribbon 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(38).png" alt="ID Ribbon 2" className="w-full " />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-4">گواهینامه‌ها</h2>
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(39).png" alt="Certificate 1" className="w-full " />
      <Image width="600" height="400" src="https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi/in%20use/Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(40).png" alt="Certificate 2" className="w-full " />
    </div>
  </section>
        </div>
`;

const data = {
  ir: {
    brand: {
      name: "فیرا کاپ 2025 تهران",
      primaryColor: "#fdb813",
      logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg",
      darkLogo:
        "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-logo.png",
      font: {
        name: "https://db.onlinewebfonts.com/c/eba1f76fb362790bbfa2f7a343904394?family=KalamehWebFaNum",
        headers: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic",
        weights: [400, 500, 700],
        subsets: ["latin", "latin-ext"],
      },
    },
    menu: {
      مقدمه: {
        items: [
          { id: "overview", title: "در یک نگاه", type: "overview" },
          { id: "statement", title: "بیانیه برند", type: "statement" },
        ],
      },
      "هویت مفهومی": {
        items: [
          {
            id: "brand-prism",
            title: " هویت مفهومی فیرا ایران",
            type: "brand_prism",
          },
        ],
      },
      "هویت کلامی": {
        items: [
          {
            id: "tone-of-voice",
            title: "لحن و ارزش‌های کلامی",
            type: "tone_of_voice",
          },
          // { id: "tagline", title: "Tagline", type: "tagline" },
        ],
      },
      "هویت بصری": {
        items: [
          {
            id: "design-principles",
            title: "اصول دیزاین",
            type: "design_principles",
          },
          { id: "logo", title: "لوگو", type: "logo" },
          { id: "mascot", title: "مسکات", type: "mascot" },
          { id: "color", title: "رنگ", type: "color" },
          { id: "typography", title: "تایپوگرافی", type: "typography" },
          {
            id: "identity-in-use",
            title: "هویت جدید در کاربر",
            type: "identity_in_use",
          },
        ],
      },
    },
    sections: [
      {
        type: "overview",
        title: "مقدمه‌ای بر برند",
        description: "فیرا کاپ 2025 - **ایران, تهران**",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
        video: "",
        items: {
          group: "مقدمه",
          title: "در یک نگاه",
          desc: "به **فیرا کاپ 2025** خوش آمدید، جایی که نوآوری با برتری در رباتیک و هوش مصنوعی روبرو می شود. این مسابقه معتبر در محل دائمی نمایشگاه‌های بین‌المللی تهران برگزار می‌شود، مکانی که تعهد ایران به میزبانی رویدادهای در سطح جهانی و تقویت پیشرفت فناوری را نشان می‌دهد.",
          img: "",
        },

        style: 1,
      },
      {
        type: "statement",
        title: "هویت برند",
        description: "فیرا کاپ 2025 - **ایران, تهران**",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        video: "",
        items: {
          MDXComponent: BrandIdentity,
          title: "آنچه ما را به ایده هویت پویا هدایت می کند:",
          items: ["چشم انداز", "ماموریت", "هدف"],
          desc: `FIRA CUP 2025 نشان دهنده نوآوری جهانی در رباتیک و هوش مصنوعی است که متحد می شود
              رویاپردازان برای به چالش کشیدن مرزها و الهام بخشیدن به پیشرفت. این پلت فرمی است که در آن
              خلاقیت با فناوری روبرو می شود و آینده رباتیک را شکل می دهد.`,
        },

        style: 1,
      },
      {
        type: "brand_prism",
        title: "هویت مفهومی فیرا ایران",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        // video: "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
        items: {
          MDXComponent: item2,
          title: "What **leads** us to the idea of dynamic identity:",
          desc: `امروز، در روزی که همیشه «روز اول» است، راه جدیدی را برای گسترش سفر از سه گانه «رفتن، ماندن و بازگشت» به مفهومی گسترده تر، به وسعت دنیای پر از تفاوت های ما، آغاز کرده ایم. مثل همیشه می خواهیم در سفری همراه باشیم که از قلمرو تخیل تا مرور خاطرات شیرین را در بر می گیرد.`,
          prismBrand: [
            {
              title: "آرکتایپ",
              key: "physique",
              description:
                "Physique describes the physical characteristics of your brand—that is, everything your customers can visually perceive about you. Logo, style guide, iconography, color palette, and the presentation of the product itself all go into this category.",
            },
            {
              title: "پیکره",
              key: "personality",
              description:
                "If physique is the face of your brand, personality is the voice. Your brand personality not only addresses what you say but how you say it, and it is not limited to verbal communication.",
            },
            {
              title: "فرهنگ",
              key: "culture",
              description:
                "Culture is your brand’s origin story. Where was your brand born? Where does it live? What is the belief system and values it ascribes to and why?",
            },
            {
              title: "رابطه",
              key: "relationship",
              description:
                "Relationship is the engagement between a brand and consumers.This is about more than a monetary transaction: think about how your brand maintains a healthy relationship with its customers from the initial interaction to the after purchase period.",
            },
            {
              title: "خودانگاره مخاطب",
              key: "selfImage",
              description:
                "Self-image is how customers visualize their ideal selves. Understanding this allows brands to cater to their customers more effectively. Consider how their purchases and interactions with you improve their lives.",
            },
            {
              title: "بازتابش جامعه",
              key: "relationship",
              description:
                "Reflection describes who you want your customer to be. Who would you ideally like to reach? Specificity is key here. For a company that is selling biodegradable cosmetics products, it could be working women in their 20s who live in cosmopolitan areas and adhere to a vegan diet.",
            },
          ],
        },

        style: 1,
      },
      {
        type: "tone_of_voice",
        title: "لحن و ارزش‌های کلامی",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          MDXComponent: ToneOfVoice,
          // title: "some title",
          desc: "صدای برند ما حرفه ای و دوستانه را ترکیب می کند تا خدمات استثنایی به مشتریان را در اولویت قرار دهد. سازگار با زمینه ها و مخاطبان مختلف باقی می ماند.",
          sliderContent: [
            {
              id: "1001",
              // svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
              title: "قابل اعتماد",
              description:
                "**فیراکاپ** *اعتماد* و *اقتدار* را در تمام ارتباطات ما نشان می دهد.",
            },
            {
              id: "1002",
              // svg: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/polite-words-cfd9f81d.svg",
              title: "نوآورانه",
              description: `ما به عنوان یک **شرکت پیشگام**، لحن *پر انرژی* و *پویا* را در ارتباطات خود اتخاذ می کنیم.`,
            },
          ],

          style: 1,
        },
      },
      // {
      //   type: "tagline",
      //   title: "Tagline",
      //   description: "",
      //   pattern:
      //     "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
      //   img: "",
      //   items: {
      //     MDXComponent: item1,
      //     title: "**TITLE** If there is",
      //     desc: "some desc :)",
      //   },
      // },
      {
        type: "design_principles",
        title: "اصول دیزاین",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          MDXComponent: DesignPrinciples,
          title: "اصول دیزاین",
          desc: ` Ensure use a custom font for readability and elegance to enhance brand identity across all communication channels.        `,
          image:
            "https://canada.firaworldcup.org/wp-content/uploads/2020/11/logo.png",
          video:
            "https://files-us-east-1.t-cdn.net/files/1GG2rmxcOLAUjnt5zTqoY",
          videoCover:
            "https://iran.firaworldcup.org/wp-content/uploads/2024/12/IRAN-FIRA-2025-1-1448x2048.png",
          tabsContent: [
            {
              title: "استراتژی دیزاین",
              description: `**استراتژی دیزاین فیرا ایران** is a comprehensive travel solution. It always aims to optimize the journey and offer a seamless experience across all stages.
                          This mental model in strategic design helps the brand to evolve and emerge continuously.
                          Strategic design in FIRA Iran is in service of communication and business growth.
                          The foundation of strategic design stems from upstream strategies and loops through feedback and iteration to complete and refine one another.
              `,
              svg: "https://cdn.alibaba.ir/cms/uploads/design_principles_2_cd79d2f6e8.svg",
            },
            {
              title: "دیزاین خلاقانه",
              description: `طراحی خلاقانه مرزهای نوآوری را جابجا می کند و دید زیبایی شناختی را با نیازهای کاربر همسو می کند`,
              svg: "https://cdn.alibaba.ir/cms/uploads/design_principles_2_cd79d2f6e8.svg",
            },
          ],
        },
      },
      {
        type: "logo",
        title: "لوگو",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          MDXComponent: "",
          MDXComponentForLogo: "",
          title: "هویت لوگو",
          desc: "برای الهام بخشیدن و توانمندسازی جامعه جهانی روباتیک با **ایجاد یک پلتفرم پویا** برای نوآوری، همکاری و تعالی. FIRA CUP 2025 متعهد به پیشرفت فناوری، پرورش استعدادهای جوان و پیش بردن مرزهای رباتیک است.",
          download:
            "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//6042030147017755542.jpg",
          downloadBtnText: "دانلود لوگوی فیرا ایران",
          logoVersion: [
            {
              id: 1,
              name: "لوگوی افقی",
              text: "اولویت با استفاده از نسخه افقی لوگو است.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//logo.svg",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-logo.png",
            },
            {
              id: 2,
              name: "لوگوی عمودی",
              text: "ما از لوگوی عمودی در شرایطی استفاده می کنیم که فضای کافی برای استفاده از نسخه عمودی وجود ندارد یا در رسانه هایی که نسبت اندازه افقی است.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
            },

            {
              id: 3,
              name: "مونوگرام",
              text: "ما از نسخه مونوگرام در رسانه های فیرا ایران مانند رسانه های اجتماعی برند، آیکون های وب سایت و اپلیکیشن ها و واترمارک های ویدئویی استفاده می کنیم. همچنین می توانیم از این نسخه در سایر ارتباطات برند که به دلیل آشنایی با مخاطب نیازی به ذکر نام برند نیست استفاده کنیم.",
              svg: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//Copy%20of%20FIRA%20CUP%202025%20BRAND%20BOOK%20(41).png",
              darkSvg:
                "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-mono-logo.png",
            },
          ],
          inBackgroundSection: {
            listItems: [
              "ما از آرم FIRA ایران در زمینه سفید و فقط در رنگ اصلی استفاده می کنیم.",
              " ما از لوگوی FIRA ایران در زمینه مشکی و فقط در رنگ اصلی استفاده می کنیم.",
              "              ما از لوگوی FIRA ایران بر روی پس‌زمینه زرد، فقط به رنگ مشکی یکدست استفاده می‌کنیم.",
              "ما از لوگوی FIRA ایران در پس‌زمینه‌های خنثی (کدهای مجاز در پالت رنگ)، فقط به رنگ سیاه یا سفید استفاده می‌کنیم.",
              "استفاده از آرم FIRA ایران بر روی زمینه های رنگی دیگر مجاز نمی باشد.",
            ],
            inBackgroundComponent: [
              {
                colorBg: "#FFFFFF",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#000000",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
              {
                colorBg: "#FDB813",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#D3D3D3",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//vertical-logo.png",
              },
              {
                colorBg: "#808080",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
              {
                imgBg:
                  "https:/plus.unsplash.com/premium_photo-1673002094039-3b4a9e8d1fff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG9jZWFufGVufDB8fDB8fHww",
                logo: "https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/harchi//dark-vertical-logo.png",
              },
            ],
          },
          alongWithOthers: {
            title: "استفاده در کنار لوگوی برندهای دیگر",
            desc: "هنگام استفاده از لوگوی FIRA ایران در کنار سایر لوگوهای برند، معامله به این صورت است: اگر لوگوی دوم عمودی است، با نسخه عمودی آرم فیرا ایران همراه شوید. اگر افقی است، از فیرا ایران افقی استفاده کنید. برای حفظ تعادل، مطمئن شوید که ارتفاع مونوگرام فیرا ایران با بخش گرافیکی لوگوی دوم در هر دو مورد مطابقت دارد. حال اگر لوگوی دوم فقط یک لوگو تایپ است (بدون گرافیک فانتزی) از لوگوی افقی فیرا ایران استفاده کنید. در این صورت، ارتفاع هر دو نشان‌واره باید یکسان باشد.<br/>همیشه آرم فیرا ایران را در سمت راست و بالای لوگوی دوم بزنید. قرار دادن آن در سمت چپ یا زیر لوگوهای دیگر؟ نه مجاز نیست",
            svg: [
              "https://cdn.alibaba.ir/cms/uploads/co_logo_2_dadfc63297.svg",
              "https://cdn.alibaba.ir/cms/uploads/co_logo_3_ed6df93726.svg",
            ],
          },
        },
        style: 1,
      },
      {
        type: "mascot",
        title: "مسکات",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          MDXComponent: Mascot,
          // title: "Mascot",
          // desc: "MascotMascotMascotMascotMascot",
        },
      },
      {
        type: "color",
        title: "رنگ",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          // MDXComponent: "",
          title: "زرد فیرا ایران",
          desc: `پالت رنگ ما از طبیعت الهام می گیرد و در نتیجه زیبایی شناسی تازه و پر جنب و جوشی ایجاد می کند. استفاده از این رنگ ها به طور مداوم در همه پلتفرم ها برای حفظ انسجام برند ضروری است.`,
          img: [
            "https://cdn.pixabay.com/photo/2025/03/31/15/18/mountains-9504950_640.jpg",
            "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
            "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
          ],
          palette: {
            title: "پلت اصلی",
            description:
              "پالت اصلی فیرا ایران از رنگ های زرد، سیاه، سفید و آبی تشکیل شده است. در این پالت رنگ زرد رنگ مرکزی است. ما از سیاه و سفید به عنوان رنگ های مکمل در کنار رنگ زرد استفاده می کنیم. ما همچنین از رنگ آبی در دکمه های فراخوانی استفاده می کنیم.",
            colors: {
              primary: {
                id: 1001,
                hex: "#FDB813",
                hexColor: "#000000",
                name: "Main Yellow",
                shades: [
                  { id: 102, hex: "#FDC107", name: "Light Yellow" },
                  { id: 103, hex: "#FD9F06", name: "Medium Yellow" },
                  { id: 104, hex: "#FD8C05", name: "Dark Yellow" },
                ],
              },
              // secondary: {
              //   id: 2002,
              //   hex: "#F7941D",
              //   hexColor: "#000000",
              //   name: "Main Orange",
              //   shades: [
              //     { id: 202, hex: "#F9A13A", name: "Light Orange" },
              //     { id: 203, hex: "#F7870F", name: "Medium Orange" },
              //     { id: 204, hex: "#D97718", name: "Dark Orange" },
              //   ],
              // },
              action: {
                id: 3003,
                hex: "#0077DB",
                hexColor: "#FFFFFF",
                name: "Action Blue",
                shades: [
                  { id: 302, hex: "#3391E5", name: "Light Blue" },
                  { id: 303, hex: "#0066B8", name: "Medium Blue" },
                  { id: 304, hex: "#005A9E", name: "Dark Blue" },
                ],
              },
              complementary: {
                id: 4004,
                hex: "#000000",
                hexColor: "#FFFFFF",
                name: "Black",
                shades: [
                  // { id: 402, hex: "#525252", name: "neutral" },
                  { id: 403, hex: "#E6EBEA", name: "Medium neutral" },
                  { id: 404, hex: "#FFFFFF", name: "Light neutral" },
                ],
              },
            },
          },
          Harmony: {
            title: "هارمونی",
            description: `سه ترکیب کلی در استفاده از این رنگ ها وجود دارد:

                - **ترکیب 1:** رنگ زرد رنگ غالب در طراحی است و از رنگ های سفید و مشکی به عنوان رنگ مکمل استفاده می کنیم.  
                - **ترکیب 2:** رنگ سفید رنگ غالب است و ما از زرد و مشکی به عنوان رنگ مکمل استفاده می کنیم.  
                - **ترکیب 3:** رنگ مشکی غالب است و از زرد و سفید به عنوان رنگ مکمل استفاده می کنیم.  

                > **نکته:** در ارتباطات برند، اولویت با استفاده از ترکیبات 1 و 2 است. ترکیب 3 به مقدار کم و فقط در کمپین های ارتباطی خاص یا طراحی های محیطی استفاده می شود.
                 `,
            img: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/color-ratios-aae20c6c.svg",
          },
          Gradient: {
            title: "گرادینت رنگی",
            img: "https://cdn.alibaba.ir/h2/desktop/assets/brand-identity/color-gradient-8df2bb44.svg",
            description: `از گرادینت رنگی در سطوح محدود یا به‌صورت نوارهای عملکردی استفاده می‌کنیم و کاربرد گسترده آن‌ها مجاز نیست. هر گرادینت بنا بر مفهوم خود، در موقعیت متناسب به کار می‌رود.

`,
          },
          paletteUsage: {
            title: "خوانایی در رنگ",
            description:
              "برای رعایت اصل خوانایی، لازم است تنها از ترکیب‌های رنگی مجاز متن و پس‌زمینه استفاده کنیم. این ترکیب‌های رنگی عبارتند از:",
            mainStructure: [
              {
                id: 5001,
                background: "#000000",
                name: "متن سفید و زرد روی پس‌زمینه سیاه",
              },
              {
                id: 5002,
                background: "#FDB813",
                name: "متن سیاه روی پس‌زمینه زرد",
              },
              {
                id: 5003,
                background: "#FFFFFF",
                name: "متن سیاه روی پس‌زمینه سفید",
              },
            ],
            usageGuidelines: {
              correct: [
                {
                  id: 6003,
                  background: "#000000",
                  text: "#FDB813",
                  description: "Black background with yellow text",
                },
                {
                  id: 7002,
                  background: "#000000",
                  text: "#FFFFFF",
                  description: "Black background with white text",
                },
                {
                  id: 7003,
                  background: "#FFFFFF",
                  text: "#000000",
                  description: "White background with black text",
                },
                {
                  id: 7001,
                  background: "#FDB813",
                  text: "#000000",
                  description: "Yellow background with black text",
                },
              ],
              incorrect: [
                {
                  id: 6001,
                  background: "#FDB813",
                  text: "#FFFFFF",
                  description: "Yellow background with white text",
                },
                {
                  id: 6002,
                  background: "#FFFFFF",
                  text: "#FDB813",
                  description: "White background with yellow text",
                },
              ],
            },
          },
        },
        style: 1,
      },
      {
        type: "typography",
        title: "تایپوگرافی",
        description: "KALAMEH",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        font: {
          name: "KALAMEH",
          weights: [500, 700],
          subsets: ["latin", "latin-ext"],
        },
        items: {
          // MDXComponent: "",
          title: "تایپوگرافی",
          desc: "ما از یک فونت سفارشی برای **خوانایی** و **ظرافت** استفاده می کنیم تا هویت برند را در تمام کانال های ارتباطی تقویت کنیم.",
          fontFeatureComponent: {
            title: "ویژگی‌های فونت",
            desc: "در طراحی فونت فیرا ایران، علاوه بر ویژگی های اصلی، مجموعه ای از ویژگی های تکمیلی را پیش بینی کرده ایم که تایپوگرافی را غنی می کند. این ویژگی‌ها عبارتند از: لیگاتورها، فرم‌های متناوب، ضربه‌ها، مجموعه‌های سبک، و اعداد متنی و جدولی.",
            componentItems: [
              {
                text: "**استرداد** <br/> به راحتی",
                color: "#000000",
                bg: "#FDB813",
              },
              {
                text: "لحظه آخر <br/> **456$**",
                color: "#000000",
                bg: "#FFFFFF",
              },
              {
                text: `<p className="text-[#FDB813]">آمستردام </p> <br/>
                   <p className="text-white font-bold">رفت و برگشت</p>`,
                color: "",
                bg: "#000000",
              },
              {
                text: "از **آمستردام** به **پاریس**",
                color: "#000000",
                bg: "#FFFFFF",
              },
            ],
          },
          typographyPrinciples: {
            title: "قواعد اساسی تایپوگرافی",
            description: "در تایپوگرافی علی‌بابا دو اصل اساسی حاکم است:",
            section: [
              {
                subtitle: "خوانایی",
                content:
                  "خوانایی اصل اساسی تایپوگرافی علی‌بابا است. همه عوامل تایپوگرافیک از جمله فاصله حروف، فاصله بین سطرها، ترازبندی متن را به‌گونه‌ای تنظیم می‌کنیم که محتوای متنی در خواناترین حالت ممکن به مخاطب ارائه شود.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: '<div className=" leading-5">\n  <p className="max-w-40">عنوان سطح اول با متن کوتاه و متعادل\nعنوان سطح دوم که طولانی تر است و به خط بعدی می رسد\n...</p>\n</div>',
                    label: "نادرست",
                  },
                  {
                    status: "correct",
                    mdx: '<div className=" leading-6">\n  <p className="max-w-40">عنوان سطح اول با متن کوتاه و متعادل\nعنوان سطح دوم که طولانی تر است و به خط بعدی می رسد\n...</p>\n</div>',
                    label: "درست",
                  },
                ],
              },
              {
                subtitle: "رعایت ساسه مراتب محتوایی",
                content:
                  "یکی از ویژگی‌های ارتباطات فیرا ایران این است که محتوای متنی همیشه در چندین سطح از اولویت و اهمیت تدوین و ارائه می‌شود. در تایپوگرافی با کمک ویژگی‌هایی مثل اندازه متن، وزن فونت، عناصر گرافیکی و... راه‌حلی ارائه می‌دهیم تا سطوح مختلف محتوا به همان ترتیب اهمیت به مخاطب منتقل شود.",
                examples: [
                  {
                    status: "incorrect",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-20" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
        <div className="bg-neutral-500 h-2 w-7 sm:w-14" />
        <div className="bg-neutral-500 h-2 w-17 sm:w-25" />
      </div>`,
                    label: "نادرست",
                  },
                  {
                    status: "correct",
                    mdx: `<div className="space-y-1 sm:mx-2">
        <div className="bg-neutral-500 h-5 w-8 sm:w-14 mb-3" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
        <div className="bg-neutral-500 h-2 w-12 sm:w-18" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30" />
        <div className="bg-neutral-300 h-2 w-22 sm:w-30 mb-2" />
      </div>`,
                    label: "درست",
                  },
                ],
              },
            ],
          },
          weights: {
            title: "وزن‌ها",
            desc: `فونت اختصاصی ما دو وزن دارد؛ وزن معمولی و بولد. که از وزن معمولی برای بدنه و از وزن بولد برای عنوان‌ها استفاده میکنیم. بنابراین لازم است هنگام استفاده از آن‌ها به ملاحظات ارتباطی توجه کنیم. به طور مشخص، باید بدانیم چه پیامی از طریق چه رسانه‌ای به چه مخاطبی منتقل خواهد شد و مهم‌تر از آن، سلسله‌مراتب پیام و محتوا به چه ترتیبی طراحی شده است.`,
            sampleText: "فیرا کاپ ایران، تهران",
          },
        },
      },
      {
        type: "identity_in_use",
        title: "هویت جدید در کاربر",
        description: "",
        pattern:
          "https://cdn.alibaba.ir/cms/uploads/hero_statement_d_d44dbb0315.svg",
        img: "",
        items: {
          MDXComponent: IdentityInUse,
        },
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(data);
}
