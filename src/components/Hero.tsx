import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-bg relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Muhammad Usman
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-light">
            Full Stack Developer & Data Analytics Enthusiast
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            Passionate developer specializing in React, JavaScript, and modern web technologies, 
            with growing expertise in data analytics and machine learning
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-2xl shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-2xl"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-scale-in">
          <a 
            href="https://www.linkedin.com/in/m-usman-sadiq-a55943248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-white group-hover:text-primary" />
          </a>
          <a 
            href="https://github.com/m-usman-sadiq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-white group-hover:text-primary" />
          </a>
          <a 
            href="mailto:developer.usmansadiq74@gmail.com"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-white group-hover:text-primary" />
          </a>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
          >
            <Download className="h-5 w-5 text-white group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
