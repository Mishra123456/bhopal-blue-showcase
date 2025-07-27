import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "Java", "SQL"], icon: Code },
    { category: "ML/AI", items: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "OpenCV"], icon: Brain },
    { category: "Tools & Platforms", items: ["GitHub", "MySQL", "AWS", "Power BI"], icon: Database },
    { category: "Business Intelligence", items: ["Power BI", "Data Analysis", "Statistical Modeling"], icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an enthusiastic ML Engineer with a passion for building impactful AI solutions. 
            Currently pursuing B.Tech in Computer Science with specialization in AI and Machine Learning 
            at Vellore Institute of Technology, maintaining a stellar 9.42 CGPA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 slide-up">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With a top 16% hackathon rank and 220+ LeetCode problems solved, I've demonstrated 
                    my competitive programming abilities and problem-solving skills. My experience spans 
                    across machine learning, deep learning, and business intelligence.
                  </p>
                  <p>
                    I'm particularly interested in computer vision, natural language processing, and 
                    building intelligent systems that can make a real-world impact. My recent work 
                    includes deepfake detection systems and voice-based assistants.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">Vellore Institute of Technology</h4>
                    <p className="text-primary">B.Tech in Computer Science, AI & Machine Learning</p>
                    <p className="text-muted-foreground">CGPA: 9.42 | Sep 2022 - ongoing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">The Pillars Siktaur</h4>
                    <p className="text-muted-foreground">Senior Secondary Education (12th) | 94.4%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6 slide-up delay-300">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <Card 
                  key={skillGroup.category}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <skillGroup.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-lg">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;