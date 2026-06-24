import type { Lang } from "../stores/lang.svelte";

export interface FocusItem {
  tag: string;
  title: string;
  desc: string;
}

export interface ProjectT {
  title: string;
  description: string;
}

export interface VideoT {
  title: string;
  meta: string;
}

export interface TerminalLine {
  type: "cmd" | "out";
  text: string;
}

export interface T {
  nav: {
    about: string;
    projects: string;
    videos: string;
    skills: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1: { part1: string; highlight: string; part2: string };
    paragraph: string;
    btnProjects: string;
    btnContact: string;
    terminal: TerminalLine[];
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    systems: FocusItem;
    product: FocusItem;
    security: FocusItem;
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtext: string;
    items: ProjectT[];
  };
  videos: {
    eyebrow: string;
    heading: string;
    subtext: string;
    items: VideoT[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    labelName: string;
    labelEmail: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    built: string;
  };
}

export const translations: Record<Lang, T> = {
  EN: {
    nav: {
      about: "About",
      projects: "Projects",
      videos: "Videos",
      skills: "Skills",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "// security-first software engineer",
      h1: {
        part1: "I build software that's ",
        highlight: "fast",
        part2: " and hard to break.",
      },
      paragraph:
        "I'm Dinçer Tekin (DEEN-cher teh-KEEN). I write low-level systems code in C and Rust, ship products with React and React Native, and think like an attacker when I build them. Currently open to new roles.",
      btnProjects: "View projects",
      btnContact: "Get in touch",
      terminal: [
        { type: "cmd", text: "whoami" },
        {
          type: "out",
          text: "Dinçer Tekin — Security-first Software Engineer",
        },
        { type: "cmd", text: "cat stack.txt" },
        {
          type: "out",
          text: "C · Rust · C# · Python · TypeScript · PHP",
        },
        { type: "cmd", text: "cat toolkit.txt" },
        {
          type: "out",
          text: "Kali Linux · Burp Suite · Wireshark · ZAP · Docker",
        },
      ],
    },
    about: {
      eyebrow: "// about",
      heading: "A bit about how I work",
      p1: "I build with a <strong>security-first</strong> mindset. Before I ship something, I think about how it could be broken, and I design around that from the start, not after a pentest finds it.",
      p2: "On the systems side I write <strong>C and Rust</strong> for low-level, performance-critical projects. On the product side I build with <strong>React</strong> for web and <strong>React Native</strong> for mobile, plus PHP and TypeScript where the stack calls for it.",
      p3: "For security testing I work with <strong>Kali Linux, Burp Suite, Wireshark, and OWASP ZAP</strong>, and I run everything in <strong>Docker</strong> so environments stay clean and reproducible.",
      systems: {
        tag: "SYSTEMS",
        title: "Low-level, on purpose",
        desc: "C and Rust for projects where performance and memory safety actually matter.",
      },
      product: {
        tag: "PRODUCT",
        title: "Web and mobile that ship",
        desc: "React, React Native, TypeScript, and PHP, built to be maintained, not just demoed.",
      },
      security: {
        tag: "SECURITY",
        title: "Built to be tested",
        desc: "Kali Linux, Burp Suite, Wireshark, and ZAP, all running in Docker for clean, repeatable setups.",
      },
    },
    projects: {
      eyebrow: "// projects",
      heading: "Things I've built",
      subtext:
        "A few projects from GitHub. Each one taught me something I still use today.",
      items: [
        {
          title: "Mailogle",
          description:
            "Advanced OSINT email finder and reconnaissance tool for security researchers.",
        },
        {
          title: "Passdict",
          description:
            "Brute force password dictionary generator inspired by CUPP, creating targeted wordlists from personal data.",
        },
        {
          title: "Croovy",
          description:
            "High-performance custom search engine architecture built with Python, Vue, Flask, and Redis.",
        },
      ],
    },
    videos: {
      eyebrow: "// videos",
      heading: "Some things I've explained on camera",
      subtext:
        "A few videos from my YouTube channel where I walk through how I build and debug things.",
      items: [
        {
          title: "How I structure a SvelteKit project",
          meta: "12:34 · Tutorial",
        },
        {
          title: "Deploying to Hetzner for $5/month",
          meta: "9:02 · Walkthrough",
        },
        { title: "Debugging a memory leak live", meta: "21:17 · Deep dive" },
      ],
    },
    skills: {
      eyebrow: "// skills",
      heading: "What I work with",
      groups: [
        "LANGUAGES",
        "WEB & MOBILE",
        "SECURITY TOOLING",
        "TOOLS & INFRA",
      ],
    },
    contact: {
      eyebrow: "// contact",
      heading: "Let's work together",
      description:
        "Open to full-time, contract, and freelance work, especially roles where security and engineering quality both matter. The fastest way to reach me is the form, but feel free to message directly too.",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@company.com",
      placeholderMessage: "What are you looking to build?",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      built: "// Built with care, 2026.",
    },
  },

  TR: {
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      videos: "Videolar",
      skills: "Yetenekler",
      contact: "İletişim",
      cta: "Konuşalım",
    },
    hero: {
      eyebrow: "// güvenlik odaklı yazılım mühendisi",
      h1: {
        part1: "Geliştirdiğim yazılımlar ",
        highlight: "hızlı",
        part2: " ve kırılması güçtür.",
      },
      paragraph:
        "Ben Dinçer Tekin. C ve Rust ile düşük seviyeli sistem kodu yazıyor, React ve React Native ile ürünler geliştiriyor, bunları inşa ederken bir saldırgan gibi düşünüyorum. Yeni fırsatlara açığım.",
      btnProjects: "Projeleri gör",
      btnContact: "İletişime geç",
      terminal: [
        { type: "cmd", text: "whoami" },
        {
          type: "out",
          text: "Dinçer Tekin — Güvenlik Odaklı Yazılım Mühendisi",
        },
        { type: "cmd", text: "cat diller.txt" },
        {
          type: "out",
          text: "C · Rust · C# · Python · TypeScript · PHP",
        },
        { type: "cmd", text: "cat araçlar.txt" },
        {
          type: "out",
          text: "Kali Linux · Burp Suite · Wireshark · ZAP · Docker",
        },
      ],
    },
    about: {
      eyebrow: "// hakkımda",
      heading: "Nasıl çalıştığım",
      p1: "<strong>Güvenlik öncelikli</strong> bir anlayışla yazılım geliştiriyorum. Bir şeyi yayına almadan önce nasıl kırılabileceğini düşünür ve bunu en başından tasarıma yansıtırım. Zaafiyeti bir pentest bulmadan önce ben bulurum.",
      p2: "Sistem tarafında düşük seviyeli, performans kritik projeler için <strong>C ve Rust</strong> yazıyorum. Ürün tarafında web için <strong>React</strong>, mobil için <strong>React Native</strong> kullanıyorum, gerektiğinde PHP ve TypeScript ile de çalışıyorum.",
      p3: "Güvenlik testleri için <strong>Kali Linux, Burp Suite, Wireshark ve OWASP ZAP</strong> kullanıyorum. Her şeyi <strong>Docker</strong> içinde çalıştırarak ortamları temiz ve tekrarlanabilir tutuyorum.",
      systems: {
        tag: "SİSTEMLER",
        title: "Kasıtlı olarak düşük seviyeli",
        desc: "Performans ve bellek güvenliğinin gerçekten önemli olduğu projeler için C ve Rust.",
      },
      product: {
        tag: "ÜRÜN",
        title: "Yayına giren web ve mobil",
        desc: "React, React Native, TypeScript ve PHP ile yalnızca demo için değil, gerçekten bakımı yapılabilecek ürünler geliştiriyorum.",
      },
      security: {
        tag: "GÜVENLİK",
        title: "Test edilmek üzere inşa edilmiş",
        desc: "Kali Linux, Burp Suite, Wireshark ve ZAP, hepsi Docker içinde çalışıyor, temiz ve tekrarlanabilir kurulumlar için.",
      },
    },
    projects: {
      eyebrow: "// projeler",
      heading: "İnşa ettiğim şeyler",
      subtext:
        "GitHub'dan birkaç proje. Her biri bana hâlâ kullandığım bir şey öğretti.",
      items: [
        {
          title: "Mailogle",
          description:
            "Güvenlik araştırmacıları için gelişmiş OSINT e-posta bulucu ve keşif aracı.",
        },
        {
          title: "Passdict",
          description:
            "CUPP'tan ilham alan brute force şifre sözlüğü oluşturucu, kişisel verilerden hedefli kelime listeleri üretir.",
        },
        {
          title: "Croovy",
          description:
            "Python, Vue, Flask ve Redis ile geliştirilmiş yüksek performanslı özel arama motoru mimarisi.",
        },
      ],
    },
    videos: {
      eyebrow: "// videolar",
      heading: "Kamera karşısında anlattıklarım",
      subtext:
        "YouTube kanalımdan birkaç video, geliştirme ve hata ayıklama sürecimi adım adım aktarıyorum.",
      items: [
        {
          title: "SvelteKit projesini nasıl yapılandırıyorum",
          meta: "12:34 · Eğitim",
        },
        { title: "Hetzner'e aylık $5'a deploy", meta: "9:02 · Rehber" },
        {
          title: "Canlı olarak bellek sızıntısı debug etmek",
          meta: "21:17 · Derinlemesine",
        },
      ],
    },
    skills: {
      eyebrow: "// yetenekler",
      heading: "Kullandığım teknolojiler",
      groups: [
        "DİLLER",
        "WEB & MOBİL",
        "GÜVENLİK ARAÇLARI",
        "ARAÇLAR & ALTYAPI",
      ],
    },
    contact: {
      eyebrow: "// iletişim",
      heading: "Birlikte çalışalım",
      description:
        "Tam zamanlı, sözleşmeli veya serbest çalışmaya açığım, özellikle güvenlik ve mühendislik kalitesinin birlikte önemsendiği roller için. En hızlı bana bu formdan ulaşabilirsiniz.",
      labelName: "İsim",
      labelEmail: "E-posta",
      labelMessage: "Mesaj",
      placeholderName: "Adınız",
      placeholderEmail: "siz@sirket.com",
      placeholderMessage: "Ne geliştirmek istiyorsunuz?",
      submit: "Mesaj gönder",
      sending: "Gönderiliyor…",
      success: "Mesaj gönderildi! En kısa sürede dönüş yapacağım.",
      error: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    },
    footer: {
      built: "// Özenle geliştirildi, 2026.",
    },
  },
};
