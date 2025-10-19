import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Instagram, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/mkgqqkjw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  } else {
    toast({
      title: "Error!",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "pm.shewane@gmail.com",
      href: "mailto:pm.shewane@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pratik-shewane",
      href: "https://linkedin.com/in/pratik-shewane",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "pratikShewane369",
      href: "https://github.com/pratikShewane369",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@pm_shewane_36",
      href: "https://instagram.com/pm_shewane_36",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/50 transition-colors duration-200">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Amravati, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/50 transition-colors duration-200">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Availability</p>
                    <p className="text-sm text-muted-foreground">Open for opportunities</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="font-semibold">Connect on social media:</p>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 p-8 border-border bg-background/50 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Pratik Shewane"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="pratik@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" className="w-full btn-primary group">
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
