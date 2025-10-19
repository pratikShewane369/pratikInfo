import { Card } from "./ui/card";
import { Layout, Server, Database, Cloud, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive and high-performance user interfaces and single-page applications using React, Redux/Context API. Creating engaging experiences with modern design patterns.",
      features: ["React.js & Redux", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Designing RESTful APIs with Node.js and Express.js, handling server-side logic, authentication, and seamless service integration for robust applications.",
      features: ["RESTful APIs", "Authentication & Security", "Server-Side Logic", "Third-party Integrations"],
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Structuring scalable NoSQL databases with MongoDB and working with relational databases. Optimizing queries and ensuring data integrity for performance.",
      features: ["MongoDB & SQL", "Schema Design", "Query Optimization", "Data Modeling"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Deploying and managing MERN stack applications using cloud services. Implementing containerization with Docker and orchestration with Kubernetes for scalability and security.",
      features: ["Docker Containers", "CI/CD Pipelines", "Kubernetes", "Cloud Deployment"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-[hsl(var(--section-bg))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group p-8 card-hover border-border bg-background relative overflow-hidden">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your vision to life with modern web technologies
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[hsl(var(--accent-hover))] transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              Let's Talk
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
