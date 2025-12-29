"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Camera, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null)

  const galleryImages = [
    {
      category: "Lectures & Training",
      images: [
        {
          url: "/images/gallery-1.png",
          caption: "Certificate Presentation - Cohort Celebration",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Group Training Session - Students with Certificates",
        },
        {
          url: "/images/gallery-3.png",
          caption: "Classroom Learning Space - Interactive Training",
        },
        {
          url: "/images/gallery-4.png",
          caption: "Learning Center - Students Collaborating",
        },
        {
          url: "/images/gallery-7.png",
          caption: "Team Cohort - Certificate Award Ceremony",
        },
        {
          url: "/images/gallery-6.png",
          caption: "Hands-on Code Development - Live Coding Session",
        },
      ],
    },
    {
      category: "Certificate Collections",
      images: [
        {
          url: "/images/gallery-7.png",
          caption: "Graduation Cohort - Successful Program Completion",
        },
        {
          url: "/images/gallery-8.png",
          caption: "Certificate Ceremony - Proud Graduates",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Achievement Celebration - Team Success",
        },
        {
          url: "/images/gallery-1.png",
          caption: "Graduation Day - Certificates Awarded",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Success Stories - Certificate Recipients",
        },
        {
          url: "/images/gallery-1.png",
          caption: "Program Graduates - Certificate Collection",
        },
      ],
    },
    {
      category: "Classroom Activities",
      images: [
        {
          url: "/images/gallery-3.png",
          caption: "Modern Learning Environment - Study Space",
        },
        {
          url: "/images/gallery-4.png",
          caption: "Student Collaboration - Group Work Session",
        },
        {
          url: "/images/gallery-6.png",
          caption: "Development Work - Practical Training",
        },
        {
          url: "/images/gallery-2.png",
          caption: "Team Building - Training Cohort",
        },
        {
          url: "/images/gallery-7.png",
          caption: "Interactive Learning - Group Discussion",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Creative Workspace - Modern Facilities",
        },
      ],
    },
    {
      category: "Community",
      images: [
        {
          url: "/gallery1.jpeg",
          caption: "Instructors and trainees posing in front of the Tinzwave banner, representing the diverse community of learners dedicated to securing their future through tech skills",
        },
        {
          url: "/gallery2.jpeg",
          caption: "An interactive classroom session in progress. Students are engaged in a lecture, utilizing their laptops for real-time application of concepts being taught by the lead instructor",
        },
        {
          url: "/gallery3.jpeg",
          caption: "Celebrating success and community. Students and staff share a lighthearted moment at the training center",
        },
        {
          url: "/gallery4.jpeg",
          caption: "A practical workshop session focusing on UI/UX design. The whiteboard displays notes on common UI elements like buttons, inputs, and typography",
        },
        {
          url: "/gallery5.jpeg",
          caption: "The dedicated workspace at our facility allows students to focus individually on their projects and assignments in a comfortable, air-conditioned environment.",
        },
        {
          url: "/images/gallery-9.png",
          caption: "Creative Workspace - Modern Facilities",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Camera className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Gallery</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Explore our training sessions, lectures, certificate collections, and classroom activities. See what we've
              been building and who we've been empowering.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryImages.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-16 md:py-24 ${sectionIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">{section.category}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.caption}
                      fill
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">{image.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.caption}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
