import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Brands from "@/components/sections/Brands";
import VideoEditingShowcase from "@/components/sections/VideoEditingShowcase";
import GFXShowcase from "@/components/sections/GFXShowcase";
import Photography from "@/components/sections/Photography";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import MobileNav from "@/components/navigation/MobileNav";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Hero />
      <Expertise />
      <Brands />
      <VideoEditingShowcase />
      <GFXShowcase />
      <Photography />
      <Testimonials />
      <ContactForm />
      <Footer />
      <MobileNav />
    </main>
  );
}
