"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Project } from "@/app/data/projects";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
);

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const isFeatured = index === 0 || index === 3;

  return (
    <Link href={`/portfolio/${project.slug}`} className="block h-full">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`proj-card relative group ${isFeatured ? 'md:col-span-2 flex-col md:flex-row' : 'col-span-1 flex-col'} h-full`}
        style={{ flexDirection: isFeatured ? undefined : 'column' }}
      >
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 230, 138, 0.08), transparent 40%)`
          }}
        />
        
        <div className={`proj-img ${isFeatured ? 'md:w-1/2 md:border-b-0 md:border-r border-white/40' : 'w-full h-[250px]'} flex-shrink-0 z-10`}>
          <Image src={project.img} alt={project.title} width={600} height={450} className="transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1" />
        </div>
        
        <div className={`proj-body ${isFeatured ? 'md:w-1/2 justify-center p-10' : 'w-full p-8'} z-10 flex flex-col flex-grow`}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="proj-title group-hover:text-[var(--accent-dark)] transition-colors pr-4">{project.title}</h3>
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white/50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-white/60 shadow-sm text-[#171717]">
              <ArrowUpRight />
            </div>
          </div>
          <p className="proj-desc flex-grow mb-6">{project.desc}</p>
          <div className="proj-tags mt-auto"><span className="proj-tag">{project.tag}</span></div>
        </div>
      </div>
    </Link>
  );
};
