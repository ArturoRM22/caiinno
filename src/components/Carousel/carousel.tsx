"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function CarouselWithNavigation() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  // Sample image URLs - replace with your actual images
  const images = ["/carousel/1.jpg", "/carousel/2.jpg", "/carousel/3.jpg"]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen carousel background */}
      <Carousel
        className="absolute inset-0 w-full h-full"
        plugins={[autoplay.current]}
        opts={{
          loop: true, // Enable infinite looping
        }}

        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-full min-h-screen">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20" />
        <CarouselNext className="absolute right-4 z-20" />
      </Carousel>

      {/* Navigation content positioned on top of carousel */}
      <div className="relative z-10 h-full bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto h-full flex flex-col">
          {/* Navigation Section */}
          <div className="flex-grow pt-26">
            <div className="container mx-auto pb-60">
              <div className="flex flex-col justify-center gap-8 text-white">
                <a href="#quienes-somos" className="text-5xl font-semibold hover:text-black transition-colors">
                  ¿QUIÉNES SOMOS?
                </a>
                <a href="#nuestro-objetivo" className="text-5xl font-semibold hover:text-black transition-colors">
                  NUESTRO OBJETIVO
                </a>
                <a href="#impacto" className="text-5xl font-semibold hover:text-black transition-colors">
                  IMPACTO
                </a>
              </div>
            </div>
          </div>

          {/* Tagline at bottom */}
          <div className="text-center font-bold pb-10 text-4xl text-white">WE THINK BIG, WE WANT CHANGES</div>
        </div>
      </div>
    </div>
  )
}

