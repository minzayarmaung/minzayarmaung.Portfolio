import { Apple, Wifi, Battery, Search } from "lucide-react";

export const MenuBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-7 glass z-50 flex items-center justify-between px-4 text-sm">
      <div className="flex items-center gap-4">
        <Apple className="w-4 h-4" />
        <span className="font-semibold">Portfolio</span>
        <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">File</span>
        <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">Edit</span>
        <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">View</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Search className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
        <Battery className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <span className="text-muted-foreground">{currentDate}</span>
        <span className="font-medium">{currentTime}</span>
      </div>
    </div>
  );
};
