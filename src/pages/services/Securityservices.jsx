import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Securityservices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const detectionData = {
    sec365: {
      detection: "7 MINUTOS",
      investigation: "11 MINUTOS",
      containment: "12 MINUTOS",
      percentage: "100%",
    },
    competition: {
      detection: "2 HORAS",
      investigation: "6 HORAS",
      containment: "8 HORAS",
    },
  };

  const nivels = [
    {
      title: "Nível - N0",
      description:
        "O algoritmo N0, foi projetado para analisar grande volume de dados em tempo real, identificar padrões e anomalias que seriam difíceis de serem percebidos por humano, permitindo assim a detecção precoce de ameaças cibernéticas. Nossa métrica reduziu em 99,02% de falsos positivos.",
      icon: "🤖",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Nível - N1",
      description:
        "Encarregados pelo atendimento inicial a incidentes, nossa equipe coleta dados conforme o playbook de resposta personalizado do cliente, assegurando um processo de identificação personalizado e frequentemente automatizado, garantindo uma abordagem eficaz desde o primeiro contato.",
      icon: "👨‍💻",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Nível - N2",
      description:
        "Este analista desempenha um papel fundamental na implementação de projetos de segurança da informação, colaborando estreitamente com o cliente para aprimorar a maturidade e eficácia das operações. Além disso, oferece suporte valioso à equipe de N1, contribuindo para um ambiente mais seguro e resiliente.",
      icon: "🔧",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Nível - N3",
      description:
        "Liderando nossa equipe interna de operações, este profissional assegura a eficiência operacional, mantém altos padrões de qualidade e oferece suporte em projetos e soluções de segurança. Também atua como conselheiro de segurança, orientando nossos clientes para alcançar o cenário de segurança ideal com base em suas necessidades.",
      icon: "👑",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  const features = [
    {
      title: "SINAL DE ALERTA",
      description:
        "Poder para atribuir alertas de forma rápida e com confiança em grande escala.",
      icon: "🚨",
    },
    {
      title: "ANÁLISE COMPORTAMENTAL",
      description:
        "Monitore qualquer usuário ou entidade, além disso mostra irregularidades de forma rápida e absoluta.",
      icon: "📊",
    },
    {
      title: "OBSERVATÓRIO EM CIBERSEGURANÇA",
      description:
        "Ferramenta de monitoramento baseada em SaaS com um agente de monitoramento leve e fácil de configurar.",
      icon: "🔭",
    },
    {
      title: "INTELIGÊNCIA A AMEAÇAS",
      description:
        "Visão em tempo real de hosts maliciosos e outros indicadores de comprometimento.",
      icon: "🧠",
    },
    {
      title: "BUSCA POR AMEAÇAS",
      description:
        "Pesquisa point and click para que procure riscos de comportamento ou de entidade.",
      icon: "🔍",
    },
    {
      title: "AUTOMAÇÃO E RESPOSTA",
      description:
        "Ações para melhorar e agilizar a resposta a riscos de segurança.",
      icon: "⚡",
    },
  ];

  const benefits = [
    {
      title: "SOC Instantâneo",
      items: [
        "Detecção e resposta 24/7",
        "Caça a ameaças por especialistas",
        "Resposta a incidentes de grande escala",
      ],
      icon: "🛡️",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Mantenha suas Defesas",
      items: [
        "Utilize seus softwares existentes",
        "Personalize serviços conforme suas necessidades",
      ],
      icon: "🔒",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Equipe Global de Especialistas",
      items: [
        "Monitoramento contínuo, 24/7",
        "Ação imediata e notificação em caso de ameaças",
        "Eliminação de ameaças, identificação de causas e orientações para prevenção futura",
      ],
      icon: "🌐",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
                Excelência em Detecção, Defesa e Resposta a Incidentes com
                Serviços Gerenciados
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
                <span className="text-primary">Managed</span> Security Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Um sistema desenvolvido por brasileiros, concebido por doutores
                em cibersegurança em que adota uma abordagem única e contínua na
                detecção e prevenção de violações cibernéticas, assegurando a
                proteção constante de seus ativos digitais.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Em um cenário digital dinâmico e desafiador, a segurança
                cibernética torna-se uma prioridade constante. Nosso serviço de
                prevenção contra violações cibernéticas é ininterrupto,
                proporcionando uma visibilidade robusta e continua para seus
                ativos digitais. Ao escolher nossos serviços de prevenção
                24/7/365, você está investindo no monitoramento contínuo e na
                tranquilidade digital, permitindo que sua empresa prospere em um
                ambiente online seguro e confiável.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ademais, nosso Centro de Operações de Segurança (SOC) fornece
                assistência na identificação e resposta em tempo real, além de
                análise histórica de eventos de segurança. Essa rica fonte de
                dados fortalece nossas soluções de resposta e capacita nossos
                especialistas a oferecer a melhor proteção cibernética possível.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Nossa equipe de especialistas em segurança cibernética
                destaca-se pela detecção ágil e neutralização eficaz de ameaças,
                superando a concorrência.
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">
                    Detecção Média
                  </span>
                  <span className="text-primary font-bold">7 minutos</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">
                    Investigação
                  </span>
                  <span className="text-primary font-bold">11 minutos</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Contenção</span>
                  <span className="text-primary font-bold">12 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              SEC365 - MSS: <span className="text-primary">SOC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SEC365 */}
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                SEC365
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-white font-medium">DETECÇÃO</span>
                  <div className="text-right">
                    <div className="text-primary font-bold">
                      {detectionData.sec365.detection}
                    </div>
                    <div className="text-primary text-sm">
                      {detectionData.sec365.percentage}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-white font-medium">INVESTIGAÇÃO</span>
                  <div className="text-right">
                    <div className="text-primary font-bold">
                      {detectionData.sec365.investigation}
                    </div>
                    <div className="text-primary text-sm">
                      {detectionData.sec365.percentage}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-white font-medium">CONTENÇÃO</span>
                  <div className="text-right">
                    <div className="text-primary font-bold">
                      {detectionData.sec365.containment}
                    </div>
                    <div className="text-primary text-sm">
                      {detectionData.sec365.percentage}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-6 text-center">
                CONCORRÊNCIA
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-gray-300 font-medium">DETECÇÃO</span>
                  <div className="text-gray-400 font-bold">
                    {detectionData.competition.detection}
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-gray-300 font-medium">
                    INVESTIGAÇÃO
                  </span>
                  <div className="text-gray-400 font-bold">
                    {detectionData.competition.investigation}
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                  <span className="text-gray-300 font-medium">CONTENÇÃO</span>
                  <div className="text-gray-400 font-bold">
                    {detectionData.competition.containment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Cybersecurity Delivered -{" "}
              <span className="text-primary">SaaS</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Na arquitetura de atendimento da SEC365, implementamos quatro
              níveis de atendimento. No entanto, as responsabilidades destes
              níveis se diferenciam do modelo tradicional, uma vez que a SEC365
              emprega soluções próprias de segurança. Essas soluções não apenas
              reduzem a carga de trabalho, mas também contribuem para o aumento
              da maturidade do atendimento e a personalização do serviço ao
              cliente. Nossas soluções são alimentadas por soluções internas que
              oferecem uma alta capacidade de automação, com uso de Machine
              Learning, resultando em uma redução significativa de 98% de falsos
              positivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nivels.map((nivel, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${nivel.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    {nivel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {nivel.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {nivel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              DEFINIR, PADRONIZAR E{" "}
              <span className="text-primary">AUTOMATIZAR</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios Principais{" "}
              <span className="text-primary">Imediatos</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Reduza riscos e custos de incidentes. Otimize o ROI em suas
              tecnologias de segurança. Reforce elegibilidade para seguro
              digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${benefit.color
                    .split(" ")[0]
                    .replace("from-", "")}, ${benefit.color
                    .split(" ")[2]
                    .replace("to-", "")})`;
                  e.currentTarget.style.opacity = "0.1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3 inline-block text-left">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Proteger Sua Empresa?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossos Managed Security
            Services podem transformar a segurança da sua organização.
          </p>
          <button
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Solicitar Consultoria
          </button>
        </div>
      </section>
    </div>
  );
};

export default Securityservices;
