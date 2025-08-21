import { useState } from 'react';
import { ArrowLeft, Circle, Heart, Briefcase, Users, Home, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Complex {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
  description: string;
  position?: { x: number; y: number };
}

const ConstelacaoComplexos = () => {
  const [complexes, setComplexes] = useState<Complex[]>([
    { id: '1', name: 'Família', icon: <Home className="w-6 h-6" />, color: 'blue', description: 'Relações familiares e origem' },
    { id: '2', name: 'Amor', icon: <Heart className="w-6 h-6" />, color: 'red', description: 'Relacionamentos românticos' },
    { id: '3', name: 'Trabalho', icon: <Briefcase className="w-6 h-6" />, color: 'green', description: 'Carreira e realizações' },
    { id: '4', name: 'Social', icon: <Users className="w-6 h-6" />, color: 'purple', description: 'Relacionamentos sociais' },
    { id: '5', name: 'Identidade', icon: <Brain className="w-6 h-6" />, color: 'orange', description: 'Autoimagem e identidade' },
  ]);
  
  const [draggedComplex, setDraggedComplex] = useState<Complex | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (complex: Complex, event: React.DragEvent) => {
    setDraggedComplex(complex);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (draggedComplex) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = event.clientX - rect.left - centerX;
      const y = event.clientY - rect.top - centerY;

      setComplexes(prev => 
        prev.map(c => 
          c.id === draggedComplex.id 
            ? { ...c, position: { x, y } }
            : c
        )
      );
    }
    setDraggedComplex(null);
  };

  const calculateDistance = (pos: { x: number; y: number }) => {
    return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
  };

  const getInterpretation = () => {
    const positioned = complexes.filter(c => c.position);
    const distances = positioned.map(c => ({
      ...c,
      distance: calculateDistance(c.position!)
    })).sort((a, b) => a.distance - b.distance);

    return distances;
  };

  const resetConstellation = () => {
    setComplexes(prev => prev.map(c => ({ ...c, position: undefined })));
    setShowResults(false);
  };

  const generateResults = () => {
    setShowResults(true);
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
              <h1 className="text-2xl font-serif text-amber-900">Constelação de Complexos</h1>
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
          <h2 className="text-4xl font-serif text-amber-900 mb-6">
            Mapeie seus Complexos Psicológicos
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Arraste os complexos para posicioná-los conforme sua proximidade emocional ao seu Self (centro). 
            Baseado na teoria dos complexos de Jung.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Complex Pool */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-amber-900 mb-6">
              Complexos Disponíveis
            </h3>
            <div className="space-y-4">
              {complexes.filter(c => !c.position).map((complex) => (
                <div
                  key={complex.id}
                  draggable
                  onDragStart={(e) => handleDragStart(complex, e)}
                  className={`p-4 bg-${complex.color}-100 border-2 border-${complex.color}-300 rounded-lg cursor-grab active:cursor-grabbing transition-all hover:scale-105`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`text-${complex.color}-600 mr-3`}>
                      {complex.icon}
                    </div>
                    <h4 className="font-semibold text-amber-900">{complex.name}</h4>
                  </div>
                  <p className="text-sm text-amber-700">{complex.description}</p>
                </div>
              ))}
            </div>
            
            {complexes.filter(c => c.position).length >= 3 && (
              <button
                onClick={generateResults}
                className="w-full mt-6 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
              >
                Gerar Interpretação
              </button>
            )}
            
            <button
              onClick={resetConstellation}
              className="w-full mt-3 px-6 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-lg hover:bg-amber-600 hover:text-white transition-colors"
            >
              Recomeçar
            </button>
          </div>

          {/* Constellation Space */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-amber-900 mb-6">
              Constelação Psíquica
            </h3>
            <div
              className="relative w-full h-96 bg-white rounded-2xl border-2 border-dashed border-amber-300 overflow-hidden"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {/* Center - Self */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                <Circle className="w-8 h-8 text-white" />
                <span className="absolute -bottom-6 text-amber-600 font-medium text-sm">Self</span>
              </div>

              {/* Positioned Complexes */}
              {complexes.filter(c => c.position).map((complex) => (
                <div
                  key={complex.id}
                  className={`absolute w-12 h-12 bg-${complex.color}-200 border-2 border-${complex.color}-400 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
                  style={{
                    left: `calc(50% + ${complex.position!.x}px)`,
                    top: `calc(50% + ${complex.position!.y}px)`
                  }}
                >
                  <div className={`text-${complex.color}-700 w-6 h-6`}>
                    {complex.icon}
                  </div>
                  <span className="absolute -bottom-6 text-xs font-medium text-amber-700 whitespace-nowrap">
                    {complex.name}
                  </span>
                </div>
              ))}

              {/* Instructions */}
              {complexes.filter(c => c.position).length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-amber-500 text-center">
                    Arraste os complexos da esquerda para esta área<br />
                    Posicione-os conforme sua proximidade emocional ao Self
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
            <h3 className="text-3xl font-serif text-amber-900 mb-6 text-center">
              Interpretação da sua Constelação
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Proximidade ao Self
                </h4>
                <div className="space-y-3">
                  {getInterpretation().map((complex, index) => (
                    <div key={complex.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`text-${complex.color}-600 mr-3`}>
                          {complex.icon}
                        </div>
                        <span className="font-medium">{complex.name}</span>
                      </div>
                      <span className="text-sm text-amber-600">
                        {index === 0 ? 'Mais próximo' : index === 1 ? 'Próximo' : 'Mais distante'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">
                  Insight Junguiano
                </h4>
                <div className="space-y-4 text-amber-700">
                  <p>
                    A posição dos complexos revela como diferentes aspectos da sua vida 
                    se relacionam com seu Self central.
                  </p>
                  <p>
                    Complexos mais próximos tendem a ter maior influência consciente, 
                    enquanto os distantes podem representar áreas de conflito ou repressão.
                  </p>
                  <p>
                    Jung via os complexos como grupos autônomos de conteúdos psíquicos 
                    que podem tanto enriquecer quanto perturbar a consciência.
                  </p>
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

export default ConstelacaoComplexos;