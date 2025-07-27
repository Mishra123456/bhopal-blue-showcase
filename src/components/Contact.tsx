import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mishra123best@gmail.com",
      href: "mailto:mishra123best@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6397704063",
      href: "tel:+916397704063"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Mishra123456",
      username: "@Mishra123456"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mukulmistracs",
      username: "mukulmistracs"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or exciting ML/AI projects. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-background border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Project Collaboration"
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="bg-background border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full gradient-bg hover:shadow-glow transition-all duration-300 text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 slide-up delay-300">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.label}
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="text-primary hover:text-primary-glow transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-primary">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-2xl font-bold text-primary">9.42</p>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-2xl font-bold text-primary">220+</p>
                    <p className="text-sm text-muted-foreground">LeetCode</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-2xl font-bold text-primary">Top 16%</p>
                    <p className="text-sm text-muted-foreground">Hackathon</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-2xl font-bold text-primary">2+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;