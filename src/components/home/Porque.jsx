import { useState, useEffect } from "react";

const Porque = () => {
  const [activeReason, setActiveReason] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const reasons = [
    {
      text: "Autoridade Científica Reconhecida Internacionalmente",
      icon: "🏆",
      category: "Credibilidade",
    },
    {
      text: "Clientes e Parceiros Satisfeitos com os Resultados Alcançados",
      icon: "⭐",
      category: "Satisfação",
    },
    {
      text: "Visibilidade, Maturidade e Plano de Crescimento Consistente",
      icon: "📈",
      category: "Crescimento",
    },
    {
      text: "Desenvolvemos Soluções Personalizadas",
      icon: "🔧",
      category: "Personalização",
    },
    {
      text: "Equipe Formada por Pesquisadores e Especialistas de Mercado",
      icon: "👥",
      category: "Expertise",
    },
    {
      text: "Identificação de Feeds de Ameaças, Tendências de Mercado, Reputação e Concorrentes",
      icon: "🔍",
      category: "Intelligence",
    },
    {
      text: "Experiência Prática na Implementação de Sistemas de Cibersegurança",
      icon: "🛡️",
      category: "Implementação",
    },
    {
      text: "Somos a sua Equipe Extendida",
      icon: "🤝",
      category: "Parceria",
    },
    {
      text: "Alto Índice de Recomendação, Satisfação e Confiabilidade",
      icon: "💯",
      category: "Confiança",
    },
    {
      text: "Visão de maturidade plug-in-play",
      icon: "🔌",
      category: "Facilidade",
    },
    {
      text: "Economia de Esforços e Atendimento Agnóstico",
      icon: "💰",
      category: "Economia",
    },
    {
      text: "Reunificação familiar de pessoas desaparecidas",
      icon: "❤️",
      category: "Humanidade",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  const nextReason = () => {
    setActiveReason((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setActiveReason((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block text-sm font-mono text-cyan-600 mb-4 px-4 py-2 bg-cyan-50 rounded-lg border border-cyan-200 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Por que escolher?
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              SEC365
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nossos diferenciais que nos tornam líderes em cibersegurança
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Side - Featured Card */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Subtle accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <div className="text-center">
                <div className="text-4xl mb-4">
                  {reasons[activeReason].icon}
                </div>

                <div className="text-sm font-mono text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-4 inline-block">
                  {reasons[activeReason].category}
                </div>

                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-6">
                  {reasons[activeReason].text}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>
                    {String(activeReason + 1).padStart(2, "0")} de{" "}
                    {String(reasons.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                    style={{
                      width: `${((activeReason + 1) / reasons.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Simple Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevReason}
                className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextReason}
                className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Simple Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border ${
                    index === activeReason
                      ? "bg-cyan-50 border-cyan-200 shadow-md"
                      : "bg-white/50 border-gray-200 hover:bg-white/80 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveReason(index)}
                >
                  <div className="text-center">
                    <div className="text-xl mb-2">{reason.icon}</div>
                    <div className="text-xs font-mono text-gray-500 mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-700 font-medium leading-tight">
                      {reason.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {reasons.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeReason
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              onClick={() => setActiveReason(index)}
            />
          ))}
        </div>

        {/* Simple Status */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-gray-500 font-mono">
            Vantagem {activeReason + 1} de {reasons.length} •{" "}
            {reasons[activeReason].category}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Porque;
