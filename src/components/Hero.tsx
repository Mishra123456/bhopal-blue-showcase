import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Trophy, Brain, Code, Star } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-2xl float"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-4 h-4" />
                <span>Bhopal, India</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Mukul Mishra</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                ML Engineer & AI Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building intelligent solutions with Machine Learning, 
                Deep Learning, and AI. Currently pursuing B.Tech in AI/ML with a 9.42 CGPA.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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
            <div className="flex gap-6 pt-4">
              <a 
                href="https://linkedin.com/in/mukulmistracs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Mishra123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:mishra123best@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-up delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
              <img 
                src={heroPortrait} 
                alt="Mukul Mishra" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center float">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center float delay-500">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flip Cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Trophy, front: "9.42", back: "CGPA", color: "from-amber-500 to-orange-600" },
            { icon: Brain, front: "AI/ML", back: "Expert", color: "from-blue-500 to-purple-600" },
            { icon: Code, front: "10+", back: "Projects", color: "from-green-500 to-teal-600" },
            { icon: Star, front: "3+", back: "Years", color: "from-pink-500 to-rose-600" }
          ].map((card, index) => (
            <div 
              key={index}
              className="relative h-24 group [perspective:1000px] fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br ${card.color} shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden] border border-white/10`}>
                  <card.icon className="w-6 h-6 text-white mb-1" />
                  <span className="text-white font-bold text-lg">{card.front}</span>
                </div>
                
                {/* Back Face */}
                <div className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br ${card.color} shadow-lg flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/10`}>
                  <span className="text-white font-semibold text-sm text-center px-2">{card.back}</span>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;