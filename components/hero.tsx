"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Soniwath</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science Student & Aspiring Software Developer
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science
          with a focus on full-stack development and machine learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto">
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              const el = document.querySelector("#projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
            View My Work
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/misoniwath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mi-soniwath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="soniwathmi@gmial.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
