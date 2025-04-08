import Image from "next/image"
import Link from "next/link"

interface Publication {
  image: string
  title: string
  url: string
  description?: string
}

const publications: Publication[] = [
  {
    image: "/publications/mujeres-inventoras-patentando-en-mexico.png",
    title: "Mujeres Inventoras: Patentando en México",
    url: "/publicaciones/mujeres-inventoras",
    description: "Un análisis detallado sobre la participación de las mujeres en el sistema de patentes en México."
  },
  {
    image: "/publications/ramo-38.png",
    title: "Observatorio Electoral Ramo 38",
    url: "/publicaciones/ramo-38",
    description: "Seguimiento y análisis del gasto público en materia electoral en México."
  },
  {
    image: "/publications/industrias-creativas.png",
    title: "Banco de datos de industrias culturales y creativas",
    url: "/publicaciones/industrias-creativas",
    description: "Base de datos integral sobre las industrias culturales y creativas en México."
  },
  {
    image: "/publications/indice-cti-2018.png",
    title: "ÍNDICE NACIONAL DE CIENCIA, TECNOLOGÍA E INNOVACIÓN 2018",
    url: "/publicaciones/indice-cti-2018",
    description: "Evaluación integral del estado de la ciencia, tecnología e innovación en México."
  }
]

export default function Publicaciones() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">PUBLICACIONES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <Link 
              href={publication.url} 
              key={index}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {publication.title}
                </h2>
                {publication.description && (
                  <p className="text-gray-600">
                    {publication.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}