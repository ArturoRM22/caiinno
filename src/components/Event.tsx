"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Event } from "@/models/Event";

interface EventProps {
  event: Event;
}

export default function EventCarousel({ event }: EventProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="space-y-4">
      {/* Event Title */}
      <h2 className="text-3xl font-bold text-center">{event.title}</h2>
      
      {/* Carousel Container */}
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <Carousel
          plugins={[autoplay.current]}
          opts={{ loop: true }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
          className="h-full"
        >
          <CarouselContent className="h-full">
            {event.images.map((image, index) => (
              <CarouselItem key={index} className="h-full flex items-center justify-center">
                <div className="relative w-full h-[500px]">
                  <Image
                    src={image.url}
                    alt={image.alt || event.title}
                    fill
                    className="object-contain" // Changed from object-cover to object-contain
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-10" />
          <CarouselNext className="absolute right-4 z-10" />
        </Carousel>
      </div>
    </div>
  );
}