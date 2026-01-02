import React from "react";

import icon from "@/assets/icon.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg">
                <img
                  src={icon}
                  alt="QRShared"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold text-white">
                QR<span className="text-green-500">Shared</span>
              </span>
            </div>
            <p className="max-w-sm mb-6 text-lg">
              La herramienta indispensable para el ecosistema de pagos digitales
              en Cuba. Optimizada para el ahorro de tiempo y la comodidad.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Funciones
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a
                  href="/qrshared.apk"
                  download
                  className="hover:text-white transition-colors"
                >
                  Descargas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5354891617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-green-500 transition-colors"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>+53 54891617</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:samir1604@gmail.com"
                  className="flex items-center space-x-3 hover:text-red-400 transition-colors"
                >
                  <i className="fas fa-envelope text-xl"></i>
                  <span>samir1604@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © 2026 QRShared Team. No afiliado oficialmente con ETECSA o
            Transfermóvil.
          </p>
          <p className="mt-4 md:mt-0">
            Hecho con <i className="fas fa-heart text-red-500"></i> para la
            comunidad cubana
          </p>
        </div>
      </div>
    </footer>
  );
};
