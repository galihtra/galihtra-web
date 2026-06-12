"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogSection from "@/components/BlogSection";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

export default function Blog() {
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

      <main className="relative pt-[100px] pb-32">
        <BlogSection />
      </main>

      <footer className="relative bg-[#fafcff] pt-10 pb-12 flex justify-center z-10 w-full border-t border-[#e5e5e5]">
        <p className="text-[14px] font-medium text-[#737373]">
          © 2026 Galih Tri Risky Andiko. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
