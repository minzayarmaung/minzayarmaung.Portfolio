import { X, Minus, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
}

export const Window = ({ 
  title, 
  children, 
  icon, 
  onClose, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 600, height: 500 }
}: WindowProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const resizeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleResizeMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setSize({
        width: Math.max(400, size.width + deltaX),
        height: Math.max(300, size.height + deltaY),
      });
      
      setDragStart({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  useState(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
    if (isResizing) {
      window.addEventListener("mousemove", handleResizeMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleResizeMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  if (isMinimized) return null;

  return (
    <div
      ref={resizeRef}
      className="fixed bg-[hsl(var(--window-bg))] rounded-xl overflow-hidden window-shadow animate-window-appear"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      {/* Title Bar */}
      <div
        className="h-10 bg-[hsl(var(--window-titlebar))] flex items-center justify-between px-4 cursor-move select-none border-b border-border"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"
              aria-label="Close"
            />
            <button
              onClick={() => setIsMinimized(true)}
              className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors"
              aria-label="Minimize"
            />
            <button
              className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors"
              aria-label="Maximize"
            />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="text-muted-foreground">{icon}</div>
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto no-scrollbar" style={{ height: `calc(100% - 40px)` }}>
        {children}
      </div>

      {/* Resize Handle */}
      <div
        onMouseDown={handleResizeMouseDown}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize group"
      >
        <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-muted-foreground/40 group-hover:border-primary transition-colors" />
      </div>
    </div>
  );
};
