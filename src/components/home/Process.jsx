import { useState, useEffect } from "react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: "01",
      title: "Entendemos",
      description:
        "Entendemos suas necessidades e os requisitos para ofertar a solução mais adequada para seu negócio.",
      icon: "👂",
      color: "from-cyan-500 to-blue-600",
    },
    {
      number: "02",
      title: "Apresentamos",
      description:
        "Apresentamos a solução que melhor se encaixa com suas necessidades detalhando as principais funcionalidades.",
      icon: "📋",
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "03",
      title: "Provamos",
      description:
        "Realizamos demonstração e prova de conceito de nossas soluções para comprovar os benefícios de nossas ofertas.",
      icon: "🔬",
      color: "from-indigo-500 to-purple-600",
    },
    {
      number: "04",
      title: "Melhor Proposta",
      description:
        "Com apoio de nossos consultores e parceiros, entregamos a melhor proposta para seu projeto.",
      icon: "💎",
      color: "from-purple-500 to-pink-600",
    },
    {
      number: "05",
      title: "Entregamos",
      description:
        "Realizamos a melhor entrega de cibersegurança com opções de serviço gerenciado ou como integração.",
      icon: "🚀",
      color: "from-pink-500 to-cyan-500",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-60 right-20 w-6 h-6 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-32 w-10 h-10 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block text-sm font-mono text-cyan-400 mb-4 px-4 py-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Como trabalhamos
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nosso{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Processo
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Uma metodologia comprovada para entregar as melhores soluções de
            cibersegurança
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-8 md:space-y-2">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 max-w-md">
                    <div
                      className={`bg-gray-800/60 backdrop-blur-sm border rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-500 ${
                        activeStep === index
                          ? "border-cyan-400/50 shadow-2xl scale-105 shadow-cyan-500/20"
                          : "border-gray-600/30 hover:shadow-lg hover:scale-102 hover:border-gray-500/40"
                      }`}
                    >
                      {/* Accent line */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                          step.color
                        } ${
                          activeStep === index ? "opacity-100" : "opacity-50"
                        }`}
                      ></div>

                      <div className="flex items-start gap-4">
                        <div
                          className={`text-3xl transition-all duration-300 ${
                            activeStep === index ? "animate-pulse" : ""
                          }`}
                        >
                          {step.icon}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-mono text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded border border-cyan-400/30">
                              {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-gray-800 shadow-lg transition-all duration-500 ${
                        activeStep === index
                          ? "bg-cyan-400 scale-125 shadow-cyan-400/50"
                          : index <= activeStep
                          ? "bg-blue-400"
                          : "bg-gray-500"
                      }`}
                    ></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 max-w-md hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 mt-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Entre em contato conosco e inicie sua jornada para uma
              cibersegurança de excelência.
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
            >
              Iniciar Projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
