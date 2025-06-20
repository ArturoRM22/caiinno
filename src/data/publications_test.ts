// publications.ts (updated with multilingual content)

import { Publication } from "@/models/Publication";

export const publications: Publication[] = [
    {
        id: '1',
        slug: 'green-patents',
        date: '2024',
        media: [
            {
                type: 'image',
                url: '/publications/patentes-verdes-en-mexico.png',
                alt: 'Patentes verdes en México'
            }
        ],
        downloadLink: {
            'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2024/10/Patentes-verdes-final-CAIINNO.pdf',
            'english-version': 'https://www.caiinno.org/wp-content/uploads/2024/10/fi-Green-Patents-and-Gender-Identification-in-Mexi_241028_162912.pdf' 
        },
        multilingual: {
            es: {
                title: 'Patentes verdes en México',
                description: 'Análisis de las patentes verdes en México',
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
                        type: 'heading',
                        content: 'Download the english version of the publication in this link',
                        downloadKey: 'english-version'
                    }
                ],
                tags: ['Patentes', 'Sustentabilidad', 'Innovación']
            },
            en: {
                title: 'Green Patents in Mexico',
                description: 'Analysis of green patents in Mexico',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Analysis of green patents in Mexico'
                    },
                    {
                        type: 'heading',
                        content: 'Download our publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Descarga la versión en español de la publicación en este link',
                        downloadKey: 'spanish-version'
                    }
                ],
                tags: ['Patents', 'Sustainability', 'Innovation']
            }
        }
    },
    {
        id: '2',
        slug: 'mujeres-inventoras-latam',
        date: '2024',
        media: [
            {
                type: 'image',
                url: '/publications/glipa_pres.png',
                alt: 'Mujeres Inventoras América Latina'
            }
        ],
        downloadLink: {
            'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2023/08/Mujeres-CAIINNO-GLIPA.pdf',
            'english-version': 'https://www.caiinno.org/wp-content/uploads/2024/01/INGLES-CAIINNO-GLIPA.pdf',
            'portugues-version': 'https://www.caiinno.org/wp-content/uploads/2024/01/PORTUGUES-CAIINNO-GLIPA.pdf'
        },
        multilingual: {
            es: {
                title: 'Mujeres Inventoras América Latina',
                description: 'Estudio sobre mujeres inventoras en América Latina',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Estudio sobre mujeres inventoras en América Latina'
                    },
                    {
                        type: 'heading',
                        content: 'Descarga nuestra publicación en este link',
                        downloadKey: 'spanish-version'
                    },
                    {
                        type: 'heading',
                        content: 'Download the english version of the publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Baixe a versão em português da publicação neste link',
                        downloadKey: 'portugues-version'
                    }
                ],
                tags: ['Mujeres Inventoras', 'América Latina', 'Innovación']
            },
            en: {
                title: 'Women Inventors Latin America',
                description: 'Study on women inventors in Latin America',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Study on women inventors in Latin America'
                    },
                    {
                        type: 'heading',
                        content: 'Download our publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Descarga la versión en español de la publicación en este link',
                        downloadKey: 'spanish-version'
                    },
                    {
                        type: 'heading',
                        content: 'Baixe a versão em português da publicação neste link',
                        downloadKey: 'portugues-version'
                    }
                ],
                tags: ['Women Inventors', 'Latin America', 'Innovation']
            }
        }
    },
    {
        id: '3',
        slug: 'automatizacion-empleos-covid',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/automat.jpg',
            alt: 'Automatización de empleos en la economía creativa'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2023/02/Automatizacion-COVID-y-Economia-creativa-Final-.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2023/02/PROBABILITY-OF-JOB-AUTOMATION-IN-THE-MEXICAN-CREATIVE-ECONOMY.pdf'
        },
        multilingual: {
          es: {
            title: 'PROBABILIDAD Y EFECTO DEL COVID-19 EN LA AUTOMATIZACIÓN DE EMPLEOS EN LA ECONOMÍA CREATIVA DE MÉXICO',
            description: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo',
            content: [
              {
                type: 'paragraph',
                content: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the english version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['COVID-19', 'Automatización', 'Economía Creativa']
          },
          en: {
            title: 'PROBABILITY AND EFFECT OF COVID-19 ON JOB AUTOMATION IN MEXICO’S CREATIVE ECONOMY',
            description: 'Analysis of the impact of COVID-19 on job automation in the creative sector',
            content: [
              {
                type: 'paragraph',
                content: 'Analysis of the impact of COVID-19 on job automation in the creative sector'
              },
              {
                type: 'heading',
                content: 'Download our publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Descarga la versión en español de la publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['COVID-19', 'Automation', 'Creative Economy']
          }
        }
      },
      {
        id: '4',
        slug: 'economia-creativa-mexico',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/ecm-1.png',
            alt: 'Economía Creativa México'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/09/Economia-Creativa.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/10/Creative-Economy-final.pdf'
        },
        multilingual: {
          es: {
            title: 'Economía Creativa: México y su impacto en la economía nacional',
            description: 'Análisis del impacto de la economía creativa en México',
            content: [
              {
                type: 'paragraph',
                content: 'Análisis del impacto de la economía creativa en México'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the english version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['Economía Creativa', 'México', 'Impacto Económico']
          },
          en: {
            title: 'Creative Economy: Mexico and Its Impact on the National Economy',
            description: 'Analysis of the impact of the creative economy in Mexico',
            content: [
              {
                type: 'paragraph',
                content: 'Analysis of the impact of the creative economy in Mexico'
              },
              {
                type: 'heading',
                content: 'Download our publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Descarga la versión en español de la publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Creative Economy', 'Mexico', 'Economic Impact']
          }
        }
      },
      {
        id: '5',
        slug: 'economia-creativa',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/bi_slider.jpg',
            alt: 'Economía Creativa'
          },
          {
            type: 'image',
            url: '/publications/convocatoria-a-investigadores.png',
            alt: 'Economía Creativa'
          },
          {
            type: 'youtube',
            url: '0M7YtW3MTjs',
            alt: 'Economía Creativa'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/01/Economia-Conocimiento-y-Creativa-CAIINNO-BID.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/01/Knowledge-economy-and-creative-economy-CAIINNO-BID.pdf'
        },
        multilingual: {
          es: {
            title: 'Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico', 
            description: 'Estudio sobre la economía creativa',
            content: [
              {
                type: 'paragraph',
                content: 'Estudio sobre la economía creativa'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the english version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['Economía Creativa', 'Innovación']
          },
          en: {
            title: 'Creative Economy',
            description: 'Study on the creative economy',
            content: [
              {
                type: 'paragraph',
                content: 'Study on the creative economy'
              },
              {
                type: 'heading',
                content: 'Download our publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Descarga la versión en español de la publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Creative Economy', 'Innovation']
          }
        }
      },
      /*{
        id: '6',
        slug: 'industrias-creativas',
        date: '2024-03-20',
        media: [
          {
            type: 'image',
            url: '/publications/indcreat.png',
            alt: 'Industrias Creativas'
          }
        ],
        multilingual: {
          es: {
            title: 'Industrias Creativas',
            description: '...',
            content: [
              {
                type: 'paragraph',
                content: '...'
              }
            ],
            tags: ['Industrias Creativas']
          },
          en: {
            title: 'Creative Industries',
            description: '...',
            content: [
              {
                type: 'paragraph',
                content: '...'
              }
            ],
            tags: ['Creative Industries']
          }
        }
      },*/
      {
        id: '7',
        slug: 'mujeres-inventoras',
        date: '2024',
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
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/04/Mujeres-Inventoras-2017-2020_CAIINNO.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/04/Mexican-women-inventors-CAIINNO.pdf'
        },
        multilingual: {
          es: {
            title: 'Mujeres Inventoras: Patentando en México',
            description: 'Investigación sobre mujeres inventoras y patentes en México, incluyendo análisis de los períodos 2014-2016 y 2017-2020.',
            content: [
              {
                type: 'heading',
                content: 'Publicación 2017-2020 (Versión Español)',
                downloadKey: 'spanish-version'
              },
              {
                type: 'paragraph',
                content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Español): Patentando en México'
              },
              {
                type: 'heading',
                content: 'Publicación 2017-2020 (Versión Inglés)',
                downloadKey: 'english-version'
              },
              {
                type: 'paragraph',
                content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Inglés): Patentando en México'
              }
            ],
            tags: ['Mujeres Inventoras', 'Patentes', 'Investigación', 'PatentesRosas']
          },
          en: {
            title: 'Women Inventors: Patenting in Mexico',
            description: 'Research on women inventors and patents in Mexico, including analysis for the periods 2014–2016 and 2017–2020.',
            content: [
              {
                type: 'heading',
                content: 'Publication 2017-2020 (Spanish Version)',
                downloadKey: 'spanish-version'
              },
              {
                type: 'paragraph',
                content: 'Download our Spanish-language publication on Women Inventors 2017-2020: Patenting in Mexico'
              },
              {
                type: 'heading',
                content: 'Publication 2017-2020 (English Version)',
                downloadKey: 'english-version'
              },
              {
                type: 'paragraph',
                content: 'Download our English-language publication on Women Inventors 2017-2020: Patenting in Mexico'
              }
            ],
            tags: ['Women Inventors', 'Patents', 'Research', 'PinkPatents']
          }
        }
      },
      {
        id: '8',
        slug: 'convocatoria-a-investigadores',
        date: '',
        media: [
          {
            type: 'image',
            url: '/publications/convocatoria-a-investigadores.png',
            alt: 'Convocatoria a Investigadores'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2021/06/Convocatoria-a-Investigadores.pdf'
        },
        multilingual: {
          es: {
            title: 'Convocatoria a Investigadores',
            description: 'Propuestas para la recuperación de América Latina y el Caribe',
            content: [
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Convocatoria', 'Investigación', 'América Latina']
          },
          en: {
            title: 'Call for Researchers',
            description: 'Proposals for the recovery of Latin America and the Caribbean',
            content: [
              {
                type: 'heading',
                content: 'Download our publication at this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Call', 'Research', 'Latin America']
          }
        }
      },
      /*{
        id: '11',
        slug: 'alumni-engagement-innovation-found',
        date: '2017',
        media: [
          {
            type: 'image',
            url: '/publications/alumni.png',
            alt: 'ALUMNI ENGAGEMENT INNOVATION FOUND'
          }
        ],
        multilingual: {
          es: {
            title: 'Fondo de Innovación para la Participación de Alumni 2017',
            description: 'Fondo destinado a fortalecer la innovación y el compromiso de exalumnos.',
            content: [],
            tags: ['Alumni', 'Innovación']
          },
          en: {
            title: 'ALUMNI ENGAGEMENT INNOVATION FUND 2017',
            description: 'Fund to strengthen innovation and engagement among alumni.',
            content: [],
            tags: ['Alumni', 'Innovation']
          }
        }
      },*/
      {
        id: '13',
        slug: 'propiedad-intelectual-creatividad',
        date: '',
        media: [
          {
            type: 'image',
            url: '/publications/fesf.png',
            alt: 'Propiedad Intelectual para el Desarrollo de México'
          }
        ],
        multilingual: {
          es: {
            title: 'Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México',
            description: '',
            content: [
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Propiedad Intelectual', 'Creatividad', 'Innovación']
          },
          en: {
            title: 'Intellectual Property, Creativity and Innovation for Mexico\'s Development',
            description: '',
            content: [
              {
                type: 'heading',
                content: 'Download our publication at this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Intellectual Property', 'Creativity', 'Innovation']
          }
        },
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/07/PI-Algunas-Propuestas-CAIINNO.pdf'
        }
      },  
    {
    id: '16',
    slug: 'formacion-ciudadana-para-emprendedores',
    date: '2018',
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
    multilingual: {
      es: {
        title: 'Formación Ciudadana para Emprendedores',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'FOMACIÓN CÍVICA Y ÉTICA EN MÉXICO',
            downloadKey: 'formacion-civica-etica'
          },
          {
            type: 'heading',
            content: 'Resumen Ejecutivo "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'resumen-ejecutivo'
          },
          {
            type: 'heading',
            content: 'EMPRENDIMIENTO Y GÉNERO EN MÉXICO',
            downloadKey: 'emprendimiento-genero-mexico'
          },
          {
            type: 'heading',
            content: 'VALORES EN LOS NEGOCIOS Y EMPRENDIMIENTO',
            downloadKey: 'valores-negocios-emprendimiento'
          },
          {
            type: 'heading',
            content: 'EMPRENDIMIENTO Y GÉNERO',
            downloadKey: 'emprendimiento-genero'
          },
          {
            type: 'heading',
            content: 'EVALUACIÓN PARTICIPATIVA',
            downloadKey: 'evaluacion-participativa'
          },
          {
            type: 'heading',
            content: 'METODOLOGÍA DEL TALLER DE "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'metodologia-taller'
          },
          {
            type: 'heading',
            content: 'IMPLEMENTACIÓN DEL TALLER DE "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'implementacion-taller'
          }
        ],
        tags: ['Formación Ciudadana', 'Emprendedores']
      },
      en: {
        title: 'Civic Training for Entrepreneurs',
        description: '',
        content: [],
        tags: ['Civic Training', 'Entrepreneurs']
      }
    },
    downloadLink: {
      'formacion-civica-etica': 'https://www.caiinno.org/wp-content/uploads/2017/07/formacion-civica1.pdf',
      'resumen-ejecutivo': 'https://www.caiinno.org/wp-content/uploads/2017/07/Resumen-ejecutivo.pdf',
      'emprendimiento-genero-mexico': 'https://www.caiinno.org/wp-content/uploads/2017/05/emprendimiento-y-g%C3%A9nero.pdf',
      'valores-negocios-emprendimiento': 'https://www.caiinno.org/wp-content/uploads/2017/07/valores-en-los-negocios.pdf',
      'emprendimiento-genero': 'https://www.caiinno.org/wp-content/uploads/2017/07/emprendimiento-y-genero.pdf',
      'evaluacion-participativa': 'https://www.caiinno.org/wp-content/uploads/2017/07/EVALUACO%C3%ACN-1.pdf',
      'metodologia-taller': 'https://www.caiinno.org/wp-content/uploads/2017/07/Metodolog%C3%ADa-del-proyecto-Taller-Emprendimiento-con-Valores.pdf',
      'implementacion-taller': 'https://www.caiinno.org/wp-content/uploads/2017/07/Implementaci%C3%B3n-Taller-Emprendimiento-con-Valores.pdf'
    }
  },
  {
    id: '17',
    slug: 'panorama-estatal-ciencia-tecnologia',
    date: '',
    media: [
      {
        type: 'image',
        url: '/publications/panorama-ciencia-tecnologia.png',
        alt: 'Panorama estatal de Ciencia, Tecnología e Innovación'
      }
    ],
    multilingual: {
      es: {
        title: 'Panorama estatal de Ciencia, Tecnología e Innovación',
        description: '',
        content: [],
        tags: ['Ciencia', 'Tecnología', 'Innovación']
      },
      en: {
        title: 'State Panorama of Science, Technology, and Innovation',
        description: '',
        content: [],
        tags: ['Science', 'Technology', 'Innovation']
      }
    }
  },
  {
    id: '18',
    slug: 'habilidades-para-la-innovacion',
    date: '',
    media: [
      {
        type: 'image',
        url: '/publications/habilidad-innovacion.png',
        alt: 'Habilidades para la Innovación'
      }
    ],
    multilingual: {
      es: {
        title: 'Habilidades para la Innovación',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'Skills for Innovation',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.britishcouncil.org.mx/sites/default/files/resumen_ejecutivo_habilidades_para_la_innovacion.pdf'
    }
  },
  {
    id: '19',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innvacion',
    date: '2025',
    media: [
      {
        type: 'image',
        url: '/publications/IndiceNacionalPublication.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2025'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice Nacional de Ciencia, Tecnología e Innovación 2025',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National Index of Science, Technology and Innovation 2025',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2025/05/CAIINNO-INDICE-2025.pdf'
    }
  }, 
  {
    id: '20',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innovacion-2018',
    date: '2018',
    media: [
      {
        type: 'image',
        url: '/publications/ÍNDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2018.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2018'
      },
      {
        type: 'youtube',
        url: '2pqrob4I6iU',
        alt: '#INCTI-CAIINNO2018'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice Nacional de Ciencia, Tecnología e Innovación 2018',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          },
          {
            type: 'heading',
            content: 'Descarga la versión anterior en este link',
            downloadKey: 'spanish-version-previous'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National Index of Science, Technology and Innovation 2018',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'english-version'
          },
          {
            type: 'heading',
            content: 'Download the previous version at this link',
            downloadKey: 'spanish-version-previous'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/12/INDICE-2018.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/06/1.2ENINDICE-CTI-2018-2018-briefing.pdf',
      'spanish-version-previous': 'https://www.caiinno.org/wp-content/uploads/2016/01/INCTI-CAIINNO2015.pdf'
    }
  },
  {
    id: '21',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innovacion-2015',
    date: '2015',
    media: [
      {
        type: 'image',
        url: '/publications/indice-nacional-de-ciencia-2015.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2015'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice Nacional de Ciencia, Tecnología e Innovación 2015',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National Index of Science, Technology and Innovation 2015',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'english-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2016/01/INCTI-CAIINNO2015.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/06/EN-Briefing-INCTI-CAIINNO-2015.pdf'
    }
  },
  {
    id: '22',
    slug: 'panorama-de-la-propiedad-intelectual-en-mexico-otra-perspectiva',
    date: '2016',
    media: [
      {
        type: 'image',
        url: '/publications/PanoramaPropiedadIntelectualMexico.png',
        alt: 'PANORAMA DE LA PROPIEDAD INTELECTUAL EN MÉXICO: OTRA PERSPECTIVA'
      }
    ],
    multilingual: {
      es: {
        title: 'PANORAMA DE LA PROPIEDAD INTELECTUAL EN MÉXICO: OTRA PERSPECTIVA',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'INTELLECTUAL PROPERTY OVERVIEW IN MEXICO: ANOTHER PERSPECTIVE',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2016/08/Estado-general-de-la-propiedad-intelectual-en-M%C3%A9xico.pdf'
    }
  },
  {
    id: '23',
    slug: 'emprendimiento-y-genero-en-mexico',
    date: '2017',
    media: [
      {
        type: 'image',
        url: '/publications/EmprendimientoYGeneroEnMexico.png',
        alt: 'EMPRENDIMIENTO Y GÉNERO EN MÉXICO'
      }
    ],
    multilingual: {
      es: {
        title: 'EMPRENDIMIENTO Y GÉNERO EN MÉXICO',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'ENTREPRENEURSHIP AND GENDER IN MEXICO',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2017/05/emprendimiento-y-g%C3%A9nero.pdf'
    }
  },
  {
    id: '24',
    slug: 'patentes-verdes-en-el-pais',
    date: '2025',
    media: [
      {
        type: 'image',
        url: '/publications/PatentesVerdesEnElPais.png',
        alt: 'PATENTES VERDES EN  EL PAÍS'
      }
    ],
    multilingual: {
      es: {
        title: 'PATENTES VERDES EN EL PAÍS',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Patentes', 'Innovación', 'Sustentabilidad', 'Medio Ambiente']
      },
      en: {
        title: 'GREEN PATENTS IN THE COUNTRY',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Innovation',  'Sustainability', 'Environment', 'Patents']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2025/06/patentesverdesenelpais.pdf'
    }
  },
  {
    id: '25',
    slug: 'mujeres-inventoras-patentando-en-mexico',
    date: '2018',
    media: [
      {
        type: 'image',
        url: '/publications/mujeres-inventoras-patentando-en-mexico.png',
        alt: 'Mujeres Inventoras: Patentando en México'
      }
    ],
    multilingual: {
      es: {
        title: 'Mujeres Inventoras: Patentando en México ¿Cómo vamos?',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Patentes', 'Innovación', 'Mujeres', 'Inventoras']
      },
      en: {
        title: 'Women Inventors: Patenting in Mexico How are we doing?',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication at this link',
            downloadKey: 'english-version'
          }
        ],
        tags: ['Innovation',  'Women', 'Patents', 'Inventors']
      
      },
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/12/Mujeres-Inventoras.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/07/Women-inventors.pdf'
    }
  }
];


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





