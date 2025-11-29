const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React JS", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      category: "Data Analytics & ML",
      skills: [
        { name: "Power BI", level: 80 },
        { name: "Python", level: 70 },
        { name: "NumPy & Pandas", level: 70 },
        { name: "Machine Learning", level: 65 },
        { name: "Data Visualization", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Figma", level: 70 },
        { name: "WordPress", level: 70 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Redux", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(idx * 0.1) + (index * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
