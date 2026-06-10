"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

/* ── SVG Icons ─────────────────────────────────────────── */
const ChevronIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const ArrowDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
);
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
);
const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);
const DribbbleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /><path d="M8.56 2.75c4.37 6 6 12.25 6.44 20.56" /></svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const WebIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const MobileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
);
const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 1.5L14.2 9.8L22.5 12L14.2 14.2L12 22.5L9.8 14.2L1.5 12L9.8 9.8L12 1.5Z" />
  </svg>
);

const CircularText = () => (
  <svg viewBox="0 0 100 100" width="100" height="100" className="text-ring">
    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
    <text fontSize="11" letterSpacing="3.5" fontWeight="600" fill="#171717" style={{ textTransform: "uppercase" }}>
      <textPath href="#circlePath">
        explore more about me • scroll down • 
      </textPath>
    </text>
  </svg>
);

const HexagonGraphic = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hex-graphic">
    <defs>
      <path id="hex" d="M 185 80 Q 200 70 215 80 L 340 155 Q 350 160 350 175 L 350 325 Q 350 340 340 345 L 215 420 Q 200 430 185 420 L 60 345 Q 50 340 50 325 L 50 175 Q 50 160 60 155 Z" />
      <clipPath id="hex-clip"><use href="#hex" /></clipPath>
    </defs>
    <use href="#hex" fill="#ff7a59" stroke="white" strokeWidth="12" strokeLinejoin="round" />
  </svg>
);

const Zigzag = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="#171717" strokeWidth="4" strokeLinejoin="miter">
    <polyline points="2,30 18,10 32,30 48,10 62,30" />
  </svg>
);

/* ── Reusable Animated Section ─────────────────────────── */
function FadeSection({ children, className, id, delay = 0 }: { children: React.ReactNode; className?: string; id?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref} id={id} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Additional Icons for About ─────────────────────────── */
const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
);
const CodeBracketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

