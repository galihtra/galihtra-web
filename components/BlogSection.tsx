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
    <section className="relative py-24 bg-[#fafcff] z-10 overflow-hidden" id="blog">
      {/* Noise Texture to make glass pop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }}></div>
      
      {/* Aurora Backgrounds - Stronger colors directly behind the grid to create refraction */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#00e68a]/20 rounded-full mix-blend-multiply filter blur-[120px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full mix-blend-multiply filter blur-[120px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-[-5%] left-[40%] w-[700px] h-[700px] bg-[#00cfb4]/20 rounded-full mix-blend-multiply filter blur-[140px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">
        
        {/* Header Tools */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-6 text-[#737373] text-sm font-bold">
            <div className="flex gap-2 items-center text-[#171717]">
              <button className="p-1.5 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/80 rounded shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[var(--accent-dark)] hover:from-white hover:to-white transition-all">
                <LayoutGrid size={18} strokeWidth={2.5} />
              </button>
              <button className="p-1.5 hover:bg-white/40 rounded transition-colors text-[#737373]">
                <List size={18} strokeWidth={2.5} />
              </button>
            </div>
            <div className="uppercase tracking-widest text-[11px] font-black">
              SHOWING <span className="text-[var(--accent-dark)]">212 RESULTS</span>
            </div>
            <div className="uppercase tracking-widest text-[11px] font-black flex items-center cursor-pointer hover:text-[#171717] transition-colors">
              SORT BY <ChevronRight size={16} strokeWidth={3} className="ml-1 rotate-90" />
            </div>
          </div>
          
          <div className="relative w-full md:w-[320px]">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="w-full pl-6 pr-14 py-3 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-[40px] saturate-[200%] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)] rounded-full text-sm font-bold text-[#171717] outline-none focus:border-[var(--accent)] focus:shadow-[0_8px_32px_rgba(0,230,138,0.15)] transition-all placeholder:text-[#737373] placeholder:tracking-widest"
            />
            <button className="absolute right-1 top-1 w-10 h-10 bg-[#171717] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent-dark)] hover:text-white transition-colors shadow-md">
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content (Grid) */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug} 
                  className="group cursor-pointer flex flex-col bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-[50px] saturate-[200%] border border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)] rounded-[32px] p-4 pb-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,230,138,0.15),inset_0_2px_8px_rgba(255,255,255,1)] hover:border-[var(--accent)]/50 relative"
                >
                  {/* Subtle Shimmer Overlay on hover */}
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5 border border-white/60 shadow-inner">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/5 backdrop-blur-[2px]">
                      <div className="bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-[#171717] text-xs font-black tracking-wide px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        READ ARTICLE
                      </div>
                    </div>
                  </div>
                  <div className="px-3 relative z-10">
                    <h3 className="text-[18px] font-extrabold text-[#171717] leading-[1.35] mb-3 group-hover:text-[var(--accent-dark)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[13px] font-semibold text-[#737373]">
                      {post.date} by <span className="text-[var(--accent-dark)] hover:underline">{post.author}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] flex flex-col gap-12 pt-2">
            
            {/* Categories */}
            <div className="bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-[50px] saturate-[200%] border border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)] rounded-[32px] p-8">
              <h4 className="text-[12px] font-black text-[#737373] uppercase tracking-widest mb-6">All Categories</h4>
              <ul className="flex flex-col gap-5">
                {categories.map((cat) => {
                  const isActive = cat === "Website Development";
                  return (
                    <li key={cat} className="flex items-center gap-3 group cursor-pointer">
                      {isActive ? (
                        <ChevronRight size={16} strokeWidth={3} className="text-[var(--accent-dark)]" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-transparent group-hover:border-[var(--accent)] transition-colors" />
                      )}
                      <span className={`text-[15px] font-bold transition-colors ${isActive ? "text-[var(--accent-dark)]" : "text-[#525252] group-hover:text-[#171717]"}`}>
                        {cat}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="relative">
              <h4 className="text-[12px] font-black text-[#737373] uppercase tracking-widest mb-6 px-2">Latest Posts</h4>
              <div className="flex flex-col gap-5">
                {latestPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4 items-center group cursor-pointer p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm hover:bg-white/60 hover:shadow-md hover:border-white/80 transition-all">
                    <div className="relative w-20 h-20 rounded-[18px] overflow-hidden shrink-0 border border-white/80 shadow-sm">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-[#737373] uppercase tracking-wider mb-1">{post.date}</span>
                      <h5 className="text-[13px] font-bold text-[#171717] leading-snug mb-1 group-hover:text-[var(--accent-dark)] transition-colors">{post.title}</h5>
                      <span className="text-[11px] font-bold text-[var(--accent-dark)]">by {post.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="relative">
              <h4 className="text-[12px] font-black text-[#737373] uppercase tracking-widest mb-6 px-2">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-[30px] saturate-150 border border-white/80 shadow-sm text-[#171717] text-[12px] font-bold hover:bg-[var(--accent)] hover:text-[#171717] hover:border-[var(--accent)] transition-all cursor-pointer"
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
