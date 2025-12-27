import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  CheckCircle2,
  Users,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { courses } from "@/lib/courses-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string | string[] } | Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const whatsappMessage = `Hi, I'm interested in enrolling in the ${course.title} course. Please provide more details.`;
  const whatsappLink = `https://wa.me/2349161052706?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              {course.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    Investment
                  </p>
                  <div>
                    <span className="line-through text-sm mr-2">
                      {course.price}
                    </span>
                    <span className="font-bold text-secondary text-xl">
                      {course.blackFridayPrice}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Mode</p>
                  <p className="font-semibold">{course.mode.join(" / ")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-semibold"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enroll via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-primary/90 font-semibold"
              >
                <Link href="/contact">Get More Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Course Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {course.overview}
            </p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              What You Will Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-medium border-2 border-secondary/20"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Who Should Enroll
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whoShouldEnroll.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                  <p className="text-primary-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Card */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Course Information
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Normal Price:</span>
                    <span className="line-through">{course.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Black Friday Price:
                    </span>
                    <span className="font-bold text-secondary text-xl">
                      {course.blackFridayPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Learning Mode:
                    </span>
                    <span className="font-semibold">
                      {course.mode.join(" / ")}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full mb-3 bg-secondary hover:bg-secondary/90 font-semibold"
                  size="lg"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enroll via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 font-semibold"
                  size="lg"
                >
                  <Link href="/contact">Get More Information</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
