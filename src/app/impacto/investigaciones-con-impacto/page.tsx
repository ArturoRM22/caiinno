'use client'

import React from 'react';
import Link from 'next/link';

export default function InvestigacionesConImpacto() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Información de referencia para uso del sector público nacional
        </h1>

        <div className="prose max-w-none text-base sm:text-lg lg:prose-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            2.- INFORMACIÓN DE REFERENCIA PARA USO DEL SECTOR PÚBLICO NACIONAL, Y/O PARA ELABORACIÓN DE POLÍTICAS PÚBLICAS
          </h2>
          
          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            CAIINNO ha realizado investigaciones y generado información, datos, experiencia y conocimiento que ha sido plasmada en publicaciones o en sus bancos de datos, mismos que han sido utilizados por el gobierno federal y locales:
          </p>

          <ol className="space-y-8 list-decimal pl-6 text-sm sm:text-lg">
            {data.map((item, index) => (
              <li key={index}>
                <p className="mb-2">{item.description}</p>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-words"
                >
                  {item.url}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    description: 'Diagnóstico de Ciencia, Tecnología e Innovación en el Estado de Durango. Utilizado por el Consejo de Ciencia y Tecnología del Estado de Durango:',
    url: 'https://www.cocyted.mx/EVENTOS/encuentro_inv_2018/3.DIAGNOSTICO_DE_CTI_EN_DURANGO_COCYTED.pdf',
  },
  {
    description: 'Información económica y estatal de Jalisco. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/145365/jalisco_2016_0923.pdf',
  },
  {
    description: 'Información económica y estatal de Puebla. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/281881/puebla_2017_12.1.pdf',
  },
  {
    description: 'Información económica y estatal de la Ciudad de México. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/194616/ciudad_de_mexico_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Querétaro. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/213061/queretaro_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Hidalgo. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/266784/hidalgo_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Coahuila. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/264521/coahuila_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Morelos. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/264521/coahuila_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Sinaloa. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/244766/sinaloa_2017_02.pdf',
  },
  {
    description: 'Información económica y estatal de Baja California Sur. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/300361/baja_california_sur_2018_02.pdf',
  },
  {
    description: 'Información económica y estatal de Zacatecas. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/324482/zacatecas_2018_05.pdf',
  },
  {
    description: 'Información económica y estatal de Guerrero. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/274975/guerrero_2017_03.pdf',
  },
  {
    description: 'Información económica y estatal de Chihuahua. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/296759/chihuahua_2018_01.pdf',
  },
  {
    description: 'Información económica y estatal de Aguascalientes. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/175890/aguascalientes_2016_1116.pdf',
  },
  {
    description: 'Información económica y estatal de Yucatán. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/281892/yucatan_2017_12.1.pdf',
  },
  {
    description: 'Información económica y estatal de Campeche. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/324487/campeche_2018_05.pdf',
  },
  {
    description: 'Información económica y estatal de Durango. Utilizado por la Secretaría de Economía Federal:',
    url: 'https://www.gob.mx/cms/uploads/attachment/file/286671/durango_2017_12.1.pdf',
  },
  {
    description: 'Agenda de prioridades en Educación Superior, Ciencia, Tecnología e Innovación para el Estado de Puebla:',
    url: 'http://www.inaoep.mx/archivos/marconormativo/AgendaPrioridadesPuebla2018.pdf',
  },
  {
    description: 'Plataforma Electoral Morelos PAN 2018-2024:',
    url: 'http://impepac.mx/wp-content/uploads/2018/05/Plataforma-Morelos-PAN-perspectiva-de-g%C3%A9nero.pdf',
  },
];

