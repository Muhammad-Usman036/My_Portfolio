import { Code2, Database, Palette, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React, JavaScript, and modern UI frameworks"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Power BI dashboards and Python-based data analysis"
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Hands-on experience with ML algorithms and models"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, responsive interfaces with Figma"
    }
  ];

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="animate-fade-in text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Passionate Developer Building Digital Solutions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a dedicated full-stack developer from Lahore, Pakistan, with a strong foundation 
              in frontend technologies and a growing passion for data analytics and machine learning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With hands-on experience at Digital Konnecter Systems and 14x Solutions, I've developed 
              responsive web applications, interactive dashboards, and machine learning models. I believe 
              in writing clean, maintainable code and creating user experiences that make a difference.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently expanding my expertise in Python, Power BI, and machine learning while continuing 
              to build elegant frontend solutions with React and modern JavaScript frameworks.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
