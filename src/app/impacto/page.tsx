import LazyYouTube from '@/components/lazyYoutube'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Impacto() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* YouTube Video Section */}
      <div className="w-full aspect-video mb-12">
        <LazyYouTube id="4YOGriHPf_4" />
      </div>

      {/* Impact Content Section */}
      <div className="w-full max-w-4xl px-4">        
        <p className="text-lg md:text-2xl mb-8 leading-relaxed font-bold">
          Para CAIINNO es clave la generación de nuevo conocimiento que sirva de base para provocar cambios positivos, pero es igual de importante que esa información se materialice en cambios concretos. Esto puede ser a través de figuras como las siguientes (por favor selecciona una opción):
        </p>

        <div className="space-y-6 mb-5 text-lg md:text-2xl">
          <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-[#004b8d]">
            {/* Image container with fixed dimensions */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/iconoReformas.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/iniciativas-de-reforma">
              <div>
                <h3 className="font-semibold mb-2">Hemos logrado provocar la generación de reformas de ley</h3>
              </div>
            </Link>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-[#004b8d]">
            {/* Image container with fixed dimensions */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/iconoAgendas.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/investigaciones-con-impacto">
              <div>
                <h3 className="font-semibold mb-2">Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.</h3>
              </div>
            </Link>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-[#004b8d]">
            {/* Image container with fixed dimensions */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/iconoLibros.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/informacion-de-referencia">
              <div>
                <h3 className="font-semibold mb-2">Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales</h3>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}