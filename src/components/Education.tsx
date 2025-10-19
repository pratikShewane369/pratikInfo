import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Education = () => {
  const certifications = [
    { name: "Docker Containerization", icon: Award },
    { name: "CI/CD Pipeline Implementation", icon: Award },
    { name: "Kubernetes Orchestration", icon: Award },
    { name: "OCI Foundation", icon: Trophy },
  ];

  const coursework = [
    "Database Management Systems (DBMS)",
    "Computer Networks (CN)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems (OS)",
  ];

  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Education Card */}
          <Card className="p-8 md:p-10 card-hover border-border bg-gradient-to-br from-background to-primary/5">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-5 bg-primary/10 rounded-2xl">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold">B.Tech in Computer Engineering</h3>
                  <p className="text-lg md:text-xl font-semibold text-primary">
                    Government College of Engineering, Yavatmal
                  </p>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                      Expected Graduation: 2027
                    </Badge>
                    <Badge variant="outline">3rd Year Student</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications and Coursework Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Certifications */}
            <Card className="p-6 border-border card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200">
                    <cert.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium">{cert.name}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Relevant Coursework */}
            <Card className="p-6 border-border card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Key Coursework</h3>
              </div>
              <div className="space-y-3">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm font-medium">{course}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
