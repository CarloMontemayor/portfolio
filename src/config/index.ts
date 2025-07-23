import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Carlo Montemayor - Software Engineer",
  author: "Carlo Montemayor",
  description:
    "Software Engineer based in Angeles City, PH. I Specialized in developing scalable, enterprise-grade web applications using .NET Core for backend architecture and Angular for modern, reactive front-end interfaces. With strong proficiency in CQRS patterns, RxJS, and SQL Server performance optimization, I design and implement clean, maintainable systems that prioritize speed, security, and user experience. I bring strategic value through automation workflows, architectural best practices, and seamless API integrations using JWT and service lifetime management.",
  lang: "en",
  siteLogo: "/carlo-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Facebook", href: "https://www.facebook.com/carloM1997" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/carlo-montemayor" },
    { text: "Github", href: "https://github.com/CarloMontemayor" },
    { text: "GitLab", href: "https://gitlab.com/carlomontemayor01" },
  ],
  socialImage: "/carlo-small.png",
  canonicalURL: "https://carlo-montemayor.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlo Montemayor",
    specialty: "Software Engineer",
    summary:
      "Software Engineer based in Angeles City, PH. I Specialized in developing scalable, enterprise-grade web applications using .NET Core for backend architecture and Angular for modern, reactive front-end interfaces. With strong proficiency in CQRS patterns, RxJS, and SQL Server performance optimization, I design and implement clean, maintainable systems that prioritize speed, security, and user experience. I bring strategic value through automation workflows, architectural best practices, and seamless API integrations using JWT and service lifetime management.",
    email: "carlomontemayor01@gmail.com",
  },
  experience: [
    {
      company: "DBA Global Shared Services Inc",
      position: "Lead Software Engineer",
      startDate: "Nov 2024",
      endDate: "Present",
      summary: [
        "Managed a team of software engineers, improving code quality and productivity through mentorship and code reviews.",
        "Daily monitoring of my team, creation of monthly reports, and annual performance review of the software engineers under my supervision. ",
        "Ensured best practices for software architecture, security, and system reliability.",
        "Designed and maintained architecture diagrams using tools like Microsoft Visio to understand the technologies involved (e.g., databases, APIs, cloud services) to represent them accurately.",
        "Designed and deployed multi-step automation workflows using Pabbly or Zapier, integrating tools like Webhooks, Cognito, Xero, and MS Excel.",
        "Led a software development team in integrating AI-driven coding assistance using GitHub Copilot, enhancing efficiency, reducing debugging time, and accelerating feature delivery.",
        "Actively participated in Agile development processes, attending daily stand-ups, sprint planning, and retrospectives to ensure timely project delivery.",
      ],
    },
    {
      company: "DBA Global Shared Services Inc",
      position: "Senior Software Engineer",
      startDate: "Mar 2022",
      endDate: "Nov 2024",
      summary: [
        "Identifying technical challenges and implementing innovative solutions.",
        "Reviewing code for quality, debugging issues, and optimizing performance.",
        "Design and build cloud solutions, including applications and services.",
        "Set up CI/CD pipelines.",
        "Integrated third-party APIs and Libraries.",
      ],
    },
    {
      company: "DBA Global Shared Services Inc",
      position: "Associate Software Engineer",
      startDate: "May 2018",
      endDate: "Mar 2022",
      summary: [
        "Built and maintained web applications using .NET Framework and Angular.",
        "Develop and implement new requirements and/or modifications to existing codes with quality based on acceptance criteria.",
        "Diagnose and resolve software issues during the testing period.",
      ],
    }
  ],
  projects: [
    {
      name: "DRR",
      summary: "A Property Management Software",
      linkPreview: "/",
      linkSource: "/",
      image: "/drr.png",
    },
    {
      name: "Hurey",
      summary: "An HRIS and Payroll Software",
      linkPreview: "/",
      linkSource: "https://hurey.ph",
      image: "/hurey.png",
    },
     {
      name: "Derps",
      summary: "A Government HRIS and Payroll Software",
      linkPreview: "/",
      linkSource: "/",
      image: "/derps-1.webp",
    },
    {
      name: "WorkFlow",
      summary: "A Client Portal Software",
      linkPreview: "/",
      linkSource: "/",
      image: "/no_image_available.jpg",
    },
    {
      name: "Estate Plan",
      summary: "An Estate Plan Management Software",
      linkPreview: "/",
      linkSource: "/",
      image: "/no_image_available.jpg",
    },
    {
      name: "GoLegal",
      summary: "A Legal Case Management Software",
      linkPreview: "/",
      linkSource: "/",
      image: "/no_image_available.jpg",
    }
  ],
  about: {
    description: `
      Hi, I'm Carlo Montemayor, a Software Engineer with deep expertise in building scalable web applications using .NET Core for backend services and Angular for dynamic, responsive frontends.
      Adept at designing robust system architectures, optimizing SQL Server databases, and implementing secure API endpoints with JWT validation. Known for precision, efficiency, and clean code practices, 
      I thrive in crafting modern software solutions that elevate business performance.
    `,
    image: "/carlo-big.png",
  }
};

// #5755ff
