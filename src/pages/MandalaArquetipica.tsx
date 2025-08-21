import { useState } from 'react';
import { ArrowLeft, Circle, Sun, Moon, Mountain, Waves, Flame, TreePine, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Symbol {
  id: string;
  name: string;
  icon: JSX.Element;
  meaning: string;
  archetype: string;
}

const MandalaArquetipica = () => {
  const [selectedSymbols, setSelectedSymbols] = useState<Symbol[]>([]);
  const [showResults, setShowResults] = useState(false);

  const symbols: Symbol[] = [
    { id: '1', name: 'Sol', icon: <Sun className="w-8 h-8" />, meaning: 'Consciência, energia vital, ego', archetype: 'Self' },
    { id: '2', name: 'Lua', icon: <Moon className="w-8 h-8" />, meaning: 'Inconsciente, intuição, feminino', archetype: 'Anima' },
    { id: '3', name: 'Montanha', icon: <Mountain className="w-8 h-8" />, meaning: 'Estabilidade, transcendência, desafio', archetype: 'Self' },
    { id: '4', name: 'Água', icon: <Waves className="w-8 h-8" />, meaning: 'Emoções, purificação, fluidez', archetype: 'Inconsciente' },
    { id: '5', name: 'Fogo', icon: <Flame className="w-8 h-8" />, meaning: 'Transformação, paixão, energia', archetype: 'Sombra' },
    { id: '6', name: 'Árvore', icon: <TreePine className="w-8 h-8" />, meaning: 'Crescimento, conexão, vida', archetype: 'Self' },
    { id: '7', name: 'Estrela', icon: <Star className="w-8 h-8" />, meaning: 'Orientação, esperança, destino', archetype: 'Self' },
    { id: '8', name: 'Coração', icon: <Heart className="w-8 h-8" />, meaning: 'Amor, compaixão, centro emocional', archetype: 'Anima/Animus' },
  ];

  const addSymbol = (symbol: Symbol) => {
    if (selectedSymbols.length < 8 && !selectedSymbols.find(s => s.id === symbol.id)) {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };

  const removeSymbol = (symbolId: string) => {
    setSelectedSymbols(selectedSymbols.filter(s => s.id !== symbolId));
  };

  const generateMandala = () => {
    if (selectedSymbols.length >= 4) {
      setShowResults(true);
    }
  };

  const resetMandala = () => {
    setSelectedSymbols([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
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
                <span className="hidden md:inline">Voltar</span>
              </Link>
              <h1 className="text-2xl font-serif text-amber-900">Mandala Arquetípica</h1>
            </div>
            
            {/* Logo Ana - Hidden on mobile */}
            <Link
              to="/"
              className="hidden md:flex items-center hover:scale-105 transition-transform duration-300"
              aria-label="Voltar ao início"
            >
              <Heart className="w-6 h-6 mr-2 fill-current text-amber-600" />
              <span className="text-xl font-serif text-amber-600">Ana</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-900 mb-6">
            Crie sua Mandala Pessoal
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Escolha símbolos que ressoam com você e crie uma mandala que representa 
            seu estado psíquico atual. Esta atividade baseia-se nos estudos de Jung 
            sobre a mandala como símbolo do Self.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Symbol Selection */}
          <div>
            <h3 className="text-2xl font-serif text-amber-900 mb-6">
              Escolha seus Símbolos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {symbols.map((symbol) => (
                <button
                  key={symbol.id}
                  onClick={() => addSymbol(symbol)}
                  disabled={selectedSymbols.find(s => s.id === symbol.id) !== undefined}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedSymbols.find(s => s.id === symbol.id)
                      ? 'border-amber-400 bg-amber-100 opacity-50'
                      : 'border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                  }`}
                >
                  <div className="text-amber-600 mb-2 flex justify-center">
                    {symbol.icon}
                  </div>
                  <div className="text-sm font-medium text-amber-900">
                    {symbol.name}
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={generateMandala}
                disabled={selectedSymbols.length < 4}
                className={`px-8 py-3 rounded-full font-medium transition-colors ${
                  selectedSymbols.length >= 4
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Gerar Interpretação
              </button>
              {selectedSymbols.length > 0 && (
                <button
                  onClick={resetMandala}
                  className="ml-4 px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Recomeçar
                </button>
              )}
            </div>
          </div>

          {/* Mandala Visualization */}
          <div>
            <h3 className="text-2xl font-serif text-amber-900 mb-6">
              Sua Mandala
            </h3>
            <div className="relative">
              {/* Mandala Circle */}
              <div className="w-80 h-80 mx-auto relative">
                <Circle className="w-full h-full text-amber-300" />
                
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-serif text-sm">Self</span>
                </div>

                {/* Selected Symbols positioned around the circle */}
                {selectedSymbols.map((symbol, index) => {
                  const angle = (index / selectedSymbols.length) * 2 * Math.PI;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={symbol.id}
                      className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-amber-300"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <div className="text-amber-600 w-6 h-6">
                        {symbol.icon}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Symbols List */}
              {selectedSymbols.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-semibold text-amber-900 mb-4">
                    Símbolos Escolhidos ({selectedSymbols.length}/8):
                  </h4>
                  <div className="space-y-2">
                    {selectedSymbols.map((symbol) => (
                      <div
                        key={symbol.id}
                        className="flex items-center justify-between bg-white p-3 rounded-lg border border-amber-200"
                      >
                        <div className="flex items-center">
                          <div className="text-amber-600 mr-3 w-5 h-5">
                            {symbol.icon}
                          </div>
                          <span className="text-amber-900 font-medium">
                            {symbol.name}
                          </span>
                        </div>
                        <button
                          onClick={() => removeSymbol(symbol.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remover
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
            <h3 className="text-3xl font-serif text-amber-900 mb-6 text-center">
              Interpretação da sua Mandala
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Significados dos Símbolos
                </h4>
                <div className="space-y-3">
                  {selectedSymbols.map((symbol) => (
                    <div key={symbol.id} className="border-l-4 border-amber-300 pl-4">
                      <div className="font-medium text-amber-900">
                        {symbol.name}
                      </div>
                      <div className="text-amber-700 text-sm">
                        {symbol.meaning}
                      </div>
                      <div className="text-amber-600 text-xs font-medium">
                        Arquétipo: {symbol.archetype}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Reflexão Junguiana
                </h4>
                <div className="space-y-4 text-amber-700">
                  <p>
                    Sua mandala revela aspectos importantes do seu processo de individuação. 
                    Os símbolos escolhidos representam energias psíquicas ativas em sua vida atual.
                  </p>
                  <p>
                    Jung via a mandala como um símbolo natural do Self, o centro organizador 
                    da psique. Cada elemento que você escolheu reflete uma faceta de sua 
                    jornada interior.
                  </p>
                  <p>
                    Continue observando como esses símbolos ressoam em sua vida diária. 
                    Eles podem oferecer insights valiosos sobre seu caminho de crescimento pessoal.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Explorar em Terapia
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MandalaArquetipica;