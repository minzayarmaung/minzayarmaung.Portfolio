import { useEffect, useState } from "react";

const commands = [
  { command: "$ git clone https://github.com/minzayarmaung/springboot-docker-demo.git", output: "Cloning into 'springboot-docker-demo'..." },
  { command: "$ cd springboot-docker-demo", output: "" },
  { command: "$ ./mvnw clean install", output: "[INFO] Building project...\n[INFO] BUILD SUCCESS" },
  { command: "$ docker build -t springboot-docker-app .", output: "Sending build context to Docker daemon  45.3MB\nSuccessfully built 123abc456def\nSuccessfully tagged springboot-docker-app:latest" },
  { command: "$ docker run -p 8080:8080 springboot-docker-app", output: "Starting Spring Boot Application...\nTomcat started on port(s): 8080\nApplication started successfully 🚀" },
];

export const TerminalWindow = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    if (currentCommand >= commands.length) return;

    const fullText = `${commands[currentCommand].command}\n${commands[currentCommand].output}\n\n`;

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentCommand(currentCommand + 1);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentCommand]);

  return (
    <div className="space-y-4">
      <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm min-h-[300px]">
        <div className="text-green-400 mb-2">Terminal - bash</div>
        <div className="text-gray-300 whitespace-pre-wrap">
          {displayedText}
          <span className="animate-pulse">▊</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="p-2 rounded bg-muted">Java Spring Boot</div>
          <div className="p-2 rounded bg-muted">Docker & Docker Compose</div>
          <div className="p-2 rounded bg-muted">PostgreSQL</div>
          <div className="p-2 rounded bg-muted">RESTful APIs</div>
        </div>
      </div>
    </div>
  );
};
