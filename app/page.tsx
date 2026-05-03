import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection"; // New import

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection /> {/* New Section */}
    </main>
  );
