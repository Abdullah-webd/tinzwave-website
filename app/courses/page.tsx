"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { GraduationCap, Clock, DollarSign, Search } from "lucide-react"
import { courses } from "@/lib/courses-data"
import { useState } from "react"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Tinzwave Tech Academy</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Transform your career with world-class tech training. Learn from industry practitioners and gain practical
              skills that employers value.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col transition-all hover:shadow-xl hover:border-secondary">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-4 w-fit">
                    {course.category}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-primary">{course.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{course.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-secondary" />
                      <div className="text-sm">
                        <span className="line-through text-muted-foreground">{course.price}</span>
                        <span className="ml-2 text-lg font-bold text-secondary">{course.blackFridayPrice}</span>
                        <span className="ml-1 text-xs text-secondary">(Black Friday)</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No courses found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Training Options</h2>
            <p className="text-lg text-muted-foreground">We offer training for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Individuals", description: "Self-paced or instructor-led courses for career growth" },
              { title: "Corporate Teams", description: "Custom training programs for your organization" },
              { title: "Secondary Schools", description: "Tech education programs for students" },
              { title: "Universities", description: "Partnership programs and curriculum support" },
            ].map((option, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{option.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our tech training programs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
