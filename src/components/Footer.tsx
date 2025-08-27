import { Heart, Shield, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Desktop: 3 colunas equilibradas | Mobile: Ana em cima, Contato e Informações lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Coluna 1 - Brand (Ana) */}
          <div className="text-center md:text-left col-span-1 md:col-span-1">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <Heart className="w-8 h-8 text-sage-300 mr-3" />
              <h3 className="text-2xl font-serif">Ana</h3>
            </div>
            <p className="text-sage-300 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              Psicóloga clínica com abordagem junguiana, dedicada ao processo de individuação 
              e ampliação da consciência para transformação e crescimento pessoal.
            </p>
          </div>

          {/* Mobile: Grid 2 colunas para Contato e Informações | Desktop: Colunas individuais */}
          <div className="grid grid-cols-2 md:contents gap-8">
            {/* Coluna 2 - Contact Info (Centralizada) */}
            <div className="text-center md:text-center">
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sage-300 mr-3" />
                  <span className="text-sage-300">(11) 99375-8482</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sage-300 mr-3" />
                  <span className="text-sage-300">albbortolato@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Legal & Credentials (Direita) */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-6">Informações Legais</h4>
              <div className="space-y-3 text-sage-300">
                <p className="text-sm">
                  <strong>CRP:</strong> 06/124406
                </p>
                <p className="text-sm">
                  <strong>Registro:</strong> Ativo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Coluna 1 - Sigilo Profissional */}
            <div className="flex items-center justify-center md:justify-start text-sage-300">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">
                Atendimento psicológico regido pelo sigilo profissional
              </span>
            </div>
            
            {/* Coluna 2 - Copyright (Centralizada) */}
            <div className="text-sage-300 text-sm flex items-center justify-center">
              © {currentYear} Ana - Psicóloga Clínica
            </div>
            
            {/* Coluna 3 - Powered by (Direita) */}
            <div className="text-sage-300 text-sm flex items-center justify-center md:justify-end">
              Powered by{' '}
              <a 
                href="https://www.omninnection.shop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold hover:text-white transition-colors ml-1"
                style={{ fontFamily: 'Inconsolata, monospace' }}
              >
                Omninnection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;