
import { Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ServicesProps {
  goToSlide?: (index: number) => void;
}

const Services = ({ goToSlide }: ServicesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const navigateToContact = () => {
    if (goToSlide) {
      // SPA context - use slide navigation
      goToSlide(2); // Contact section is at index 2 (0-indexed: About=0, EmotionalMap=1, Services=2, Contact=3, but goToSlide adds +1)
    } else {
      // Static page context - navigate to contact page
      window.location.href = '/contato-agendar';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      title: "Que tal conversarmos?",
      description: "Vou te acompanhar no seu processo de autoconhecimento, usando a abordagem junguiana para nos aprofundarmos nos seus sonhos, medos e descobertas. Cada sessão é um encontro único entre nós.",
      duration: "60 minutos",
      format: "Presencial ou Online"
    },
    {
      title: "Precisa de um apoio?",
      description: "Estou aqui para te acolher nos momentos difíceis - lutos, separações, mudanças ou crises.",
      duration: "60 minutos",
      format: "Presencial"
    },
    {
      title: "Te atendo online também",
      description: "Se você prefere o conforto da sua casa, podemos nos encontrar por videochamada. Mantenho o mesmo cuidado, só muda o espaço onde nos conectamos.",
      duration: "60 minutos",
      format: "Videochamada"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="theme-services min-h-full flex items-center pt-32 md:pt-32 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Heart className="w-8 h-8 text-sage-600 mr-3" />
            <span className="text-sage-600 font-medium text-lg uppercase tracking-widest">Serviços Oferecidos</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-serif text-sage-900 mb-6 ${isVisible ? 'animate-word-reveal' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            Como posso cuidar de você
          </h2>
          <p className={`text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed mb-16 ${isVisible ? 'animate-paragraph-fade' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            A terapia é uma possibilidade de travessia para consciência de si mesmo, de cultivo da alma, que acontece através de uma relação entre terapeuta e paciente. Te convido a experimentar esse caminho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 transition-all duration-300 group border border-sage-200 hover:-translate-y-1 hover:border-sage-300 flex flex-col ${
                isVisible ? 'animate-card-entrance' : 'opacity-0'
              }`}
              style={{ animationDelay: `${1.2 + index * 0.2}s` }}
            >
              <h3 className="text-xl font-serif text-sage-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-sage-700 mb-6 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
              
              <div className="space-y-2 text-xs text-sage-500 mt-auto">
                <div>
                  <span className="font-medium">Duração:</span> {service.duration}
                </div>
                <div>
                  <span className="font-medium">Formato:</span> {service.format}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={navigateToContact}
            type="button"
            className={`inline-flex items-center px-8 py-4 bg-sage-600 text-white font-semibold rounded-full hover:bg-sage-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 ${
              isVisible ? 'animate-buttons-entrance' : 'opacity-0'
            }`}
            style={{ animationDelay: '2.0s' }}
          >
            Vamos nos conhecer?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;