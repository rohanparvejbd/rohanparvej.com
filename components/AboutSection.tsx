"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Rocket,
  Mail,
  ArrowRight,
  Star,
  ArrowUpRight,
  Crown,
  Layout,
  Video,
  TrendingUp
} from 'lucide-react';

export default function AboutSection() {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic YouTube Stats (Default values)
  const [ytStats, setYtStats] = useState({ views: '10M+', subs: '200,000+' });

  // Review Data
  const reviews = [
    { id: 1, name: "moshe_weizman", text: "Rohan is a master of his craft. His video editing skills and marketing insights helped my channel grow significantly!", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 2, name: "annalise_c", text: "Professional and creative. He designed my brand identity from scratch and the result was beyond expectations.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 3, name: "johndoe_99", text: "The best digital specialist I've worked with. His marketing strategy doubled our sales in just two months.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 4, name: "sarah_smith", text: "Fast delivery and great attention to detail. Highly recommend his video editing services.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 5, name: "mike_creative", text: "Brilliant graphic design skills. He captures the brand's essence perfectly every time.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 6, name: "emily_vlogs", text: "Super professional. Rohan handled my social media marketing and the engagement was top-notch.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 7, name: "david_tech", text: "His motion graphics added so much value to my tech reviews. A true creative partner.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 8, name: "lisa_marketing", text: "Great communication. The final ad campaign he designed is performing exceptionally well.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 9, name: "alex_gaming", text: "Rohan knows exactly how to pace gaming content. My retention rate has skyrocketed!", img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=64&h=64" },
    { id: 10, name: "rachel_fitness", text: "Transformative work! He handled my editing and marketing, and now my brand is thriving.", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=64&h=64" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollPosition = (viewportHeight / 2) - rect.top;
      const maxLineHeight = containerRef.current.clientHeight - 48;
      let newHeight = Math.max(0, scrollPosition);
      newHeight = Math.min(newHeight, maxLineHeight);
      setLineHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* LEFT SIDE: Content */}
        <div className="col-span-1 lg:col-span-5 relative">
          <div className="sticky top-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white shadow-sm mb-8">
              <User className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Digital Specialist</span>
            </div>

            {/* Headings */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
              Meet Your Expert
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Rohan Parvej
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              A creative Digital Specialist, Video Editor, Graphic Designer, and Digital Marketer based in Bangladesh. 
              I blend technology with storytelling to help brands grow their digital presence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm shadow-blue-500/30">
                <Rocket className="w-5 h-5" />
                Start Your Project Now
              </button>
              <a href="mailto:contact@rohanparvej.com" className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-100 border border-slate-300 text-slate-700 px-6 py-3.5 rounded-xl font-medium transition-colors">
                <Mail className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Cards & Timeline */}
        <div className="col-span-1 lg:col-span-7 relative lg:pl-12 xl:pl-16" ref={containerRef}>
          
          {/* Timeline Line (Background) */}
          <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-slate-200 hidden lg:block rounded-full"></div>
          
          {/* Active section of timeline (Animated) */}
          <div 
            className="absolute left-0 top-12 w-[2px] bg-blue-600 hidden lg:block rounded-full transition-all duration-75 ease-out z-10"
            style={{ height: `${lineHeight}px` }}
          >
            {/* Animated Scroll Indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5 h-9 bg-[#F8FAFC] rounded-full border-2 border-white shadow-[0_0_12px_rgba(59,130,246,0.3)] ring-1 ring-blue-100 flex items-center justify-center">
              <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse opacity-80"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* CARD 1: Profile Card */}
            <div className="relative">
              <div className="bg-[#F1F5F9] rounded-3xl p-6 sm:p-10 border-[6px] sm:border-[8px] border-white shadow-[inset_0_0_0_1px_#e2e8f0,0_12px_40px_rgba(0,0,0,0.06)] relative z-0">
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                  {/* Photo */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl bg-blue-100 overflow-hidden shrink-0 border border-white shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" 
                      alt="Rohan Parvej"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Name - Single Line */}
                    <h3 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight whitespace-nowrap mb-1">
                      Rohan Parvej
                    </h3>
                    
                    {/* Normal Text Title with Opacity */}
                    <p className="text-slate-500 text-sm sm:text-base font-medium opacity-60 mb-5">
                      Digital Specialist
                    </p>
                    
                    {/* Socials */}
                    <div className="flex items-center gap-3">
                      <a href="https://www.youtube.com/@rohanparvej1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/rohanparvej/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/rohanparvej_/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a href="https://web.facebook.com/rohanparvejbd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Rating & Fiverr Profile */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 sm:px-6 rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[1, 2].map((star) => (
                        <Star key={`filled-${star}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      {[3, 4, 5].map((star) => (
                        <Star key={`empty-${star}`} className="w-4 h-4 fill-slate-200 text-slate-200" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">New Seller</span>
                  </div>
                  <a href="https://www.fiverr.com/rohanparvej1/buying" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 100 100">
                      <path d="M60.4 32.4v12H50.5c-4.8 0-5 2.5-5 4.9v4.9h14.8l-2.4 14.5H45.5v36.3H30.7V68.7H20.8V54.2h9.9v-9.7c0-12.4 7-18.2 19.5-18.2H60.4z M79.8 8.2c4.5 0 8.1 3.6 8.1 8.1s-3.6 8.1-8.1 8.1s-8.1-3.6-8.1-8.1S75.3 8.2 79.8 8.2z"/>
                    </svg>
                    Visit Fiverr Profile
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Bio */}
                <p className="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Hi, I'm Rohan Parvej. I specialize in turning raw ideas into cinematic experiences through 
                  pro-level Video Editing and eye-catching Graphic Designs. As a Digital Marketer, 
                  I ensure your content reaches the right audience to maximize impact.
                </p>

                <div className="h-px w-full bg-slate-100 my-8"></div>

                {/* YT Stats Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <a href="https://www.youtube.com/@rohanparvej1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-slate-200 bg-white shadow-sm text-slate-700 hover:bg-slate-50 font-medium px-5 py-2.5 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Visit Channel
                    <ArrowUpRight className="w-4 h-4 ml-1 text-slate-400" />
                  </a>
                  <div className="flex items-center gap-8 sm:gap-12">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900">{ytStats.views}</div>
                      <div className="text-sm font-medium text-slate-500 mt-1">Views</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900">{ytStats.subs}</div>
                      <div className="text-sm font-medium text-slate-500 mt-1">Subscribers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Commitment */}
            <div className="relative">
              <div className="bg-[#F1F5F9] rounded-3xl p-6 sm:p-8 border-[6px] sm:border-[8px] border-white shadow-[inset_0_0_0_1px_#e2e8f0,0_12px_40px_rgba(0,0,0,0.06)] relative z-0">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quality, Creativity & Results.</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                  With years of experience in digital media, I have helped 5,000+ clients across the globe. 
                  Whether it's a video, a design, or a marketing plan, I deliver results that matter.
                </p>

                {/* Clients Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="flex items-center bg-white rounded-lg p-2 pr-4 shadow-sm border border-slate-200">
                    <div className="flex -space-x-2 mr-3">
                      <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" />
                      <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" />
                      <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">5000+ happy clients</span>
                  </div>
                </div>

                {/* Reviews Marquee */}
                <style>{`
                  @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                  }
                  .animate-marquee:hover {
                    animation-play-state: paused;
                  }
                `}</style>
                <div className="overflow-hidden w-full relative -mx-2 px-2">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="animate-marquee gap-4 pb-2 pt-1">
                    {[...reviews, ...reviews].map((review, idx) => (
                      <div key={`${review.id}-${idx}`} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm w-[280px] sm:w-[320px] shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                             <img src={review.img} className="w-full h-full object-cover" alt={review.name} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-slate-900">{review.name}</div>
                            <div className="flex gap-0.5 mt-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 line-clamp-3">
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 3: Expertise */}
            <div className="relative">
              <div className="bg-[#F1F5F9] rounded-3xl p-6 sm:p-8 border-[6px] sm:border-[8px] border-white shadow-[inset_0_0_0_1px_#e2e8f0,0_12px_40px_rgba(0,0,0,0.06)] relative z-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
                    <Crown className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Expertise in 3 Core Domains</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center sm:text-left">
                    <Video className="w-6 h-6 text-blue-500 mb-2 mx-auto sm:mx-0" />
                    <h4 className="font-bold text-sm mb-1">Video Editing</h4>
                    <p className="text-xs text-slate-500">Pro cinematic storytelling.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center sm:text-left">
                    <Layout className="w-6 h-6 text-emerald-500 mb-2 mx-auto sm:mx-0" />
                    <h4 className="font-bold text-sm mb-1">Graphic Design</h4>
                    <p className="text-xs text-slate-500">Premium brand visuals.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center sm:text-left">
                    <TrendingUp className="w-6 h-6 text-orange-500 mb-2 mx-auto sm:mx-0" />
                    <h4 className="font-bold text-sm mb-1">Digital Marketing</h4>
                    <p className="text-xs text-slate-500">Growth-focused strategies.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}