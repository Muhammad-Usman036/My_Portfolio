import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
};

export default Index;


