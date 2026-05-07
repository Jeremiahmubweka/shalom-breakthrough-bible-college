import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import Admissions from "@/sections/Admissions";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Programs />

      <Stats />

      <Admissions />

      <Testimonials />

      <Footer />
    </main>
  );
}