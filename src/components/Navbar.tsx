import React from "react";

import icon from "@/assets/icon.png";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm p-1 transform hover:scale-105 transition-transform">
            <img
              src={icon}
              alt="QRShared"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`text-2xl font-extrabold tracking-tight ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            QR<span className="text-green-500">Shared</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className={`font-medium hover:text-blue-500 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Funciones
          </a>
          <a
            href="#how-it-works"
            className={`font-medium hover:text-blue-500 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Cómo funciona
          </a>
          <a
            href="#user-guide"
            className={`font-medium hover:text-blue-500 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Guía de Usuario
          </a>
          <a
            href="#faq"
            className={`font-medium hover:text-blue-500 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Preguntas
          </a>
          <a
            href="/qrshared.apk"
            download
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-transform active:scale-95 shadow-lg shadow-green-500/20"
          >
            Descargar APK
          </a>
        </div>

        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};
