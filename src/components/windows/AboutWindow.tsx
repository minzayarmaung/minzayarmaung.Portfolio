export const AboutWindow = () => {
  return (
    <div className="space-y-4">
<div className="flex items-start gap-4">
  <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Min Zayar Maung</h2>
        <p className="text-primary font-medium mb-2">Software Engineer</p>
        <p className="text-muted-foreground">
          Passionate about developing beautiful and functional web applications and systems.
          Specializing in Java Spring Boot and modern web technologies.
        </p>
      </div>
    </div>

      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-24">Location:</span>
          <span className="font-medium">Yangon , Myanmar (Burma) </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-24">Experience:</span>
          <span className="font-medium">3+ Years</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground w-24">Email:</span>
          <span className="font-medium">minzayarmaung.dev2002@gmail.com</span>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-semibold mb-2">About Me</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          I'm a passionate Backend Developer with a strong focus on building robust, scalable, and high-performance systems. I specialize in designing efficient APIs, optimizing server-side logic, and ensuring seamless communication between services. Driven by curiosity and a desire to grow, I love solving complex technical challenges and transforming ideas into reliable digital solutions.
        </p>
      </div>
    </div>
  );
};
