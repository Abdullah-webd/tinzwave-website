import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, CheckCircle2, Users } from "lucide-react"

export default function SoftwareDevelopmentPage() {
  const features = [
    "AI-Powered Automation Systems",
    "Intelligent Chatbots & Virtual Assistants",
    "AI-Embedded Applications",
    "Advanced Analytics Tools",
    "Enterprise Software Solutions",
    "Custom System Development",
    "Machine Learning Integration",
    "Natural Language Processing",
  ]

  const targetClients = [
    { icon: Users, title: "Businesses & Startups", description: "Custom software to streamline operations" },
    { icon: Users, title: "Schools & Universities", description: "Educational management systems" },
    { icon: Users, title: "Churches", description: "Church management and engagement platforms" },
    { icon: Users, title: "Individuals", description: "Personal projects and MVPs" },
  ]

  const process = [
    { step: "1", title: "Discovery", description: "We understand your needs, challenges, and goals" },
    { step: "2", title: "Planning", description: "We design the solution architecture and project roadmap" },
    { step: "3", title: "Development", description: "Our team builds your AI-powered solution" },
    { step: "4", title: "Testing", description: "Rigorous quality assurance and user testing" },
    { step: "5", title: "Deployment", description: "We launch your solution and provide training" },
    { step: "6", title: "Support", description: "Ongoing maintenance and optimization" },
  ]

  const benefits = [
    "Increased Efficiency & Productivity",
    "Reduced Operational Costs",
    "Data-Driven Decision Making",
    "Competitive Advantage",
    "Scalable Solutions",
    "24/7 Support & Maintenance",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">AI Software Development</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Build intelligent digital solutions using cutting-edge AI technologies that automate processes, enhance
              decision-making, and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">What We Offer</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our AI software development services help organizations leverage artificial intelligence to solve complex
              problems, automate repetitive tasks, and gain actionable insights from data. We combine expertise in
              machine learning, natural language processing, and computer vision with proven software development
              practices to deliver solutions that make a real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a custom chatbot for customer service, an automation system to streamline operations, or
              an analytics platform to drive decision-making, our team has the expertise to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Features & Capabilities</h2>
            <p className="text-lg text-muted-foreground">What we can build for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <p className="text-sm font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Who We Serve</h2>
            <p className="text-lg text-muted-foreground">Our AI solutions are designed for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {targetClients.map((client, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground mb-4">
                    <client.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{client.title}</h3>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-primary-foreground/90">How we bring your AI solution to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground font-bold text-lg shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Benefits</h2>
            <p className="text-lg text-muted-foreground">What you gain from our AI solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <p className="font-medium text-primary">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your AI Solution?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you leverage AI to transform your business.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Request a Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
