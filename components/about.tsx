import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Coffee } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
            I am currently pursuing a dual degree program in Information Technology Management at the American University of Phnom Penh and Computer Science at Fort Hays State University in the United States. With a strong foundation in both business-oriented IT and technical computer science, I am passionate about solving real-world problems through technology.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
            I specialize in software engineering with hands-on experience in building real-world applications using technologies like Django, React, and cloud platforms. I’m passionate about designing scalable systems that solve meaningful problems — from smart waste sorting to student management tools. Outside of class and projects, I enjoy exploring new frameworks, refining my development skills, and working on innovative tech ideas that have real impact.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in continuous learning and am always excited to take on new challenges that push me to grow as a
              developer and problem solver.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground">
                  Bachelor of Science in Computer Science
                  <br />
                  Fort Hays State University in the United States
                  <br />
                  Bachelor of IT Management
                  <br />
                  American University of Phnom Penh
                  <br />
                  Expected Graduation: December 2026
                  <br />
                  GPA: 3.65/4.0
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <p className="text-muted-foreground">
                  Software Engineering, Machine Learning, Artificial Intelligence, Cloud Computing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Hobbies</h3>
                </div>
                <p className="text-muted-foreground">Photography, Reading Tech Blogs, Playing Football, Watching the News</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
