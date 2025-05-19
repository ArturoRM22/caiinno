"use client"

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center pb-4 md:pb-5 lg:pb-7 font-[family-name:var(--font-geist-sans)]">
      {/* Logo and Tagline */}
      <div className="w-full flex justify-center items-center gap-2 sm:gap-3 md:gap-4 px-4 m-3 md:m-4 lg:m-5">
        <Image
          src="/Logo.jpg"
          alt="Caiinno logo"
          width={350}
          height={100}
          priority
          className="w-auto h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24" // More granular responsive logo sizing
        />
        <div className="hidden md:block text-lg lg:text-xl xl:text-2xl font-bold text-center text-text-logo">
          WE THINK BIG, WE WANT CHANGES
        </div>
      </div>

      {/* Desktop/Tablet Navbar */}
      <nav className="hidden md:block w-full">
        <div className="flex flex-wrap justify-center px-2 md:px-4 lg:px-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-x-3 md:gap-x-4 lg:gap-x-5 gap-y-2 text-sm md:text-base">
            <Link href="/" className="hover:underline text-center">Inicio</Link>
            <Link href="/quienes-somos" className="hover:underline text-center">¿Quiénes somos?</Link>
            <Link href="/about-us" className="hover:underline text-center">About us</Link>
            <Link href="#areas-de-investigacion" className="hover:underline text-center">Información Estadística</Link>
            <Link href="/events" className="hover:underline text-center">Eventos</Link>
            <Link href="/publicaciones" className="hover:underline text-center">Publicaciones</Link>
            <Link href="/impacto" className="hover:underline text-center">Impacto</Link>
            <Link href="#contacto" className="hover:underline text-center">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden w-full flex justify-center mt-2 sm:mt-3">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl sm:text-3xl text-gray-700"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-3 gap-3">
            <Link href="/" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/quienes-somos" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>¿Quiénes somos?</Link>
            <Link href="/about-us" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link href="#areas-de-investigacion" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Información Estadística</Link>
            <Link href="/events" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Eventos</Link>
            <Link href="/publicaciones" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Publicaciones</Link>
            <Link href="/impacto" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Impacto</Link>
            <Link href="#contacto" className="hover:underline w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </nav>
      )}
    </div>
  );
}