import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, CheckCircle2, Users } from "lucide-react"

export default function MobileDevelopmentPage() {
  const appTypes = [
    "E-learning Applications",
    "Management Systems",
    "Fintech Applications",
    "Social Platforms",
    "Healthcare Apps",
    "Delivery Apps",
  ]

  const features = [
    "Cross-Platform Development",
    "Native Performance",
    "Offline Functionality",
    "Push Notifications",
    "In-App Payments",
    "User Authentication",
    "Real-Time Sync",
    "Cloud Integration",
  ]

  const targetClients = [
    { icon: Users, title: "Businesses", description: "Custom business applications" },
    { icon: Users, title: "Schools", description: "Educational mobile platforms" },
    { icon: Users, title: "Churches", description: "Church engagement apps" },
    { icon: Users, title: "Individuals", description: "Personal app projects" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Mobile App Development</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Scalable Android and iOS applications that deliver exceptional user experiences and drive engagement.
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
              We develop high-quality mobile applications for both Android and iOS platforms using modern technologies
              and best practices. Our apps are designed to be fast, secure, and user-friendly, ensuring your users have
              the best possible experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From concept to launch, we handle every aspect of mobile app development, including UI/UX design, backend
              development, API integration, testing, and deployment to app stores.
            </p>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Types of Apps We Build</h2>
            <p className="text-lg text-muted-foreground">Solutions for various industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {appTypes.map((type, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Features & Capabilities</h2>
            <p className="text-lg text-muted-foreground">What we can integrate into your app</p>
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
            <p className="text-lg text-primary-foreground/90">We build apps for</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Let's turn your app idea into reality with a solution that users will love.
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
