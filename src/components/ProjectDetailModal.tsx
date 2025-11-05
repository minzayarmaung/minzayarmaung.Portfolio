import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    fullDescription?: string;
    features?: string[];
    github?: string;
    demo?: string;
  };
}

export const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-muted-foreground">
              {project.fullDescription || "A comprehensive project showcasing modern web development practices with focus on user experience and performance."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {(project.features || [
                "Responsive design for all devices",
                "Modern UI/UX with smooth animations",
                "Optimized performance and loading times",
                "Clean and maintainable code architecture",
              ]).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="default" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button variant="secondary" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
