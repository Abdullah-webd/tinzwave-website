import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TechAcademyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border-0">
              Tech Academy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tech Academy — Bootcamps & Courses
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Hands-on cohorts and self-paced courses that prepare you for
              engineering and AI careers — real projects, mentorship, and
              job-readiness.
            </p>

            <div className="flex justify-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/courses">View Courses</Link>
              </Button>
              <Button
                asChild
                className="border border-primary text-primary bg-transparent"
              >
                <Link href="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                <li>AI fundamentals, model design, and deployment</li>
                <li>Fullstack development with modern tooling</li>
                <li>Project-based learning and portfolio creation</li>
                <li>Interview prep, CV review, and career coaching</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/ai-engineering-course.jpg"
                alt="Tech Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">How it works</h3>
            <p className="text-muted-foreground mb-6">
              Our cohorts run for 8–16 weeks and include weekly live workshops,
              a capstone project, and continuous mentorship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-lg">Mentored learning</div>
              <div className="p-6 bg-white/5 rounded-lg">
                Practical projects
              </div>
              <div className="p-6 bg-white/5 rounded-lg">Job-readiness</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
