import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Trophy, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning with Scikit-learn",
      organization: "Google Colab",
      type: "Self-Learning Project",
      duration: "April 2024 - June 2025",
      description: "Implemented and compared ML algorithms including decision trees, logistic regression, and SVM on real-world datasets. Explored classification, regression, and clustering models in collaborative Jupyter/Colab environments.",
      skills: ["Scikit-learn", "Python", "Data Analysis", "Model Evaluation"],
      icon: Code
    },
    {
      title: "IBM Generative AI Course",
      organization: "IBM SkillsBuild",
      type: "Self-Paced Certification",
      duration: "July 2025",
      description: "Completed IBM-certified training on Generative AI, covering foundation models, ethical use, and prompt engineering. Applied GenAI concepts in practice labs and quizzes, demonstrating real-world problem-solving using AI tools.",
      skills: ["Generative AI", "Foundation Models", "Prompt Engineering", "Ethics in AI"],
      icon: Award
    }
  ];

  const achievements = [
    {
      title: "Top 16% Hackathon Rank",
      description: "Achieved top performance in competitive programming hackathons",
      icon: Trophy
    },
    {
      title: "220+ LeetCode Problems",
      description: "Solved complex algorithmic challenges demonstrating strong problem-solving skills",
      icon: Code
    },
    {
      title: "9.42 CGPA",
      description: "Maintaining excellent academic performance in AI/ML specialization",
      icon: Award
    }
  ];

  const certifications = [
    "Generative AI Certification - IBM",
    "DP-900: Microsoft Azure Data Fundamentals (070/100)",
    "NPTEL Cloud Computing - Apr 2024 (Score: 72%, Elite Silver)",
    "Power BI Certification - Microsoft"
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in machine learning, certifications, and notable achievements in the field of AI and data science.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Technical Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                      <exp.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.organization}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <h5 className="font-semibold mb-2">Skills & Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Certifications</h3>
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;