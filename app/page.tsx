export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
      
      <header className="text-center mb-12 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-500 mb-4 tracking-tight">
          Rohan Parvej
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Digital Specialist | Video Editing | Graphic Design | Meta Ads
        </p>
      </header>

      <section className="text-center max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-800">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100">Welcome to rohanparvej.com</h2>
        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
          I craft stunning digital experiences and drive growth through creative video editing, high-end graphics, and strategic digital marketing. Let's make your brand stand out.
        </p>
        
        <a 
          href="https://wa.me/YOUR_PHONE_NUMBER" 
          target="_blank"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
        >
          Let's Work Together
        </a>
      </section>

      <footer className="mt-auto py-8 text-gray-600 text-sm">
        &copy; 2026 rohanparvej.com. All Rights Reserved.
      </footer>

    </main>
  );
}