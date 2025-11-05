const skillCategories = [
  {
    category: "Frontend",
    skills: ["Angular", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Java", "Springboot", "Python", "PostgreSQL", "mySQL" , "Microsoft SQL Server"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "AZURE", "REST APIs" , "Postman" , "Linux"],
  },
];

export const SkillsWindow = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-3 text-primary">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors cursor-default"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-border">
        <h3 className="font-semibold mb-3">Learning & Interests</h3>
        <div className="flex flex-wrap gap-2">
          {["GraphQL", "Go", "Web Flux", "AI/ML" , "DevOps"].map((interest, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-lg border-2 border-dashed border-primary/30 text-primary"
            >
              <span className="text-sm font-medium">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
