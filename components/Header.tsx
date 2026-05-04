"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Function (Fixed TypeScript type)
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out
        ${scrolled ? 'top-4 w-[90%] md:w-[85%]' : 'top-6 w-[95%]'}`}
    >
      <nav className="relative flex items-center justify-between px-6 py-3.5 bg-white/80 backdrop-blur-xl border border-zinc-200/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex items-center justify-center w-9 h-9 bg-zinc-900 rounded-xl text-white font-bold text-sm shadow-md group-hover:bg-[#0066FF] transition-colors">
            RP
          </div>
          <span className="font-bold text-zinc-900 tracking-tight text-lg uppercase">
            ROHAN <span className="font-medium text-zinc-500">PARVEJ</span>
          </span>
        </Link>

        {/* Center Navigation Links with Smooth Scroll */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="px-4 py-2 text-sm font-bold text-zinc-500 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/80 transition-all duration-200 uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/portfolio" className="hidden sm:block px-4 py-2 text-sm font-bold text-zinc-600 hover:text-[#0066FF] transition-colors uppercase tracking-widest">
            Portfolio
          </Link>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2.5 text-sm font-bold text-white bg-zinc-900 hover:bg-[#0066FF] rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 uppercase tracking-tighter"
          >
            Start Project
          </button>
        </div>

      </nav>
    </header>
  );
}