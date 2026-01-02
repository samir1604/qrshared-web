import React from "react";

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 pointer-events-none">
        <div className="absolute inset-0 bg-qr-gradient opacity-90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
          ¿Listo para el siguiente nivel?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Descarga la última versión de QRShared APK y empieza a pagar con total
          libertad y rapidez hoy mismo.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/qrshared.apk"
            download
            className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-2xl text-xl font-bold flex items-center space-x-4 shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            <i className="fab fa-android text-3xl text-green-500"></i>
            <div className="text-left">
              <span className="block text-xs uppercase font-bold text-gray-400">
                Descargar para Android
              </span>
              <span className="block text-2xl">V1.0.0 APK</span>
            </div>
          </a>

          <div className="text-white text-sm font-medium">
            <p className="flex items-center justify-center gap-2 mb-2">
              <i className="fas fa-check-circle text-green-400"></i> 100% libre
              de anuncios
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
            className="h-12 w-auto"
            alt="Android"
          />
          <div className="h-12 flex items-center text-white font-bold text-2xl">
            Transfermóvil <span className="ml-2 font-light">Compatible</span>
          </div>
        </div>
      </div>
    </section>
  );
};
