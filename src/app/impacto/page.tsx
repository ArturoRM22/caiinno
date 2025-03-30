import LazyYouTube from '@/components/lazyYoutube'
import Image from 'next/image'
import React from 'react'

export default function Impacto() {
  return (
    <div className="flex flex-col items-center">
      {/* YouTube Video */}
      <div className="w-full aspect-video">
        <LazyYouTube id="4YOGriHPf_4" />
      </div>
    </div>
  )
}