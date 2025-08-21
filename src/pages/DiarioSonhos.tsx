import { useState } from 'react';
import { ArrowLeft, Moon, User, MapPin, Palette, Eye, Heart, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DreamElement {
  id: string;
  category: 'pessoas' | 'lugares' | 'objetos' | 'emocoes';
  name: string;
  symbol: string;
  meaning: string;
}

interface DreamEntry {
  pessoas: DreamElement[];
  lugares: DreamElement[];
  objetos: DreamElement[];
  emocoes: DreamElement[];
}

const DiarioSonhos = () => {
  const [dreamEntry, setDreamEntry] = useState<DreamEntry>({
    pessoas: [],
    lugares: [],
    objetos: [],
    emocoes: []
  });
  const [showInterpretation, setShowInterpretation] = useState(false);

  const dreamElements: { [key: string]: DreamElement[] } = {
    pessoas: [
      { id: '1', category: 'pessoas', name: 'Mãe', symbol: '👩', meaning: 'Aspecto materno, nutrição, proteção' },
      { id: '2', category: 'pessoas', name: 'Pai', symbol: '👨', meaning: 'Autoridade, estrutura, orientação' },
      { id: '3', category: 'pessoas', name: 'Criança', symbol: '🧒', meaning: 'Inocência, potencial, renovação' },
      { id: '4', category: 'pessoas', name: 'Estranho', symbol: '🎭', meaning: 'Aspectos desconhecidos do self' },
      { id: '5', category: 'pessoas', name: 'Sábio', symbol: '🧙', meaning: 'Conhecimento interior, orientação' },
    ],
    lugares: [
      { id: '6', category: 'lugares', name: 'Casa', symbol: '🏠', meaning: 'Self, segurança, intimidade' },
      { id: '7', category: 'lugares', name: 'Floresta', symbol: '🌲', meaning: 'Inconsciente, mistério, transformação' },
      { id: '8', category: 'lugares', name: 'Água', symbol: '🌊', meaning: 'Emoções, inconsciente coletivo' },
      { id: '9', category: 'lugares', name: 'Montanha', symbol: '⛰️', meaning: 'Aspiração, transcendência, desafio' },
      { id: '10', category: 'lugares', name: 'Escola', symbol: '🏫', meaning: 'Aprendizado, crescimento, teste' },
    ],
    objetos: [
      { id: '11', category: 'objetos', name: 'Chave', symbol: '🗝️', meaning: 'Solução, acesso, descoberta' },
      { id: '12', category: 'objetos', name: 'Livro', symbol: '📖', meaning: 'Conhecimento, sabedoria, memória' },
      { id: '13', category: 'objetos', name: 'Espelho', symbol: '🪞', meaning: 'Autoconhecimento, reflexão' },
      { id: '14', category: 'objetos', name: 'Ponte', symbol: '🌉', meaning: 'Transição, conexão, passagem' },
      { id: '15', category: 'objetos', name: 'Coroa', symbol: '👑', meaning: 'Poder, realização, autoridade' },
    ],
    emocoes: [
      { id: '16', category: 'emocoes', name: 'Medo', symbol: '😰', meaning: 'Ansiedade, insegurança, alerta' },
      { id: '17', category: 'emocoes', name: 'Alegria', symbol: '😊', meaning: 'Realização, harmonia, celebração' },
      { id: '18', category: 'emocoes', name: 'Confusão', symbol: '😵', meaning: 'Incerteza, transição, conflito' },
      { id: '19', category: 'emocoes', name: 'Paz', symbol: '😌', meaning: 'Equilíbrio, aceitação, serenidade' },
      { id: '20', category: 'emocoes', name: 'Urgência', symbol: '😤', meaning: 'Pressão, necessidade de ação' },
    ]
  };

  const addElement = (element: DreamElement) => {
    setDreamEntry(prev => ({
      ...prev,
      [element.category]: [...prev[element.category], element]
    }));
  };

  const removeElement = (elementId: string, category: string) => {
    setDreamEntry(prev => ({
      ...prev,
      [category]: prev[category as keyof DreamEntry].filter(e => e.id !== elementId)
    }));
  };

  const generateInterpretation = () => {
    const totalElements = Object.values(dreamEntry).flat().length;
    if (totalElements >= 3) {
      setShowInterpretation(true);
    }
  };

  const resetDream = () => {
    setDreamEntry({ pessoas: [], lugares: [], objetos: [], emocoes: [] });
    setShowInterpretation(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pessoas': return <User className="w-5 h-5" />;
      case 'lugares': return <MapPin className="w-5 h-5" />;
      case 'objetos': return <Palette className="w-5 h-5" />;
      case 'emocoes': return <Heart className="w-5 h-5" />;
      default: return <Eye className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'pessoas': return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-500', hover: 'hover:border-amber-300 hover:bg-amber-25', icon: 'text-amber-600' };
      case 'lugares': return { bg: 'bg-lavender-100', text: 'text-lavender-800', border: 'border-lavender-500', hover: 'hover:border-lavender-300 hover:bg-lavender-50', icon: 'text-lavender-600' };
      case 'objetos': return { bg: 'bg-lavender-100', text: 'text-lavender-800', border: 'border-lavender-500', hover: 'hover:border-lavender-300 hover:bg-lavender-25', icon: 'text-lavender-600' };
      case 'emocoes': return { bg: 'bg-neutral-100', text: 'text-neutral-800', border: 'border-neutral-500', hover: 'hover:border-neutral-300 hover:bg-neutral-25', icon: 'text-neutral-600' };
      default: return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-500', hover: 'hover:border-amber-300 hover:bg-amber-25', icon: 'text-amber-600' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-amber-600 hover:text-amber-700 transition-colors mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Link>
              <h1 className="text-2xl font-serif text-amber-900">Diário de Sonhos Interativo</h1>
            </div>
            
            {/* Logo Ana */}
            <Link
              to="/"
              className="flex items-center hover:scale-105 transition-transform duration-300"
              aria-label="Voltar ao início"
            >
              <Heart className="w-6 h-6 mr-2 fill-current text-amber-600" />
              <span className="text-xl font-serif text-amber-600">Ana</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Moon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-amber-900 mb-6">
            Construa seu Sonho
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Selecione elementos que apareceram em seu sonho para uma interpretação 
            baseada na simbologia junguiana dos sonhos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dream Builder */}
          <div>
            <h3 className="text-2xl font-serif text-amber-900 mb-6">
              Elementos do Sonho
            </h3>

            {Object.entries(dreamElements).map(([category, elements]) => {
              const colors = getCategoryColor(category);
              return (
                <div key={category} className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`${colors.icon} mr-3`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h4 className="text-lg font-semibold text-amber-900 capitalize">
                      {category}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {elements.map((element) => {
                      const isSelected = dreamEntry[category as keyof DreamEntry].some(e => e.id === element.id);
                      return (
                        <button
                          key={element.id}
                          onClick={() => isSelected ? removeElement(element.id, category) : addElement(element)}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            isSelected
                              ? `${colors.border} ${colors.bg}`
                              : `border-amber-200 ${colors.hover}`
                          }`}
                        >
                          <div className="text-2xl mb-1">{element.symbol}</div>
                          <div className="text-sm font-medium text-amber-900">{element.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dream Summary */}
          <div>
            <h3 className="text-2xl font-serif text-amber-900 mb-6">
              Seu Sonho
            </h3>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-200 mb-6">
              {Object.entries(dreamEntry).map(([category, elements]) => {
                if (elements.length === 0) return null;
                const colors = getCategoryColor(category);
                
                return (
                  <div key={category} className="mb-4 last:mb-0">
                    <div className="flex items-center mb-3">
                      <div className={`${colors.icon} mr-2`}>
                        {getCategoryIcon(category)}
                      </div>
                      <h4 className="font-semibold text-amber-900 capitalize">{category}:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {elements.map((element: { id: string; name: string; category: string; symbol: string }) => (
                        <span
                          key={element.id}
                          className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} text-sm rounded-full`}
                        >
                          <span className="mr-1">{element.symbol}</span>
                          {element.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              {Object.values(dreamEntry).flat().length === 0 && (
                <div className="text-center text-amber-500 py-8">
                  <Moon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Selecione elementos do seu sonho acima</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={generateInterpretation}
                disabled={Object.values(dreamEntry).flat().length < 3}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  Object.values(dreamEntry).flat().length >= 3
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Save className="w-5 h-5 mr-2" />
                Interpretar Sonho
              </button>

              <button
                onClick={resetDream}
                className="w-full px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors"
              >
                Novo Sonho
              </button>
            </div>
          </div>
        </div>

        {/* Interpretation */}
        {showInterpretation && (
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
            <h3 className="text-3xl font-serif text-amber-900 mb-6 text-center">
              Interpretação Junguiana
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Símbolos e Significados
                </h4>
                <div className="space-y-4">
                  {Object.values(dreamEntry).flat().map((element) => (
                    <div key={element.id} className="border-l-4 border-amber-300 pl-4">
                      <div className="flex items-center mb-1">
                        <span className="mr-2">{element.symbol}</span>
                        <span className="font-medium text-amber-900">{element.name}</span>
                      </div>
                      <p className="text-amber-700 text-sm">{element.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Reflexão do Sonho
                </h4>
                <div className="space-y-4 text-amber-700">
                  <p>
                    Jung via os sonhos como cartas do inconsciente, revelando aspectos 
                    ocultos da psique e oferecendo compensação para atitudes conscientes.
                  </p>
                  <p>
                    Os símbolos em seu sonho podem representar conteúdos arquetípicos 
                    que buscam integração ou aspectos pessoais que necessitam atenção.
                  </p>
                  <p>
                    Reflita sobre como esses elementos se conectam com sua vida atual 
                    e que mensagem seu inconsciente pode estar comunicando.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Perguntas Reflexivas:</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Como você se sentiu durante o sonho?</li>
                    <li>• Que situações atuais se relacionam com estes símbolos?</li>
                    <li>• Que aspectos de si mesmo estes elementos podem representar?</li>
                  </ul>
                </div>

                <Link
                  to="/#contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Explorar em Terapia
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiarioSonhos;