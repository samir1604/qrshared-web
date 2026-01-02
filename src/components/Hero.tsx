import React from "react";

import icon from "@/assets/icon.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-qr-gradient overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white fill-current"
        >
          <circle cx="80" cy="20" r="30" />
          <circle cx="100" cy="60" r="40" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Tus Pagos con <br />
              <span className="text-green-400">QRShared</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-xl leading-relaxed">
              La forma más rápida y segura de integrar tus escaneos QR con
              Transfermóvil. Escanea, comparte y paga en segundos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/qrshared.apk"
                download
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all shadow-xl group"
              >
                <i className="fas fa-download mr-3 group-hover:bounce"></i>
                Descargar APK Gratis
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Mockup Frame */}
            <div className="relative w-72 md:w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-blue-50 rounded-[2.2rem] overflow-hidden relative">
                {/* App Screen Content Simulation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-36 h-36 mb-8 bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl p-1 transform scale-110">
                    <img
                      src={icon}
                      alt="QRShared Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Compartir QR
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Pagos y Transferencias rápidas
                  </p>
                  <button className="w-full py-4 bg-white shadow-md rounded-xl text-blue-600 font-bold border border-blue-100 flex items-center justify-center space-x-2">
                    <i className="fas fa-camera"></i>
                    <span>ESCANEAR QR</span>
                  </button>
                  <div className="mt-6 w-full flex justify-around">
                    <i className="fas fa-bolt text-gray-400"></i>
                    <i className="fas fa-image text-gray-400"></i>
                    <i className="fas fa-cog text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements for depth */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
