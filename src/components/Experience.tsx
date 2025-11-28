import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Data Analytics & Machine Learning",
      company: "14x Solutions",
      location: "Lahore, Pakistan",
      period: "August 2024 - Present",
      current: true,
      responsibilities: [
        "Applying Python fundamentals to clean and analyze datasets using NumPy and Pandas",
        "Implementing supervised and unsupervised ML algorithms including Linear Regression, Logistic Regression, Decision Tree, KNN, and K-Means Clustering",
        "Designing interactive dashboards in Power BI for comprehensive data visualization",
        "Collaborating with design team on data presentation using Figma",
        "Building Power BI dashboards with advanced data cleaning and transformation techniques"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Konnecter Systems",
      location: "Lahore, Pakistan",
      period: "January 2024 - March 2025",
      current: false,
      responsibilities: [
        "Developed and maintained responsive web interfaces using HTML, CSS, JavaScript, and React JS",
        "Styled and optimized UIs with Bootstrap and Material UI, ensuring cross-device compatibility",
        "Collaborated closely with UI/UX team to translate Figma mockups into functional components",
        "Enhanced page load performance through component reuse and efficient state management",
        "Built complex features with Redux for state management in large-scale applications"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Professional journey in software development and data analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                  {exp.current && (
                    <span className="ml-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 ml-[72px]">
                {exp.responsibilities.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
