import { Code, BarChart3, Palette, Database, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance web applications using React, JavaScript, and modern frameworks with clean, maintainable code."
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Creating beautiful, intuitive user interfaces with React JS, Bootstrap, Material UI, and Tailwind CSS for seamless user experiences."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights through Power BI dashboards, data visualization, and comprehensive analytics solutions."
    },
    {
      icon: Database,
      title: "Machine Learning",
      description: "Implementing predictive models and ML algorithms using Python, scikit-learn, and data science tools for intelligent solutions."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing pixel-perfect, user-centered interfaces in Figma and translating designs into functional, accessible components."
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Creating and customizing WordPress websites with responsive themes, plugins, and optimized performance for your business needs."
    }
  ];

  return (
    <section id="services" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Services I Offer
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
