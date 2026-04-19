import React from 'react';

// Link এর বদলে প্রিভিউ এর জন্য সাধারণ a ট্যাগ ব্যবহার করছি
const Header = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <header className="w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-full py-2 px-6 flex items-center justify-between">
        
        {/* লোগো এবং নাম সেকশন */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
            R
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tighter text-gray-900 uppercase">
              ROHAN
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase -mt-1 pl-1">
              PARVEJ
            </span>
          </div>
        </div>

        {/* নেভিগেশন লিঙ্কস - বড় স্ক্রিনের জন্য */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] font-semibold text-gray-700 uppercase tracking-wide">
            <li><a href="#" className="hover:text-blue-600 transition-all duration-300">About</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Services</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Projects</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Blog</a></li>
          </ul>
        </nav>

        {/* বাটন সেকশন */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-6 py-2.5 bg-blue-600 text-white text-[13px] font-bold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform active:scale-95">
            START YOUR PROJECT
          </button>
          <button className="px-5 py-2.5 bg-white text-gray-900 text-[13px] font-bold rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm">
            LOGIN
          </button>
        </div>
      </header>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center pt-20 px-4 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
          ELEVATE YOUR <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">DIGITAL PRESENCE</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 font-medium">
          Professional video editing, graphic design, and full-stack digital solutions tailored for your brand's success.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl">
            Explore Portfolio
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border border-gray-200 hover:border-gray-900 transition-all">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Dummy scroll area to test floating effect */}
      <div className="mt-24 w-full max-w-5xl h-96 bg-gradient-to-b from-white to-gray-50 rounded-3xl border border-gray-200 shadow-inner flex items-center justify-center">
        <p className="text-gray-400 font-medium">Scroll down to see the sticky header in action...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <div className="h-[1000px] bg-white w-full"></div> {/* Extra scroll space */}
    </div>
  );
}