import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "GlobeNest",
      subtitle: "Airbnb Clone - Full-Stack Booking Platform",
      description:
        "A comprehensive booking platform featuring user authentication, advanced property filters, and role-based access control. Built with modern web technologies for seamless user experience.",
      tech: ["HTML", "Bootstrap", "JavaScript", "EJS", "Node.js", "Express.js", "MongoDB", "Passport.js"],
      liveLink: "https://globenest.onrender.com/listings",
      githubLink: "https://github.com/pratikShewane369/GlobeNest",
      status: "Completed",
      featured: true,
    },
    {
      title: "Node.js CRUD Application",
      subtitle: "Dockerized REST API",
      description:
        "A containerized REST API with full CRUD operations, demonstrating modern DevOps practices. Dockerized for portability and simplified deployment across different environments.",
      tech: ["Node.js", "Express.js", "MongoDB", "Docker", "REST API"],
      dockerImage: "pratikshewane/nodecrudapp:latest",
      deployCommand: "docker run -p 8080:8080 pratikshewane/nodecrudapp",
      githubLink: "https://github.com/pratikShewane369/DockerizeApp/tree/main",
      dockerHubLink: "https://hub.docker.com/repository/docker/pratikshewane/nodecrudapp/general",
      status: "Completed",
      featured: false,
    },
    {
      title: "Zerodha Clone",
      subtitle: "Trading Platform Dashboard",
      description:
        "A full-featured trading platform clone with a comprehensive dashboard and intuitive frontend interface. Replicating the core functionalities of a modern trading application.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      status: "In Progress",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--section-bg))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work showcasing full-stack development, containerization, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group p-6 card-hover border-border flex flex-col bg-background relative overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex-1 space-y-4 relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                        <Sparkles className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-sm font-semibold text-primary">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.dockerImage && (
                  <div className="bg-muted/50 p-3 rounded-lg border border-border">
                    <p className="text-xs font-mono text-muted-foreground break-all">
                      {project.deployCommand}
                    </p>
                  </div>
                )}
              </div>

              {/* Buttons Section */}
              <div className="flex gap-3 pt-6 mt-auto relative z-10">
                {project.liveLink && (
                  <Button asChild variant="default" size="sm" className="flex-1 group/btn">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.githubLink && (
                  <Button asChild variant="outline" size="sm" className="flex-1 group/btn">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      GitHub
                    </a>
                  </Button>
                )}

                {project.dockerHubLink && (
                  <Button asChild variant="secondary" size="sm" className="flex-1 group/btn">
                    <a href={project.dockerHubLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      Docker Hub
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
