import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(var(--section-bg))] border-t border-border">
      <div className="container-custom px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Pratik<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              MERN Stack Developer passionate about building innovative web solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Projects", "Skills", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/pratikShewane369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/50"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/pratik-shewane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pm.shewane@gmail.com"
                className="p-3 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/50"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/pm_shewane_36"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 border border-border hover:border-primary/50"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left flex items-center gap-2">
            © {new Date().getFullYear()} Pratik Mohan Shewane. Made with
            <Heart className="h-4 w-4 text-primary fill-primary" />
            and React.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