/* ══ Main Component ═══════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("education");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = ["home", "about", "services", "projects", "contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = ["Home", "About", "Projects", "Contact"];
  const marqueeSkills = ["Frontend Dev", "Mobile App", "Backend API", "UI/UX", "System Design"];

  const aboutTabs = [
    { key: "education", label: "Education", icon: <GraduationIcon /> },
    { key: "skills", label: "Skills", icon: <CodeBracketIcon /> },
    { key: "experience", label: "Experience", icon: <BriefcaseIcon /> },
  ] as const;

  const educationData = [
    {
      degree: "Diploma IV — Software Engineering",
      institution: "Politeknik Negeri Batam — Faculty of Engineering",
      period: "2022 — 2026",
      highlights: [
        "GPA: 3.99 / 4.00 — Highest GPA in Software Engineering",
        "Focus on Web Development, Mobile Development & UI/UX Design",
        "Active in open-source community & programming competitions",
        "Finalist at KMIPN 5 Hackathon & Healthkathon 2024 by BPJS Kesehatan",
      ],
    },
  ];

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Dart", "Kotlin", "XML", "Android Studio"],
    },
    {
      category: "Backend & Database",
      skills: ["SQL", "NoSQL", "Firebase", "PostgreSQL", "REST API"],
    },
    {
      category: "Tools & Platform",
      skills: ["Git", "GitHub", "Figma", "Postman", "Google Cloud", "AWS"],
    },
  ];

  const experienceData = [
    {
      role: "Mobile Developer",
      company: "PT. Sat Nusapersada Tbk",
      period: "Jul 2025 — May 2026",
      desc: "Developed and maintained the internal corporate mobile application using Flutter. Handled end-to-end front-end development, implemented biometric authentication, and architected middleware workflows using N8N for PostgreSQL and OneSignal push notifications.",
    },
    {
      role: "Mobile Developer",
      company: "Sekretariat Jenderal DPR RI",
      period: "Aug 2024 — Dec 2024",
      desc: "Built a cross-platform attendance tracking app using Flutter. Led end-to-end development from UI/UX design in Figma to deployment. Created a GPS-integrated attendance system and a digital learning module (LMS) with quizzes and progress tracking.",
    },
    {
      role: "Junior Software Developer",
      company: "PT. Deva Indonesia Group",
      period: "Jun 2024 — Aug 2024",
      desc: "Developed, maintained, and optimized company websites using WordPress. Collaborated with design and marketing teams to implement new features and ensure responsive, cross-browser compatible experiences.",
    },
    {
      role: "Flutter Developer",
      company: "PT. Sinergi Inovasi Tekno (SINTECH)",
      period: "Apr 2024 — Jun 2024",
      desc: "Designed the UI for Foochi Food Delivery application in Figma and developed features including profile, order, notifications, and menu pages using Flutter.",
    },
    {
      role: "Mobile Developer",
      company: "CIRCLE Creative Solution",
      period: "Jun 2021 — Aug 2021",
      desc: "Practiced Flutter engineering with attention to code quality and mobile performance. Developed a VPN Network app using Kotlin & Firebase, and designed a wholesale application in Flutter.",
    },
  ];

  const [typed1, setTyped1] = useState("");
  const text1 = "Software Developer";

  useEffect(() => {
    let current1 = 0;
    
    const timeout = setTimeout(() => {
      const interval1 = setInterval(() => {
        current1++;
        setTyped1(text1.substring(0, current1));
        if (current1 >= text1.length) {
          clearInterval(interval1);
        }
      }, 80);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* ════════ NAVBAR ════════ */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar-glass">
          {navLinks.map((l) => {
            const id = l.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a key={l} href={`#${id}`} className={`nav-link ${isActive ? "active" : ""}`}>
                <span className="nav-link-label">{l}</span>
                {isActive && (
                  <motion.span
                    className="nav-dot"
                    layoutId="navDot"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
        <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
      </div>

      {/* ════════ HERO ════════ */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text">
            <motion.div className="hero-badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              Hi everyone 👋, I&apos;am Galih Tri Risky Andiko
            </motion.div>
            
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}>
              <span className="text-primary">{typed1}<span className="typing-cursor">|</span></span>
              <motion.span 
                className="text-gradient-cool"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Building Digital Products.
              </motion.span>
            </motion.h1>

            <motion.p className="hero-desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}>
              I&apos;m a software developer passionate about creating robust applications that not only meet the functional requirements but also delight users and evoke emotional connections.
            </motion.p>

            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <a href="#contact" className="brutalist-btn">Get In Touch <ArrowUpRight /></a>
              <a href="#" className="btn-secondary">Download CV <DownloadIcon /></a>
            </motion.div>

            <motion.div className="hero-socials" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <span className="hero-socials-label">Find me on:</span>
              <a href="#" className="social-icon" aria-label="GitHub"><GithubIcon /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="social-icon filled" aria-label="LinkedIn"><LinkedinIcon /></a>
            </motion.div>
          </div>

          <div className="hero-photo-new">
            <motion.div
              className="glass-photo-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Animated gradient blobs */}
              <div className="glass-blobs" aria-hidden="true">
                <motion.div
                  className="glass-blob blob-1"
                  animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0], scale: [1, 1.15, 0.95, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="glass-blob blob-2"
                  animate={{ x: [0, -25, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.9, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="glass-blob blob-3"
                  animate={{ x: [0, 15, -15, 0], y: [0, -15, 25, 0], scale: [1, 1.1, 0.95, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Glass card */}
              <motion.div
                className="glass-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="glass-card-inner">
                  <Image src="/profile.png" alt="Galih Tri Risky Andiko" width={380} height={440} priority className="glass-photo-img" />
                  <div className="glass-shimmer" aria-hidden="true" />
                </div>

                {/* Bottom info bar */}
                <div className="glass-info-bar">
                  <div className="glass-status">
                    <span className="glass-status-dot" />
                    Open to work
                  </div>
                  <div className="glass-location">📍 Indonesia</div>
                </div>
              </motion.div>

              {/* Floating stat pill — top right */}
              <motion.div
                className="glass-pill glass-pill-exp"
                initial={{ opacity: 0, scale: 0.5, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <span className="pill-value">5+</span>
                <span className="pill-label">Years Exp.</span>
              </motion.div>

              {/* Floating stat pill — bottom left */}
              <motion.div
                className="glass-pill glass-pill-projects"
                initial={{ opacity: 0, scale: 0.5, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              >
                <span className="pill-value">40+</span>
                <span className="pill-label">Projects</span>
              </motion.div>

              {/* Orbit ring */}
              <motion.div
                className="glass-orbit"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              >
                <span className="orbit-dot" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ GRID DIVIDER TRANSITION ════════ */}
      <div className="grid-divider-transition" aria-hidden="true">
        <div className="grid-pattern-overlay" />
      </div>

      {/* ════════ ABOUT ════════ */}
      <section className="about" id="about">
        <div className="about-container">
          {/* Section header */}
          <FadeSection className="section-header">
            <div className="section-tag"><span className="section-tag-dot" /> About Me</div>
            <h2 className="section-title">Passionate About Crafting<br />Digital Experiences</h2>
            <p className="about-subtitle">
              An ambitious Software Engineering student with a near-perfect GPA, driven by a relentless curiosity 
              for technology and innovation. Specializing in mobile development, web development, and UI/UX design.
            </p>
          </FadeSection>

          {/* Glass summary card */}
          <FadeSection delay={0.1}>
            <div className="about-glass-card">
              <div className="about-glass-blobs" aria-hidden="true">
                <div className="about-blob about-blob-1" />
                <div className="about-blob about-blob-2" />
              </div>
              <div className="about-glass-content">
                <div className="about-philosophy">
                  <span className="about-philosophy-label">💡 My Philosophy</span>
                  <p className="about-philosophy-text">
                    I believe great software is not just about code that runs. It&apos;s about creating 
                    digital experiences that are <strong>intuitive</strong>, <strong>elegant</strong>, and 
                    deliver <strong>real impact</strong> for its users. Every project is an opportunity to 
                    transform ideas into meaningful solutions that delight and empower people.
                  </p>
                </div>
                <div className="about-highlights-row">
                  <div className="about-highlight-item">
                    <CheckCircleIcon />
                    <span>Clean & maintainable code</span>
                  </div>
                  <div className="about-highlight-item">
                    <CheckCircleIcon />
                    <span>User-centered design approach</span>
                  </div>
                  <div className="about-highlight-item">
                    <CheckCircleIcon />
                    <span>Agile development workflow</span>
                  </div>
                  <div className="about-highlight-item">
                    <CheckCircleIcon />
                    <span>Continuous learning mindset</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Tabs */}
          <FadeSection delay={0.2}>
            <div className="about-tabs">
              {aboutTabs.map(({ key, label, icon }) => (
                <button key={key} className={`about-tab ${activeTab === key ? "active" : ""}`} onClick={() => setActiveTab(key)}>
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </FadeSection>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="about-tab-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {activeTab === "education" && (
                <div className="about-education">
                  {educationData.map((edu, i) => (
                    <div key={i} className="edu-card">
                      <div className="edu-header">
                        <div>
                          <h3 className="edu-degree">{edu.degree}</h3>
                          <p className="edu-institution">{edu.institution}</p>
                        </div>
                        <span className="edu-period">{edu.period}</span>
                      </div>
                      <ul className="edu-highlights">
                        {edu.highlights.map((h, j) => (
                          <li key={j}>
                            <CheckCircleIcon />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="about-skills">
                  {skillCategories.map((cat, i) => (
                    <div key={i} className="skill-category">
                      <h4 className="skill-category-label">{cat.category}</h4>
                      <div className="skill-tags">
                        {cat.skills.map((skill, j) => (
                          <span key={j} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="about-experience">
                  {experienceData.map((exp, i) => (
                    <div key={i} className="exp-card">
                      <div className="exp-timeline-dot" />
                      <div className="exp-content">
                        <div className="exp-header">
                          <div>
                            <h3 className="exp-role">{exp.role}</h3>
                            <p className="exp-company">{exp.company}</p>
                          </div>
                          <span className="exp-period">{exp.period}</span>
                        </div>
                        <p className="exp-desc">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Stats row */}
          <FadeSection delay={0.3}>
            <div className="about-stats">
              {[
                { value: "3.99", label: "GPA Score" },
                { value: "6+", label: "Work Experiences" },
                { value: "8+", label: "Awards & Honors" },
                { value: "7+", label: "Certifications" },
              ].map((stat, i) => (
                <div key={i} className="about-stat-item">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>



      {/* ════════ PROJECTS ════════ */}
      <section className="projects" id="projects">
        {/* Glassmorphism Background Blobs */}
        <div className="projects-blobs" aria-hidden="true">
          <div className="blob proj-blob-1" />
          <div className="blob proj-blob-2" />
        </div>

        <div className="projects-inner">
          <FadeSection className="section-header">
            <div className="section-tag"><span className="section-tag-dot" /> Projects</div>
            <h2 className="section-title">My Latest Projects</h2>
            <p style={{marginTop: "16px", color: "#525252"}}>A curated collection of recent work that showcases my expertise across design and development.</p>
          </FadeSection>

          <div className="projects-grid">
            {[
              { img: "/project-turun.png", title: "TURUN — Running App Gamification", desc: "In this project, I had the opportunity to design a gamified fitness experience for runners.", tag: "Mobile App Design" },
              { img: "/project-dashboard.png", title: "Daniee — Creative Digital Agency", desc: "I had the opportunity to collaborate with Daniee - an agency that focuses on delivering.", tag: "Web Design" },
              { img: "/project-ecommerce.png", title: "Bimboo — Online Course App Design", desc: "An online course platform that combines user convenience with appealing aesthetics.", tag: "Mobile App Design" },
            ].map((p, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="proj-card">
                  <div className="proj-img">
                    <Image src={p.img} alt={p.title} width={600} height={450} />
                  </div>
                  <div className="proj-body">
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-desc">{p.desc}</p>
                    <div className="proj-tags"><span className="proj-tag">{p.tag}</span></div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CONTACT ════════ */}
      <section className="contact" id="contact">
        {/* Contact Aurora Background */}
        <div className="contact-blobs" aria-hidden="true">
          <div className="blob contact-blob-1" />
          <div className="blob contact-blob-2" />
          <div className="blob contact-blob-3" />
        </div>

        <FadeSection className="relative z-10 max-w-[1200px] mx-auto px-6 mb-20">
          {/* Custom internal aurora just for this massive card to ensure glassmorphism works perfectly */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-full max-h-[800px] pointer-events-none -z-10">
            <div className="absolute top-0 left-10 w-80 h-80 bg-purple-400/15 rounded-full mix-blend-multiply filter blur-[100px]"></div>
            <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--accent)]/15 rounded-full mix-blend-multiply filter blur-[100px]"></div>
            <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
          </div>

          {/* Massive Premium Glass Card */}
          <div className="relative bg-white/40 backdrop-blur-[40px] saturate-[150%] border border-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.07),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[40px] lg:rounded-[48px] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Info */}
            <div className="lg:w-2/5 p-10 lg:p-16 bg-white/40 border-b lg:border-b-0 lg:border-r border-white/50 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h2 className="hero-title mb-6">
                  Let&apos;s talk <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-dark)] to-[#00b36b]">business.</span>
                </h2>
                <p className="text-lg text-[#525252] font-medium leading-relaxed max-w-[95%]">
                  Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
                </p>
              </div>

              <div className="relative z-10 flex flex-col mt-12">
                <p className="text-xs font-black text-[#737373] uppercase tracking-widest mb-4">I can help you with</p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2.5 rounded-full border border-white/80 shadow-sm text-sm font-bold text-[#171717] bg-white/50 hover:-translate-y-0.5 transition-transform cursor-default">Frontend Development</span>
                  <span className="px-4 py-2.5 rounded-full border border-white/80 shadow-sm text-sm font-bold text-[#171717] bg-white/50 hover:-translate-y-0.5 transition-transform cursor-default">UI/UX Design</span>
                  <span className="px-4 py-2.5 rounded-full border border-white/80 shadow-sm text-sm font-bold text-[#171717] bg-white/50 hover:-translate-y-0.5 transition-transform cursor-default">Web Applications</span>
                  <span className="px-4 py-2.5 rounded-full border border-white/80 shadow-sm text-sm font-bold text-[#171717] bg-white/50 hover:-translate-y-0.5 transition-transform cursor-default">Prototyping</span>
                </div>

                <div className="mt-10 p-5 rounded-3xl bg-white/60 border border-white/80 shadow-sm flex items-start gap-4">
                  <div className="relative flex h-3 w-3 mt-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
                  </div>
                  <div>
                    <p className="font-extrabold text-[#171717] mb-1">Available for new projects</p>
                    <p className="text-sm font-medium text-[#525252] leading-relaxed">Let&apos;s discuss your timeline and how we can collaborate effectively.</p>
                  </div>
                </div>
              </div>

              {/* Socials inside left card */}
              <div className="relative z-10 flex gap-4 mt-12 pt-12 border-t border-black/5">
                <a href="#" aria-label="Instagram" className="text-[#737373] hover:text-[var(--accent-dark)] transition-colors duration-300"><InstagramIcon /></a>
                <a href="#" aria-label="Dribbble" className="text-[#737373] hover:text-[var(--accent-dark)] transition-colors duration-300"><DribbbleIcon /></a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 p-10 lg:p-16 bg-white/20">
              <form className="flex flex-col gap-10 h-full justify-center" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3 relative group">
                    <label className="text-xs font-black text-[#737373] uppercase tracking-widest">First Name *</label>
                    <input type="text" placeholder="John" required className="w-full bg-transparent border-b-2 border-black/10 py-2 text-xl font-medium text-[#171717] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-black/20" />
                  </div>
                  <div className="flex flex-col gap-3 relative group">
                    <label className="text-xs font-black text-[#737373] uppercase tracking-widest">Last Name *</label>
                    <input type="text" placeholder="Doe" required className="w-full bg-transparent border-b-2 border-black/10 py-2 text-xl font-medium text-[#171717] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-black/20" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3 relative group">
                    <label className="text-xs font-black text-[#737373] uppercase tracking-widest">Contact Number</label>
                    <input type="text" placeholder="+62" required className="w-full bg-transparent border-b-2 border-black/10 py-2 text-xl font-medium text-[#171717] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-black/20" />
                  </div>
                  <div className="flex flex-col gap-3 relative group">
                    <label className="text-xs font-black text-[#737373] uppercase tracking-widest">Email Address *</label>
                    <input type="email" placeholder="john@example.com" required className="w-full bg-transparent border-b-2 border-black/10 py-2 text-xl font-medium text-[#171717] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-black/20" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 relative group">
                  <label className="text-xs font-black text-[#737373] uppercase tracking-widest">Project Details *</label>
                  <textarea rows={3} placeholder="Tell me about your brilliant ideas..." required className="w-full bg-transparent border-b-2 border-black/10 py-2 text-xl font-medium text-[#171717] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder-black/20 resize-y"></textarea>
                </div>

                <div className="mt-6">
                  <button type="submit" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#171717] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,230,138,0.3)] hover:-translate-y-1">
                    <span className="absolute inset-0 w-full h-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-[#171717] transition-colors duration-300">
                      Send Message <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="relative bg-[#f8fafc] px-6 pt-24 pb-24 overflow-hidden flex justify-center z-10">
        {/* Giant background text */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[clamp(8rem,20vw,25rem)] font-black text-[#00e68a]/15 whitespace-nowrap leading-none tracking-tighter -z-10 select-none pointer-events-none">
          GALIH
        </div>

        {/* Liquid Glass Aurora Blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full mix-blend-multiply filter blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[100px] -z-10 pointer-events-none"></div>

        <div className="w-full max-w-[1200px] relative bg-white/40 backdrop-blur-[40px] saturate-[150%] border border-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.07),inset_0_2px_4px_rgba(255,255,255,0.8)] rounded-[32px] p-10 md:p-16 flex flex-col z-20">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
            {/* Left Info */}
            <div className="max-w-[380px]">
              <h2 className="text-2xl font-black text-[#171717] mb-6 tracking-tight flex items-center gap-3">
                {/* Minimalist Logo mark */}
                <div className="w-8 h-8 bg-[#171717] rounded-lg flex items-center justify-center">
                  <SparkleIcon />
                </div>
                Galih.
              </h2>
              <p className="text-[15px] text-[#525252] leading-relaxed mb-8">
                Building digital experiences that combine function with stunning aesthetics. Let&apos;s create something amazing together.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-[#171717] hover:text-[#525252] transition-colors"><InstagramIcon /></a>
                <a href="#" className="text-[#171717] hover:text-[#525252] transition-colors"><LinkedinIcon /></a>
                <a href="#" className="text-[#171717] hover:text-[#525252] transition-colors"><GithubIcon /></a>
                <a href="#" className="text-[#171717] hover:text-[#525252] transition-colors"><DribbbleIcon /></a>
              </div>
            </div>

            {/* Right Links */}
            <div className="flex flex-wrap gap-12 sm:gap-20">
              <div className="flex flex-col gap-4">
                <h4 className="text-[15px] font-bold text-[#171717] mb-2">Navigation</h4>
                <a href="#home" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Home</a>
                <a href="#about" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">About</a>
                <a href="#projects" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Projects</a>
                <a href="#contact" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[15px] font-bold text-[#171717] mb-2">Resources</h4>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Documentation</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Tutorials</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Blog</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Support</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[15px] font-bold text-[#171717] mb-2">Company</h4>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">About</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Careers</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Contact</a>
                <a href="#" className="text-[14px] font-medium text-[#737373] hover:text-[#171717] transition-colors">Partners</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-black/5">
            <p className="text-[14px] font-medium text-[#737373]">
              © 2026 Galih Tri Risky Andiko. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-[13px] font-medium text-[#737373] hover:text-[#171717] underline underline-offset-4 transition-colors">Privacy Policy</a>
              <a href="#" className="text-[13px] font-medium text-[#737373] hover:text-[#171717] underline underline-offset-4 transition-colors">Terms of Service</a>
              <a href="#" className="text-[13px] font-medium text-[#737373] hover:text-[#171717] underline underline-offset-4 transition-colors">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
