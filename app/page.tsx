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
      icon: GraduationCap,
      title: "Tech Academy",
      description:
        "Hands-on tech bootcamps and courses (AI, Fullstack, UI/UX) to launch careers.",
      href: "/courses",
      image: "/ai-engineering-course.jpg",
    },
    {
      icon: Brain,
      title: "AI Automations",
      description:
        "Design and deploy intelligent automation solutions to streamline business workflows.",
      href: "/services/ai-automations",
      image: "/ai-software-development-technology.jpg",
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
      image: "data:image/jpeg;base64,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",
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
                  className="btn-animated border border-primary-foreground/60 text-primary-foreground bg-transparent text-lg px-8 py-6 h-auto font-semibold transition-all hover:bg-primary-foreground/5 hover:scale-105"
                >
                  <Link href="/contact">
                    <Rocket className="mr-2 h-5 w-5 text-primary-foreground" />
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
