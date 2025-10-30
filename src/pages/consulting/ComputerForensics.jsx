import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComputerForensics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const forensicsBenefits = [
    {
      title: "Investigação Precisa",
      description:
        "Permite uma investigação precisa em casos de crimes cibernéticos, fornecendo evidências digitais fundamentais para a resolução de casos.",
      icon: "🔍",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Proteção de Dados",
      description:
        "Ajuda na identificação e proteção de dados sensíveis, evitando vazamentos e garantindo conformidade com regulamentações de privacidade.",
      icon: "🛡️",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Resolução Rápida",
      description:
        "Acelera o processo de resolução de casos, fornecendo análises detalhadas e laudos técnicos que podem ser utilizados de forma eficiente em processos judiciais.",
      icon: "⚡",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Prevenção de Fraudes",
      description:
        "Contribui para a prevenção e detecção de fraudes cibernéticas, protegendo organizações e indivíduos contra atividades maliciosas.",
      icon: "🚫",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Validação de Evidências",
      description:
        "Os laudos periciais fornecem evidências digitais sólidas e admissíveis em tribunal, fortalecendo casos legais e garantindo a validade das informações apresentadas.",
      icon: "⚖️",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Recuperação de Dados",
      description:
        "Ajuda na recuperação de dados perdidos, seja por falhas técnicas ou ações maliciosas, preservando informações críticas.",
      icon: "💾",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Assistência Jurídica",
      description:
        "Oferece suporte técnico especializado para advogados e profissionais do direito, facilitando a compreensão de questões técnicas complexas durante processos judiciais.",
      icon: "👨‍⚖️",
      color: "from-yellow-500 to-green-600",
    },
    {
      title: "Conformidade Legal",
      description:
        "Auxilia empresas a cumprirem regulamentações legais relacionadas à segurança da informação e proteção de dados.",
      icon: "📋",
      color: "from-green-500 to-cyan-600",
    },
    {
      title: "Credibilidade",
      description:
        "A expertise em perícia forense computacional confere credibilidade às investigações, reforçando a confiança nas conclusões apresentadas.",
      icon: "🏆",
      color: "from-cyan-500 to-teal-600",
    },
    {
      title: "Contribuição para a Justiça",
      description:
        "Desempenha um papel fundamental na busca pela verdade e na promoção da justiça em casos envolvendo atividades criminosas online.",
      icon: "⚖️",
      color: "from-teal-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Desvendando o digital com precisão, onde a verdade emerge em
                cada bit analisado.
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">PERÍCIA FORENSE</span>
                <br />
                <span className="text-2xl md:text-3xl">COMPUTACIONAL</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Na encruzilhada da tecnologia e justiça, nossas perícias e
                laudos computacionais revelam a verdade oculta nos dados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SOBRE O <span className="text-primary">SERVIÇO</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                A Perícia Forense Computacional é um campo especializado que
                visa investigar e analisar evidências digitais com o propósito
                de elucidar casos relacionados a crimes cibernéticos, fraudes
                eletrônicas e incidentes de segurança. Os laudos periciais
                resultantes dessas investigações detalham as descobertas e
                análises realizadas, fornecendo embasamento técnico-científico
                para subsidiar decisões judiciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Investigation Banner */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Forensic background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1">
                      {/* Digital evidence patterns */}
                      <rect
                        x="100"
                        y="100"
                        width="150"
                        height="100"
                        rx="8"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="300"
                        y="150"
                        width="120"
                        height="80"
                        rx="6"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="500"
                        y="120"
                        width="180"
                        height="120"
                        rx="10"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x="750"
                        y="160"
                        width="140"
                        height="90"
                        rx="7"
                        strokeDasharray="3,3"
                      />

                      {/* Connection lines */}
                      <line
                        x1="250"
                        y1="150"
                        x2="300"
                        y2="190"
                        strokeDasharray="2,2"
                      />
                      <line
                        x1="420"
                        y1="190"
                        x2="500"
                        y2="180"
                        strokeDasharray="2,2"
                      />
                      <line
                        x1="680"
                        y1="180"
                        x2="750"
                        y2="205"
                        strokeDasharray="2,2"
                      />

                      {/* Binary patterns */}
                      <text
                        x="150"
                        y="140"
                        fontSize="12"
                        fill="currentColor"
                        opacity="0.3"
                      >
                        01001
                      </text>
                      <text
                        x="320"
                        y="180"
                        fontSize="12"
                        fill="currentColor"
                        opacity="0.3"
                      >
                        11010
                      </text>
                      <text
                        x="550"
                        y="160"
                        fontSize="12"
                        fill="currentColor"
                        opacity="0.3"
                      >
                        10110
                      </text>
                      <text
                        x="780"
                        y="190"
                        fontSize="12"
                        fill="currentColor"
                        opacity="0.3"
                      >
                        01101
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9,2V8H7V2H9M17,2V4H15V2H17M13,2V8H11V2H13M19,4V8H17V4H19M5,8V16H7V8H5M9,10V16H11V10H9M15,10V16H17V10H15M13,16V22H15V16H13M9,18V22H11V18H9M17,18V22H19V18H17M5,18V22H7V18H5Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Investigações <span className="text-cyan-300">Digitais</span>{" "}
                  Especializadas
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nossos serviços especializados oferecem uma abordagem completa
                  para investigações digitais e rastreamento de evidências em
                  ambientes online e offline.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      Análise Digital
                    </span>
                  </div>
                  <div className="text-white text-2xl">🔍</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Evidências</span>
                  </div>
                  <div className="text-white text-2xl">⚖️</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Laudos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forensic Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Processo <span className="text-primary">Forense</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Coleta",
                description:
                  "Coleta segura e preservação de evidências digitais",
                icon: "💾",
              },
              {
                step: "02",
                title: "Análise",
                description: "Análise técnica detalhada dos dados coletados",
                icon: "🔬",
              },
              {
                step: "03",
                title: "Interpretação",
                description: "Interpretação das evidências encontradas",
                icon: "🧩",
              },
              {
                step: "04",
                title: "Laudo",
                description: "Elaboração de laudo pericial técnico-científico",
                icon: "📄",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-primary text-sm font-bold mb-4">
                  {process.step}
                </div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Benefícios Principais{" "}
              <span className="text-primary">Imediatos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forensicsBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Evidence Types */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Tipos de <span className="text-primary">Evidências Digitais</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sistemas Operacionais",
                icon: "💻",
                description: "Análise de logs, registros e arquivos de sistema",
              },
              {
                title: "Dispositivos Móveis",
                icon: "📱",
                description:
                  "Extração e análise de dados de smartphones e tablets",
              },
              {
                title: "Redes e Comunicações",
                icon: "🌐",
                description: "Tráfego de rede, emails e comunicações digitais",
              },
              {
                title: "Bancos de Dados",
                icon: "🗄️",
                description: "Recuperação e análise de dados estruturados",
              },
              {
                title: "Mídia Digital",
                icon: "💾",
                description:
                  "HDs, SSDs, pendrives e outros dispositivos de armazenamento",
              },
              {
                title: "Aplicações Web",
                icon: "🌍",
                description: "Logs de servidores web e aplicações online",
              },
            ].map((evidence, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {evidence.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {evidence.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {evidence.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Descubra a Verdade Digital
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa Perícia Forense
            Computacional pode revelar evidências cruciais para seu caso.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Solicitar Perícia
          </button>
        </div>
      </section>
    </div>
  );
};

export default ComputerForensics;
