import React from 'react'
import Link from 'next/link'

export default function InformacionDeReferencia() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Fuente de información para fuentes académicas
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-semibold mb-6">
            3.- FUENTE DE INFORMACIÓN PARA FUENTES ACADÉMICAS NACIONALES E INTERNACIONALES
          </h2>
          
          <p className="mb-6 text-2xl">
            CAIINNO ha realizado investigaciones y generado información, datos, experiencia y conocimiento que ha sido plasmada en publicaciones o en sus bancos de datos, mismos que han sido utilizados por investigadores en publicaciones académicas e incluso por organismos internacionales:
          </p>

          <ol className="space-y-8 list-decimal pl-6 text-xl">
            <li>
              <p className="mb-2">
                Mujeres del Pacífico, programas de apoyo al emprendimiento femenino en la alianza del pacífico. Utilizado por el Banco Interamericano de Desarrollo:
              </p>
              <Link 
                href="http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                Ciencia en Nayarit, a 100 años de la creación del estado: antecedentes históricos, situación actual, retos y perspectivas:
              </p>
              <Link 
                href="https://www.revistaciencia.amc.edu.mx/images/revista/68_3/PDF/actualidad.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://www.revistaciencia.amc.edu.mx/images/revista/68_3/PDF/actualidad.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                La competitividad de la manufactura del sector autopartes en Tlaxcala: Modelo para el desarrollo:
              </p>
              <Link 
                href="http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                APROXIMACIONES A LA MEDICIÓN DEL SISTEMA DE INNOVACIÓN EN MÉXICO:
              </p>
              <Link 
                href="http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                La innovación en el comercio exterior de San Luis Potosí:
              </p>
              <Link 
                href="https://dialnet.unirioja.es/descarga/articulo/6153679.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://dialnet.unirioja.es/descarga/articulo/6153679.pdf
              </Link>
            </li>

            <li>
              <p className="mb-2">
                Efecto del empowerment grupal en la proactividad. Un estudio empírico en equipos de I+D de Universidades Tamaulipecas:
              </p>
              <Link 
                href="https://recai.uaemex.mx/article/download/9010/8340/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://recai.uaemex.mx/article/download/9010/8340/
              </Link>
            </li>

            <li>
                <p className="mb-2">
                    La procédure d&apos;opposition au Mexique:
                </p>
              <Link 
                href="http://cpi.openum.ca/files/sites/66/CPI_29-1_202_nomen-vazquez.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                http://cpi.openum.ca/files/sites/66/CPI_29-1_202_nomen-vazquez.pdf
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}