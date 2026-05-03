"use client";
import React from 'react';
import { Phone, Video, Calendar, ArrowUpRight, Send, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Text & Action Cards */}
        <div className="flex flex-col max-w-lg">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white shadow-sm mb-6 self-start">
            <Phone className="w-4 h-4 text-[#0066FF] fill-current" />
            <span className="text-sm font-medium text-slate-700">Contact Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15] uppercase">
            Have a Project in Mind? <br /> <span className="text-[#0066FF]">Let's Talk.</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Whether you need pro video editing, premium graphic design, or a killer marketing strategy, I'm just a message away. Drop your details below, and let's start creating something amazing together!
          </p>

          <div className="w-full border-t border-dashed border-slate-300 mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 relative group cursor-pointer hover:bg-[#F1F5F9] transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-6 shadow-sm">
                <Video className="w-5 h-5" />
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5">
                <ArrowUpRight className="w-4 h-4 text-slate-900" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Place an order</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Start a new project and get a custom quote.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 relative group cursor-pointer hover:bg-[#F1F5F9] transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-6 shadow-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5">
                <ArrowUpRight className="w-4 h-4 text-slate-900" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Book a Call</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Schedule a free 15-min consultation.</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <h4 className="text-[15px] font-bold text-slate-900 mb-6 uppercase tracking-wider">Or reach out directly</h4>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              
              <a href="mailto:contact@rohanparvej.com" className="flex items-center gap-4 group cursor-pointer p-2 -ml-2 rounded-2xl hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-[#0066FF] group-hover:border-[#0066FF] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors">contact@rohanparvej.com</p>
                </div>
              </a>

              <div className="flex gap-3">
                {/* YouTube SVG Icon */}
                <a href="https://www.youtube.com/@rohanparvej1" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#FF0000] shadow-sm transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* LinkedIn SVG Icon */}
                <a href="https://www.linkedin.com/in/rohanparvej/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0A66C2] shadow-sm transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                {/* Instagram SVG Icon */}
                <a href="https://www.instagram.com/rohanparvej_/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:via-[#E1306C] hover:to-[#833AB4] shadow-sm transition-all duration-300">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="bg-[#F1F5F9] rounded-3xl p-6 sm:p-10 border-[6px] sm:border-[8px] border-white shadow-xl relative z-0">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#0066FF] outline-none transition-all shadow-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Email</label>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#0066FF] outline-none transition-all shadow-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Phone</label>
                <input type="tel" placeholder="+880..." className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#0066FF] outline-none transition-all shadow-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Subject</label>
                <input type="text" placeholder="Project Type" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#0066FF] outline-none transition-all shadow-sm" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#0066FF] outline-none transition-all shadow-sm resize-none"></textarea>
            </div>
            <div className="mt-4 flex justify-center">
              <button type="submit" className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[#0066FF] shadow-lg active:scale-95 w-full uppercase tracking-widest text-xs">
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}