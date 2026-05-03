"use client";
import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Clock, 
  Calendar, 
  ArrowRight,
  Zap,
  Lightbulb,
  Video,
  TrendingUp,
  Crown,
  Play,
  X
} from 'lucide-react';

export default function BlogSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const blogs = [
    {
      id: 1,
      title: "YouTube's 2026 Roadmap: Navigating AI and the New TV Era",
      author: "Rohan Parvej",
      date: "Jan 23, 2026",
      readTime: "6 min read",
      category: "Roadmap",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      // Lucide theke error ashar kothao chinta nei, ekhon direct SVG use hobe
      icon: (
        <svg className="w-8 h-8 text-red-500 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "bg-red-50/50"
    },
    {
      id: 2,
      title: "The Retention Secret: Why 90% of Videos Fail in 3 Seconds",
      author: "Rohan Parvej",
      date: "Jan 23, 2026",
      readTime: "5 min read",
      category: "Strategy",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-preview.mp4",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50/50"
    },
    {
      id: 3,
      title: "100+ Viral Video Ideas with Titles That Actually Work",
      author: "Rohan Parvej",
      date: "Aug 26, 2025",
      readTime: "5 min read",
      category: "Ideas",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-editor-at-work-with-multiple-screens-43093-preview.mp4",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-50/50"
    },
    {
      id: 4,
      title: "How Professional Video Editing Turns Views Into Revenue",
      author: "Rohan Parvej",
      date: "Aug 24, 2025",
      readTime: "5 min read",
      category: "Business",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      icon: <Video className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50/50"
    },
    {
      id: 5,
      title: "Why Outsourcing Your Editing is the Smartest Move in 2026",
      author: "Rohan Parvej",
      date: "Apr 10, 2025",
      readTime: "5 min read",
      category: "Growth",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-preview.mp4",
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      color: "bg-emerald-50/50"
    },
    {
      id: 6,
      title: "Mastering Short-Form Content: Ultimate Guide to Reels",
      author: "Rohan Parvej",
      date: "May 15, 2025",
      readTime: "7 min read",
      category: "Mastery",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-editor-at-work-with-multiple-screens-43093-preview.mp4",
      icon: <Crown className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-50/50"
    }
  ];

  return (
    <section id="blog" className="bg-[#F8FAFC] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* SVG Goo Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>

      <style>{`
        .blob-btn { position: relative; z-index: 1; }
        .blob-btn__inner {
          position: absolute; left: 0; top: 0; width: 100%; height: 100%;
          overflow: hidden; border-radius: 0.75rem; background: #ffffff; z-index: -1;
        }
        .blob-btn__blobs { position: relative; display: block; height: 100%; filter: url('#goo'); }
        .blob-btn__blob {
          position: absolute; top: 2px; width: 25%; height: 100%;
          background: #0066FF; border-radius: 100%;
          transform: translate3d(0, 150%, 0) scale(1.7); transition: transform 0.6s ease;
        }
        .blob-btn__blob:nth-child(1) { left: 0%; transition-delay: 0s; }
        .blob-btn__blob:nth-child(2) { left: 30%; transition-delay: 0.1s; }
        .blob-btn__blob:nth-child(3) { left: 60%; transition-delay: 0.2s; }
        .blob-btn__blob:nth-child(4) { left: 90%; transition-delay: 0.3s; }
        .blob-btn:hover .blob-btn__blob { transform: translate3d(0, 0, 0) scale(1.7); }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative flex items-center justify-center w-full max-w-lg mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-300"></div>
            <div className="relative z-10 px-5 py-2 mx-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-2 group cursor-default">
              <LayoutGrid className="w-4 h-4 text-[#0066FF]" />
              <span className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Blog</span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-300"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[900] tracking-tighter text-slate-900 leading-tight mb-4 uppercase">
            Explore Our Blog
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            Stay updated with the latest trends in video editing, content strategy, and digital marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedVideo(post.videoUrl)}
              className="bg-[#F1F5F9] p-3 rounded-2xl border-[4px] border-white shadow-[inset_0_0_0_1px_#e2e8f0,0_12px_30px_rgba(0,0,0,0.04)] group cursor-pointer hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`relative h-44 rounded-xl overflow-hidden mb-6 flex items-center justify-center ${post.color} transition-all duration-500 group-hover:brightness-95 shrink-0`}>
                <div className="transform group-hover:scale-110 transition-transform duration-700">
                  {post.icon}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg text-[#0066FF] scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/50">
                  <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">{post.category}</span>
                </div>
              </div>

              <div className="px-3 pb-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 overflow-hidden border border-white shadow-sm shrink-0">
                      <img src={`https://ui-avatars.com/api/?name=Rohan+Parvej&background=0066FF&color=fff`} alt={post.author} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                    <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                      <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Button */}
        <div className="mt-16 flex justify-center">
          <button className="blob-btn group flex items-center px-10 py-4 rounded-xl border border-slate-200 shadow-sm overflow-hidden cursor-pointer">
            <span className="relative z-10 flex items-center gap-4 text-slate-700 group-hover:text-white transition-colors duration-400">
              <span className="text-[14px] font-bold uppercase tracking-widest">Read All Articles</span>
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </span>
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                {[1,2,3,4].map(i => <span key={i} className="blob-btn__blob"></span>)}
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border-[8px] border-white/10 shadow-2xl bg-black"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-red-500 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}