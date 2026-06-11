"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafcff] text-[#171717] font-sans overflow-x-hidden selection:bg-[#00e68a] selection:text-white">
      {/* ════════ HEADER / NAVBAR ════════ */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar-glass">
          <Link href="/" className="nav-link text-[#171717] font-bold text-sm tracking-wide">
            <span className="flex items-center gap-2"><ArrowLeft /> Back to Home</span>
          </Link>
        </nav>
      </header>

      <main className="relative pt-[180px] pb-32">
        {/* Glassmorphism Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,230,138,0.15)_0%,transparent_70%)] absolute -top-[10%] -left-[15%] rounded-full animate-blobFloat" />
          <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_70%)] absolute -bottom-[20%] -right-[10%] rounded-full animate-blobFloat" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <div className="section-tag justify-center"><span className="section-tag-dot" /> Portfolio</div>
            <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-[900] tracking-[-0.03em] leading-[1.1] mb-6 text-[#171717]">
              All Selected Works
            </h1>
            <p className="text-[1.1rem] text-[#525252] max-w-2xl mx-auto leading-relaxed">
              A comprehensive showcase of my journey in building digital products that blend stunning aesthetics with intuitive functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={i === 0 || i === 5 ? "md:col-span-2" : "col-span-1"}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative bg-[#fafcff] pt-10 pb-12 flex justify-center z-10 w-full border-t border-[#e5e5e5]">
        <p className="text-[14px] font-medium text-[#737373]">
          © 2026 Galih Tri Risky Andiko. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
