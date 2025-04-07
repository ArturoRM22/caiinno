import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import PublicationsCarousel from "@/components/Carousel/publications-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <CarouselWithNavigation/>
      {/* Sections */}
      <section id="quienes-somos" className="min-h-screen bg-quienes-somos pb-10 pt-20">
        <div className="container mx-auto text-white">
          {/* Title */}
          <h2 className="text-5xl font-bold mb-20">¿QUIÉNES SOMOS?</h2>

          {/* Subtitle */}
          <p className="text-4xl font-semibold mb-18">
            CAIINNO: Innovación que transforma México.
          </p>

          {/* Description */}
          <p className="text-2xl mb-18">
            CAIINNO es una think tank constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un cambio positivo en México, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la beca Fulbright.
          </p>

          {/* Button */}
          <Link
          href="/quienes-somos"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </section>

      <section id="nuestro-objetivo" className="min-h-screen bg-que-hacemos pb-10 pt-20">
      <div className="container mx-auto text-white">
          {/* Title */}
          <h2 className="text-5xl font-bold mb-20">NUESTRO OBJETIVO</h2>

          {/* Description */}
          <p className="text-2xl mb-8">
            Ayudar a resolver algunos de los retos que enfrenta México en 9 áreas, a través de investigaciones, propuestas y ejecución de proyectos, que permitan tener un país más transparente, incluyente e innovador. Para ello aplicamos los principios de la INNOVACIÓN así como nuestra experiencia y conocimientos.
          </p>

          <p className="text-3xl mb-18 text-center font-bold">
            Además, buscamos que nuestros proyectos tengan un enfoque transversal que beneficie e impacte a las 9 áreas de trabajo:
          </p>

          <div className="w-full flex justify-center items-center gap-4">
            <Image
              src="/9areas.jpg"
              alt="9 areas"
              width={1000}
              height={100}
              priority
            />
          </div>

          {/* Button */}
          <div className="flex justify-center items-center mt-20">
            <Link
            href="/nuestro-objetivo"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Saber más
            </Link>
          </div>
        </div>
      </section>

      <section id="impacto" className="min-h-screen bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">IMPACTO</h2>
          
          <div className="space-y-6 mb-5 text-lg md:text-2xl">
            <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-black bg-white text-black">
              {/* Image container with fixed dimensions */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/iconoReformas.png"
                  alt="icono reformas de ley"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/iniciativas-de-reforma">
                  <h3 className="font-semibold mb-2">Reformas</h3>
                  <div>
                    <h3 className="mb-2">Hemos logrado provocar la generación de reformas de ley</h3>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-black bg-white text-black">
              {/* Image container with fixed dimensions */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/iconoAgendas.png"
                  alt="icono agendas"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/iniciativas-de-reforma">
                  <h3 className="font-semibold mb-2">Investigaciones con Impacto</h3>
                  <div>
                    <h3 className="mb-2">Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.</h3>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border-l-4 border-black bg-white text-black">
              {/* Image container with fixed dimensions */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/iconoLibros.png"
                  alt="icono libros"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/iniciativas-de-reforma">
                  <h3 className="font-semibold mb-2">Información confiable</h3>
                  <div>
                    <h3 className="mb-2">Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center items-center mt-20">
          <Link
            href="/impacto"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </section>
        <PublicationsCarousel />
        <PrivacySection/>
    </div>
  );
}