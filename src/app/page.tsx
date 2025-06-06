import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import PublicationsCarousel from "@/components/Carousel/publications-carousel";
import Image from "next/image";
import Link from "next/link";
import NuestroObjetivo from "@/components/NuestroObjetivo";
import ImpactCards from "@/components/ImpactCards";
//import ImpactoSection from "@/components/Impacto";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <section id="main" className="relative min-h-screen overflow-hidden">
        <CarouselWithNavigation/>
      </section>


      {/* Sections */}
      {/*
      <section id="quienes-somos" className="relative min-h-screen pb-10 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carousel/6.jpg" // Make sure to add your image to the public folder
            alt="Background Quienes Somos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>


        <div className="container mx-auto text-white relative z-10">

          <h2 className="text-5xl font-bold mb-20">¿QUIÉNES SOMOS?</h2>


          <p className="text-4xl font-semibold mb-18">
            CAIINNO: Innovación que transforma México.
          </p>


          <p className="text-3xl mb-18 text-justify">
            CAIINNO es una think tank constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un cambio positivo en México, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la beca Fulbright.
          </p>


          <Link
            href="/quienes-somos"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </section>
      */}

      <section id="quienes-somos" className="relative lg:min-h-screen pb-10 pt-10 md:pt-20 overflow-hidden">
  {/* DNA images - hidden on mobile */}
  <img
    src="/DNA.svg"
    alt="DNA background"
    className="hidden lg:block absolute bottom-[10%] left-[10%] w-[30%] max-w-[500px] opacity-80 pointer-events-none"
  />
  <img
    src="/DNA.svg"
    alt="DNA background"
    className="hidden lg:block absolute top-[40%] right-[10%] w-[30%] max-w-[500px] opacity-30 pointer-events-none"
  />

  <div className="container mx-auto px-4 sm:px-6 relative z-10 text-quienes-somos flex flex-col gap-8 lg:gap-12">
    
    {/* Row with Title and Paragraph - Adjusted spacing */}
    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 xl:gap-12">
      
      {/* Title on the left */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold lg:whitespace-nowrap lg:w-[40%]">
        ¿QUIÉNES<br />SOMOS?
      </h2>

      {/* Description on the right */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:w-[60%]">
        CAIINNO es una think tank constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un cambio positivo en México, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la beca Fulbright.
      </p>
    </div>

    {/* Subtitle and Button Centered Below */}
    <div className="flex flex-col items-center text-center gap-6 md:gap-8 mt-8 md:mt-12">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        CAIINNO: Innovación que transforma México.
      </p>
      <Link
        href="/quienes-somos"
        className="inline-block px-6 py-3 sm:px-10 sm:py-4 text-lg sm:text-xl md:text-2xl bg-quienes-somos-button text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Saber más
      </Link>
    </div>
  </div>
</section>

      {/*
      <section id="nuestro-objetivo" className="min-h-screen bg-que-hacemos pb-10 pt-20">
      <div className="container mx-auto text-white">
          <h2 className="text-5xl font-bold mb-20">NUESTRO OBJETIVO</h2>

          <p className="text-3xl mb-8 text-justify">
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
      */}

    <NuestroObjetivo/>

    <section id="que-pretendemos" className="lg:min-h-screen bg-white pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          ¿QUÉ PRETENDEMOS?
        </h2>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/¿QUÉ PRETENDEMOS_.png"
            alt="¿Qué pretendemos?"
            width={1000}
            height={100}
            priority
            className="w-full max-w-[1000px]"
          />
        </div>
      </div>
    </section>

      <section id="como-lo-hacemos" className="lg:min-h-screen bg-gray-900 pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-20 text-white">¿CÓMO LO HACEMOS?</h2>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/¿COMO LO HACEMOS_.png"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">IMPACTO</h2>
          <ImpactCards/>
        </div>
      </section>

        
        <PublicationsCarousel />
        <PrivacySection/>
    </div>
  );
}