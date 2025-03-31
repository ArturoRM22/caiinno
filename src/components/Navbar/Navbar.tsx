"use client"

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center pb-7 font-[family-name:var(--font-geist-sans)]">
      {/* Logo and Tagline */}
      <div className="w-full flex justify-center items-center gap-4 px-4">
        <Image
          src="/Logo.png"
          alt="Caiinno logo"
          width={350}
          height={100}
          priority
          className="w-auto h-16 md:h-24" // Responsive logo sizing
        />
        <div className="hidden md:block text-2xl font-bold text-center text-text-logo">
          WE THINK BIG, WE WANT CHANGES
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-full justify-center">
        <div className="flex gap-8 lg:gap-14">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/quienes-somos" className="hover:underline">¿Quiénes somos?</Link>
          <Link href="#about-us" className="hover:underline">About us</Link>
          <Link href="#apoya" className="hover:underline">Apoya</Link>
          <Link href="#areas-de-investigacion" className="hover:underline">Áreas de Investigación</Link>
          <Link href="#actividades" className="hover:underline">Actividades</Link>
          <Link href="/publicaciones" className="hover:underline">Publicaciones</Link>
          <Link href="/impacto" className="hover:underline">Impacto</Link>
          <Link href="#contacto" className="hover:underline">Contacto</Link>
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden w-full flex justify-center mt-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-gray-700"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 gap-4">
            <Link href="/" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/quienes-somos" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>¿Quiénes somos?</Link>
            <Link href="#about-us" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link href="#apoya" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Apoya</Link>
            <Link href="#areas-de-investigacion" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Áreas de Investigación</Link>
            <Link href="#actividades" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Actividades</Link>
            <Link href="/publicaciones" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Publicaciones</Link>
            <Link href="/impacto" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Impacto</Link>
            <Link href="#contacto" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </nav>
      )}
    </div>
  );
}