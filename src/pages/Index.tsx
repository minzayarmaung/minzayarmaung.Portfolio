import { useState } from "react";
import { MenuBar } from "@/components/MenuBar";
import { Dock } from "@/components/Dock";
import { Window } from "@/components/Window";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { SkillsWindow } from "@/components/windows/SkillsWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { TerminalWindow } from "@/components/windows/TerminalWindow";
import { User, Briefcase, Code, Mail, Terminal } from "lucide-react";
import wallpaper from "@/assets/macos-wallpaper.jpg";

const Index = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const openWindow = (windowName: string) => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName]);
    }
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(openWindows.filter((w) => w !== windowName));
  };

  const windows = {
    about: {
      title: "About Me",
      icon: <User className="w-4 h-4" />,
      content: <AboutWindow />,
      position: { x: 100, y: 100 },
    },
    projects: {
      title: "Projects",
      icon: <Briefcase className="w-4 h-4" />,
      content: <ProjectsWindow />,
      position: { x: 150, y: 120 },
    },
    skills: {
      title: "Skills",
      icon: <Code className="w-4 h-4" />,
      content: <SkillsWindow />,
      position: { x: 200, y: 140 },
    },
    contact: {
      title: "Contact",
      icon: <Mail className="w-4 h-4" />,
      content: <ContactWindow />,
      position: { x: 250, y: 160 },
    },
    terminal: {
      title: "Terminal",
      icon: <Terminal className="w-4 h-4" />,
      content: <TerminalWindow />,
      position: { x: 300, y: 180 },
    },
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Windows */}
      {openWindows.map((windowName) => {
        const window = windows[windowName as keyof typeof windows];
        return (
          <Window
            key={windowName}
            title={window.title}
            icon={window.icon}
            onClose={() => closeWindow(windowName)}
            initialPosition={window.position}
          >
            {window.content}
          </Window>
        );
      })}

      {/* Dock */}
      <Dock onOpenWindow={openWindow} />
    </div>
  );
};

export default Index;
