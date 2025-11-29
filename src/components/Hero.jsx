import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, Code2, Database, Sparkles } from "lucide-react";
import profile from '../Assets/profile__.webp';
import { api } from '@/lib/api';

const Hero = () => {
  const handleResumeDownload = async () => {
    try {
      await api.downloadResume();
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again later.');
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-bg relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section - Glowing Border with Dark Shadow */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end animate-fade-in relative">
            {/* Decorative elements on the left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block space-y-8 z-0">
              {/* Floating tech icons */}
              <div className="relative animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <Code2 className="h-8 w-8 text-white/80" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="relative animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg ml-8">
                  <Database className="h-7 w-7 text-white/80" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary-light rounded-full animate-pulse"></div>
              </div>
              
              <div className="relative animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white/80" />
                </div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary-light rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Geometric pattern decoration */}
            <div className="absolute left-8 top-8 hidden md:block">
              <div className="relative">
                <div className="w-32 h-32 border-2 border-white/20 rounded-full absolute animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                <div className="w-24 h-24 border-2 border-primary/30 rounded-full absolute top-4 left-4 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="w-16 h-16 border-2 border-primary-light/40 rounded-full absolute top-8 left-8 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
              </div>
            </div>

            <div className="relative group z-10">
              {/* Glowing border effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-white/60 via-primary/80 to-primary-light/60 rounded-full blur-xl"></div>
              
              {/* Main image container with subtle lighting effect on face */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-full overflow-hidden border-4 border-white/90 shadow-[0_0_30px_rgba(255,255,255,0.5),0_0_60px_rgba(124,58,237,0.6)]">
                {/* Subtle lighting effect on face - reduced brightness */}
                <div className="absolute inset-0 z-10" style={{
                  background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 25%, transparent 50%)',
                  mixBlendMode: 'overlay'
                }}></div>
                <div className="absolute inset-0 z-10" style={{
                  background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 20%, transparent 45%)',
                  mixBlendMode: 'screen'
                }}></div>
                
                <img 
                  src={profile} 
                  alt="Muhammad Usman - Frontend Developer"
                  className="w-full h-full object-cover relative z-0"
                  style={{
                    filter: 'brightness(0.9) contrast(1.05)',
                  }}
                />
              </div>
              
              {/* Additional outer glow rings */}
              <div className="absolute -inset-6 bg-primary/30 rounded-full blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Muhammad Usman
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-light">
              Frontend Developer & Data Analytics Enthusiast
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mb-8">
              Passionate developer specializing in React, JavaScript, and modern web technologies, 
              with growing expertise in data analytics and machine learning
            </p>

            {/* Buttons - Aligned with text content */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mb-8 animate-fade-in-up">
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

            {/* Social Links - Aligned with text content */}
            <div className="flex gap-6 justify-center md:justify-start animate-scale-in">
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
                onClick={handleResumeDownload}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                aria-label="Download Resume"
              >
                <Download className="h-5 w-5 text-white group-hover:text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
