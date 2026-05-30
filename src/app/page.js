import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <TechStack />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Contact></Contact>
      </main>
      <Footer />
    </div>
  );
}
