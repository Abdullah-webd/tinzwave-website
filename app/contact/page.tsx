"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2349161052706", "_blank")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Have questions about our services or courses? We'd love to hear from you. Reach out and let's start a
              conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* WhatsApp Contact Section */}
            <Card className="flex flex-col h-full">
              <CardContent className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Quick Contact</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Get instant responses to your questions. Click the button below to start a conversation on WhatsApp
                    and connect with our team directly.
                  </p>
                </div>
                <div>
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 h-auto font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Chat on WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    We typically respond within minutes during business hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary shrink-0 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:info@tinzwave.com"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          infor@tinzwave.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary shrink-0 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+2349161052706"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          +234 916 105 2706
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Office Location</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Cr8tivebox Co-Working Space</p>
                          <p>E10 Adeniran Ogunsanya St</p>
                          <p>Surulere, Lagos 100001</p>
                          <p>Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Follow Us</h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://facebook.com/tinzwave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/tinzwave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/tinzwave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/tinzwave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110"
                      aria-label="Connect with us on LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Visit Us</h2>
              <p className="text-lg text-muted-foreground">Located at Cr8tivebox Co-Working Space in Surulere, Lagos</p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96 md:h-[500px]">
                  <iframe
                    title="Tinzwave Office Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3234567!2d3.3521!3d6.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7151234567890%3A0x1234567890abcdef!2sCr8tivebox%20Co-Working%20Space%2C%20E10%20Adeniran%20Ogunsanya%20St%2C%20Surulere%2C%20Lagos%20100001!5e0!3m2!1sen!2sng!4v1234567890123"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/search/Cr8tivebox+Co-Working+Space+E10+Adeniran+Ogunsanya+St+Surulere+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-semibold"
              >
                <MapPin className="h-5 w-5" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
