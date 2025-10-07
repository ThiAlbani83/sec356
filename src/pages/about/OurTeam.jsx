import React, { useState, useEffect } from "react";

// Importação das imagens dos certificados (mesmas do Certificados.jsx)
import casp from "../../assets/casp.png";
import ceh from "../../assets/ceh.png";
import chfi from "../../assets/chfi.png";
import cisa from "../../assets/cisa.png";
import cism from "../../assets/cism.png";
import ciso from "../../assets/ciso.png";
import comp from "../../assets/comp.webp";
import cpent from "../../assets/cpent.png";
import crisc from "../../assets/crisc.webp";
import cse from "../../assets/cse.png";
import cysa from "../../assets/cysa.webp";
import doc from "../../assets/doc.png";
import exin from "../../assets/exin.png";
import icsi from "../../assets/icsi.png";
import mestre from "../../assets/mestre.png";
import pmp from "../../assets/pmp.png";
import posdoc from "../../assets/posdoc.png";

const OurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certificates = [
    { id: 1, image: casp, name: "CASP+" },
    { id: 2, image: ceh, name: "CEH" },
    { id: 3, image: chfi, name: "CHFI" },
    { id: 4, image: cisa, name: "CISA" },
    { id: 5, image: cism, name: "CISM" },
    { id: 6, image: ciso, name: "CISO" },
    { id: 7, image: comp, name: "CompTIA" },
    { id: 8, image: cpent, name: "CPENT" },
    { id: 9, image: crisc, name: "CRISC" },
    { id: 10, image: cse, name: "CSE" },
    { id: 11, image: cysa, name: "CySA+" },
    { id: 12, image: doc, name: "Doutorado" },
    { id: 13, image: exin, name: "EXIN" },
    { id: 14, image: icsi, name: "ICSI" },
    { id: 15, image: mestre, name: "Mestrado" },
    { id: 16, image: pmp, name: "PMP" },
    { id: 17, image: posdoc, name: "Pós-Doutorado" },
  ];

  const qualifications = [
    {
      title: "Certificação Internacional em Cibersegurança (Nível Expert)",
      percentage: 100,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title:
        "Advogados de Excelência Especializados em LGPD e Normas de Segurança",
      percentage: 100,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title:
        "Certificação Expert em Gestão de Projetos Reconhecida Globalmente",
      percentage: 100,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Vasta Experiência em Gerenciamento de Projetos Estratégicos",
      percentage: 100,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title:
        "Pioneirismo em Gestão de Projetos com Conformidade a Padrões Internacionais",
      percentage: 100,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Comprometimento com a Mais Elevada Excelência e Qualidade",
      percentage: 100,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Eficiência Reconhecida com Entregas Ágeis e Precisas",
      percentage: 100,
      gradient: "from-teal-500 to-green-600",
    },
    {
      title: "Histórico de Resultados Confiantes e Sustentáveis",
      percentage: 100,
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Especialistas em Inovação e Adaptação em Cibersegurança",
      percentage: 100,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Reconhecimento pela Abordagem Proativa em Segurança Digital",
      percentage: 100,
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const teamStrengths = [
    {
      title: "Guardiões Digitais",
      description:
        "Cada membro é um protetor incansável da integridade digital",
      icon: "🛡️",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Estrategistas Visionários",
      description: "Antecipam movimentos futuros do panorama digital",
      icon: "🔮",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Sinergia Única",
      description:
        "Combinação perfeita de conhecimento técnico e visão holística",
      icon: "⚡",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Experiência Forjada",
      description: "Décadas enfrentando os desafios mais complexos",
      icon: "🏆",
      gradient: "from-orange-500 to-red-600",
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
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
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
                Defesa sem concessões: protegendo hoje, antecipando amanhã
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">NOSSO</span>
                <br />
                <span className="text-2xl md:text-3xl">TIME</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Em um universo de ameaças digitais, nosso time não apenas
                responde aos desafios, mas os transcende, moldando a
                cibersegurança como uma arte da prevenção
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

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Contamos com uma equipe excepcional em cibersegurança, onde cada
                membro é um guardião incansável da integridade digital. Com uma
                dedicação inabalável à segurança, nosso time é composto por
                profissionais altamente qualificados, cuja experiência é forjada
                em décadas de enfrentamento aos desafios mais complexos do
                cenário cibernético.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Cada integrante do nosso time é mais que um especialista; é um
                estrategista, entendendo não apenas as ameaças imediatas, mas
                antecipando os movimentos futuros do panorama digital.
                Trabalhando em estreita colaboração, eles formam uma sinergia
                única, combinando conhecimento técnico, habilidades analíticas e
                uma visão holística dos sistemas digitais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellence Banner */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              {/* Team background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1.5">
                      {/* Team network */}
                      <circle cx="200" cy="200" r="50" />
                      <circle cx="400" cy="150" r="40" />
                      <circle cx="600" cy="250" r="45" />
                      <circle cx="800" cy="180" r="35" />

                      {/* Connection lines */}
                      <line
                        x1="250"
                        y1="200"
                        x2="360"
                        y2="150"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="440"
                        y1="150"
                        x2="555"
                        y2="250"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="645"
                        y1="250"
                        x2="765"
                        y2="180"
                        strokeDasharray="3,3"
                      />

                      {/* Team symbols */}
                      <rect
                        x="150"
                        y="100"
                        width="100"
                        height="60"
                        rx="8"
                        strokeDasharray="2,2"
                      />
                      <polygon
                        points="750,100 800,80 850,100 800,120"
                        strokeDasharray="2,2"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white/20 p-6 rounded-2xl">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16,4C16.88,4 17.67,4.5 18.11,5.29C18.56,6.09 18.56,7.08 18.11,7.88L14.77,13.95C14.32,14.75 13.53,15.24 12.65,15.24C11.77,15.24 10.98,14.75 10.53,13.95L7.19,7.88C6.75,7.08 6.75,6.09 7.19,5.29C7.64,4.5 8.43,4 9.31,4H16M9.31,6A0.5,0.5 0 0,0 8.81,6.75L12.15,12.82C12.4,13.26 12.9,13.26 13.15,12.82L16.5,6.75C16.75,6.31 16.45,5.75 16,5.75H9.31V6Z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Excelência em{" "}
                  <span className="text-yellow-300">Cada Membro</span>
                </h2>

                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nossa equipe representa a elite da cibersegurança, combinando
                  expertise técnica com visão estratégica para entregar proteção
                  digital incomparável.
                </p>

                <div className="flex justify-center items-center space-x-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Expertise</span>
                  </div>
                  <div className="text-white text-2xl">🏆</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-white font-medium">Sinergia</span>
                  </div>
                  <div className="text-white text-2xl">⚡</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-white font-medium">Visão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strengths Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Forças do Nosso <span className="text-primary">Time</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamStrengths.map((strength, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {strength.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Qualification Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CERTIFICAÇÃO & <span className="text-primary">QUALIFICAÇÃO</span>
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Todos os serviços são estruturados com base nos padrões
                internacionais de excelência, seguindo o renomado modelo PMI.
                Adotamos as melhores práticas delineadas no SCRUM, PMBOK,
                PRINCE2 e Agile, assegurando uma abordagem consistente, ágil e
                de alta qualidade para a entrega de projetos.
              </p>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Nossas <span className="text-primary">Certificações</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-lg bg-white/50">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 text-center group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications Progress Bars */}
          <div className="space-y-6">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {qualification.title}
                  </h4>
                  <span className="text-xl font-bold text-primary">
                    {qualification.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${qualification.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${qualification.percentage}%`,
                      animation: `progressBar 2s ease-out ${index * 0.1}s both`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa <span className="text-primary">Excelência</span> em Números
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "17+",
                label: "Certificações Internacionais",
                icon: "🏆",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                number: "20+",
                label: "Anos de Experiência",
                icon: "📅",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                number: "100%",
                label: "Projetos Entregues",
                icon: "✅",
                gradient: "from-green-400 to-teal-500",
              },
              {
                number: "24/7",
                label: "Monitoramento Ativo",
                icon: "🔒",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça Nossa Equipe de Elite
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato e descubra como nosso time excepcional pode
            transformar a segurança cibernética da sua organização.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Falar com Especialistas
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeam;
