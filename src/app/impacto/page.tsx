import LazyYouTube from '@/components/lazyYoutube'
import React from 'react'
import ImpactCards from '@/components/ImpactCards';

export default function Impacto() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* YouTube Video Section */}
      <div className="w-full aspect-video mb-12">
        <LazyYouTube id="4YOGriHPf_4" />
      </div>

      {/* Impact Content Section */}
      <div className="w-full max-w-4xl px-4 mb-5">        
        <p className="text-lg md:text-2xl mb-8 leading-relaxed font-bold">
          Para CAIINNO es clave la generación de nuevo conocimiento que sirva de base para provocar cambios positivos, pero es igual de importante que esa información se materialice en cambios concretos. Esto puede ser a través de figuras como las siguientes (por favor selecciona una opción):
        </p>
        <ImpactCards/>
      </div>
    </div>
  )
}