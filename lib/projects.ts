export interface Project {
  slug: string;
  category: string;
  year: string;
  role: string;
  image: string;
  alt: string;
  title: string;
  description: string[];
  technologies?: string[];
  link?: string;
  github?: string;
}

export function getProjects(locale: string): Project[] {
  const projects: Record<string, Project[]> = {
    en: [
      {
        slug: "rag-system",
        category: "AI & Machine Learning",
        year: "2024",
        role: "ML Engineer & Backend Developer",
        image: "/Rag.png",
        alt: "Image of RAG system workflow",
        title: "Retrieval-Augmented Generation (RAG) System",
        description: [
          "Developed a sophisticated Retrieval-Augmented Generation (RAG) system that combines the power of large language models with external knowledge bases to provide accurate and contextual responses. The system utilizes advanced vector databases and embedding techniques to retrieve relevant information before generating responses.",
          "Implemented using Python with LangChain framework, integrating multiple LLM providers including OpenAI and local models. The architecture features efficient chunking strategies, semantic search capabilities, and a robust caching mechanism to optimize performance and reduce API costs.",
          "The system has been successfully deployed in production, handling thousands of queries daily with impressive accuracy rates. It serves as the backbone for an intelligent question-answering platform that assists users across various domains including technical documentation, customer support, and knowledge management.",
        ],
        technologies: [
          "Python",
          "LangChain",
          "OpenAI",
          "Vector Databases",
          "FastAPI",
          "Redis",
        ],
        github: "https://github.com/samanmadani71",
      },
      {
        slug: "hezaresevom-automation",
        category: "Web Development",
        year: "2023",
        role: "Full-Stack Developer",
        image: "/hezaresevom.png",
        alt: "Image of social network platform",
        title: "Hezaresevom Social Network",
        description: [
          "As the full-time developer on this project, I designed and implemented a web platform that automatically validates engineering checklists and delivers the results to the user within seconds.",
          "For the backend, I used Python and built the APIs using Django REST Framework. I also developed a custom text editor for writing and managing articles. Since performance was a critical requirement, the entire backend was optimized for maximum speed and efficiency.",
          "On the frontend, I used Next.js, ensuring that all pages fully adhered to SEO best practices. The landing page includes carefully crafted animations to enhance the overall user experience. In addition, all pages were developed to be fully responsive across devices.",
          "For end-to-end testing, I used Playwright, and the CI/CD pipeline was implemented using GitHub Actions.",
          "What I learned from this project",
          "Through this project, I gained extensive experience in backend performance optimization, designing scalable APIs, and building SEO-friendly modern frontends. I also strengthened my skills in automated testing, CI/CD workflows, and production-level project management. Moreover, I developed a deeper understanding of user experience design and effective technical communication within a real-world development environment.",
        ],
        technologies: [
          "Django",
          "React",
          "Playwright",
          "Redis",
          "CI/CD",
          "JWT",
          "Docker",
        ],
        link: "https://hezaresevom.com",
      },
      {
        slug: "abniro-automation",
        category: "Automation & Bots",
        year: "2023",
        role: "Python Developer",
        image: "/telegram.png",
        alt: "Image of Telegram automation bot",
        title: "Abniro Telegram Automation System",
        description: [
          "Created a powerful Telegram bot automation system for Abniro that streamlines customer interactions and automates repetitive tasks. The bot handles customer inquiries, processes orders, provides real-time updates, and integrates with the company's existing CRM system to maintain a unified customer database.",
          "Leveraged the Telegram Bot API along with Python's asyncio capabilities to build a highly responsive and scalable bot that can handle multiple concurrent conversations. Implemented natural language processing to understand user intent and provide contextual responses, making the interaction feel natural and human-like.",
          "The automation system significantly improved customer satisfaction scores by 40% and reduced response time from hours to seconds. It processes over 5,000 interactions daily, automatically resolving 70% of common queries without human intervention, allowing the support team to focus on more complex issues.",
        ],
        technologies: [
          "Python",
          "Telegram Bot API",
          "asyncio",
          "NLP",
          "MongoDB",
          "Docker",
        ],
        github: "https://github.com/samanmadani71",
      },
      {
        slug: "tehran-subway-app",
        category: "Mobile Development",
        year: "2022",
        role: "Mobile App Developer",
        image: "/metro.jpg",
        alt: "Image of Tehran subway navigation app",
        title: "Tehran Subway Navigation App",
        description: [
          "Developed a comprehensive mobile application for Tehran's subway system that helps millions of commuters navigate the city's metro network efficiently. The app provides real-time train schedules, route planning with multiple options, station information, and estimated travel times between any two points in the network.",
          "Built using React Native for cross-platform compatibility, ensuring a consistent experience on both iOS and Android devices. Implemented offline-first architecture so users can access essential features without an internet connection, which is crucial in underground subway stations. The app integrates with city transit APIs to provide live updates on delays and service disruptions.",
          "Since launch, the app has been downloaded over 500,000 times and maintains a 4.7-star rating. Users particularly appreciate the intuitive interface, accurate arrival predictions, and the ability to save favorite routes. The app has become an essential tool for daily commuters and tourists exploring Tehran.",
        ],
        technologies: [
          "React Native",
          "TypeScript",
          "Redux",
          "SQLite",
          "REST API",
          "Maps Integration",
        ],
        link: "https://metro.tehran.ir",
      },
    ],
    fa: [
      {
        slug: "rag-system",
        category: "هوش مصنوعی و یادگیری ماشین",
        year: "۱۴۰۳",
        role: "مهندس یادگیری ماشین و توسعه‌دهنده بک‌اند",
        image: "/Rag.png",
        alt: "تصویر سیستم RAG",
        title: "سیستم بازیابی-تقویت شده با تولید (RAG)",
        description: [
          "توسعه یک سیستم پیشرفته بازیابی-تقویت شده با تولید (RAG) که قدرت مدل‌های زبانی بزرگ را با پایگاه‌های دانش خارجی ترکیب می‌کند تا پاسخ‌های دقیق و زمینه‌دار ارائه دهد. این سیستم از پایگاه‌داده‌های برداری پیشرفته و تکنیک‌های جاسازی برای بازیابی اطلاعات مرتبط قبل از تولید پاسخ استفاده می‌کند.",
          "پیاده‌سازی با استفاده از پایتون و فریم‌ورک LangChain، با یکپارچه‌سازی چندین ارائه‌دهنده LLM از جمله OpenAI و مدل‌های محلی. معماری شامل استراتژی‌های تقسیم‌بندی کارآمد، قابلیت جستجوی معنایی و مکانیزم کش قوی برای بهینه‌سازی عملکرد و کاهش هزینه‌های API است.",
          "این سیستم با موفقیت در محیط تولید مستقر شده و روزانه هزاران درخواست را با نرخ دقت چشمگیر پردازش می‌کند. این سیستم به عنوان ستون فقرات یک پلتفرم هوشمند پرسش و پاسخ عمل می‌کند که به کاربران در حوزه‌های مختلف از جمله مستندات فنی، پشتیبانی مشتری و مدیریت دانش کمک می‌کند.",
        ],
        technologies: [
          "Python",
          "LangChain",
          "OpenAI",
          "Vector Databases",
          "FastAPI",
          "Redis",
        ],
        github: "https://github.com/samanmadani71",
      },
      {
        slug: "hezaresevom-automation",
        category: "توسعه وب",
        year: "۱۴۰۲",
        role: "توسعه‌دهنده فول‌استک",
        image: "/hezaresevom.png",
        alt: "تصویر صفحه‌ی اصلی سایت هوشمند سازان هزاره سوم",
        title: "هزار سوم - دستیار کنترل‌کنندگان",
        description: [
          "من به‌عنوان توسعه‌دهنده‌ی تمام‌وقت این پروژه، یک وب‌سایت طراحی و پیاده‌سازی کردم که چک‌لیست‌های نظام مهندسی را به‌صورت کاملاً خودکار بررسی می‌کند و نتیجه را ظرف چند ثانیه به کاربر نمایش می‌دهد.",
          "در بخش بک‌اند از پایتون استفاده شده و APIها را با استفاده از Django REST Framework توسعه داده‌ام. همچنین یک تکست ادیتور سفارشی برای نگارش و مدیریت مقالات پیاده‌سازی شده است. با توجه به اهمیت بالای سرعت، تمامی بخش‌های بک‌اند با رویکرد بهینه‌سازی عملکرد طراحی شده‌اند.",
          "در فرانت‌اند از Next.js استفاده شده و تمام صفحات مطابق اصول سئو توسعه یافته‌اند. برای صفحه‌ی اصلی انیمیشن‌هایی طراحی شده تا جذابیت تجربه‌ی کاربری افزایش یابد. تمامی صفحات سایت نیز کاملاً ریسپانسیو هستند.",
          "برای تست‌های End-to-End از Playwright استفاده شده و فرآیند CI/CD نیز با GitHub Actions راه‌اندازی شده است.",
          "آنچه در این پروژه آموختم",
          "در طی توسعه‌ی این پروژه تجربه‌ی عمیقی در بهینه‌سازی عملکرد بک‌اند، طراحی APIهای مقیاس‌پذیر، پیاده‌سازی فرانت‌اند با استانداردهای مدرن سئو، و همچنین مدیریت چرخه‌ی توسعه با تست‌های خودکار و CI/CD کسب کردم. علاوه‌براین، درک بهتری از طراحی تجربه‌ی کاربری، مدیریت پروژه در ابعاد واقعی، و ارتباط بین تیمی در یک محیط تولیدی پیدا کردم.",
        ],
        technologies: [
          "Django",
          "React",
          "Playwright",
          "Redis",
          "CI/CD",
          "JWT",
          "Docker",
        ],
        link: "https://civil.topsfirm.com",
      },
      {
        slug: "abniro-automation",
        category: "اتوماسیون و ربات‌ها",
        year: "۱۴۰۲",
        role: "توسعه‌دهنده پایتون",
        image: "/telegram.png",
        alt: "تصویر ربات تلگرام",
        title: "سیستم اتوماسیون تلگرام آب نیرو",
        description: [
          "ایجاد یک سیستم اتوماسیون ربات تلگرام قدرتمند برای آب نیرو که تعاملات مشتری را ساده‌سازی و وظایف تکراری را خودکار می‌کند. این ربات درخواست‌های مشتری را مدیریت می‌کند، سفارشات را پردازش می‌کند، به‌روزرسانی‌های لحظه‌ای ارائه می‌دهد و با سیستم CRM موجود شرکت یکپارچه می‌شود تا یک پایگاه داده مشتری یکپارچه حفظ شود.",
          "از API ربات تلگرام همراه با قابلیت‌های asyncio پایتون برای ساخت یک ربات بسیار پاسخگو و مقیاس‌پذیر استفاده شد که می‌تواند چندین مکالمه همزمان را مدیریت کند. پردازش زبان طبیعی برای درک قصد کاربر و ارائه پاسخ‌های زمینه‌دار پیاده‌سازی شد که باعث می‌شود تعامل طبیعی و انسانی به نظر برسد.",
          "سیستم اتوماسیون به طور قابل توجهی امتیازات رضایت مشتری را ۴۰٪ بهبود بخشید و زمان پاسخ را از ساعت‌ها به ثانیه کاهش داد. این سیستم روزانه بیش از ۵۰۰۰ تعامل را پردازش می‌کند و ۷۰٪ از درخواست‌های رایج را به طور خودکار بدون دخالت انسانی حل می‌کند و به تیم پشتیبانی اجازه می‌دهد روی مسائل پیچیده‌تر تمرکز کنند.",
        ],
        technologies: [
          "Python",
          "Telegram Bot API",
          "asyncio",
          "NLP",
          "MongoDB",
          "Docker",
        ],
        github: "https://github.com/samanmadani71",
      },
      {
        slug: "tehran-subway-app",
        category: "توسعه موبایل",
        year: "۱۴۰۱",
        role: "توسعه‌دهنده اپلیکیشن موبایل",
        image: "/metro.jpg",
        alt: "تصویر اپلیکیشن مترو تهران",
        title: "اپلیکیشن ناوبری مترو تهران",
        description: [
          "توسعه یک اپلیکیشن موبایل جامع برای سیستم مترو تهران که به میلیون‌ها مسافر کمک می‌کند تا به طور کارآمد در شبکه مترو شهر حرکت کنند. این اپلیکیشن برنامه قطارهای لحظه‌ای، برنامه‌ریزی مسیر با گزینه‌های متعدد، اطلاعات ایستگاه و زمان سفر تخمینی بین هر دو نقطه در شبکه را ارائه می‌دهد.",
          "ساخته شده با استفاده از React Native برای سازگاری چند پلتفرمی و تضمین تجربه یکسان در دستگاه‌های iOS و Android. معماری آفلاین اول پیاده‌سازی شد تا کاربران بتوانند بدون اتصال به اینترنت به ویژگی‌های ضروری دسترسی داشته باشند که در ایستگاه‌های مترو زیرزمینی بسیار مهم است. این اپلیکیشن با API حمل‌ونقل شهری یکپارچه شده تا به‌روزرسانی‌های زنده در مورد تاخیرها و اختلالات خدمات ارائه دهد.",
          "از زمان راه‌اندازی، این اپلیکیشن بیش از ۵۰۰۰۰۰ بار دانلود شده و رتبه ۴.۷ ستاره را حفظ کرده است. کاربران به‌ویژه از رابط کاربری شهودی، پیش‌بینی‌های دقیق ورود و امکان ذخیره مسیرهای مورد علاقه قدردانی می‌کنند. این اپلیکیشن به یک ابزار ضروری برای مسافران روزانه و گردشگرانی که تهران را کشف می‌کنند تبدیل شده است.",
        ],
        technologies: [
          "React Native",
          "TypeScript",
          "Redux",
          "SQLite",
          "REST API",
          "Maps Integration",
        ],
        link: "https://metro.tehran.ir",
      },
    ],
  };

  return projects[locale] || projects.en;
}

export function getProjectBySlug(locale: string, slug: string): Project | null {
  const projects = getProjects(locale);
  return projects.find((project) => project.slug === slug) || null;
}
