import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import EmotionalMap from './components/EmotionalMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1); // Começar no slide 1 (real index 0)
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    setCurrentSlide(index + 1); // +1 porque temos um clone no início
  };

  const getSections = () => [
    { id: 'about', component: <About goToSlide={goToSlide} /> },              // 0 - Início
    { id: 'emotional-map', component: <EmotionalMap goToSlide={goToSlide} /> }, // 1 - Atividades  
    { id: 'services', component: <Services /> },         // 2 - Serviços
    { id: 'contact', component: <><Contact /><Footer /></> }, // 3 - Contato
  ];

  // Criar array com slides duplicados para loop infinito
  const getExtendedSections = () => {
    const baseSections = getSections();
    return [
      { id: 'contact-clone', component: <><Contact /><Footer /></> }, // Clone do último para loop
      ...baseSections,
      { id: 'about-clone', component: <About goToSlide={goToSlide} /> } // Clone do primeiro para loop
    ];
  };

  const baseSections = getSections();
  const extendedSections = getExtendedSections();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < extendedSections.length - 1) {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        goToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, extendedSections.length, isMobile]);

  const goToPreviousSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (currentSlide === 1) {
      // Indo do primeiro slide real para o último - vai para slide 0 (clone do último)
      setCurrentSlide(0);
      setTimeout(() => {
        // Desabilita transição antes do pulo
        setIsTransitioning(false);
        // Pula instantaneamente para o slide real
        setCurrentSlide(baseSections.length); // Último slide real
      }, 700);
    } else {
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (currentSlide === baseSections.length) {
      // Indo do último slide real para o primeiro - vai para slide +1 (clone do primeiro)
      setCurrentSlide(baseSections.length + 1);
      setTimeout(() => {
        // Desabilita transição antes do pulo
        setIsTransitioning(false);
        // Pula instantaneamente para o slide real
        setCurrentSlide(1); // Primeiro slide real
      }, 700);
    } else {
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  if (isMobile) {
    return (
      <div className="h-screen overflow-hidden relative">
        <Navigation currentSlide={Math.max(0, Math.min(currentSlide - 1, baseSections.length - 1))} goToSlide={goToSlide} />
        
        {/* Mobile Previous Button */}
        <button
          onClick={goToPreviousSlide}
          disabled={isTransitioning}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none disabled:opacity-50 shadow-lg"
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-5 h-5 text-sage-700" />
        </button>

        {/* Mobile Next Button */}
        <button
          onClick={goToNextSlide}
          disabled={isTransitioning}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none disabled:opacity-50 shadow-lg"
          aria-label="Próxima página"
        >
          <ChevronRight className="w-5 h-5 text-sage-700" />
        </button>

        <div 
          className={`flex h-screen ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {extendedSections.map((section, index) => (
            <div
              key={`${section.id}-${index}`}
              className="w-screen h-screen flex-shrink-0 overflow-y-auto scrollbar-hidden"
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden relative">
      <Navigation currentSlide={Math.max(0, Math.min(currentSlide - 1, baseSections.length - 1))} goToSlide={goToSlide} />
      
      {/* Previous Button */}
      <button
        onClick={goToPreviousSlide}
        className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none"
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-6 h-6 text-sage-700" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none"
        aria-label="Próxima página"
      >
        <ChevronRight className="w-6 h-6 text-sage-700" />
      </button>

      <div 
        className={`flex h-screen ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSections.map((section, index) => (
          <div
            key={`${section.id}-${index}`}
            className="w-screen h-screen flex-shrink-0 overflow-y-auto scrollbar-hidden"
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;