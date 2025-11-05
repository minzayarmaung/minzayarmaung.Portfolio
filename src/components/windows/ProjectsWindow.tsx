import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import taskmanagerImg from "@/assets/projects/taskmanager.jpg";
import connectHcm from "@/assets/projects/connectHcm.png";
import hcmee from "@/assets/projects/hcmee.png"
import opom from "@/assets/projects/opom.png";
import sarMal from "@/assets/projects/sarMal.png";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

const projects = [
  {
    title: "One Project One Month",
    description: "Develop , Network , Level Up Your Skills.",
    tech: ["Java","Springboot", "React", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
    image: opom,
  },
  {
    title: "Sarr MaL",
    description: "Get Your Tasty Food just in a Glance.",
    tech: ["Java","Springboot", "React", "Tailwind" , "PostgreSQL"],
    color: "from-purple-500/20 to-pink-500/20",
    image: sarMal,
  },
  {
    title: "Connect HCM",
    description: "AI-Powered Your Trusted HR Application.",
    tech: ["Angular", "Java", "MSSQL" , "OPEN-AI"],
    color: "from-green-500/20 to-emerald-500/20",
    image: connectHcm,
  },
    {
    title: "HCMEE",
    description: "AI-Powered Your Trusted HR Software.",
    tech: ["Angular", "Java", "MSSQL" , "OPEN-AI"],
    color: "from-green-500/20 to-emerald-500/20",
    image: hcmee,
  },
];

export const ProjectsWindow = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
      
      {projects.map((project, index) => (
        <div
          key={index}
          className={`rounded-lg bg-gradient-to-br ${project.color} border border-border/50 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform`}
          onClick={() => setSelectedProject(project)}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-40 object-cover"
          />
          
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-md bg-background/50 text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {selectedProject && (
        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
};
