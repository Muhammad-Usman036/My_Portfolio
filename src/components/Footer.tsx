import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Muhammad Usman</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer & Data Analytics Enthusiast passionate about building innovative digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/m-usman-sadiq-a55943248" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/m-usman-sadiq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:developer.usmansadiq74@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Muhammad Usman. Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
