"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondaryNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main navbar row */}
        <div className="flex items-center justify-between py-2">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="Caiinno logo"
              width={150}
              height={50}
              className="h-8 md:h-15 w-auto"
            />
          </Link>

          {/* Center: Desktop Navigation Links - Show on lg and up */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-lg">
            <Link href="/" className="hover:underline whitespace-nowrap">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="hover:underline whitespace-nowrap">
              ¿Quiénes somos?
            </Link>
            <Link href="/events" className="hover:underline whitespace-nowrap">
              Eventos
            </Link>
            <Link href="/publicaciones" className="hover:underline whitespace-nowrap">
              Publicaciones
            </Link>
            <Link href="/impacto" className="hover:underline whitespace-nowrap">
              Impacto
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Slogan - Show on md and up, hide on lg when nav links are centered */}
            <span className="hidden md:block lg:hidden text-base font-semibold text-text-logo">
              WE THINK BIG, WE WANT CHANGES
            </span>
            
            {/* Full slogan - Show on lg and up */}
            <span className="hidden lg:block text-sm font-semibold text-text-logo flex-shrink-0">
              WE THINK BIG, WE WANT CHANGES
            </span>

            {/* Hamburger Menu Button - Show on screens smaller than lg */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu - Vertical dropdown for screens smaller than lg */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-base hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Inicio
              </Link>
              <Link 
                href="/quienes-somos" 
                className="text-base hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                ¿Quiénes somos?
              </Link>
              <Link 
                href="/events" 
                className="text-base hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Eventos
              </Link>
              <Link 
                href="/publicaciones" 
                className="text-base hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Publicaciones
              </Link>
              <Link 
                href="/impacto" 
                className="text-base hover:text-blue-600 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Impacto
              </Link>
            </div>

            {/* Slogan in dropdown - only show on small screens */}
            <div className="md:hidden mt-4 pt-3 border-t border-gray-200">
              <span className="text-xs font-semibold text-text-logo">
                WE THINK BIG, WE WANT CHANGES
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}