import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Users, Award, Rocket, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that solve real problems.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe in empowering individuals and organizations with skills and technology.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and deliver tailored solutions.",
    },
  ]

  const reasons = [
    {
      icon: Globe,
      title: "African Focus",
      description:
        "We understand the unique challenges and opportunities in the African market and design our solutions accordingly.",
    },
    {
      icon: Rocket,
      title: "Proven Track Record",
      description:
        "We've successfully delivered hundreds of projects for businesses, schools, churches, and individuals across Africa.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team consists of experienced developers, designers, marketers, and trainers who are passionate about technology.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that impact your bottom line and help you achieve your goals.",
    },
  ]

  const teamMembers = [
    {
      name: "Agbo Martins Ejiofor",
      title: "CEO/Founder",
      bio: "Visionary leader driving TinzWave's mission to transform Africa through technology",
      image: "/team-agbo-martins.jpg",
    },
    {
      name: "Tochukwu (Ukoha) Victor",
      title: "Chief Technology Officer",
      bio: "AI specialist architecting our cutting-edge technology solutions",
      image: "/team-emeka.jpg",
    },
    {
      name: "Ihionkhan Shalom",
      title: "Project/Product Manager",
      bio: "Strategic project leader ensuring delivery excellence for all clients",
      image: "/team-jaala.jpg",
    },
    {
      name: "Emeka (Jude) Okonkwo",
      title: "Lead Digital Marketing",
      bio: "Digital marketing strategist growing Tinzwave's presence and impact",
      image: "/team-tochukwu.jpg",
    },
    {
      name: "Habeeb Oluwanishola",
      title: "Software Developer",
      bio: "Skilled developer building scalable applications for our clients",
      image: "/team-habeeb.jpg",
    },
    {
      name: "Ajala Abdullah",
      title: "Software Developer",
      bio: "Passionate developer creating innovative solutions and systems",
      image: "/team-jaala.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-purple-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Tinzwave</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              We are on a mission to empower Africa through technology and world-class digital skills training.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tinzwave was founded with a clear vision: to bridge the digital divide in Africa by providing
                  world-class technology solutions and training. We recognized that African businesses, institutions,
                  and individuals needed access to modern technology and the skills to use it effectively.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a small software development company has grown into a comprehensive technology partner
                  for organizations across Africa. We now offer AI-powered software development, web and mobile
                  development, digital marketing services, and a robust tech academy that has trained thousands of
                  students.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Tinzwave serves businesses, schools, churches, and individuals, helping them leverage
                  technology to achieve their goals. We're not just building software—we're building capacity, creating
                  opportunities, and transforming lives through technology.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/team-photo.jpg" alt="Tinzwave Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower African businesses, institutions, and individuals with AI-powered technology solutions and
                  world-class digital skills training that drive innovation, growth, and transformation across the
                  continent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading technology company, recognized for innovative solutions and excellence in
                  digital skills training, enabling organizations and individuals to thrive in the digital economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tinzwave Exists */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Tinzwave Exists</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              We exist because we believe that technology should be accessible to everyone in Africa. Too many
              businesses struggle without modern digital tools, and too many talented individuals lack access to quality
              tech training. Tinzwave bridges these gaps by providing affordable, world-class technology solutions and
              training that empowers African organizations and youth to compete globally.
            </p>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Our purpose is to transform Africa's digital landscape—one solution, one student, one organization at a
              time. We're not just building technology; we're building the future of Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Tinzwave</h2>
            <p className="text-lg text-muted-foreground">What sets us apart from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="transition-all hover:shadow-lg hover:border-secondary border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-primary-foreground/90">
              Experienced professionals passionate about technology and empowering Africa
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 border-0 bg-primary-foreground/10"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary to-secondary/70">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary-foreground/80 mb-2">{member.title}</p>
                  <p className="text-sm text-primary-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
