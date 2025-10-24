import { useState, useEffect } from "react";

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🎓",
      title: "Experiência e Especialização",
      description:
        "Contamos com uma equipe altamente especializada, composta por profissionais experientes e certificados em diversas áreas da segurança cibernética.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: "⚡",
      title: "Abordagem Pró-Ativa",
      description:
        "Antecipamos ameaças e vulnerabilidades, permitindo que nossos clientes estejam um passo à frente na proteção contra incidentes de segurança, em vez de simplesmente reagir a eles.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: "🎯",
      title: "Customização",
      description:
        "Nossa capacidade de oferecer soluções personalizadas garante que atendemos às necessidades específicas de cada organização, não seguindo uma abordagem única para todos.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: "🛡️",
      title: "Monitoramento 24/7",
      description:
        "Oferecemos monitoramento constante e em tempo real, identificando ameaças assim que surgem, permitindo uma ação imediata para proteger sistemas e dados críticos.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: "🔄",
      title: "Atualização Constante",
      description:
        "Mantemos um olhar vigilante sobre as tendências em segurança cibernética e tecnologias emergentes para garantir que os sistemas dos nossos clientes estejam sempre protegidos contra ameaças em constante evolução.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: "⚖️",
      title: "Compliance e Regulamentações",
      description:
        "Possuímos um profundo conhecimento das regulamentações de segurança e estamos preparados para auxiliar as empresas a cumprir os requisitos legais e regulatórios, garantindo total conformidade.",
      color: "from-slate-500 to-gray-700",
    },
    {
      icon: "🚀",
      title: "Inovação Contínua",
      description:
        "Estamos constantemente buscando novas abordagens e soluções inovadoras para enfrentar as ameaças em evolução. Isso nos permite oferecer soluções de segurança cibernética eficazes e atualizadas.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-indigo-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-purple-400/20 rotate-12 animate-spin-reverse"></div>
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
            <div
              className={`inline-block text-sm font-mono text-cyan-400 mb-4 px-4 py-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Quem Somos
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              <span className="block">Promovendo a</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cibersegurança e Inovação
              </span>
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Description */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                O{" "}
                <span className="text-cyan-400 font-semibold">
                  Projeto SEC365
                </span>{" "}
                é uma iniciativa sem fins lucrativos dedicada a Instituições de
                Ensino e Pesquisa, bem como a Empresas Públicas localizadas no
                estado do Pará. Nossos serviços incluem soluções inovadoras em
                cibersegurança e muito mais:
              </p>

              <div className="border-l-4 border-cyan-400 pl-6 mb-8">
                <p className="text-gray-300 leading-relaxed italic">
                  "Nossos princípios fundamentais incluem o compromisso com a
                  qualidade de produtos e serviços, agilidade no atendimento,
                  preços justos e entrega garantida."
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Descubra como o{" "}
                <span className="text-cyan-400 font-semibold">SEC365</span> pode
                revolucionar suas estratégias de segurança cibernética e combate
                à fraude. Estamos aqui para apoiar o seu sucesso.
              </p>
            </div>
          </div>

          {/* Right Content - Mission Stats */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-cyan-400 font-bold text-lg mb-2">
                  🎯 Nossa Missão
                </h3>
                <p className="text-gray-300 text-sm">
                  Fortalecer a segurança cibernética no Pará através de soluções
                  inovadoras e acessíveis para instituições públicas e de
                  ensino.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-blue-400 font-bold text-lg mb-2">
                  🔍 Nossa Visão
                </h3>
                <p className="text-gray-300 text-sm">
                  Ser referência em cibersegurança na região amazônica,
                  promovendo pesquisa, inovação e proteção digital.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
                <h3 className="text-indigo-400 font-bold text-lg mb-2">
                  ⚡ Nossos Valores
                </h3>
                <p className="text-gray-300 text-sm">
                  Qualidade, agilidade, preços justos, entrega garantida e
                  compromisso com a excelência em segurança cibernética.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Nossos Diferenciais
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Conheça os pilares que sustentam nossa excelência em segurança
              cibernética
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-64 flex flex-col items-center">
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center">
                    <h4 className="text-white font-semibold text-sm mb-3 leading-tight flex-shrink-0">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed flex-1 text-center">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className={`transition-all duration-1000 delay-1500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30 hover:-translate-y-1 transform cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
            >
              <span>Entre em Contato</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Sobre;
