import React from 'react'
import Image from 'next/image'

export default function NuestroObjetivo() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-10">
        {/* 9 Areas Image */}
        <div className="w-full relative">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
            <Image
              src="/9areas.jpg"
              alt="9 áreas de trabajo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Principios de Innovación Image */}
        <div className="w-full relative">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
            <Image
              src="/principiosInnovacion.jpg"
              alt="Principios de innovación"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Qué Pretendemos Image */}
        <div className="w-full relative">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
            <Image
              src="/quePretendemos.jpg"
              alt="Qué pretendemos"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}