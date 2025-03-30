import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center pb-7 font-[family-name:var(--font-geist-sans)]">
      {/* Logo */}
      <div className="w-full flex justify-center items-center gap-4">
        <Image
          src="/Logo.png"
          alt="Caiinno logo"
          width={350}
          height={100}
          priority
        />
        <div className="text-2xl font-bold text-center text-text-logo">
          WE THINK BIG, WE WANT CHANGES
        </div>
      </div>

      {/* Navbar Links */}
      <nav className="w-full flex justify-center">
        <div className="flex gap-14">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/quienes-somos" className="hover:underline">¿Quienes somos?</Link>
          <Link href="#about-us" className="hover:underline">About us</Link>
          <Link href="#apoya" className="hover:underline">Apoya</Link>
          <Link href="#areas-de-investigacion" className="hover:underline">Áreas de Investigación</Link>
          <Link href="#actividades" className="hover:underline">Actividades</Link>
          <Link href="/publicaciones" className="hover:underline">Publicaciones</Link>
          <Link href="/impacto" className="hover:underline">Impacto</Link>
          <Link href="#contacto" className="hover:underline">Contacto</Link>
        </div>
      </nav>
    </div>
  );
}