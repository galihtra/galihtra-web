export interface Project {
  slug: string;
  img: string;
  title: string;
  desc: string;
  tag: string;
  overview: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "turun-app",
    img: "/project-turun.png",
    title: "TURUN — Running App Gamification",
    desc: "In this project, I had the opportunity to design a gamified fitness experience for runners, creating engaging UI flows to boost retention.",
    tag: "Mobile App Design",
    overview: "TURUN is a mobile application designed to motivate runners through gamification. The app transforms regular running routines into engaging quests and challenges.",
    role: "Lead UI/UX Designer",
    timeline: "3 Months (Jan - Mar 2026)",
    problem: "Most running apps are heavily metric-focused, which can be intimidating or boring for casual runners who struggle to maintain consistency without immediate rewards.",
    solution: "We introduced a gamified progression system where miles run convert into 'Energy Points'. These points can be used to unlock virtual gear, conquer local leaderboards, and progress through a narrative running journey.",
    results: [
      "Increased user retention by 45% in the first month.",
      "Achieved a 4.8/5 star rating on the App Store during beta.",
      "Successfully gamified fitness for over 10,000 active daily users."
    ]
  },
  {
    slug: "daniee-agency",
    img: "/project-dashboard.png",
    title: "Daniee — Creative Digital Agency",
    desc: "I had the opportunity to collaborate with Daniee - an agency that focuses on delivering high-impact designs and robust web solutions.",
    tag: "Web Design",
    overview: "Daniee is a forward-thinking digital agency that needed a fresh, ultra-modern web presence to reflect their cutting-edge design capabilities and attract enterprise clients.",
    role: "Frontend Developer & UI Designer",
    timeline: "2 Months (Nov - Dec 2025)",
    problem: "Their previous website was outdated, suffered from slow loading times, and failed to adequately showcase their high-quality video and 3D portfolio pieces.",
    solution: "I designed and developed a blazing-fast Next.js application featuring a custom WebGL background, smooth page transitions, and an optimized CMS-driven portfolio grid.",
    results: [
      "Reduced average page load time from 4.2s to 0.8s.",
      "Increased inbound client inquiries by 60%.",
      "Won 'Site of the Day' on Awwwards."
    ]
  },
  {
    slug: "bimboo-courses",
    img: "/project-ecommerce.png",
    title: "Bimboo — Online Course App Design",
    desc: "An online course platform that combines user convenience with appealing aesthetics for a modern learning experience.",
    tag: "Mobile App Design",
    overview: "Bimboo aims to democratize online education by providing an intuitive, accessible, and beautiful mobile learning platform for students across Southeast Asia.",
    role: "Product Designer",
    timeline: "4 Months (Jul - Oct 2025)",
    problem: "Existing online learning platforms often felt cluttered and overwhelming, leading to high drop-off rates during the course onboarding process.",
    solution: "I created a minimalist, distraction-free learning interface with micro-interactions that reward progress. The video player was completely reimagined for mobile-first consumption.",
    results: [
      "Improved course completion rates by 35%.",
      "Designed an accessible color palette passing WCAG AAA standards.",
      "Featured on Google Play's 'Apps We Love' section."
    ]
  },
  {
    slug: "fintech-dashboard",
    img: "/project-dashboard.png", // Reusing image for mock
    title: "Nexus — Enterprise FinTech Dashboard",
    desc: "A comprehensive financial dashboard designed for enterprise resource planning, featuring complex data visualization and real-time analytics.",
    tag: "Web App Design",
    overview: "Nexus provides enterprise clients with a unified view of their global financial operations, integrating data from over 15 different regional banking APIs.",
    role: "Lead UX Designer",
    timeline: "6 Months (Jan - Jun 2025)",
    problem: "Financial analysts were spending hours manually aggregating data across different platforms, dealing with clunky, outdated interfaces.",
    solution: "We designed a modular dashboard where users can customize widgets, apply advanced filtering, and generate AI-driven financial insights with a single click.",
    results: [
      "Saved analysts an average of 12 hours per week.",
      "Successfully deployed across 4 multinational enterprise clients.",
      "Pioneered a new dark-mode tailored specifically for data-heavy interfaces."
    ]
  },
  {
    slug: "eco-tracker",
    img: "/project-turun.png", // Reusing image for mock
    title: "EcoTrack — Carbon Footprint App",
    desc: "A consumer app that helps users track, reduce, and offset their daily carbon footprint through simple lifestyle changes.",
    tag: "Mobile App Design",
    overview: "EcoTrack empowers individuals to make climate-conscious decisions by automatically calculating the carbon impact of their purchases and commutes.",
    role: "UI/UX Designer",
    timeline: "2 Months (Aug - Sep 2025)",
    problem: "Climate action feels abstract and overwhelming for the average consumer who doesn't know where to start.",
    solution: "We created a friendly, encouraging interface that breaks down carbon tracking into simple, actionable daily goals with visual 'tree growing' progress.",
    results: [
      "Over 50,000 tons of CO2 offset by the community.",
      "Ranked #1 in the 'Green Living' category.",
      "Integrated with major transit APIs for automatic commute tracking."
    ]
  },
  {
    slug: "aesthetics-store",
    img: "/project-ecommerce.png", // Reusing image for mock
    title: "Lumière — Luxury E-Commerce",
    desc: "A premium headless e-commerce experience for a luxury skincare brand, focusing on high-end typography and smooth transitions.",
    tag: "Web Design",
    overview: "Lumière needed an online storefront that felt as luxurious and meticulous as their physical retail locations in Paris and New York.",
    role: "Frontend Developer",
    timeline: "3 Months (Apr - Jun 2025)",
    problem: "Traditional e-commerce templates felt too generic and failed to convey the premium, bespoke nature of the brand's products.",
    solution: "Built a custom Shopify headless storefront using Next.js and Framer Motion to deliver editorial-style layouts and silken scroll experiences.",
    results: [
      "Increased average order value by 22%.",
      "Achieved a 98/100 Lighthouse performance score.",
      "Decreased bounce rate by 40% on product pages."
    ]
  }
];
