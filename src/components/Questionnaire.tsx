
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4 border-b border-gray-100 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
    >
      <span className="text-xl font-bold text-gray-800 pr-8">{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
        <i className="fas fa-chevron-down text-blue-500"></i>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-gray-600 leading-relaxed text-lg">{answer}</p>
    </div>
  </div>
);

export const Questionnaire: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Es seguro usar QRShared con mi Transfermóvil?",
      answer: "Absolutamente. QRShared actúa únicamente como un lector inteligente. No procesamos pagos, no guardamos tus credenciales ni tenemos acceso a tus cuentas. El pago final siempre ocurre dentro de la aplicación oficial Transfermóvil."
    },
    {
      question: "¿Por qué en Transferencias debo copiar los datos manualmente?",
      answer: "Actualmente, la aplicación Transfermóvil no permite recibir datos externos (como el número de tarjeta) para el módulo de Transferencias. QRShared soluciona esto extrayendo los datos del código QR y dándote botones de copiado rápido para que solo tengas que pegar y listo."
    },
    {
      question: "¿Cómo funciona la linterna y el escaneo de galería?",
      answer: "Hemos integrado controles directos de hardware para activar el flash en entornos oscuros. Además, si tienes un QR guardado como imagen, nuestro motor de procesamiento puede analizar la imagen desde tu galería local."
    },
    {
      question: "¿Qué beneficios reales ofrece frente a escanear directamente con Transfermóvil?",
      answer: "Principalmente velocidad y versatilidad. Transfermóvil puede tener algunos problemas leyendo QR en mal estado. QRShared está optimizado para la lectura instantánea, permite usar imágenes guardadas y ofrece una linterna mucho más accesible."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Preguntas <span className="text-blue-600">Vitales</span></h2>
          <p className="text-gray-600 text-lg">Todo lo que necesitas saber antes de empezar a usar QRShared.</p>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem]">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
