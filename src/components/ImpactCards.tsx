import Image from "next/image";
import Link from "next/link";

export default function ImpactCards() {
  return (
    <>
      <div className="space-y-4 sm:space-y-6 mb-5 text-base sm:text-lg">
        {/* Reformas */}
        <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
            <Image
              src="/REFORMAS.png"
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

        {/* Investigaciones con Impacto */}
        <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
            <Image
              src="/INFORMACION_CONFIABLE.png"
              alt="icono agendas"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/investigaciones-con-impacto">
              <h3 className="font-semibold mb-2">Investigaciones con Impacto</h3>
              <div>
                <h3 className="mb-2 text-justify">
                  Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Información confiable */}
        <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
            <Image
              src="/INVESTIGACIONES_CON_IMPACTO.png"
              alt="icono libros"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/informacion-de-referencia">
              <h3 className="font-semibold mb-2">Información confiable</h3>
              <div>
                <h3 className="mb-2 text-justify">
                  Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Saber más button */}
      <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20">
        <Link
          href="/impacto"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Saber más
        </Link>
      </div>
    </>
  );
}
