import { useState, useEffect } from "react";

const Desafios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    vulnerabilities: 0,
    sensitiveData: 0,
    records: 0,
    attacks: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animação dos contadores
  useEffect(() => {
    if (isVisible) {
      const targets = {
        vulnerabilities: 9820,
        sensitiveData: 1621,
        records: 8862652,
        attacks: 18439,
      };

      const duration = 2000; // 2 segundos
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.keys(targets).map((key) => {
        const target = targets[key];
        const increment = target / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals[Object.keys(targets).indexOf(key)]);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const features = [
    {
      icon: "🚨",
      title: "Sinal de alerta",
      description:
        "Poder para atribuir alertas de forma rápida e com confiança em grande escala.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: "🧠",
      title: "Análise Comportamental",
      description:
        "Monitore qualquer usuário ou entidade, além disso mostra irregularidades de forma rápida e absoluta.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: "🔭",
      title: "Observatório",
      description:
        "Ferramenta de monitoramento baseada em SaaS com um agente de monitoramento leve e fácil de configurar.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: "🎯",
      title: "Inteligência a ameaças",
      description:
        "Visão em tempo real de hosts maliciosos e outros indicadores de comprometimento.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: "🔍",
      title: "Busca por Ameaças",
      description:
        "Pesquisa point and click para que procure riscos de comportamento ou de entidade.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: "⚡",
      title: "Automação e resposta",
      description:
        "Ações para melhorar e agilizar a resposta a riscos de segurança.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const stats = [
    {
      number: counters.vulnerabilities.toLocaleString(),
      label: "Vulnerabilidades Erradicadas",
      color: "text-red-400",
      bgColor: "from-red-500/20 to-orange-500/20",
    },
    {
      number: counters.sensitiveData.toLocaleString(),
      label: "DADOS SENSÍVEIS MAPEADOS",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      number: counters.records.toLocaleString(),
      label: "REGISTROS ANALIZADOS",
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-indigo-500/20",
    },
    {
      number: counters.attacks.toLocaleString(),
      label: "contenção de ataques",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
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
              Enfrentamento de Desafios
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Definir, Padronizar</span>
              <span className="block text-cyan-600">E Automatizar</span>
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-1 h-64 flex flex-col items-center">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300 flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 text-center">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Resultados Comprovados
            </h3>
            <p className="text-gray-600">
              Números que demonstram nossa eficácia e dedicação à segurança
              cibernética
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className={`relative bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-lg h-32 flex flex-col justify-center`}
                >
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-700 font-medium uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-300/30 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-16">
          <div
            className={`transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30 hover:-translate-y-1 transform cursor-pointer"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  // Scroll para a seção de services na mesma página
                  window.scrollTo({ top: 800, behavior: "smooth" });
                }
              }}
            >
              <span>Conheça Nossa Solução</span>
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

export default Desafios;
