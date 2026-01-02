import React from "react";

interface GuideCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  accentColor: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
  icon,
  title,
  children,
  accentColor,
}) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div
      className={`w-12 h-12 ${accentColor} rounded-xl flex items-center justify-center text-white mb-6`}
    >
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
    <div className="text-gray-600 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </div>
);

export const UserGuide: React.FC = () => {
  return (
    <section id="user-guide" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Guía de Usuario
          </h2>
          <p className="text-lg text-gray-600">
            Descubre cómo QRShared simplifica tu experiencia con Transfermóvil
            paso a paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Intro Section */}
          <GuideCard
            icon="fa-info-circle"
            title="¿Qué es QRShared?"
            accentColor="bg-blue-600"
          >
            <p>
              QRShared está pensada para usuarios que encuentran difícil
              escanear códigos QR directamente con Transfermóvil, o que utilizan
              comúnmente el <strong>pago en línea</strong> y buscan agilidad.
            </p>
          </GuideCard>

          {/* Core Loop */}
          <GuideCard
            icon="fa-play"
            title="¿Cómo funciona?"
            accentColor="bg-green-500"
          >
            <p>
              Es muy simple. Al abrir la app, verás un botón para{" "}
              <strong>escanear QR</strong>. Al oprimirlo, se abre la cámara y la
              aplicación detectará automáticamente si se trata de un
              <strong> pago en línea</strong> o de una{" "}
              <strong>transferencia</strong>.
            </p>
          </GuideCard>

          {/* Camera Buttons */}
          <GuideCard
            icon="fa-camera"
            title="Controles de la Cámara"
            accentColor="bg-yellow-500"
          >
            <p className="mb-2">Encontrarás dos botones esenciales:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Linterna:</strong> Para entornos con poca iluminación.
              </li>
              <li>
                <strong>Galería:</strong> Sube una imagen o captura de pantalla
                de un código QR y la app lo procesará al instante.
              </li>
            </ul>
          </GuideCard>

          {/* Privacy */}
          <GuideCard
            icon="fa-shield-alt"
            title="Privacidad y Seguridad"
            accentColor="bg-indigo-600"
          >
            <p>
              Priorizamos tu seguridad. La aplicación{" "}
              <strong>no almacena</strong> tus datos bancarios ni credenciales
              de Transfermóvil. Solo actúa como un puente inteligente para
              facilitar el llenado de información.
            </p>
          </GuideCard>
        </div>

        {/* Detailed Flows */}
        <div className="mt-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 underline decoration-blue-500 decoration-4 underline-offset-8">
            Resultados del Escaneo
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <i className="fas fa-shopping-cart text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Pago en Línea</h4>
                <p className="text-gray-600">
                  Se abrirá automáticamente Transfermóvil directamente en la
                  sección de pagos con todos los datos completados. Solo tendrás
                  que confirmar como lo haces habitualmente.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-exchange-alt text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Transferencia</h4>
                <p className="text-gray-600">
                  Debido a que Transfermóvil no permite recibir datos externos
                  en transferencias, mostraremos el número de cuenta y teléfono
                  con un
                  <strong> icono de copiado</strong> al lado. Toca para copiar y
                  pega manualmente en Transfermóvil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Technology Callout */}
        <div className="mt-12 bg-qr-gradient rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="text-5xl opacity-50">
              <i className="fas fa-microchip"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Motor de Procesamiento Avanzado
              </h4>
              <p className="text-blue-50 opacity-90 leading-relaxed">
                Nuestra tecnología permite la lectura de códigos incluso si
                están <strong>deteriorados o en mal estado</strong>. Además,
                contamos con un sistema de{" "}
                <strong>corrección automática de rotación</strong>, garantizando
                un funcionamiento perfecto incluso en dispositivos con sensores
                no estándar.
              </p>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>
        </div>
      </div>
    </section>
  );
};
