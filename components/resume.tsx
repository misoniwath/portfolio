"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export function Resume() {
  const handleDownload = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You would replace this with your actual resume file
    link.download = "soniwath_Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume for detailed information about my experience and qualifications
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <FileText className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Soniwath</h3>
              <p className="text-muted-foreground">Computer Science Student & Developer</p>
            </div>

            <div className="space-y-4 mb-8 text-left">
            </div>

            <Button onClick={handleDownload} size="lg" className="w-full sm:w-auto">
              <Download className="h-5 w-5 mr-2" />
              Download Resume (PDF)
            </Button>

            <p className="text-sm text-muted-foreground mt-4">Last updated: June 2025</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
