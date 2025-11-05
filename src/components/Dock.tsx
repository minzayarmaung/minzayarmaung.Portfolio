import { useState } from "react";
import { User, Briefcase, Code, Mail, Github, Linkedin, FileText, Terminal } from "lucide-react";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const DockItem = ({ icon, label, onClick }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {isHovered && (
        <div className="absolute -top-12 glass px-3 py-1 rounded-lg text-xs whitespace-nowrap animate-fade-in">
          {label}
        </div>
      )}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 transition-all duration-200 hover:scale-110 hover:-translate-y-2"
      >
        <div className="text-primary">{icon}</div>
      </button>
    </div>
  );
};

interface DockProps {
  onOpenWindow: (window: string) => void;
}

export const Dock = ({ onOpenWindow }: DockProps) => {
  const dockItems = [
    { icon: <User className="w-6 h-6" />, label: "About Me", window: "about" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Projects", window: "projects" },
    { icon: <Code className="w-6 h-6" />, label: "Skills", window: "skills" },
    { icon: <Mail className="w-6 h-6" />, label: "Contact", window: "contact" },
    { icon: <Terminal className="w-6 h-6" />, label: "Terminal", window: "terminal" },
  ];

  const externalLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", url: "https://github.com/minzayarmaung" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", url: "https://linkedIn.com/in/minzayarmaung/" },
    { icon: <FileText className="w-6 h-6" />, label: "Resume", url: "https://docs.google.com/document/d/1AXLUGb9Czr-Lh460nQAH9k-EMOelOZLOT_tr1vTB9TU/preview" },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-40">
      <div className="dock-glass dock-shadow rounded-2xl px-3 py-2">
        <div className="flex items-center gap-2">
          {dockItems.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={() => onOpenWindow(item.window)}
            />
          ))}
          
          <div className="w-px h-12 bg-border mx-1" />
          
          {externalLinks.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={() => window.open(item.url, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
