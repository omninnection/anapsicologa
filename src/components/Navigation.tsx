import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSlide?: number;
  goToSlide?: (index: number) => void;
}

const Navigation = ({ currentSlide = 0, goToSlide }: NavigationProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (!mobile) {
        setIsMobileMenuOpen(false); // Close mobile menu on desktop
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [currentSlide]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        const nav = target.closest('nav');
        const mobileMenu = target.closest('[data-mobile-menu]');
        const hamburgerButton = target.closest('[data-hamburger-button]');
        
        if (!nav && !mobileMenu && !hamburgerButton) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#about', label: 'Início', index: 0 },
    { href: '#emotional-map', label: 'Atuação Clínica', index: 1 },
    { href: '#services', label: 'Serviços', index: 2 },
    { href: '#contact', label: 'Contato', index: 3 }
  ];

  // Define cores para cada página
  const getPageTheme = (slideIndex: number) => {
    switch (slideIndex) {
      case 0: // About/Home - fundo roxo
        return {
          headerBg: 'bg-white',
          logoColor: 'text-lavender-500',
          inactiveText: 'text-lavender-400',
          activeText: 'text-lavender-700',
          hoverText: 'hover:text-lavender-700',
          mobileBg: 'bg-lavender-50',
          mobileHoverBg: 'hover:bg-lavender-50'
        };
      case 1: // Atuação Clínica - fundo gradiente laranja/vermelho/amarelo 
        return {
          headerBg: 'bg-white',
          logoColor: 'text-orange-600',
          inactiveText: 'text-orange-500',
          activeText: 'text-orange-800',
          hoverText: 'hover:text-orange-800',
          mobileBg: 'bg-orange-50',
          mobileHoverBg: 'hover:bg-orange-50'
        };
      case 2: // Serviços - fundo claro
        return {
          headerBg: 'bg-white',
          logoColor: 'text-sage-600',
          inactiveText: 'text-sage-500',
          activeText: 'text-sage-800',
          hoverText: 'hover:text-sage-800',
          mobileBg: 'bg-sage-50',
          mobileHoverBg: 'hover:bg-sage-50'
        };
      case 3: // Contato - fundo escuro
        return {
          headerBg: 'bg-white',
          logoColor: 'text-sage-600',
          inactiveText: 'text-sage-600',
          activeText: 'text-sage-800',
          hoverText: 'hover:text-sage-800',
          mobileBg: 'bg-sage-50',
          mobileHoverBg: 'hover:bg-sage-50'
        };
      default:
        return {
          headerBg: 'bg-white',
          logoColor: 'text-sage-600',
          inactiveText: 'text-gray-400',
          activeText: 'text-white',
          hoverText: 'hover:text-white',
          mobileBg: 'bg-gray-50',
          mobileHoverBg: 'hover:bg-gray-50'
        };
    }
  };

  const currentTheme = getPageTheme(currentSlide);

  const handleNavigation = (href: string, index: number) => {
    setIsMobileMenuOpen(false); // Always close mobile menu first
    
    if (isMobile) {
      // Mobile: Use smooth scroll to section IDs
      const sectionId = href.replace('#', '');
      const targetElement = document.getElementById(sectionId);
      
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300); // Allow menu close animation to complete
      }
    } else {
      // Desktop: Use slide system
      if (goToSlide) {
        goToSlide(index);
      }
    }
  };

  const toggleMobileMenu = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Toggling mobile menu from:', isMobileMenuOpen, 'to:', !isMobileMenuOpen);
    setIsMobileMenuOpen(prev => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${currentTheme.headerBg}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavigation('#about', 0)}
              className="flex items-center cursor-pointer group !outline-none !border-none hover:scale-105 transition-transform duration-300 touch-manipulation"
              aria-label="Voltar ao início"
            >
              <Heart className={`w-6 h-6 mr-3 fill-current ${currentTheme.logoColor}`} />
              <span className={`text-xl font-serif transition-colors ${currentTheme.logoColor}`}>
                Ana
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href, item.index)}
                  className={`font-medium transition-all duration-300 !outline-none !border-none hover:scale-105 ${
                    !isMobile && currentSlide === item.index
                      ? `${currentTheme.activeText} font-bold`
                      : `${currentTheme.inactiveText} ${currentTheme.hoverText}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                onTouchEnd={toggleMobileMenu}
                className={`p-2 rounded-lg transition-colors duration-300 !outline-none !border-none ${currentTheme.inactiveText} ${currentTheme.hoverText} hover:bg-white/20 active:bg-white/30 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center`}
                aria-label="Menu"
                data-hamburger-button
                type="button"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed z-[60]" 
            style={{ 
              position: 'fixed',
              top: '80px',
              left: '0',
              right: '0',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              zIndex: 60
            }} 
            data-mobile-menu
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href, item.index)}
                  onTouchStart={() => {}} // Enable touch events
                  className={`block w-full text-left px-3 py-3 text-base transition-all duration-300 !outline-none !border-none hover:scale-105 active:scale-95 rounded-lg touch-manipulation min-h-[44px] ${
                    currentSlide === item.index
                      ? `font-bold ${currentTheme.activeText} ${currentTheme.mobileBg}`
                      : `font-medium ${currentTheme.inactiveText} ${currentTheme.hoverText} ${currentTheme.mobileHoverBg}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;