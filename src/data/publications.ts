import { Publication } from "@/models/Publication";

export const publications: Publication[] = [
    {
    id: '1',
    slug: 'green-patents',
    title: 'Patentes verdes en México',
    date: '2024',
    description: 'Análisis de las patentes verdes en México',
    media: [
        {
        type: 'image',
        url: '/publications/gree-patents-in-mexico.png',
        alt: 'Patentes verdes en México'
        }
    ],
    content: [
        {
        type: 'paragraph',
        content: 'Análisis de las patentes verdes en México'
        },
        {
        type: 'heading',
        content: 'Descarga nuestra publicación en este link',
        downloadKey: 'spanish-version'
        },
        {
        type: 'paragraph',
        content: 'Descarga nuestra publicación en este link'
        },
        {
        type: 'heading',
        content: 'Download the english version of the publication in this link',
        downloadKey: 'english-version'
        },
        {
        type: 'paragraph',
        content: 'Download the english version of the publication in this link'
        }
    ],
    downloadLink: {
        'spanish-version': '#', // Replace with actual download link
        'english-version': '#'  // Replace with actual download link
    },
    tags: ['Patentes', 'Sustentabilidad', 'Innovación']
    },
  {
    id: '2',
    slug: 'mujeres-inventoras-latam',
    title: 'Mujeres Inventoras América Latina',
    date: '2024',
    description: 'Estudio sobre mujeres inventoras en América Latina',
    media: [
      {
        type: 'image',
        url: '/publications/glipa_pres.png',
        alt: 'Mujeres Inventoras América Latina'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'Estudio sobre mujeres inventoras en América Latina'
      }
    ],
    tags: ['Mujeres Inventoras', 'América Latina', 'Innovación']
  },
  {
    id: '3',
    slug: 'automatizacion-empleos-covid',
    title: 'PROBABILIDAD Y EFECTO DEL COVID-19 EN LA AUTOMATIZACIÓN DE EMPLEOS EN LA ECONOMÍA CREATIVA DE MÉXICO',
    date: '2024',
    description: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo',
    media: [
      {
        type: 'image',
        url: '/publications/automat.jpg',
        alt: 'Automatización de empleos en la economía creativa'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo'
      }
    ],
    tags: ['COVID-19', 'Automatización', 'Economía Creativa']
  },
  {
    id: '4',
    slug: 'economia-creativa-mexico',
    title: 'Economía Creativa: México y su impacto en la economía nacional',
    date: '2024',
    description: 'Análisis del impacto de la economía creativa en México',
    media: [
      {
        type: 'image',
        url: '/publications/ecm-1.png',
        alt: 'Economía Creativa México'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'Análisis del impacto de la economía creativa en México'
      }
    ],
    tags: ['Economía Creativa', 'México', 'Impacto Económico']
  },
  {
    id: '5',
    slug: 'economia-creativa',
    title: 'Economía Creativa',
    date: '2024',
    description: 'Estudio sobre la economía creativa',
    media: [
      {
        type: 'image',
        url: '/publications/bi_slider.jpg',
        alt: 'Economía Creativa'
      },
      {
        type: 'youtube',
        url: '0M7YtW3MTjs',
        alt: 'Economía Creativa'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'Estudio sobre la economía creativa'
      }
    ],
    tags: ['Economía Creativa', 'Innovación']
  },
  {
    id: '6',
    slug: 'industrias-creativas',
    title: 'Industrias Creativas',
    date: '2024-03-20',
    description: '...',
    media: [
      {
        type: 'image',
        url: '/publications/indcreat.png',
        alt: 'Industrias Creativas'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: '...'
      }
    ],
  },
  {
    id: '7',
    slug: 'mujeres-inventoras',
    title: 'Mujeres Inventoras: Patentando en México',
    date: '2024',
    description: 'Investigación sobre mujeres inventoras y patentes en México, incluyendo análisis de los períodos 2014-2016 y 2017-2020.',
    media: [
        {
          type: 'image',
          url: '/publications/mujeres-inventoras-patentando-en-mexico.png',
          alt: 'Imagen Mujeres Inventoras'
        },
      {
        type: 'youtube',
        url: 'ocekswReZIA',
        alt: 'Video sobre Mujeres Inventoras'
      }
    ],
    content: [
      {
        type: 'heading',
        content: 'Publicación 2017-2020 (Versión Español)',
        downloadKey: 'esp-2017-2020'
      },
      {
        type: 'paragraph',
        content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Español): Patentando en México'
      },
      {
        type: 'heading',
        content: 'Publicación 2017-2020 (Versión Inglés)',
        downloadKey: 'eng-2017-2020'
      },
      {
        type: 'paragraph',
        content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Inglés): Patentando en México'
      },
      {
        type: 'heading',
        content: 'Publicación 2014-2016',
        downloadKey: '2014-2016'
      },
      {
        type: 'paragraph',
        content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2014-2016: Patentando en México #PatentesRosas'
      },
      {
        type: 'heading',
        content: 'Banco de datos',
        downloadKey: 'database'
      },
      {
        type: 'paragraph',
        content: 'Para acceder al Banco de Datos sobre Mujeres Inventoras: Patentando en México #PatentesRosas, da click aquí.'
      }
    ],
    downloadLink: {
      'esp-2017-2020': '#',
      'eng-2017-2020': '#',
      '2014-2016': '#',
      'database': '#'
    },
    tags: ['Mujeres Inventoras', 'Patentes', 'Investigación', 'PatentesRosas']
  },
]; 