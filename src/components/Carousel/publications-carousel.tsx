"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"

interface Publication {
  image: string
  title: string
  url: string
}

export default function PublicationsCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  const publications: Publication[] = [
    {
      image: "/publications/mujeres-inventoras-patentando-en-mexico.png",
      title: "Mujeres Inventoras: Patentando en México",
      url: "/publicaciones/mujeres-inventoras"
    },
    {
      image: "/publications/ramo-38.png",
      title: "Observatorio Electoral Ramo 38",
      url: "/publicaciones/ramo-38"
    },
    {
      image: "/publications/industrias-creativas.png",
      title: "Banco de datos de industrias culturales y creativas",
      url: "/publicaciones/industrias-creativas"
    },
    {
      image: "/publications/indice-cti-2018.png",
      title: "ÍNDICE NACIONAL DE CIENCIA, TECNOLOGÍA E INNOVACIÓN 2018",
      url: "/publicaciones/indice-cti-2018"
    }
  ]

  return (
    <div className="relative w-full overflow-hidden bg-slate-100 py-10" >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">PUBLICACIONES</h2>
        <Carousel
          className="w-full"
          plugins={[autoplay.current]}
          opts={{
            loop: true,
          }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {publications.map((publication, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Link href={publication.url} className="block p-4 hover:opacity-90 transition-opacity">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={publication.image}
                      alt={publication.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-center">{publication.title}</h3>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
      </div>
    </div>
  )
} 