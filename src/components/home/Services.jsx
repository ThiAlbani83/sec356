import { useState, useEffect } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Managed Security Services (MSS)",
      description:
        "A análise automatizada baseada em IA e ML que detectam e investigam ameaças com agilidade, aplicando análises sofisticadas e inteligência contra ameaças. Nossa solução completa vem com SOC e oferece contexto completo e automatizado para uma visão centrada no ataque.",
      icon: "🛡️",
      route: "/services/mss",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Gestão Ativa de Vulnerabilidades",
      description:
        "Análise de Vulnerabilidades é um processo contínuo que inclui a descoberta de ativos vulneráveis, monitoramento programável e defesa cibernética tática, protegendo contra ataques com métricas únicas desenvolvidas com base em IA e Cyber Exposure.",
      icon: "🔍",
      route: "/services/gestao-vulnerabilidade",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Spear Phishing Corporativo",
      description:
        "Realize testes de simulações de spear phishing entre seus colaboradores para avaliar a susceptibilidade de quem esta mais vulnerável a serem vítimas de fraudes eletrônicas, inclusive a ataques de Comprometimento de e-mail Corporativo (CeC).",
      icon: "🎯",
      route: "/services/corporative-phishing",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Teste de Intrusão | Pentest",
      description:
        "Pentest é crucial para verificar a eficácia da segurança empresarial contra ataques internos/externos. Nossas simulações avançadas, éticas e profissionais seguem normas de segurança internacionais, testando toda e qualquer tipo de ambiente.",
      icon: "⚡",
      route: "/services/pentest",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
            <div className="text-sm font-medium text-cyan-600 mb-4 tracking-wider uppercase">
              SOLUÇÕES ESPECIALIZADAS
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Produtos
              </h2>
              <div className="text-3xl bg-gradient-to-r from-black to-cyan-600 bg-clip-text text-transparent sm:text-4xl lg:text-5xl font-bold leading-tight">
                &
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600 leading-tight">
                Serviços
              </h2>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções abrangentes em segurança cibernética,
              desenvolvidas com{" "}
              <span className="text-cyan-600 font-semibold">
                tecnologia de ponta
              </span>{" "}
              para proteger sua organização contra as mais avançadas ameaças
              digitais.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto">
                  <div
                    className={`text-4xl p-3 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 backdrop-blur-sm`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-cyan-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button
                    className={`group/btn px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30 hover:-translate-y-1 transform focus:outline-none focus:ring-4 focus:ring-cyan-300/50`}
                    onClick={() => {
                      // Aqui você pode adicionar a navegação para a página específica do serviço
                      console.log(`Navegando para: ${service.route}`);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Saiba Mais
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
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
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
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
        .animate-blob {
          animation: blob 7s infinite;
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

export default Services;
