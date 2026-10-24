import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[48rem]" />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
