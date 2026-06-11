"use client";

import Image from "next/image";
import { LayoutGrid, List, Search, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    slug: "designing-memorable-logo",
    title: "5 Essential Tips for Designing a Memorable Brand Logo",
    date: "December 15, 2022",
    author: "John Smith",
    img: "/project-ecommerce.png",
  },
  {
    slug: "dos-and-donts-social",
    title: "The Dos and Don'ts of Social Media Marketing in 2022",
    date: "December 10, 2022",
    author: "Sarah Johnson",
    img: "/project-dashboard.png",
  },
  {
    slug: "power-of-video",
    title: "The Power of Video Marketing: How Animated Explainer Videos Can Boost Engagement",
    date: "November 20, 2022",
    author: "Lisa Chen",
    img: "/service-webdesign.png",
  },
  {
    slug: "inclusive-design",
    title: "Designing for Accessibility: Tips and Best Practices for Inclusive Design",
    date: "November 8, 2022",
    author: "Alex Lee",
    img: "/project-turun.png",
  },
];

const categories = [
  "Design and Branding",
  "Website Development",
  "App Development",
  "Social Media",
  "Marketing Strategy",
  "Video Production",
];

const latestPosts = [
  {
    title: "The Power of Storytelling in Branding",
    date: "March 1, 2023",
    author: "Wella Johnson",
    img: "/project-dashboard.png",
  },
  {
    title: "Designing for Accessibility: Tips and Best Practices",
    date: "February 15, 2023",
    author: "Pamela Lee",
    img: "/project-ecommerce.png",
  },
  {
    title: "The Future of Digital: Trends 2023",
    date: "January 2, 2023",
    author: "Roger Kim",
    img: "/service-webdesign.png",
  },
];

const popularTags = [
  "design",
  "branding",
  "seo",
  "web development",
  "marketing",
  "ux design",
  "app development",
  "social media",
  "ui design",
];

export default function BlogSection() {
  return (
    <section className="relative py-24 bg-[#fafcff] z-10" id="blog">
      {/* Aurora Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/10 rounded-full mix-blend-multiply filter blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#00cfb4]/10 rounded-full mix-blend-multiply filter blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Tools */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-6 text-[#737373] text-sm font-bold">
            <div className="flex gap-2 items-center text-[#171717]">
              <button className="p-1.5 bg-white/60 border border-white/80 rounded shadow-sm text-blue-600 hover:bg-white transition-colors">
                <LayoutGrid size={18} />
              </button>
              <button className="p-1.5 hover:bg-white/40 rounded transition-colors">
                <List size={18} />
              </button>
            </div>
            <div className="uppercase tracking-widest text-[11px] font-black">
              SHOWING <span className="text-[#38bdf8]">212 RESULTS</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] font-black flex items-center cursor-pointer">
              SORT BY <ChevronRight size={14} className="ml-1 rotate-90" />
            </div>
          </div>
          
          <div className="relative w-full md:w-[320px]">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="w-full pl-6 pr-12 py-3 bg-white/40 backdrop-blur-md border border-white/80 shadow-sm rounded-full text-sm font-bold text-[#171717] outline-none focus:border-[#38bdf8] transition-colors placeholder:text-[#737373] placeholder:tracking-widest"
            />
            <button className="absolute right-1 top-1 w-10 h-10 bg-[#345b80] text-white rounded-full flex items-center justify-center hover:bg-[#2a4a68] transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content (Grid) */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="group cursor-pointer">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/30 border border-white/50 shadow-sm">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#171717] leading-[1.4] mb-3 group-hover:text-[var(--accent-dark)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] font-medium text-[#737373]">
                    {post.date} by <span className="text-[#38bdf8] hover:underline">{post.author}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] flex flex-col gap-12">
            
            {/* Categories */}
            <div>
              <h4 className="text-[13px] font-black text-[#171717] uppercase tracking-widest mb-6">All Categories</h4>
              <ul className="flex flex-col gap-4">
                {categories.map((cat) => {
                  const isActive = cat === "Website Development";
                  return (
                    <li key={cat} className="flex items-center gap-2">
                      {isActive && <ChevronRight size={14} className="text-[#c25e4a]" />}
                      <span className={`text-[15px] font-bold cursor-pointer transition-colors ${isActive ? "text-[#c25e4a]" : "text-[#525252] hover:text-[#171717]"}`}>
                        {cat}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Latest Posts */}
            <div>
              <h4 className="text-[13px] font-black text-[#171717] uppercase tracking-widest mb-6">Latest Posts</h4>
              <div className="flex flex-col gap-6">
                {latestPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-black/5">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#737373] uppercase tracking-wider mb-1">{post.date}</span>
                      <h5 className="text-[13px] font-bold text-[#171717] leading-tight mb-1 group-hover:text-[var(--accent-dark)] transition-colors">{post.title}</h5>
                      <span className="text-[11px] font-medium text-[#38bdf8]">by {post.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h4 className="text-[13px] font-black text-[#171717] uppercase tracking-widest mb-6">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 rounded-full bg-[#e8ecf2] border border-white/50 text-[#525252] text-[12px] font-bold hover:bg-white hover:shadow-sm transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
