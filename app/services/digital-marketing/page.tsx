import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, CheckCircle2, Users } from "lucide-react"

export default function DigitalMarketingPage() {
  const services = [
    "Social Media Management",
    "Brand Strategy & Development",
    "Google Ads",
    "Social Media Advertising",
    "Content Creation",
    "Search Engine Optimization (SEO)",
    "Email Marketing",
    "Digital Strategy Consulting",
  ]

  const features = [
    "Data-Driven Strategies",
    "Creative Content",
    "ROI Tracking",
    "Multi-Platform Management",
    "Audience Targeting",
    "Campaign Optimization",
  ]

  const targetClients = [
    { icon: Users, title: "Businesses", description: "Growth-focused marketing campaigns" },
    { icon: Users, title: "Individuals", description: "Personal brand building" },
    { icon: Users, title: "Churches", description: "Community engagement strategies" },
    { icon: Users, title: "Schools", description: "Student recruitment campaigns" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Digital Marketing</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive digital marketing solutions to grow your online presence and reach your target audience
              effectively.
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
              Our digital marketing services help businesses and organizations build a strong online presence, engage
              their target audience, and drive measurable results. We combine creative content with data-driven
              strategies to maximize your return on investment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From social media management to Google Ads, SEO to content creation, we provide end-to-end digital
              marketing solutions tailored to your goals and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-muted-foreground">Complete digital marketing solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <p className="text-sm font-medium">{service}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">Our approach to digital marketing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <p className="font-medium text-primary">{feature}</p>
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
            <p className="text-lg text-primary-foreground/90">We provide digital marketing for</p>
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

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Brand?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
