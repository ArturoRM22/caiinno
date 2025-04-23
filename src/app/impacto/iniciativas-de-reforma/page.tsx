import React from 'react'
import Link from 'next/link'

export default function IniciativasDeReforma() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Iniciativas de Reforma de Ley
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-semibold mb-6">
            1.- INICIATIVAS DE REFORMA DE LEY O NUEVAS LEYES
          </h2>
          
          <p className="mb-6 text-2xl">
            CAIINNO ha participado activamente aportando información, datos, experiencia y conocimiento para la gestión y redacción de iniciativas de las siguientes reformas de leyes federales en México:
          </p>

          <ol className="space-y-8 list-decimal pl-6 text-xl">
            <li>
              <p className="mb-2">
                Reforma y adiciona el artículo 458 de la Ley General de Instituciones y Procedimientos Electorales. Se puede consultar en la siguiente liga:
              </p>
              <Link 
                href="https://gaceta.diputados.gob.mx/Gaceta/63/2017/nov/20171121-V.html#Iniciativa2" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://gaceta.diputados.gob.mx/Gaceta/63/2017/nov/20171121-V.html#Iniciativa2
              </Link>
            </li>

            <li>
              <p className="mb-2">
                Iniciativa con Proyecto de Decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6o. de la Ley de la Propiedad Industrial. Se puede consultar en la siguiente liga:
              </p>
              <Link 
                href="https://www.senado.gob.mx/66/gaceta_del_senado/documento/80999" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://www.senado.gob.mx/66/gaceta_del_senado/documento/80999
              </Link>
            </li>

            <li>
              <p className="mb-2">
                Iniciativa que reforma los artículos 2 y 12 de la Ley de Ciencia y Tecnología. Se puede consultar en la siguiente liga:
              </p>
              <Link 
                href="https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                INICIATIVA CON PROYECTO DE DECRETO PARA CREAR LA LEY DE CIENCIA, TECNOLOGIA E INNOVACION DEL ESTADO DE TABASCO.
              </p>
              <div className="space-y-2">
                <Link 
                  href="https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-all block"
                >
                  https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf
                </Link>
                <Link 
                  href="https://www.senado.gob.mx/66/gaceta_del_senado/documento/82563" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-all block"
                >
                  https://www.senado.gob.mx/66/gaceta_del_senado/documento/82563
                </Link>
              </div>
            </li>

            <li>
              <p className="mb-2">
                INICIATIVA DE REFORMA SOBRE INDUSTRIAS CREATIVAS
              </p>
              <Link 
                href="http://www.diputadospan.mx/DiputadosPAN/layouts/Noticia.aspx?tipo=2&idnoticia=5449&id=5449" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                http://www.diputadospan.mx/DiputadosPAN/layouts/Noticia.aspx?tipo=2&idnoticia=5449&id=5449
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}