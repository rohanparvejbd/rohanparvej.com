"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutGrid, 
  Monitor, 
  Smartphone, 
  Play, 
  ArrowLeft 
} from 'lucide-react';

export default function FullPortfolioPage() {
  const filters = ['YouTube', 'TikTok/Reels/Shorts', 'Intros', 'Outros', 'Best Work', 'Thumbnails'];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  // Apnar provided Project Data
  const projects = [
    { id: 1, title: "Thonic", category: "Finance", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, title: "The Alchemy of Being", category: "Wellness", thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, title: "Steven M. Sweat", category: "Personal Injury Lawyer", thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
    { id: 4, title: "ShieffX", category: "Vlog", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/85.jpg" },
    { id: 5, title: "Hgiankarlo O", category: "Digital Marketing", thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: 6, title: "Aviva Martin", category: "Lifestyle Vlog", thumbnail: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/women/54.jpg" },
    { id: 7, title: "Creator", category: "Vlog - Golfing", thumbnail: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 8, title: "Devante Fields", category: "Vlog - Celebrity", thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=640&h=360", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
  ];

  const isVertical = activeFilter === 'TikTok/Reels/Shorts';

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Back to Home Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0066FF] transition-colors font-bold uppercase tracking-widest text-xs mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-none uppercase mb-6">
            Rohan Parvej <span className="text-[#0066FF]">Showcase</span>
          </h1>
          <p className="text-slate-600 font-medium max-w-2xl text-lg">
            Experience the full collection of cinematic video edits, motion graphics, and creative designs.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 lg:gap-8 transition-all duration-500 ${
          isVertical 
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-3 rounded-3xl border-4 border-white shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-pointer">
              <div className={`relative rounded-2xl overflow-hidden mb-4 ${
                isVertical ? 'aspect-[9/16]' : 'aspect-video'
              }`}>
                <img src={project.thumbnail} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0066FF] shadow-xl">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-1 pb-1">
                <img src={project.avatar} alt={project.title} className="w-10 h-10 rounded-xl border-2 border-slate-50 shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate uppercase">{project.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}