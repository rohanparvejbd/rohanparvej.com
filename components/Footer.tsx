import Link from 'next/link';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] pt-20 pb-10 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* সেন্ট্রাল লোগো এবং নাম সেকশন (রিপল ইফেক্ট সহ) */}
        <div className="relative mb-12 flex flex-col items-center">
          {/* ব্যাকগ্রাউন্ড রিপল শেপস */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full border border-gray-100 -z-10 shadow-sm"></div>
          
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tighter text-black uppercase">
              ROHAN
            </h2>
            <div className="flex items-center justify-center gap-1">
              <span className="h-[1px] w-4 bg-blue-600"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">
                PARVEJ
              </span>
              <span className="h-[1px] w-4 bg-blue-600"></span>
            </div>
          </div>
        </div>

        {/* নেভিগেশন পিলস/বাটনস */}
        <nav className="mb-16">
          <ul className="flex flex-wrap justify-center gap-3">
            {['Creators', 'About', 'Services', 'Projects', 'Contact', 'Blog'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="px-6 py-2.5 bg-gray-100/80 text-gray-700 text-sm font-semibold rounded-full hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* বটম সেকশন (লাইন দিয়ে আলাদা করা) */}
        <div className="w-full pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* ইমেইল */}
          <div className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer group">
            <Mail className="w-5 h-5" />
            <span className="text-sm font-semibold">contact@rohanparvej.com</span>
          </div>

          {/* সোশ্যাল আইকনস */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* কপিরাইট */}
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} Rohan Parvej. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}