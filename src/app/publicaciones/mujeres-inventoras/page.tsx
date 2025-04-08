import React from 'react'
import PersuasiveYouTube from "@/components/lazyYoutube"

export default function MujeresInventoras() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mujeres Inventoras: Patentando en México</h1>
        {/* Video Section */}
        <div>
          <PersuasiveYouTube id="ocekswReZIA" />
        </div>
        
        {/* Download Links Section */}
        <div className="space-y-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Publicación 2017-2020 (Versión Español)</h2>
            <p className="mb-4">Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Español): Patentando en México</p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Descargar
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Publicación 2017-2020 (Versión Inglés)</h2>
            <p className="mb-4">Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Inglés): Patentando en México</p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Descargar
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Publicación 2014-2016</h2>
            <p className="mb-4">Para descargar nuestra publicación sobre Mujeres Inventoras 2014-2016: Patentando en México #PatentesRosas</p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Descargar
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Banco de datos</h2>
            <p className="mb-4">Para acceder al Banco de Datos sobre Mujeres Inventoras: Patentando en México #PatentesRosas, da click aquí. </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Acceder
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}