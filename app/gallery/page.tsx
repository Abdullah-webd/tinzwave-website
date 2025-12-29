"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const galleryImages = [
    {
      url: "/gallery1.jpeg",
      caption: "Certificate Presentation - Cohort Celebration",
    },
    {
      url: "/gallery2.jpeg",
      caption: "Group Training Session - Students with Certificates",
    },
    {
      url: "/gallery3.jpeg",
      caption: "Classroom Learning Space - Interactive Training",
    },
    {
      url: "/gallery4.jpeg",
      caption: "Learning Center - Students Collaborating",
    },
    {
      url: "/gallery5.jpeg",
      caption: "Team Cohort - Certificate Award Ceremony",
    },
    {
      url: "/gallery6.jpeg",
      caption: "Hands-on Code Development - Live Coding Session",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Camera className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Explore our training sessions, lectures, certificate collections,
              and classroom activities. See what we've been building and who
              we've been empowering.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid (gallery-1..gallery-6) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, imageIndex) => (
              <Card
                key={imageIndex}
                className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-96 sm:h-80 md:h-72 lg:h-80 overflow-hidden flex items-center justify-center bg-background">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="w-full h-full object-contain transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[80vh]">
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
