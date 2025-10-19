import { Code2, Rocket, Target } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Focus",
      description: "Modern responsive web development with cutting-edge technologies",
    },
    {
      icon: Code2,
      title: "Expertise",
      description: "MERN Stack, Docker, CI/CD, Kubernetes & Low-Level Design",
    },
    {
      icon: Rocket,
      title: "Goal",
      description: "Building scalable solutions that solve real-world problems",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[hsl(var(--section-bg))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and driven by innovation
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 text-center card-hover border-border bg-background">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Card className="p-8 md:p-12 border-border bg-background/50 backdrop-blur">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                I'm <span className="text-primary font-semibold">Pratik Mohan Shewane</span>, a passionate 3rd-year B.Tech Computer Engineering student 
                at Government College of Engineering, Yavatmal, graduating in 2027. With a deep focus 
                on modern web development, I specialize in the <span className="text-foreground font-semibold">MERN stack</span> and full-stack technologies.
              </p>
              
              <p className="leading-relaxed">
                My journey in tech is driven by a fascination with building responsive, scalable web 
                applications. I'm particularly interested in containerization with <span className="text-foreground font-semibold">Docker</span>, implementing 
                <span className="text-foreground font-semibold"> CI/CD pipelines</span>, orchestrating with <span className="text-foreground font-semibold">Kubernetes</span>, and applying low-level design principles 
                to create robust software solutions.
              </p>
              
              <p className="leading-relaxed">
                Beyond coding, I'm constantly exploring new technologies and best practices in software 
                development. I believe in writing clean, maintainable code and creating user experiences 
                that make a difference. My goal is to contribute to innovative projects that solve real-world 
                problems while continuously growing as a developer.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
