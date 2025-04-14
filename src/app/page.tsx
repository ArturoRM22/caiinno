import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import PublicationsCarousel from "@/components/Carousel/publications-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <section id="main" className="relative min-h-screen overflow-hidden">
        <CarouselWithNavigation/>
      </section>
      {/* Sections */}
      <section id="quienes-somos" className="relative min-h-screen pb-10 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/carousel/6.jpg" // Make sure to add your image to the public folder
            alt="Background Quienes Somos"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto text-white relative z-10">
          {/* Title */}
          <h2 className="text-5xl font-bold mb-20">¿QUIÉNES SOMOS?</h2>

          {/* Subtitle */}
          <p className="text-4xl font-semibold mb-18">
            CAIINNO: Innovación que transforma México.
          </p>

          {/* Description */}
          <p className="text-2xl mb-18 text-justify">
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
          <p className="text-2xl mb-8 text-justify">
            Ayudar a resolver algunos de los retos que enfrenta México en 9 áreas, a través de investigaciones, propuestas y ejecución de proyectos, que permitan tener un país más transparente, incluyente e innovador. Para ello aplicamos los principios de la INNOVACIÓN así como nuestra experiencia y conocimientos.
          </p>

          <p className="text-3xl mb-18 text-center font-bold text-justify">
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

      <section id="que-pretendemos" className="min-h-screen bg-white pb-10 pt-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-20">¿QUÉ PRETENDEMOS?</h2>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/quePretendemos_2.jpg"
              alt="¿Qué pretendemos?"
              width={1000}
              height={100}
              priority
            />
          </div>
        </div>
      </section>

      <section id="como-lo-hacemos" className="min-h-screen bg-white pb-10 pt-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-20">¿CÓMO LO HACEMOS?</h2>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/comoLoHacemos_2.jpg"
              alt="¿Cómo lo hacemos?"
              width={1000}
              height={100}
              priority
            />
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
                    <h3 className="mb-2 text-justify">Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.</h3>
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
                    <h3 className="mb-2 text-justify">Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales</h3>
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