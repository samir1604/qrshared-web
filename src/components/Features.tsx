
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Diseñado para ser <span className="text-green-500">simple</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Resolvemos los problemas del día a día para que tu pago sea la parte más fácil de tu jornada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon="fa-bolt" 
            title="Linterna Integrada" 
            description="¿Poca luz en el establecimiento? Activa el flash directamente desde el scanner sin salir de la app." 
            color="bg-yellow-400"
          />
          <FeatureCard 
            icon="fa-image" 
            title="Escanea desde Galería" 
            description="¿Te enviaron el QR por WhatsApp? Súbelo desde tus fotos y deja que QRShared haga el resto." 
            color="bg-blue-500"
          />
          <FeatureCard 
            icon="fa-file-invoice-dollar" 
            title="Pagos en Línea" 
            description="Envía automáticamente el valor del QR a Transfermóvil. Sin errores de escritura manual." 
            color="bg-green-500"
          />
          <FeatureCard 
            icon="fa-credit-card" 
            title="Transf. Inteligente" 
            description="Extraemos el número de tarjeta y teléfono de QRs de transferencia. Copia con un solo toque." 
            color="bg-purple-500"
          />
          <FeatureCard 
            icon="fa-shield-halved" 
            title="Privacidad Total" 
            description="Tus datos no salen de tu dispositivo. Solo somos el puente entre tu cámara y Transfermóvil." 
            color="bg-indigo-600"
          />
          <FeatureCard 
            icon="fa-rocket" 
            title="Ultraligera" 
            description="Una APK optimizada para funcionar en cualquier Android, ocupando el mínimo espacio." 
            color="bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};
