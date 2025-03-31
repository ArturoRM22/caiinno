import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <CarouselWithNavigation/>
      {/* Sections */}
      <section id="quienes-somos" className="min-h-screen bg-white pb-10 pt-20">
        <div className="container mx-auto ">
          {/* Title */}
          <h2 className="text-5xl font-bold mb-20">¿QUIÉNES SOMOS?</h2>

          {/* Subtitle */}
          <p className="text-4xl font-semibold mb-18">
            CAIINNO: Innovación que transforma México.
          </p>

          {/* Description */}
          <p className="text-2xl mb-18">
            CAIINNO es un centro de análisis dedicado a impulsar la innovación, la transparencia y la inclusión en México. A través de investigaciones y proyectos estratégicos, trabajamos para resolver los retos más urgentes del país y construir un futuro más próspero y equitativo.
          </p>

          {/* Button */}
          <Link
          href="/quienes-somos"
          className="inline-block px-6 py-3 bg-text-logo text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </section>


      <section id="que-hacemos" className="min-h-screen bg-que-hacemos pb-10 pt-20">
        <div className="container mx-auto text-white">
          {/* Title */}
          <h2 className="text-5xl font-bold mb-20">¿QUÉ HACEMOS?</h2>


          {/* Description */}
          <p className="text-2xl mb-18">
            En CAIINNO, nos dedicamos a impulsar la innovación como motor de cambio para construir un México más transparente, inclusivo y próspero. Somos un think tank que combina investigación, tecnología y creatividad para generar soluciones concretas a los desafíos más urgentes del país.
          </p>

          {/* Subtitle */}
          <p className="text-4xl font-semibold mb-18 text-center">
            Nuestro trabajo se enfoca en 9 áreas clave, siempre con la innovación como eje central:
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
            href="/que-hacemos"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Saber más
            </Link>
          </div>
        </div>
      </section>

      <section id="impacto" className="min-h-screen bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#004b8d]">IMPACTO</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-[#004b8d]">Índices de Referencia</h3>
                <p className="text-lg">
                  Hemos desarrollado índices nacionales de ciencia, tecnología e innovación que son referencia para gobiernos, academia y sector privado.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-[#004b8d]">Investigaciones con Impacto</h3>
                <p className="text-lg">
                  Nuestras investigaciones sobre mujeres inventoras y patentes verdes han influido en reformas legislativas y políticas públicas.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-[#004b8d]">Herramientas Innovadoras</h3>
                <p className="text-lg">
                  Creamos herramientas como <span className="font-bold">Informo Voto</span>, reconocida como una de las mejores plataformas de educación cívica en México.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-[#004b8d]">Colaboraciones Internacionales</h3>
                <p className="text-lg">
                  Colaboramos con organismos internacionales como el <span className="font-bold">Banco Interamericano de Desarrollo (BID)</span>, la <span className="font-bold">ONU</span> y la <span className="font-bold">Organización Mundial de la Propiedad Intelectual (OMPI)</span>.
                </p>
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
      <PrivacySection/>
    </div>
  );
}