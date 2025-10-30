import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThreatIntelligence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Investigação",
      description:
        "Protegemos sua empresa através da identificação proativa de ameaças online, utilizando palavras-chave correlacionadas para detecção precoce.",
      icon: "🔍",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Proteção de VIPs",
      description:
        "Garantimos a segurança de pessoas-chave em sua organização, monitorando e mitigando ameaças direcionadas a elas.",
      icon: "👤",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Take Down",
      description:
        "Agimos rapidamente para remover conteúdo malicioso da web, protegendo sua empresa e colaboradores de ameaças.",
      icon: "🚫",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Busca Específica",
      description:
        "Realizamos buscas direcionadas em categorias específicas para identificar ameaças altamente relevantes.",
      icon: "🎯",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Busca Dinâmica",
      description:
        "Indexação de ameaças direcionadas e persistentes com base em tendências mapeadas.",
      icon: "🔄",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Análise Personalizada",
      description:
        "Oferecemos análise detalhada e orientação para aprimorar continuamente sua postura de segurança.",
      icon: "📊",
      gradient: "from-red-400 to-orange-500",
    },
  ];

  const processSteps = [
    {
      title: "COLETA DE DADOS",
      description:
        "Os algoritmos da SEC365 realizam uma busca abrangente para identificar uma ampla gama de elementos, como nome da empresa, CNPJ, endereços, nomes, RG, CPF dos sócios, emails, placas de carros, telefones (fixos/celulares), perfis clonados em redes sociais e sites, senhas, domínios web, URLs, blocos de IPs, malwares, documentos restritos e outros dados.",
      icon: "📡",
      gradient: "from-cyan-400 to-blue-500",
      phase: "FASE 1",
    },
    {
      title: "CORRELAÇÃO INDEXADA",
      description:
        "Nesta etapa, realizamos uma investigação para determinar se os dados estão sendo comercializados na rede e classificamos o impacto das ameaças identificadas.",
      icon: "🔗",
      gradient: "from-blue-400 to-indigo-500",
      phase: "FASE 2",
    },
    {
      title: "INVESTIGAÇÃO",
      description:
        "Nesta etapa, realizamos uma investigação para determinar se os dados estão sendo comercializados na rede e classificamos o impacto das ameaças identificadas.",
      icon: "🔎",
      gradient: "from-indigo-400 to-purple-500",
      phase: "FASE 3",
    },
    {
      title: "AÇÃO DE REMOÇÃO",
      description:
        "Registramos as ocorrências e iniciamos procedimentos de remoção do conteúdo identificado como ameaçador.",
      icon: "🛡️",
      gradient: "from-purple-400 to-pink-500",
      phase: "FASE 4",
    },
  ];

  const threatCapabilities = [
    {
      title: "Inteligência de Ameaças Personalizada",
      description:
        "Fornecimento de informações de ameaças específicas para o setor e perfil da empresa, permitindo ações proativas.",
      icon: "🎯",
    },
    {
      title: "Monitoramento da Marca da Empresa",
      description:
        "Acompanhamento constante de fontes de informação na web, deep web e dark web para identificar ameaças em tempo real.",
      icon: "🏢",
    },
    {
      title: "Relatórios de Ameaças",
      description:
        "Preparação e entrega de relatórios regulares sobre tendências e incidentes de segurança relevantes.",
      icon: "📋",
    },
    {
      title: "Proteção contra Fraudes",
      description:
        "Desenvolvimento de estratégias e ferramentas para identificar e prevenir fraudes online.",
      icon: "🛡️",
    },
    {
      title: "Inteligência Competitiva",
      description:
        "Coleta e análise de informações sobre as ameaças cibernéticas enfrentadas pelos concorrentes.",
      icon: "🔍",
    },
    {
      title: "Serviços de Takedown",
      description:
        "Identificação e eliminação de conteúdo malicioso ou fraudulento relacionado à marca.",
      icon: "🚫",
    },
  ];

  const mainBenefits = [
    {
      title: "Detecção Antecipada de Ameaças",
      description:
        "A Threat Intelligence permite que as organizações identifiquem ameaças em estágios iniciais, antes que possam causar danos significativos. Isso possibilita uma resposta proativa e a implementação de medidas preventivas.",
      icon: "⚡",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Melhoria da Postura de Segurança",
      description:
        "Ao ter informações detalhadas sobre as ameaças específicas que podem afetar a organização, é possível aprimorar a postura de segurança, fortalecendo as defesas contra os vetores de ataque conhecidos.",
      icon: "🛡️",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Tomada de Decisões Informada",
      description:
        "A Inteligência de Ameaças fornece insights valiosos para a tomada de decisões informada. As equipes de segurança podem priorizar ameaças com base em sua gravidade e relevância, alocando recursos de maneira mais eficiente.",
      icon: "🧠",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Redução de Falsos Positivos",
      description:
        "Ao compreender melhor o cenário de ameaças, as organizações podem reduzir a incidência de falsos positivos, o que minimiza o impacto nos recursos e evita a sobrecarga operacional.",
      icon: "✅",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Capacidade de Resposta Rápida a Incidentes",
      description:
        "A Threat Intelligence permite uma resposta rápida e eficaz a incidentes de segurança. As equipes podem agir rapidamente para conter e remediar ameaças, reduzindo o tempo de exposição a ataques.",
      icon: "⚡",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Proteção contra Ameaças Emergentes",
      description:
        "Ao monitorar continuamente as fontes de Threat Intelligence, as organizações podem se manter atualizadas sobre ameaças emergentes e tendências no cenário de segurança cibernética, garantindo que estejam preparadas para novos tipos de ataques.",
      icon: "🚀",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Compreensão do Perfil do Adversário",
      description:
        "Ao analisar a Threat Intelligence, as organizações podem ganhar uma compreensão mais profunda do perfil, motivações e técnicas dos adversários. Isso ajuda na adaptação das estratégias de segurança para lidar com ameaças específicas.",
      icon: "🕵️",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Conformidade Regulatória",
      description:
        "Utilizar Threat Intelligence pode auxiliar na conformidade com regulamentações de segurança cibernética, pois as organizações podem demonstrar medidas proativas para proteger seus ativos e dados sensíveis.",
      icon: "📋",
      color: "from-yellow-500 to-green-600",
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
                Desvende o invisível: Transforme ameaças em insights
                estratégicos
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">THREAT INTELLIGENCE</span>
                <br />
                <span className="text-2xl md:text-3xl">
                  Hunting & Detection
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Nossa IA de Threat Intelligence oferece a visão necessária para
                antecipar e neutralizar ameaças
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
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                A PRIMEIRA LINHA DE DEFESA CONTRA FRAUDES E VULNERABILIDADES
                ONLINE, CUSTOMIZADA PARA O SEU NEGÓCIO, SEM LIMITES NA PROTEÇÃO.
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Em um cenário onde a segurança cibernética é essencial, a adoção
                de medidas proativas é crucial para proteger os serviços e dados
                da empresa contra ameaças online em constante evolução. O
                serviço de Threat Intelligence da SEC365 desempenha um papel
                fundamental ao monitorar continuamente fontes de informações
                criminosas na internet. Ele busca dados que auxiliam na
                identificação precoce de ameaças potenciais para nossos
                clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              SERVIÇOS <span className="text-primary">AUTOMATIZADOS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              O serviço de Threat Intelligence desempenha um papel crucial na
              segurança cibernética, indexando dados em diversas camadas da
              internet, incluindo a web convencional, a deep web e a dark web.
              Ao monitorar essas fontes, nosso serviço identifica padrões,
              comportamentos e indicadores de comprometimento que podem indicar
              possíveis ameaças à segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              segurança <span className="text-primary">sólida</span> em um mundo
              digital <span className="text-primary">complexo.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A fraude é um desafio contextual e requer uma estratégia em
              camadas para ser eficaz. O Threat Intelligence da SEC365 atua como
              a primeira camada de defesa, monitorando o cenário online,
              identificando exposições da marca e rastreando conversas
              relevantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatCapabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              COMO <span className="text-primary">FUNCIONA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-6`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-2">
                      {step.phase}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Benefícios Principais{" "}
              <span className="text-primary">Imediatos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Nosso serviço de Threat Intelligence oferece a capacidade de
              antecipar, responder e se defender contra ameaças cibernéticas,
              resultando em uma postura de segurança mais robusta e resiliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-6`}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Antecipe-se às Ameaças Agora
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como nossa Threat Intelligence
            pode fortalecer a segurança da sua organização.
          </p>
          <button
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Solicitar Demonstração
          </button>
        </div>
      </section>
    </div>
  );
};

export default ThreatIntelligence;
