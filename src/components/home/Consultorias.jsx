import { useState, useEffect } from "react";

const Consultorias = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const consultorias = [
    {
      title: "Adequação LGPD + DPO as a Service",
      description:
        "Nossa solução exclusiva enfrenta os desafios da LGPD, garantindo conformidade. Com uma equipe técnica e jurídica especializada, orientamos sua empresa na proteção de dados, assegurando responsabilidade e segurança da informação.",
      icon: "⚖️",
      route: "/consulting/lgpd-dpo",
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "legal",
    },
    {
      title:
        "Auditorias e Perícias de Conformidade Aplicadas ao Ciclo Contratual",
      description:
        "Essa modalidade consiste em avaliar e assegurar a conformidade dos contratos de TI. A análise abrange pré-contratos e contratos existentes para garantir alinhamento com normas legais e expectativas do negócio, certificando-se de que todos os aspectos contratuais estejam em conformidade.",
      icon: "📋",
      route: "/consulting/auditorias-pericias",
      gradient: "from-blue-500 to-cyan-600",
      bgPattern: "audit",
    },
    {
      title: "CISO as a Service",
      description:
        "O serviço de CISO as a Service abrange diversas responsabilidades em uma organização, representando um desafio que ultrapassa a capacidade individual, tanto em aspectos técnicos quanto de disponibilidade. Isso é crucial em um contexto onde o tempo é limitado.",
      icon: "👨‍💼",
      route: "/consulting/ciso-as-service",
      gradient: "from-purple-500 to-indigo-600",
      bgPattern: "executive",
    },
    {
      title: "CISO Advisory",
      description:
        "Assessoria especializada para definir uma visão estratégica alinhada às últimas tendências em segurança cibernética. Fundamental para reduzir riscos corporativos, aumentar a maturidade e gerenciar de forma eficaz os programas de segurança cibernética da sua empresa.",
      icon: "🎯",
      route: "/consulting/ciso-advisory",
      gradient: "from-orange-500 to-red-600",
      bgPattern: "strategy",
    },
    {
      title: "Perícia Forense Computacional",
      description:
        "A Perícia Forense Computacional é crucial para investigar crimes cibernéticos, fraudes e incidentes de segurança. Nossa análise detalhada produz laudos periciais que fornecem embasamento técnico-científico para decisões judiciais fundamentadas.",
      icon: "🔬",
      route: "/consulting/computer-forensics",
      gradient: "from-slate-500 to-gray-700",
      bgPattern: "forensics",
    },
  ];

  return (
    <section className="relative py-10 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-orange-400/30 rotate-12 animate-spin-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-sm font-medium text-cyan-400 mb-4 tracking-wider uppercase">
              EXPERTISE ESPECIALIZADA
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Consultorias</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Estratégicas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transformamos desafios complexos em{" "}
              <span className="text-cyan-400 font-semibold">
                soluções estratégicas
              </span>{" "}
              através de consultoria especializada, compliance avançado e
              assessoria executiva em segurança cibernética.
            </p>
          </div>
        </div>

        {/* Consultorias Showcase - Layout Grid Organizado */}
        <div className="lg:grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto hidden">
          {/* Cards Seletores - Esquerda */}
          <div className="lg:col-span-1 space-y-4">
            {consultorias
              .slice(0, Math.ceil(consultorias.length / 2))
              .map((consultoria, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  } ${index === activeCard ? "" : ""}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveCard(index)}
                >
                  <div
                    className={`relative p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                      index === activeCard
                        ? "bg-white/20 border-cyan-400/50"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${consultoria.gradient} flex items-center justify-center text-2xl`}
                      >
                        {consultoria.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm leading-tight">
                          {consultoria.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Card Principal - Centro */}
          <div className="lg:col-span-1 flex justify-center">
            <div
              className={`group relative max-w-md transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  clipPath:
                    "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {consultorias[activeCard].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {consultorias[activeCard].title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {consultorias[activeCard].description}
                  </p>
                  <button
                    className={`px-6 py-3 bg-gradient-to-r ${consultorias[activeCard].gradient} text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transform text-sm`}
                  >
                    Solicitar Consultoria
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Seletores - Direita */}
          <div className="lg:col-span-1 space-y-4">
            {consultorias
              .slice(Math.ceil(consultorias.length / 2))
              .map((consultoria, index) => {
                const realIndex = index + Math.ceil(consultorias.length / 2);
                return (
                  <div
                    key={realIndex}
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    } ${realIndex === activeCard ? "" : ""}`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                    onClick={() => setActiveCard(realIndex)}
                  >
                    <div
                      className={`relative p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                        realIndex === activeCard
                          ? "bg-white/20 border-cyan-400/50"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${consultoria.gradient} flex items-center justify-center text-2xl`}
                        >
                          {consultoria.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm leading-tight">
                            {consultoria.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Layout Mobile - Cards em lista */}
        <div className="lg:hidden mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {consultorias.map((consultoria, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeCard ? "scale-105" : "hover:scale-105"
                }`}
                onClick={() => setActiveCard(index)}
              >
                <div
                  className={`p-3 rounded-lg bg-white/10 backdrop-blur-sm border transition-all duration-300 ${
                    index === activeCard
                      ? "border-cyan-400/50 bg-white/20"
                      : "border-white/20 hover:border-cyan-400/30"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{consultoria.icon}</div>
                    <div className="text-xs text-white font-medium">
                      {consultoria.title.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card Principal Mobile */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-3">
                {consultorias[activeCard].icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {consultorias[activeCard].title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {consultorias[activeCard].description}
              </p>
              <button
                className={`px-6 py-2 bg-gradient-to-r ${consultorias[activeCard].gradient} text-white font-semibold rounded-full text-sm`}
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {consultorias.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCard
                  ? `bg-gradient-to-r ${consultorias[index].gradient} shadow-lg`
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Consultorias;
