import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <div className="bg-light-blue pt-26">
        <div className="container mx-auto pb-60">
          <div className="flex flex-col justify-center gap-8 text-white">
            <a href="#quienes-somos" className="text-5xl font-semibold hover:text-black">
              ¿QUIÉNES SOMOS?
            </a>
            <a href="#que-hacemos" className="text-5xl font-semibold hover:text-black">
              ¿QUÉ HACEMOS?
            </a>
            <a href="#impacto" className="text-5xl font-semibold hover:text-black">
              IMPACTO
            </a>
          </div>
        </div>
        <div className="text-center font-bold pb-10 text-4xl">
          WE THINK BIG, WE WANT CHANGES
        </div>
      </div>

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
              src="/9areas.png"
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

      <section id="impacto" className="min-h-screen bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Impacto</h2>
          <p className="text-lg">
            Nuestro trabajo ha impactado a miles de personas en todo el mundo.
          </p>
        </div>
      </section>
    </div>
  );
}