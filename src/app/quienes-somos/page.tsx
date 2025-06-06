import LazyYouTube from '@/components/lazyYoutube'
import TeamSection from '@/components/TeamSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function QuienesSomos() {
  return (
    <>
    <div className="flex flex-col items-center">
      {/* YouTube Video */}
      <div className="w-full aspect-video">
        <LazyYouTube id="0DRcerJtk_c" />
      </div>

      <div className="w-full relative">
        <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
          <Image
            src="/quePretendemos.jpg" 
            alt="Our team working together"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full relative">
        <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
          <Image
            src="/comoLoHacemos.jpg" 
            alt="Our team working together"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full relative">
        <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
          <Image
            src="/9areas.jpg" 
            alt="9 areas de enfoque"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Explora nuestro trabajo
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Descubre nuestras investigaciones, estudios y publicaciones más recientes que contribuyen a la innovación y al desarrollo de políticas en México y América Latina.
          </p>
          <Link
            href="/publicaciones?lang=es"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver publicaciones
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    <TeamSection language="spanish"/>
    </>
  )
}