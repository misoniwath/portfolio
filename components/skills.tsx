import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "SQL", "HTML/CSS"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      skills: ["Django", "REST APIs", "PostgreSQL", "JWT"],
    },
    {
      title: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "Prisma",
        "Mongoose",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Postman",
        "VS Code",
        "Figma",
        "Nginx",
        "Apache",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Jupyter",
        "OpenCV",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950 dark:hover:border-blue-800 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
