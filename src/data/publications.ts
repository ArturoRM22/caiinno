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
        url: '/publications/patentes-verdes-en-mexico.png',
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
          url: '/publications/mujeres-inventoras.png',
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
  {
    id: '8',
    slug: 'convocatoria-a-investigadores',
    title: 'Convocatoria a Investigadores',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/convocatoria-a-investigadores.png',
        alt: 'Convocatoria a Investigadores'
      }
    ],
    content: [], // Add content if available
    tags: [] // Add tags if available
  },
  /*{
    id: '9',
    slug: 'mapa-del-seguimiento-al-covid',
    title: 'Mapa del seguimiento al covid',
    date: '', // Add date if available
    description: 'Mapa de seguimiento al COVID-19 en México con datos oficiales',
    media: [
      {
        type: 'image',
        url: '/publications/covid.png',
        alt: 'Mapa de seguimiento al COVID-19'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'El presente es un esfuerzo desde la sociedad civil organizada, para que los ciudadanos puedan visualizar de una forma práctica y sencilla con información oficial del gobierno mexicano, cuál es el desempeño del virus en el país.'
      },
      {
        type: 'paragraph',
        content: 'ÚNICAMENTE se utilizan como fuente los datos de la Secretaria de Salud del Gobierno Federal, disponibles en la siguiente liga: Datos Abiertos – Dirección General de Epidemiología'
      },
      {
        type: 'paragraph',
        content: 'Los datos se están actualizando todos los días a las 20:00 horas, tiempo del centro de México.'
      }
    ],
    tags: ['COVID-19', 'Mapa', 'Datos']
  },*/
  {
    id: '10',
    slug: 'premio-innovacion-datos-personales',
    title: 'Premio de innovacion y buenas practicas en la proteccion de los datos personales 2019',
    date: '2019',
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/ganador.png',
        alt: 'Premio de innovación en protección de datos personales'
      }
    ],
    content: [], // Add content if available
    tags: ['Premio', 'Datos Personales', 'Innovación']
  },
  {
    id: '11',
    slug: 'alumni-engagement-innovation-found',
    title: 'ALUMNI ENGAGEMENT INNOVATION FOUND 2017',
    date: '2017',
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/alumni.png',
        alt: 'ALUMNI ENGAGEMENT INNOVATION FOUND'
      }
    ],
    content: [], // Add content if available
    tags: ['Alumni', 'Innovación']
  },
  /*{
    id: '12',
    slug: 'invenciones-y-genero',
    title: 'Invenciones y género en México a nivel estatal',
    date: '', // Add date if available
    description: 'Estadísticas sobre el papel de las inventoras en la propiedad industrial en México',
    media: [
      {
        type: 'image',
        url: '/publications/invenciones-genero.png',
        alt: 'Invenciones y género en México'
      }
    ],
    content: [
      {
        type: 'paragraph',
        content: 'La siguiente información estadística que presenta CAIINNO, representa el esfuerzo por concentrar en un sólo lugar la mayor cantidad de información estadística referente al papel de las inventoras dentro de la propiedad industrial en México.'
      },
      {
        type: 'paragraph',
        content: 'Nota técnica: los datos dentro el gráfico interactivo están expresados en número de invenciones y no en número de inventoras que aparecen en la solicitud de patente.'
      }
    ],
    tags: ['Invenciones', 'Género', 'Patentes', 'Mujeres Inventoras']
  },*/
  {
    id: '13',
    slug: 'propiedad-intelectual-creatividad',
    title: 'PROPIEDAD INTELECTUAL, CREATIVIDAD E INNOVACIÓN PARA EL DESARROLLO DE MÉXICO',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/fesf.png',
        alt: 'Propiedad Intelectual para el Desarrollo de México'
      }
    ],
    content: [], // Add content if available
    tags: ['Propiedad Intelectual', 'Creatividad', 'Innovación']
  },
  /*
  {
    id: '14',
    slug: 'financiamiento-para-emprendedores',
    title: 'Recursos y financiamiento para emprendedores',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/financiamiento-emprendedores.png',
        alt: 'Financiamiento para emprendedores'
      }
    ],
    content: [], // Add content if available
    tags: ['Financiamiento', 'Emprendedores']
  },
  {
    id: '15',
    slug: 'emprendedores-america-latina',
    title: 'Emprendedores América Latina',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/financiamiento-emprendedores-latam.png',
        alt: 'Emprendedores América Latina'
      }
    ],
    content: [], // Add content if available
    tags: ['Emprendedores', 'América Latina']
  },*/
  {
    id: '16',
    slug: 'formacion-ciudadana-para-emprendedores',
    title: 'Formación Ciudadana para Emprendedores',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/formacion-ciudadana-emprendedores.jpg',
        alt: 'Formación Ciudadana para Emprendedores'
      },
      {
        type: 'youtube',
        url: 'lS12Y_OW3nE',
        alt: 'Video sobre Formación Ciudadana para Emprendedores'
      }
    ],
    content: [], // Add content if available
    tags: ['Formación Ciudadana', 'Emprendedores']
  },
  {
    id: '17',
    slug: 'panorama-estatal-ciencia-tecnologia',
    title: 'Panorama estatal de Ciencia, Tecnología e Innovación',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/panorama-ciencia-tecnologia.png',
        alt: 'Panorama estatal de Ciencia, Tecnología e Innovación'
      }
    ],
    content: [], // Add content if available
    tags: ['Ciencia', 'Tecnología', 'Innovación']
  },
  {
    id: '18',
    slug: 'habilidades-para-la-innovacion',
    title: 'HABILIDADES PARA LA INNOVACION',
    date: '', // Add date if available
    description: '', // Add description if available
    media: [
      {
        type: 'image',
        url: '/publications/habilidad-innovacion.png',
        alt: 'Habilidades para la Innovación'
      }
    ],
    content: [], // Add content if available
    tags: ['Habilidades', 'Innovación']
  }
];