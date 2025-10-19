import { Card } from "./ui/card";
import { Code2, Server, Database, Cloud, Layers } from "lucide-react";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML", "Bootstrap", "JavaScript", "React.js", "EJS"],
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Database,
      title: "Database & Fundamentals",
      skills: ["MongoDB", "SQL", "DBMS", "OOPS", "CN", "OS"],
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: ["Docker", "CI/CD", "Kubernetes", "Low Level Design"],
      color: "from-orange-500/10 to-red-500/10",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            <Layers className="h-4 w-4" />
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies and computer science fundamentals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`group p-6 card-hover border-border text-center bg-gradient-to-br ${category.color} relative overflow-hidden`}>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col items-center space-y-4 relative z-10">
                <div className="p-4 bg-background rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
                <div className="space-y-2 w-full">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="w-full justify-center text-sm py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Git", "GitHub", "Postman", "VS Code", "Linux", "Redux", "Passport.js"].map((tool, i) => (
              <Badge key={i} variant="outline" className="hover:bg-muted transition-colors duration-200">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
