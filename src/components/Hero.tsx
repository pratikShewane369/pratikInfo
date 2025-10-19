import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Instagram, ArrowRight, Download } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 section-padding bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="absolute top-5 right-5 z-50">
    <ThemeToggle />
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container-custom w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Pratik
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                MERN Stack Developer
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Crafting modern, responsive web applications with expertise in full-stack development, 
              Docker, CI/CD, and Kubernetes. Passionate about building scalable solutions that make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="btn-primary group">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-outline group">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="group">
                <a href="/resumePratik.pdf" download="Pratik_Shewane_Resume.pdf" className="flex items-center gap-2">
                  <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1 pt-6">
              <span className="text-sm text-muted-foreground mr-4">Connect:</span>
              <a
                href="https://github.com/pratikShewane369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://linkedin.com/in/pratik-shewane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="mailto:pm.shewane@gmail.com"
                className="p-3 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://instagram.com/pm_shewane_36"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 group"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2027</p>
                <p className="text-sm text-muted-foreground">Expected Grad</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              
              {/* Geometric Shapes */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Main Image */}
              <div className="relative">
                <img
                  src="./profile-photo3.jpg"
                  alt="Pratik Mohan Shewane - MERN Stack Developer"
                  className="relative rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover border-8 border-background shadow-2xl group-hover:shadow-primary/20 transition-all duration-300"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-background border-2 border-primary rounded-xl p-4 shadow-lg">
                  <p className="text-2xl font-bold text-primary">3rd Year</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
