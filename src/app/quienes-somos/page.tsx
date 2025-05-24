import LazyYouTube from '@/components/lazyYoutube'
import TeamSection from '@/components/TeamSection'
import Image from 'next/image'
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
    </div>
    <TeamSection language="spanish"/>
    </>
  )
}