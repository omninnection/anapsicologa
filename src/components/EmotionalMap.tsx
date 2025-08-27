import { useState, useEffect, useRef } from 'react';

interface EmotionalMapProps {
  goToSlide?: (index: number) => void;
}

const EmotionalMap = ({ goToSlide }: EmotionalMapProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const navigateToContact = () => {
    if (goToSlide) {
      goToSlide(3); // Contact section is at index 3
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




  return (
    <section ref={sectionRef} id="emotional-map" className="min-h-full flex items-center pt-32 md:pt-32 py-12 bg-gradient-radial from-red-500 via-orange-400 to-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="text-white font-medium text-lg uppercase tracking-widest">Atuação Clínica</span>
          </div>
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-12 leading-tight ${isVisible ? 'animate-word-reveal' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            Abordagem Junguiana
          </h2>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Texto inicial centralizado ocupando toda largura */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
                Também chamada de Psicologia Analítica, é uma metodologia de trabalho orientada, sobretudo, pela obra de C. G. Jung.
              </p>
              
              <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
                Geralmente buscamos terapia quando atravessamos períodos conflituosos, enfrentamos dores, problemas ou mesmo quando desejamos nos conhecer melhor, certo?
              </p>
              
              <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
                A abordagem junguiana tem como eixo central o que Jung chamou de processo de individuação, que consiste na ampliação da consciência. Por meio dos movimentos da nossa energia psíquica, nos relacionamos com o nosso Self e ampliamos nosso campo de consciência.
              </p>
            </div>
          </div>

          {/* Segundo bloco - mesmo padrão do primeiro */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-6 text-left">
                E o que isso significa na prática?
              </h3>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
                Significa nos aproximar, conhecer e também confrontar a nós mesmos, o que favorece o desenvolvimento de recursos mais complexos, ou mais criativos, para enfrentar ou suportar situações e eventos inevitáveis da vida.
              </p>
              
              <p className="text-lg md:text-xl text-white leading-relaxed text-justify">
                Momentos de transição, lutos, conflitos internos ou nos relacionamentos, medos, incertezas, sobrecargas emocionais e estresse costumam nos colocar em sofrimento. A ampliação da consciência pode nos ajudar a atravessar esses períodos de maneira mais criativa e profunda.
              </p>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={navigateToContact}
            type="button"
            className={`inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white touch-manipulation min-h-[52px] ${
              isVisible ? 'animate-buttons-entrance' : 'opacity-0'
            }`}
            style={{ animationDelay: '2.0s' }}
            onTouchStart={() => {}} // Enable touch events
          >
            Vamos conversar?
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmotionalMap;