"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TypingText from "@/components/TypingText";
import { useState, useEffect } from "react";
import {
  Brain,
  Globe,
  Smartphone,
  TrendingUp,
  GraduationCap,
  Star,
  CheckCircle2,
  ArrowRight,
  Code2,
  Rocket,
  Award,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Brain,
      title: "AI Software Development",
      description:
        "Intelligent digital solutions using AI technologies, automation systems, chatbots, and analytics tools.",
      href: "/services/software-development",
      image: "/ai-software-development-technology.jpg",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Professional, responsive, SEO-ready websites for businesses, schools, churches, and individuals.",
      href: "/services/web-development",
      image: "/website-development-design.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Scalable Android and iOS applications including e-learning, management systems, and fintech apps.",
      href: "/services/mobile-development",
      image: "/mobile-app-development.png",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Complete digital strategy including social media, branding, SEO, and content creation.",
      href: "/services/digital-marketing",
      image: "/digital-marketing-strategy.png",
    },
    {
      icon: Rocket,
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure, CI/CD pipelines, containerization and automation.",
      href: "/services/cloud-devops",
      image: "/cloud-devops.png",
    },
    {
      icon: Globe,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to modernize systems and deliver measurable ROI.",
      href: "/services/it-consulting",
      image: "/it-consulting.png",
    },
  ];

  const featuredCourses = [
    {
      title: "AI Engineering",
      duration: "3 months",
      slug: "ai-engineering",
      price: "₦300,000",
      blackFriday: "₦240,000",
      description:
        "Master neural networks, NLP, computer vision, and AI deployment.",
      icon: Brain,
      image: "/ai-engineering-course.jpg",
    },
    {
      title: "Fullstack Development",
      duration: "4 months",
      slug: "fullstack-development",
      price: "₦200,000",
      blackFriday: "₦160,000",
      description:
        "Complete frontend and backend development with APIs and databases.",
      icon: Code2,
      image: "/fullstack-development.png",
    },
    {
      title: "UI/UX Design",
      duration: "2 months",
      slug: "ui-ux-design",
      price: "₦100,000",
      blackFriday: "₦80,000",
      description:
        "Design beautiful interfaces using Figma, wireframing, and prototyping.",
      icon: Award,
      image: "/ui-ux-design-course.jpg",
    },
    {
      title: "Cybersecurity",
      duration: "3 months",
      price: "₦300,000",
      slug: "cybersecurity",
      blackFriday: "₦240,000",
      description: "Learn ethical hacking and penetration testing techniques.",
      icon: Award,
      image: "/cybersecurity-course.png",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Success Rate" },
    { value: "12+", label: "Tech Courses" },
  ];

  const testimonials = [
    {
      name: "Eyitayo",
      role: "Founder CompletelyArt",
      content:
        "Tinzwave helped me grow fast — 500+ waitlist subscribers and 1,500 followers in 2 months. Amazing team, great results. Totally recommend!",
      image: "/founder.jpeg",
    },
    {
      name: "Sarah Okonkwo",
      role: "Graduate, Fullstack Program",
      image:
        "data:image/jpeg;base64,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",
      content:
        "The training program gave me real-world skills. I landed a job within 2 months of graduation. Highly recommended!",
    },
    {
      name: "Pastor Michael Eze",
      role: "Church Administrator",
      content:
        "Our church website and management system have streamlined our operations. Tinzwave truly understands our needs.",
      image: "/professional-man-portrait.png",
    },
  ];

  const carouselImages = [
    {
      url: "/images/newgroup.jpeg",
      caption: "Certificate Presentation Ceremony",
    },
    { url: "/images/gallery-2.png", caption: "Training Cohort Group Session" },
    { url: "/images/gallery-3.png", caption: "Classroom Learning Environment" },
    { url: "/images/gallery-5.png", caption: "Team Certificate Celebration" },
    { url: "/images/gallery-6.png", caption: "Hands-on Code Development" },
    { url: "/images/gallery-7.png", caption: "Graduation Success Cohort" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary">
        {/* Background Image - Using one of the provided gallery images */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newgroup.jpeg"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,6,23,0.15),transparent_50%)]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="max-w-5xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/20 border border-primary/50 text-primary-foreground/90 hover:bg-primary/30 transition-colors mt-3">
                Empowering Africa with Technology
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight text-balance">
                Transform Your
                <br />
                <span className="inline-block">
                  <TypingText text="Digital Future" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                AI-powered software solutions, digital services, and world-class
                tech training designed for African businesses, institutions, and
                individuals
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white text-lg px-8 py-6 h-auto font-semibold transition-all hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/contact">
                    <Rocket className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white text-lg px-8 py-6 h-auto font-semibold transition-all hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/courses">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Tech Courses
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <section className="md:bg-blue-900 from-primary/5 via-primary/10 to-primary/20 p-8 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Reveal>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="oklch(0.99 0 0)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Our Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                See Our Students In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch real success stories from our tech academy graduates
              </p>
            </div>

            <div className="max-w-6xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl opacity-20 -z-10 animate-pulse-glow" />

              <ImageCarousel images={carouselImages} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for your success
            </p>
          </div>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group">
                  <Card className="h-full transition-all hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity" />

                    <CardContent className="p-8 relative">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Tech Academy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Your Career Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                World-class tech training with industry-leading instructors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/80 text-primary-foreground border-0">
                        Popular
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80">
                        <course.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm line-through text-muted-foreground">
                          {course.price}
                        </span>
                        <span className="text-xl font-bold text-primary">
                          {course.blackFriday}
                        </span>
                        <Badge variant="destructive" className="text-xs">
                          -20%
                        </Badge>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 group-hover:opacity-90"
                    >
                      <Link href={`/courses/${course.slug}`}>Enroll Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/courses">See More</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Community Says
              </h2>
              <p className="text-xl text-muted-foreground">
                Real stories from real people
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-primary/5 border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-foreground/90 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-primary/30 pt-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      <Footer />
    </div>
  );
}

function ImageCarousel({
  images,
}: {
  images: { url: string; caption: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="relative aspect-video bg-black">
        <Image
          src={images[currentIndex].url || "/placeholder.svg"}
          alt={images[currentIndex].caption}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 hover:bg-primary/90 transition-all group-hover:opacity-90"
            >
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <div className="text-center text-white py-4 bg-black/50">
        <p className="text-sm">{images[currentIndex].caption}</p>
      </div>
    </div>
  );
}
