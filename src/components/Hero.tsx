import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-accent rounded-full blur-3xl pulse-glow stagger-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-10 right-1/3 w-32 h-32 bg-blue-light/30 rounded-full blur-2xl float stagger-3"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-accent/20 rounded-full blur-2xl float-slow stagger-4"></div>
        
        {/* Sparkle elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full sparkle stagger-1"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full sparkle stagger-5"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-light rounded-full sparkle stagger-2"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 slide-in-left">{/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-4 h-4" />
                <span>Bhopal, India</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight scale-in stagger-1">{/* Hero title */}
                Hi, I'm{" "}
                <span className="gradient-text">Mukul Mishra</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light slide-up stagger-2">{/* Hero subtitle */}
                ML Engineer & AI Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed fade-in stagger-3">{/* Hero description */}
                Passionate about building intelligent solutions with Machine Learning, 
                Deep Learning, and AI. Currently pursuing B.Tech in AI/ML with a 9.42 CGPA.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 scale-in stagger-4">{/* CTA Buttons */}
              <Button 
                onClick={() => scrollToSection('projects')}
                className="gradient-bg hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4 slide-up stagger-5">{/* Social Links */}
              <a 
                href="https://linkedin.com/in/mukulmistracs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform hover-glow"
              >
                <Linkedin className="w-6 h-6 wiggle" />{/* LinkedIn icon */}
              </a>
              <a 
                href="https://github.com/Mishra123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform hover-glow"
              >
                <Github className="w-6 h-6 rotate-slow" />{/* GitHub icon */}
              </a>
              <a 
                href="mailto:mishra123best@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform hover-glow"
              >
                <Mail className="w-6 h-6 bounce-slow" />{/* Mail icon */}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-in-right stagger-2">{/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 transform rotate-6 pulse-glow"></div>{/* Background glow */}
              <img 
                src={heroPortrait} 
                alt="Mukul Mishra" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center float-slow wiggle">{/* Robot emoji */}
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center float stagger-3 bounce-slow">{/* Bulb emoji */}
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow">{/* Scroll indicator */}
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;