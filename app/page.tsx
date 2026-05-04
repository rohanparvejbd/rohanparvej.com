import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}