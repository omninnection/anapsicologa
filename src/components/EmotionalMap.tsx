import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

interface Activity {
  id: string;
  title: string;
  description: string;
  path: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  color: string;
}

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

  const activities: Activity[] = [
    {
      id: '1',
      title: 'Mandala Arquetípica',
      description: 'Crie sua mandala pessoal escolhendo símbolos que ressoam com você. Visual bonito, conexão direta com Jung.',
      path: '/mandala-arquetipica',
      difficulty: 'Iniciante',
      duration: '10-15 min',
      color: 'purple'
    },
    {
      id: '2',
      title: 'Jornada do Herói',
      description: 'Questionário interativo baseado na jornada arquetípica. Mapeie seu processo de individuação.',
      path: '/jornada-heroi',
      difficulty: 'Intermediário',
      duration: '15-20 min',
      color: 'gold'
    },
    {
      id: '3',
      title: 'Explorador de Arquétipos',
      description: 'Quiz dinâmico para descobrir seus arquétipos dominantes. Simples, direto, muito insight pessoal.',
      path: '/explorador-arquetipos',
      difficulty: 'Iniciante',
      duration: '8-12 min',
      color: 'blue'
    },
    {
      id: '5',
      title: 'Diário de Sonhos',
      description: 'Registro e interpretação simbólica de sonhos. Muito específico de Jung, prático para terapia.',
      path: '/diario-sonhos',
      difficulty: 'Intermediário',
      duration: '15-30 min',
      color: 'indigo'
    }
  ];



  return (
    <section ref={sectionRef} id="emotional-map" className="theme-activities min-h-full flex items-center pt-32 md:pt-32 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center mb-4 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="text-sage-600 font-medium text-lg uppercase tracking-widest">Atividades Interativas</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-serif text-sage-900 mb-6 ${isVisible ? 'animate-word-reveal' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            Explore seu mundo interior
          </h2>
          <p className={`text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed mb-16 ${isVisible ? 'animate-paragraph-fade' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            Atividades baseadas na Psicologia Analítica de Jung para autoconhecimento e crescimento pessoal
          </p>
        </div>

        {/* Content Section - Image + Text */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image - Creative Layout */}
          <div className={`order-2 lg:order-1 relative ${isVisible ? 'animate-card-entrance' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
            {/* Main image with mask similar to home */}
            <div className="relative" style={{ paddingBottom: '85%' }}>
              <div className="absolute inset-0 section-surface overflow-hidden" style={{ 
                borderTopLeftRadius: '100px', 
                borderTopRightRadius: '0px', 
                borderBottomLeftRadius: '0px', 
                borderBottomRightRadius: '100px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}>
                <img 
                  src="/foto02.png" 
                  alt="Processo criativo terapêutico - mandala em aquarela"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ transform: 'scale(1.10)' }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`order-1 lg:order-2 space-y-8 ${isVisible ? 'animate-text-flow' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sage-900 leading-tight">
              Crie, reflita e descubra
            </h3>
            
            <div className="space-y-6">
              <p className="text-xl text-sage-700 leading-relaxed">
                Cada atividade foi pensada para te conectar com seu mundo interno através da arte, reflexão e simbolismo junguiano.
              </p>
              
              <p className="text-lg text-sage-700 leading-relaxed">
                Você também pode criar suas próprias mandalas de autoconhecimento, explorando símbolos que ressoam com sua jornada pessoal.
              </p>
              
              <p className="text-lg text-sage-600 font-medium italic">
                Escolha uma atividade abaixo e comece sua jornada de descoberta pessoal. Não há certo ou errado, apenas seu processo único de individuação.
              </p>
            </div>
            
            {/* Optional accent element */}
            <div className="w-16 h-1 bg-sage-400 rounded-full"></div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {activities.map((activity, index) => {
            return (
              <div
                key={activity.id}
                className={`relative bg-white rounded-2xl p-6 transition-all duration-300 group border border-sage-200 hover:-translate-y-4 hover:scale-105 hover:shadow-xl hover:border-sage-400 cursor-pointer ${
                  isVisible ? 'animate-card-entrance' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${1600 + (index * 150)}ms` : '0ms',
                  transform: isVisible ? 'none' : 'translateY(32px)'
                }}
              >
                {/* Invisible clickable overlay */}
                <Link
                  to={activity.path}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`Ir para ${activity.title}`}
                />
                
                {/* Card Header */}
                <div className="mb-3">
                  <h3 className="text-xl font-serif text-sage-900 group-hover:text-sage-700 transition-colors duration-300">
                    {activity.title}
                  </h3>
                </div>
                
                <p className="text-sage-700 mb-6 leading-relaxed text-sm group-hover:text-sage-600 transition-colors duration-300">
                  {activity.description}
                </p>
                
                {/* Action Button */}
                <div className="bg-sage-50 group-hover:bg-sage-100 rounded-xl p-3 transition-all duration-300 relative z-20 pointer-events-none">
                  <div className="flex items-center justify-between text-sage-600 group-hover:text-sage-700 font-medium">
                    <span>Começar agora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Information Section - Redesigned */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-sage-200 ${isVisible ? 'animate-card-entrance' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif text-sage-900 mb-3">
              Sobre as Atividades Junguianas
            </h3>
            <div className="w-16 h-1 bg-sage-400 rounded-full mx-auto"></div>
          </div>
          
          {/* Three Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
              <h4 className="text-lg font-semibold text-sage-900 mb-2">Baseadas em Jung</h4>
              <p className="text-sm text-sage-700">Conceitos fundamentais da Psicologia Analítica</p>
            </div>
            
            <div className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
              <h4 className="text-lg font-semibold text-sage-900 mb-2">Autoconhecimento</h4>
              <p className="text-sm text-sage-700">Explore aspectos conscientes e inconscientes</p>
            </div>
            
            <div className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
              <h4 className="text-lg font-semibold text-sage-900 mb-2">Processo Terapêutico</h4>
              <p className="text-sm text-sage-700">Resultados discutidos em sessões</p>
            </div>
          </div>
          
          {/* Quote Highlight */}
          <div className="text-center p-6 bg-gradient-to-r from-sage-600 to-sage-700 rounded-xl text-white">
            <h4 className="text-xl font-serif mb-2">Individuação</h4>
            <p className="text-sage-100 italic">"Torne-se quem você é"</p>
            <p className="text-xs text-sage-200 mt-2">O processo central da psicologia junguiana</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={navigateToContact}
            type="button"
            className={`inline-flex items-center px-8 py-4 bg-sage-600 text-white font-semibold rounded-full hover:bg-sage-700 active:bg-sage-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 touch-manipulation min-h-[52px] ${
              isVisible ? 'animate-buttons-entrance' : 'opacity-0'
            }`}
            style={{ animationDelay: '2.8s' }}
            onTouchStart={() => {}} // Enable touch events
          >
            Vamos nos conhecer?
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmotionalMap;