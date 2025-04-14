import { publications } from '@/data/publications';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Publicaciones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Link
              key={pub.id}
              href={`/publicaciones/${pub.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Publication Image */}
              {pub.media && pub.media[0] && pub.media[0].type === 'image' && (
                <div className="relative h-64 w-full">
                  <Image
                    src={pub.media[0].url}
                    alt={pub.media[0].alt || pub.title}
                    fill
                    className="object-contain bg-gray-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              {/* Publication Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {pub.title}
                </h2>
                <div className="text-gray-600 mb-3">{pub.date}</div>
                <p className="text-gray-700 line-clamp-3">{pub.description}</p>
                
                {/* Tags */}
                {pub.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}