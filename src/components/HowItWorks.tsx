import React from "react";

import scannerCamera from "@/assets/scanner_camera.jpg";
import detallesTransferencia from "@/assets/detalles_transferencia.jpg";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Flujo de Trabajo
            </span>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
              Dos mundos, una sola aplicación eficiente.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Pago en Línea</h4>
                  <p className="text-gray-600">
                    Escaneamos el QR del comercio y enviamos directamente el
                    valor y el número de pago a Transfermóvil.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Transferencia (Asistida)
                  </h4>
                  <p className="text-gray-600">
                    Debido a que Transfermóvil no permite compartir valores de
                    QR de transferencia aún, QRShared extrae la tarjeta y el
                    teléfono para que los pegues fácilmente.
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <a
                  href="#user-guide"
                  className="mt-12 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors shadow-lg shadow-gray-200"
                >
                  Explorar Guía de Usuario
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 transform -rotate-2">
              <img
                src={scannerCamera}
                alt="App Scan"
                className="rounded-2xl w-full h-auto object-cover"
              />
              <p className="text-center mt-12 font-bold text-gray-500 uppercase text-xs">
                Vista de Escaneo
              </p>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 transform rotate-2 mt-8">
              <img
                src={detallesTransferencia}
                alt="App Details"
                className="rounded-2xl w-full h-auto object-cover"
              />
              <p className="text-center mt-3 font-bold text-gray-500 uppercase text-xs">
                Detalles de Datos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
