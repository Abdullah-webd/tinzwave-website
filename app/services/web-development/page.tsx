import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle2, Users } from "lucide-react"

export default function WebDevelopmentPage() {
  const features = [
    "Responsive Design",
    "SEO Optimization",
    "Fast Loading Speed",
    "Mobile-First Approach",
    "Content Management System",
    "E-commerce Integration",
    "Security & SSL",
    "Analytics Integration",
  ]

  const websiteTypes = [
    "Company Websites",
    "School Portals",
    "Church Websites",
    "E-commerce Stores",
    "Portfolio Websites",
    "Landing Pages",
  ]

  const targetClients = [
    { icon: Users, title: "Businesses", description: "Professional corporate websites" },
    { icon: Users, title: "Schools", description: "Educational portals and LMS" },
    { icon: Users, title: "Churches", description: "Church websites with event management" },
    { icon: Users, title: "Individuals", description: "Personal portfolios and blogs" },
  ]

  const tools = [
    "Next.js & React",
    "WordPress",
    "HTML/CSS/JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Database Integration",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Website Development</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Professional, responsive, and SEO-ready websites designed to elevate your online presence and drive
              results.
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
              We design and develop professional websites that not only look great but also perform exceptionally well.
              Our websites are built with modern technologies, optimized for search engines, and designed to convert
              visitors into customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a simple company website, a complex e-commerce platform, or a custom web application, we
              have the expertise to deliver a solution that meets your needs and exceeds your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Types of Websites We Build</h2>
            <p className="text-lg text-muted-foreground">Tailored solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <p className="font-medium text-primary">{type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Features</h2>
            <p className="text-lg text-muted-foreground">Every website we build includes</p>
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-lg text-primary-foreground/90">We build websites for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {targetClients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground mb-4">
                  <client.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{client.title}</h3>
                <p className="text-sm text-primary-foreground/80">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Tools & Technologies</h2>
            <p className="text-lg text-muted-foreground">We use modern, proven technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-primary">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Let's create a stunning website that represents your brand and drives results.
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
