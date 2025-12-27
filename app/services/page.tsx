import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Globe, Smartphone, TrendingUp, GraduationCap, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI Software Development",
      description:
        "Build intelligent digital solutions using cutting-edge AI technologies. We develop automation systems, chatbots, AI-embedded applications, analytics tools, enterprise software, and custom systems.",
      href: "/services/software-development",
      features: ["Automation Systems", "AI Chatbots", "Analytics Tools", "Enterprise Software"],
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Design and development of professional, responsive, SEO-ready websites. We create company websites, school portals, church websites, e-commerce stores, and portfolio websites.",
      href: "/services/web-development",
      features: ["Company Websites", "School Portals", "E-commerce Stores", "SEO Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Development of scalable Android and iOS applications. We build e-learning apps, management systems, fintech apps, and social platforms that work seamlessly across devices.",
      href: "/services/mobile-development",
      features: ["E-learning Apps", "Management Systems", "Fintech Apps", "Cross-platform"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Complete digital marketing solutions to grow your online presence. Services include social media management, branding, Google and social media ads, content creation, SEO, and digital strategy.",
      href: "/services/digital-marketing",
      features: ["Social Media", "Google Ads", "SEO", "Content Creation"],
    },
    {
      icon: GraduationCap,
      title: "Tech Academy",
      description:
        "World-class tech training for individuals, corporate teams, secondary schools, and universities. Learn from industry practitioners and gain practical skills in various technology fields.",
      href: "/courses",
      features: ["Individual Training", "Corporate Programs", "School Partnerships", "Certification"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive technology solutions designed to transform your business, institution, or career
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-xl border-2 hover:border-secondary">
                <CardContent className="p-8">
                  <service.icon className="h-14 w-14 text-secondary mb-4" />
                  <h2 className="text-2xl font-bold mb-4 text-primary">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and stay ahead in the digital age.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
