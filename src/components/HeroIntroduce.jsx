import { useState, useEffect } from "react";

const HeroIntroduce = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image Container - Clean and subtle */}
      <div className="absolute inset-0">
        {/* Subtle Background with Light Colors */}
        <div className="relative w-full h-full">
          {/* Light Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-100">
            {/* Subtle Tech Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 600 600">
                <defs>
                  <pattern
                    id="tech-pattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      width="60"
                      height="60"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="1"
                      fill="#64748b"
                      opacity="0.2"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Horizontal Layout (2 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Small Label */}
            <div
              className={`text-sm font-medium text-slate-600 mb-6 tracking-wider uppercase transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              SEGURANÇA CIBERNÉTICA
            </div>

            {/* Main Title */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-slate-800 leading-tight mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block">Fortalecendo</span>
              <span className="block text-blue-600">Conexões Estratégicas</span>
              <span className="block">entre Inovação Científica</span>
              <span className="block">e o Setor Produtivo</span>
            </h1>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Conectamos o conhecimento científico à inovação tecnológica,
                oferecendo{" "}
                <span className="text-blue-600 font-semibold">
                  soluções estratégicas
                </span>{" "}
                que impulsionam a segurança cibernética em empresas públicas e
                privadas. Nosso foco é apoiar decisões críticas com análises de
                riscos, inteligência de dados e práticas avançadas que antecipam
                ameaças e fortalecem a resiliência digital.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  NOSSAS SOLUÇÕES
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
              </button>

              <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1">
                FALE CONOSCO
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Security Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-blue-100/60 rounded-full blur-3xl scale-125"></div>

                {/* Security Shield */}
                <svg
                  className="relative z-10 w-64 h-64 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Floating Security Icons */}
                <div className="absolute -top-8 -left-8 animate-pulse delay-1000">
                  <svg
                    className="w-12 h-12 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute -bottom-8 -right-8 animate-pulse delay-500">
                  <svg
                    className="w-16 h-16 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>

                <div className="absolute top-1/2 -right-12 animate-pulse delay-700">
                  <svg
                    className="w-10 h-10 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Below the 2 columns */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              24/7
            </div>
            <div className="text-slate-600">Monitoramento Contínuo</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              99.9%
            </div>
            <div className="text-slate-600">Disponibilidade Garantida</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              +500
            </div>
            <div className="text-slate-600">Empresas Protegidas</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroduce;
