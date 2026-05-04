"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, Monitor, Smartphone, Play, ArrowRight } from 'lucide-react';

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState<'horizontal' | 'vertical'>('horizontal');

  const projects = [
    {
      id: 1,
      title: "Dominic Glover",
      category: "Talking Head – Artist",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      title: "Luisa Fanzani",
      category: "Intro – Skincare",
      thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      title: "KikiSellsLa",
      category: "Talking Head – Real Estate",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      title: "Linder Digital",
      category: "Talking Head – Marketing",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      id: 5,
      title: "Live Traders",
      category: "Vlog – Trading",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 6,
      title: "DAVIS NUTRITION",
      category: "Talking Head – Health",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=640&h=360",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    }
  ];

  return (
    <section id="projects" className="bg-[#F8FAFC] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* SVG Goo Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute w-0 h-0">
        <defs>
          <filter id="projects-goo">
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
          overflow: hidden; border-radius: 0.75rem; background: #ffffff; z-index: -1; transform: translateZ(0);
        }
        .blob-btn__blobs { position: relative; display: block; height: 100%; filter: url('#projects-goo'); }
        .blob-btn__blob {
          position: absolute; top: 2px; width: 30%; height: 100%;
          background: #0066FF; border-radius: 100%;
          transform: translate3d(0, 150%, 0) scale(1.4); transition: transform 0.45s ease;
        }
        .blob-btn__blob:nth-child(1) { left: -5%; transition-delay: 0s; }
        .blob-btn__blob:nth-child(2) { left: 25%; transition-delay: 0.08s; }
        .blob-btn__blob:nth-child(3) { left: 55%; transition-delay: 0.16s; }
        .blob-btn__blob:nth-child(4) { left: 85%; transition-delay: 0.24s; }
        .blob-btn:hover .blob-btn__blob { transform: translateZ(0) scale(1.7); }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 relative w-full pt-4 text-center">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#0066FF]/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative flex items-center justify-center w-full max-w-2xl mb-8">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-300"></div>
            <div className="relative z-10 px-5 py-2 mx-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-2 group cursor-default">
              <LayoutGrid className="w-4 h-4 text-[#0066FF] relative z-10" />
              <span className="text-[13px] font-bold text-slate-700 tracking-wide relative z-10 uppercase">Projects</span>
            </div>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-300"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] uppercase">
            Featured <span className="text-[#0066FF]">Projects</span>
          </h2>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm">
            <button
              onClick={() => setActiveFilter('horizontal')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeFilter === 'horizontal' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Horizontal
            </button>
            <button
              onClick={() => setActiveFilter('vertical')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeFilter === 'vertical' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Vertical
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 lg:gap-8 transition-all duration-700 ease-in-out ${
          activeFilter === 'horizontal' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}>
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-3 rounded-3xl border-4 border-white shadow-xl group cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              <div className={`relative rounded-2xl overflow-hidden mb-4 transition-all duration-700 ease-in-out ${
                activeFilter === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'
              }`}>
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-70"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md border border-white/60 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] z-10">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] fill-current ml-0.5 transition-colors duration-500 group-hover:text-white" />
                </div>
              </div>

              <div className="flex items-center gap-3 px-1 pb-1 mt-auto">
                <img src={project.avatar} alt={project.title} className="w-10 h-10 rounded-xl border-2 border-slate-50 shadow-sm shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate uppercase">{project.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button Linked to /portfolio */}
        <div className="mt-20 flex justify-center relative z-10">
          <Link href="/portfolio" className="blob-btn group flex items-center px-10 py-4 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <span className="relative z-10 flex items-center gap-4 text-slate-800 group-hover:text-white transition-colors duration-300">
              <span className="text-[15px] font-bold uppercase tracking-widest">View entire portfolio</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
              </div>
            </span>
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                {[1,2,3,4].map(i => <span key={i} className="blob-btn__blob"></span>)}
              </span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}