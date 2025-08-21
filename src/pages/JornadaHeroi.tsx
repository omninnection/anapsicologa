import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Crown, Sword, Heart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JourneyStage {
  id: number;
  title: string;
  description: string;
  scenarios: string[];
  archetype: string;
}

const JornadaHeroi = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedScenarios, setSelectedScenarios] = useState<{[key: number]: number[]}>({});
  const [showResults, setShowResults] = useState(false);

  const journeyStages: JourneyStage[] = [
    {
      id: 1,
      title: "Mundo Comum",
      description: "Sua vida antes da transformação",
      scenarios: [
        "Sinto-me preso(a) na rotina diária",
        "Tenho uma vida confortável mas sem propósito",
        "Evito mudanças e prefiro o conhecido",
        "Sinto que algo importante está faltando"
      ],
      archetype: "Inocente"
    },
    {
      id: 2,
      title: "Chamado à Aventura",
      description: "O momento que desperta para a necessidade de mudança",
      scenarios: [
        "Passei por uma crise pessoal importante",
        "Senti um forte desejo de mudança",
        "Alguém me desafiou a crescer",
        "Tive um insight sobre quem realmente sou"
      ],
      archetype: "Explorador"
    },
    {
      id: 3,
      title: "Recusa do Chamado",
      description: "A resistência inicial à transformação",
      scenarios: [
        "Tenho medo de sair da zona de conforto",
        "Acho que não sou capaz de mudar",
        "Outras pessoas me desencorajaram",
        "Prefiro adiar mudanças importantes"
      ],
      archetype: "Órfão"
    },
    {
      id: 4,
      title: "Encontro com o Mentor",
      description: "Pessoas ou experiências que guiam seu crescimento",
      scenarios: [
        "Encontrei um terapeuta ou coach",
        "Alguém sábio me deu conselhos importantes",
        "Li livros que mudaram minha perspectiva",
        "Tive experiências espirituais significativas"
      ],
      archetype: "Sábio"
    },
    {
      id: 5,
      title: "Travessia do Limiar",
      description: "O primeiro passo real em direção à mudança",
      scenarios: [
        "Tomei uma decisão corajosa",
        "Mudei de emprego ou relacionamento",
        "Comecei terapia ou autoconhecimento",
        "Enfrentei um medo importante"
      ],
      archetype: "Guerreiro"
    },
    {
      id: 6,
      title: "Provações e Aliados",
      description: "Desafios e apoios encontrados no caminho",
      scenarios: [
        "Encontrei pessoas que me apoiam",
        "Superei obstáculos significativos",
        "Aprendi novas habilidades",
        "Enfrentei conflitos internos"
      ],
      archetype: "Cuidador"
    }
  ];

  const toggleScenario = (stageId: number, scenarioIndex: number) => {
    setSelectedScenarios(prev => {
      const current = prev[stageId] || [];
      const isSelected = current.includes(scenarioIndex);
      
      return {
        ...prev,
        [stageId]: isSelected 
          ? current.filter(i => i !== scenarioIndex)
          : [...current, scenarioIndex]
      };
    });
  };

  const nextStage = () => {
    if (currentStage < journeyStages.length - 1) {
      setCurrentStage(currentStage + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const resetJourney = () => {
    setCurrentStage(0);
    setSelectedScenarios({});
    setShowResults(false);
  };

  const getTotalSelected = () => {
    return Object.values(selectedScenarios).reduce((total, scenarios) => total + scenarios.length, 0);
  };

  const stage = journeyStages[currentStage];

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
              <h1 className="text-2xl font-serif text-amber-900">Jornada do Herói Pessoal</h1>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showResults ? (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-600 font-medium">
                  Etapa {currentStage + 1} de {journeyStages.length}
                </span>
                <span className="text-amber-600 text-sm">
                  {getTotalSelected()} experiências selecionadas
                </span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div
                  className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStage + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Stage Content */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-200 mb-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-amber-600 mr-3" />
                  <span className="text-amber-600 font-medium">Arquétipo: {stage.archetype}</span>
                </div>
                <h2 className="text-3xl font-serif text-amber-900 mb-4">
                  {stage.title}
                </h2>
                <p className="text-xl text-amber-700 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">
                  Selecione as situações que você já vivenciou ou está vivenciando:
                </h3>
                
                {stage.scenarios.map((scenario, index) => {
                  const isSelected = selectedScenarios[stage.id]?.includes(index) || false;
                  
                  return (
                    <label
                      key={index}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-amber-200 hover:border-amber-300 hover:bg-amber-25'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleScenario(stage.id, index)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center ${
                        isSelected ? 'border-amber-500 bg-amber-500' : 'border-amber-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-amber-900">{scenario}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevStage}
                disabled={currentStage === 0}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
                  currentStage === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-amber-200 text-amber-700 hover:bg-amber-300'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Anterior
              </button>

              <button
                onClick={nextStage}
                className="flex items-center px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
              >
                {currentStage === journeyStages.length - 1 ? 'Ver Resultados' : 'Próxima'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </>
        ) : (
          /* Results */
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-200">
            <div className="text-center mb-8">
              <Crown className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-amber-900 mb-4">
                Sua Jornada de Individuação
              </h2>
              <p className="text-xl text-amber-700">
                Mapa da sua transformação pessoal baseado na Jornada do Herói
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Summary */}
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Resumo da sua Jornada
                </h3>
                <div className="space-y-4">
                  {journeyStages.map((stageItem) => {
                    const selectedCount = selectedScenarios[stageItem.id]?.length || 0;
                    const isActive = selectedCount > 0;
                    
                    return (
                      <div
                        key={stageItem.id}
                        className={`p-3 rounded-lg border ${
                          isActive ? 'border-amber-300 bg-amber-50' : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${isActive ? 'text-amber-900' : 'text-gray-500'}`}>
                            {stageItem.title}
                          </h4>
                          <span className={`text-sm ${isActive ? 'text-amber-600' : 'text-gray-400'}`}>
                            {selectedCount}/4
                          </span>
                        </div>
                        <p className={`text-xs mt-1 ${isActive ? 'text-amber-600' : 'text-gray-400'}`}>
                          {stageItem.archetype}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Insights */}
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Insights Junguianos
                </h3>
                <div className="space-y-4 text-amber-700">
                  <p>
                    Sua jornada revela padrões arquetípicos únicos de crescimento. 
                    Cada etapa representa uma fase crucial do processo de individuação.
                  </p>
                  <p>
                    As experiências selecionadas mostram como você está navegando 
                    os desafios da transformação pessoal, integrando aspectos 
                    conscientes e inconscientes da psique.
                  </p>
                  <p>
                    Jung via a jornada do herói como um mapa universal da 
                    maturação psicológica, onde cada pessoa deve encontrar 
                    seu próprio caminho de autorrealização.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-x-4">
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Explorar em Terapia
              </Link>
              
              <button
                onClick={resetJourney}
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-full hover:bg-amber-600 hover:text-white transition-colors"
              >
                <Sword className="w-5 h-5 mr-2" />
                Nova Jornada
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JornadaHeroi;