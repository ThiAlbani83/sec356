import { useState, useEffect } from "react";

const CTA1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              THREAT INTELLIGENCE AVANÇADA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Análise Completa</span>
              <span className="block text-cyan-600">e Acelerada</span>
            </h2>
            <p className="text-xl text-cyan-700 font-semibold max-w-4xl mx-auto leading-relaxed mb-8">
              Identificamos ameaças, tendências, sentimentos e menções globais.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* First Paragraph */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed pl-6">
                  Os algoritmos da{" "}
                  <span className="text-cyan-600 font-semibold">SEC365</span>{" "}
                  alcançam a total proatividade em monitoramento de ameaças
                  online que permite identificar e atuar na contenção e
                  erradicação de potenciais ameaças, sendo capaz de detectar
                  vazamentos de informações, campanhas de phishing e outras
                  ameaças presentes em feeds e canais de mensageiros
                  instantâneos (monitorados).
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Uma das principais vantagens da solução é a capacidade de
                  remover conteúdos maliciosos, realizando o chamado{" "}
                  <span className="text-cyan-700 font-semibold">
                    "TakeDown"
                  </span>
                  , garantindo a proteção da empresa e de seus funcionários
                  contra possíveis danos causados por esses conteúdos.
                </p>
              </div>

              {/* Second Paragraph */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed pl-6">
                  Além disso, os algoritmos permitem que as organizações sejam
                  informadas sobre fontes de dados disponíveis publicamente que
                  possuam vínculos com suas informações. Isso inclui desde dados
                  publicados na{" "}
                  <span className="text-blue-600 font-semibold">
                    surface web
                  </span>
                  , até informações presentes na{" "}
                  <span className="text-indigo-600 font-semibold">
                    deep web
                  </span>{" "}
                  e{" "}
                  <span className="text-purple-600 font-semibold">
                    dark web
                  </span>
                  , como redes sociais, documentos públicos e informações
                  vazadas ou comercializadas sem autorização.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30 hover:-translate-y-1 transform">
                  <span>Contato</span>
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

          {/* Right Visual */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl p-8 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                    `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Floating Elements */}
                <div className="relative z-10">
                  {/* Threat Detection Visualization */}
                  <div className="space-y-4">
                    <div className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                      Monitoramento Ativo
                    </div>

                    {/* Status Items */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">
                          Surface Web Monitoring
                        </span>
                        <div className="ml-auto text-green-400 text-xs">
                          ATIVO
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-white text-sm">
                          Deep Web Analysis
                        </span>
                        <div className="ml-auto text-yellow-400 text-xs">
                          SCANNING
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-700"></div>
                        <span className="text-white text-sm">
                          Dark Web Intelligence
                        </span>
                        <div className="ml-auto text-red-400 text-xs">
                          THREAT DETECTED
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">
                          24/7
                        </div>
                        <div className="text-xs text-gray-300">Monitoring</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          99.9%
                        </div>
                        <div className="text-xs text-gray-300">Detection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-400">
                          &lt;1min
                        </div>
                        <div className="text-xs text-gray-300">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl animate-bounce-slow">
                🛡️
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl animate-pulse">
                🔍
              </div>
            </div>
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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
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

export default CTA1;
