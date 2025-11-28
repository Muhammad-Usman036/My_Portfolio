import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Online Examination System",
      description: "A comprehensive platform enabling teachers to create exams, students to attempt timed tests, and admins to manage users. Features role-based UI, API integration, and responsive design.",
      tags: ["React.js", "Redux", "Bootstrap", "CSS", "REST API"],
      company: "Digital Konnecter System",
      type: "Full Stack Application"
    },
    {
      title: "Hospital Management System",
      description: "Complete frontend for managing hospital operations including appointment scheduling, doctor and patient CRUD operations, bed management, and inventory tracking with real-time updates.",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design"],
      company: "14x Solutions",
      type: "Frontend Development"
    },
    {
      title: "Power BI Sales Dashboard",
      description: "Interactive dashboard providing actionable sales insights through cleaned and transformed datasets. Enables data-driven decision making with visualizations of sales and profit trends.",
      tags: ["Power BI", "Data Analysis", "Data Visualization", "DAX"],
      company: "14x Solutions",
      type: "Data Analytics"
    },
    {
      title: "Machine Learning Models",
      description: "Implementation of various ML algorithms including Linear Regression, Logistic Regression, Decision Trees, KNN, and K-Means Clustering for predictive analytics and pattern recognition.",
      tags: ["Python", "Scikit-learn", "NumPy", "Pandas", "ML Algorithms"],
      company: "14x Solutions",
      type: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work across web development, data analytics, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {project.type}
                </Badge>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">
                  {project.company}
                </p>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline"
                    className="text-xs border-primary/30 text-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  View Details
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  <Github className="h-4 w-4" />
                  Source Code
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
