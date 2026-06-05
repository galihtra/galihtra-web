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

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];
  const marqueeSkills = ["Frontend Dev", "Mobile App", "Backend API", "UI/UX", "System Design"];

  const tabs: Record<string, string> = {
    education: "Lulusan Ilmu Komputer dengan fondasi kuat di data structure, algoritma, dan arsitektur software. Terus belajar lewat eksplorasi open-source.",
    skills: "React, Next.js, TypeScript, Flutter, Node.js, PostgreSQL, Docker, AWS. Terbiasa membangun aplikasi robust dari frontend hingga backend.",
    experience: "5+ tahun membangun solusi digital untuk berbagai industri. Fokus pada maintainable code, performa, dan user experience.",
  };

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
              Hi everyone 👋, I&apos;am David Franco
            </motion.div>
            
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}>
              Software Developer <br/>
              Based in Indonesia
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

      {/* ════════ MARQUEE ════════ */}
      <div className="marquee-wrapper">
        <section className="marquee">
          <div className="marquee-track">
            {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span key={i} className="marquee-item">{s} <span className="marquee-dot"><SparkleIcon /></span></span>
            ))}
          </div>
        </section>
      </div>

      {/* ════════ ABOUT ════════ */}
      <section className="about" id="about">
        <FadeSection className="about-inner">
          <p className="about-quote">
            Membangun software yang scalable, user-friendly, dan memberikan pengalaman digital yang seamless!
          </p>

          <div className="about-tabs">
            {([["education", "Education"], ["skills", "Skills"], ["experience", "Work Experience"]] as const).map(([key, label]) => (
              <button key={key} className={`about-tab ${activeTab === key ? "active" : ""}`} onClick={() => setActiveTab(key)}>
                {activeTab === key && <span className="tab-dot" />}
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              className="about-desc"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {tabs[activeTab]}
            </motion.p>
          </AnimatePresence>
        </FadeSection>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="services" id="services">
        <div className="services-inner">
          <FadeSection className="section-header">
            <div className="section-tag"><span className="section-tag-dot" /> Services</div>
            <h2 className="section-title">Design Services I am Providing</h2>
          </FadeSection>

          <div className="services-grid">
            {/* Service 1 */}
            <FadeSection delay={0}>
              <div className="svc-card">
                <div className="svc-top">
                  <div className="svc-icon"><WebIcon /></div>
                  <div className="svc-stat"><strong>23</strong>Project Completed</div>
                </div>
                <h3 className="svc-title">Web Design</h3>
                <p className="svc-desc">My web design service focuses on crafting visually stunning and user-friendly personal portfolios.</p>
                <div className="svc-image">
                  <Image src="/service-webdesign.png" alt="Web Design" width={400} height={250} />
                </div>
              </div>
            </FadeSection>

            {/* Service 2 */}
            <FadeSection delay={0.1}>
              <div className="svc-card">
                <div className="svc-top">
                  <div className="svc-icon"><MobileIcon /></div>
                  <div className="svc-stat"><strong>17</strong>Project Completed</div>
                </div>
                <h3 className="svc-title">Mobile App Design</h3>
                <p className="svc-desc">I create sleek and intuitive designs for mobile applications, working closely with you.</p>
                <div className="svc-tags">
                  <span className="svc-tag green">UI/UX</span>
                  <span className="svc-tag">Flutter</span>
                  <span className="svc-tag">React Native</span>
                </div>
              </div>
            </FadeSection>

            {/* Service 3 */}
            <FadeSection delay={0.2}>
              <div className="svc-card">
                <div className="svc-top">
                  <div className="svc-icon"><StarIcon /></div>
                  <div className="svc-stat"><strong>06</strong>Project Completed</div>
                </div>
                <h3 className="svc-title">Brand Identity</h3>
                <p className="svc-desc">I create memorable brand identities, from logo design to complete visual systems and guidelines.</p>
                <div className="svc-tags">
                  <span className="svc-tag green">Logo Design</span>
                  <span className="svc-tag">Guidelines</span>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ════════ PROJECTS ════════ */}
      <section className="projects" id="projects">
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
        <FadeSection className="contact-inner">
          <h2 className="contact-title">Having an Idea?</h2>
          <p className="contact-desc">
            Have a project in mind or want to collaborate? Let&apos;s create something amazing together.
          </p>
          <div style={{display: "flex", gap: "16px", justifyContent: "center", alignItems: "center"}}>
            <a href="mailto:hello@galihtra.com" className="brutalist-badge" style={{marginBottom: 0, padding: "10px 20px"}}>
              <MailIcon /> hello@galihtra.com
            </a>
            <a href="mailto:hello@galihtra.com" className="brutalist-btn" style={{padding: "10px 20px"}}>
              Contact Me <ArrowUpRight />
            </a>
          </div>
        </FadeSection>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">Copyright © 2026 Galih Tri Risky Andiko. All Rights Reserved</p>
          <div className="footer-socials">
            <a href="#" className="footer-soc" aria-label="GitHub"><GithubIcon /></a>
            <a href="#" className="footer-soc" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" className="footer-soc" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
