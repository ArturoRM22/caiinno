import { PublicationProps } from "@/models/Publication";
import Image from "next/image";
import PersuasiveYouTube from "@/components/lazyYoutube";

export default function Publication({
  title,
  date,
  description,
  media,
  content,
  downloadLink,
  tags,
  authors
}: PublicationProps) {
  // Find the first YouTube video in media array
  const videoMedia = media?.find(item => item.type === 'youtube');
  // Find the first image in media array if there's no video
  const imageMedia = !videoMedia ? media?.find(item => item.type === 'image') : null;

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">{title}</h1>
        
        {/* Media Section */}
        <div className="mb-12">
          {videoMedia ? (
            <PersuasiveYouTube id={videoMedia.url} />
          ) : imageMedia && (
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={imageMedia.url}
                alt={imageMedia.alt || title}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>

        <div className="space-y-8 mb-12">
          {content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">{section.content}</h2>
                    {content[index + 1]?.type === 'paragraph' && (
                      <p className="mb-4">{content[index + 1].content}</p>
                    )}
                    {typeof downloadLink === 'object' && 
                     downloadLink && 
                     section.downloadKey && 
                     downloadLink[section.downloadKey] && (
                      <a 
                        href={downloadLink[section.downloadKey]}
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        {section.downloadKey === 'database' ? 'Acceder' : 'Descargar'}
                      </a>
                    )}
                  </div>
                );
              case 'list':
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {(section.content as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case 'quote':
                return (
                  <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
                    {section.content}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>

        {tags && (
          <div className="mt-8 flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}