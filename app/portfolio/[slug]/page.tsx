"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/app/data/projects";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [scrolled, setScrolled] = useState(false);
  const project = projects.find(p => p.slug === resolvedParams.slug);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafcff]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="btn-primary inline-flex">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafcff] text-[#171717] font-sans selection:bg-[#00e68a] selection:text-white pb-32">
      {/* ════════ HEADER / NAVBAR ════════ */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar-glass">
          <Link href="/portfolio" className="nav-link text-[#171717] font-bold text-sm tracking-wide">
            <span className="flex items-center gap-2"><ArrowLeft /> Back to Portfolio</span>
          </Link>
        </nav>
      </header>

      {/* ════════ HERO ════════ */}
      <section className="relative pt-[160px] pb-16 px-6 max-w-[1200px] mx-auto overflow-hidden">
        {/* Glassmorphism Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,230,138,0.2)_0%,transparent_70%)] absolute top-0 right-0 rounded-full animate-blobFloat" />
        </div>

        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag mb-6"><span className="section-tag-dot" /> {project.tag}</div>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-[900] tracking-[-0.03em] leading-[1.1] mb-6 text-[#171717] max-w-4xl">
              {project.title}
            </h1>
            <p className="text-[1.2rem] text-[#525252] leading-relaxed max-w-3xl mb-12">
              {project.overview}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-video md:aspect-[21/9] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] overflow-hidden flex items-center justify-center p-8 md:p-16 shadow-[0_24px_80px_rgba(0,0,0,0.05)]"
          >
            <Image src={project.img} alt={project.title} width={1200} height={800} className="w-full h-full object-contain" />
          </motion.div>
        </div>
      </section>

      {/* ════════ CONTENT ════════ */}
      <section className="max-w-[1000px] mx-auto px-6 relative z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          
          {/* Metadata Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-4 flex flex-col gap-8"
          >
            <div className="bg-white/50 backdrop-blur-md border border-white/60 p-8 rounded-[24px] shadow-sm">
              <div className="mb-6">
                <h4 className="text-[0.8rem] font-bold text-[#737373] uppercase tracking-wider mb-2">Role</h4>
                <p className="text-[1.05rem] font-semibold text-[#171717]">{project.role}</p>
              </div>
              <div>
                <h4 className="text-[0.8rem] font-bold text-[#737373] uppercase tracking-wider mb-2">Timeline</h4>
                <p className="text-[1.05rem] font-semibold text-[#171717]">{project.timeline}</p>
              </div>
            </div>
          </motion.div>

          {/* Main Case Study */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-8 flex flex-col gap-12"
          >
            <div className="glass-content-block p-10 bg-white/40 backdrop-blur-md border border-white/60 rounded-[32px]">
              <h3 className="text-2xl font-[800] tracking-tight mb-4 text-[#171717]">The Challenge</h3>
              <p className="text-[1.05rem] text-[#525252] leading-relaxed">{project.problem}</p>
            </div>

            <div className="glass-content-block p-10 bg-[linear-gradient(135deg,rgba(0,230,138,0.05),transparent)] backdrop-blur-md border border-[rgba(0,230,138,0.2)] rounded-[32px]">
              <h3 className="text-2xl font-[800] tracking-tight mb-4 text-[var(--accent-dark)]">The Solution</h3>
              <p className="text-[1.05rem] text-[#525252] leading-relaxed">{project.solution}</p>
            </div>

            <div className="glass-content-block p-10 bg-white/40 backdrop-blur-md border border-white/60 rounded-[32px]">
              <h3 className="text-2xl font-[800] tracking-tight mb-6 text-[#171717]">Impact & Results</h3>
              <ul className="space-y-4">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-4 text-[1.05rem] text-[#525252]">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[rgba(0,230,138,0.15)] text-[var(--accent-dark)] flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
