import { Heart, Shield, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <Heart className="w-8 h-8 text-sage-300 mr-3" />
              <h3 className="text-2xl font-serif">Ana</h3>
            </div>
            <p className="text-sage-300 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              Psicóloga clínica com abordagem junguiana, dedicada ao processo de individuação 
              e ampliação da consciência para transformação e crescimento pessoal.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="p-2 bg-sage-800 rounded-full hover:bg-sage-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-sage-800 rounded-full hover:bg-sage-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 text-sage-300 mr-3" />
                <span className="text-sage-300">(11) 99375-8482</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 text-sage-300 mr-3" />
                <span className="text-sage-300">albbortolato@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Legal & Credentials */}
          <div className="text-center md:text-left">
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

        <div className="border-t border-sage-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start text-sage-300 mb-4 md:mb-0">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">
                Atendimento psicológico regido pelo sigilo profissional
              </span>
            </div>
            <p className="text-sage-300 text-sm">
              © {currentYear} Ana - Psicóloga Clínica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;