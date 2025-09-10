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
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0); // Para mobile scroll detection

  const goToSlide = (index: number) => {
    setCurrentSlide(index + 1); // +1 porque temos um clone no início
  };

  // Define cores das setas baseado na página atual
  const getArrowColor = () => {
    const realSlide = Math.max(0, Math.min(currentSlide - 1, baseSections.length - 1));
    switch (realSlide) {
      case 0: // About/Home - roxo
        return 'text-lavender-700';
      case 1: // Atuação Clínica - laranja
        return 'text-orange-600';
      case 2: // Serviços - verde
        return 'text-sage-700';
      case 3: // Contato - verde
        return 'text-sage-700';
      default:
        return 'text-sage-700';
    }
  };

  const getSections = () => [
    { id: 'about', component: <About goToSlide={goToSlide} /> },              // 0 - Início
    { id: 'emotional-map', component: <EmotionalMap goToSlide={goToSlide} /> }, // 1 - Atividades  
    { id: 'services', component: <Services goToSlide={goToSlide} /> },         // 2 - Serviços
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

  // Mobile scroll detection with Intersection Observer
  useEffect(() => {
    if (!isMobile) return;

    // Add a small delay to ensure sections are rendered
    const initializeObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              const sectionId = entry.target.id;
              // Map section IDs to indices directly
              const sectionIndexMap: { [key: string]: number } = {
                'about': 0,
                'emotional-map': 1,
                'services': 2,
                'contact': 3
              };
              
              const sectionIndex = sectionIndexMap[sectionId];
              if (sectionIndex !== undefined) {
                setMobileActiveSlide(sectionIndex);
              }
            }
          });
        },
        {
          threshold: [0.5], // Section must be 50% visible
          rootMargin: '-20% 0px -20% 0px' // More aggressive detection
        }
      );

      // Observe all sections
      const sections = ['about', 'emotional-map', 'services', 'contact'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return observer;
    };

    // Initialize observer after a brief delay
    const timeoutId = setTimeout(() => {
      const observer = initializeObserver();
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

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
      <div className="min-h-screen overflow-y-auto">
        <Navigation currentSlide={mobileActiveSlide} goToSlide={goToSlide} />
        
        {/* Mobile: Vertical scroll layout - sections stacked naturally */}
        <div className="flex flex-col">
          {baseSections.map((section, index) => (
            <div
              key={`${section.id}-${index}`}
              className="min-h-screen w-full"
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
        <ChevronLeft className={`w-6 h-6 ${getArrowColor()}`} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 !outline-none !border-none"
        aria-label="Próxima página"
      >
        <ChevronRight className={`w-6 h-6 ${getArrowColor()}`} />
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