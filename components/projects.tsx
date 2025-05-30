import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Khistory - Website",
      description:
        "A personal website showcasing my journey in the world of technology. Features a blog, portfolio, and interactive timeline of my learning experiences.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Niwath-Mi/Khistory",
      demo: "https://niwath-mi.github.io/Khistory/",
      image: "/khistory.jpg?height=100&width=400",
    },
    {
      title: "Cownways's Game of Life",
      description:
        "A web-based implementation of Conway's Game of Life, a cellular automaton simulation. Features customizable grid size, speed control, and pattern presets.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/misoniwath/gameoflife",
      demo: "https://misoniwath.github.io/gameoflife/",
      image: "/gameoflife.jpg?height=100&width=400",
    },
    {
      title: "API for Blood Donation App",
      description:
        "A RESTful API for a blood donation application, allowing users to find nearby blood banks, schedule donations, and track their donation history.",
      tech: ["python", "Django", "PostgreSQL"],
      gitlab: "https://gitlab.com/soniwathmi/blood_donation_app",
      demo: undefined,
      image: "/Blood_donation_app.jpg?height=100&width=400",
    },
    {
      title: "Waste Classifier",
      description:
        "An AI-powered waste classification system that uses computer vision to identify and categorize waste items. Helps in promoting recycling and waste management.",
      tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      github: "https://github.com/Pascaruuu/TrashDnC-YOLOv8",
      demo: undefined,
      image: "/waste_sorter.jpg?height=200&width=400",
    },
    {
      title: "Portfolio",
      description:
        "A static portfolio website showcasing my skills, projects, and experiences.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/misoniwath/portfolio-v1",
      demo: "https://misoniwath.github.io/portfolio-v1/",
      image: "/portfolio-v1.jpg?height=200&width=400",
    },
    {
      title: "Inventory Management System",
      description:
        "A console-based inventory management system for small businesses. Features product tracking, stock management, and sales reporting.",
      tech: ["Java"],
      github: "https://github.com/virakyuthSRUN/Inventory-Management-System",
      demo: undefined,
      image: undefined,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
