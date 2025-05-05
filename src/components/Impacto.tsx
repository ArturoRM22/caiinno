import Link from "next/link";

export default function ImpactoSection() {
  return (
    <section id="impacto" className="min-h-screen flex flex-col">
      <div className="w-full flex-grow flex flex-col">
        {/* Header */}
        <div className="bg-white py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[#E6004D] text-5xl md:text-7xl font-bold">IMPACTO</h1>
          </div>
        </div>

        {/* Content Panels - Using flex-grow to distribute space */}
        <div className="flex-grow flex flex-col">
          {/* Panel 1 */}
          <div className="bg-[#E6004D] flex-1">
            <div className="max-w-6xl mx-auto h-full">
              <Link 
                className="hover:opacity-80 transition-opacity flex h-full py-8 px-6" 
                href="/impacto/iniciativas-de-reforma"
              >
                <div className="my-auto">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Reformas</h2>
                  <p className="text-white text-lg md:text-xl">
                    Hemos logrado provocar la generación de reformas de ley.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="bg-white flex-1">
            <div className="max-w-6xl mx-auto h-full">   
              <Link 
                className="hover:opacity-80 transition-opacity flex h-full py-8 px-6" 
                href="/impacto/investigaciones-con-impacto"
              >
                <div className="my-auto">
                  <h2 className="text-[#E6004D] text-3xl md:text-4xl font-bold mb-2">Investigaciones con impacto</h2>
                  <p className="text-[#E6004D] text-lg md:text-xl text-justify">
                    Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="bg-[#E6004D] flex-1">
            <div className="max-w-6xl mx-auto h-full">  
              <Link 
                className="hover:opacity-80 transition-opacity flex h-full py-8 px-6" 
                href="/impacto/informacion-de-referencia"
              >
                <div className="my-auto">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Información confiable</h2>
                  <p className="text-white text-lg md:text-xl text-justify">
                    Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Button Container */}
        <div className="flex justify-center items-center py-8">
          <Link
            href="/impacto"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </div>
    </section>
  );
}