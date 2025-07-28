import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";
import truthlensImage from "@/assets/truthlens-project.jpg";
import voiceAssistantImage from "@/assets/voice-assistant-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "TruthLens",
      subtitle: "CNN, Image Processing",
      description: "Deep Learning project for detecting fake or AI-generated images (deepfakes) with 95% accuracy. Implemented advanced CNN architectures for visual manipulation detection, including facial inconsistencies and lighting analysis.",
      image: truthlensImage,
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing"],
      status: "Completed",
      date: "Jan 2024 - Present",
      github: "https://github.com/Mishra123456/TruthLens",
      demo: "#",
      features: [
        "95% accuracy in deepfake detection",
        "Real-time image analysis",
        "Advanced CNN architecture",
        "Facial inconsistency detection"
      ]
    },
    {
      title: "Voice-Based Assistant",
      subtitle: "NLP, Speech Recognition",
      description: "An intelligent voice-activated assistant powered by advanced NLP and speech recognition technologies. Features real-time voice commands, natural language understanding, and smart home integration capabilities.",
      image: voiceAssistantImage,
      technologies: ["Python", "Speech Recognition", "NLP", "TensorFlow", "Voice Processing"],
      status: "Ongoing",
      date: "Oct 2024 - Present",
      github: "https://github.com/Mishra123456/VoiceAssistant",
      demo: "#",
      features: [
        "Real-time voice recognition",
        "Natural language processing",
        "Smart home integration",
        "Multi-language support"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my machine learning and AI projects, demonstrating practical applications 
            of deep learning, computer vision, and natural language processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow overflow-hidden slide-up hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 hover-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={`${project.status === "Completed" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "bg-yellow-600 hover:bg-yellow-700 pulse-glow"} transition-all duration-300`}
                  >
                    {project.status === "Ongoing" && <Zap className="w-3 h-3 mr-1 sparkle" />}
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full float"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift wiggle"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    asChild
                    className="gradient-bg hover:shadow-glow transition-all duration-300 flex-1 hover-lift pulse-glow"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 fade-in">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://github.com/Mishra123456" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;