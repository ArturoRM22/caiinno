import React from 'react'
import Link from 'next/link'

export default function InformacionDeReferencia() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Fuente de información para fuentes académicas
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            3.- FUENTE DE INFORMACIÓN PARA FUENTES ACADÉMICAS NACIONALES E INTERNACIONALES
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-justify mb-8 max-w-prose">
            CAIINNO ha realizado investigaciones y generado información, datos, experiencia y conocimiento que ha sido plasmada en publicaciones o en sus bancos de datos, mismos que han sido utilizados por investigadores en publicaciones académicas e incluso por organismos internacionales:
          </p>

          <ol className="space-y-8 list-decimal pl-6 text-base sm:text-lg md:text-xl">
            {[
              {
                text: "Mujeres del Pacífico, programas de apoyo al emprendimiento femenino en la alianza del pacífico. Utilizado por el Banco Interamericano de Desarrollo:",
                link: "http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf"
              },
              {
                text: "Ciencia en Nayarit, a 100 años de la creación del estado: antecedentes históricos, situación actual, retos y perspectivas:",
                link: "https://www.revistaciencia.amc.edu.mx/images/revista/68_3/PDF/actualidad.pdf"
              },
              {
                text: "La competitividad de la manufactura del sector autopartes en Tlaxcala: Modelo para el desarrollo:",
                link: "http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf"
              },
              {
                text: "APROXIMACIONES A LA MEDICIÓN DEL SISTEMA DE INNOVACIÓN EN MÉXICO:",
                link: "http://mujeresdelpacifico.org/wp-content/uploads/2018/06/1er-Informe-MdP-ASELA-OAP.pdf"
              },
              {
                text: "La innovación en el comercio exterior de San Luis Potosí:",
                link: "https://dialnet.unirioja.es/descarga/articulo/6153679.pdf"
              },
              {
                text: "Efecto del empowerment grupal en la proactividad. Un estudio empírico en equipos de I+D de Universidades Tamaulipecas:",
                link: "https://recai.uaemex.mx/article/download/9010/8340/"
              },
              {
                text: "La procédure d'opposition au Mexique:",
                link: "http://cpi.openum.ca/files/sites/66/CPI_29-1_202_nomen-vazquez.pdf"
              },
            ].map(({ text, link }, index) => (
              <li key={index}>
                <p className="mb-2 text-justify">{text}</p>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-words"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
