import { useState, useEffect } from "react";

const HeroModern = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`border border-gray-200 ${
                  i % 3 === 0 ? "bg-blue-50" : i % 5 === 0 ? "bg-gray-50" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Central Image with Transparency */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {/* Large Security Icon with Transparency */}
            <div className="absolute inset-0 flex items-center justify-center opacity-8">
              <svg
                className="w-96 h-96 text-gradient-to-br from-blue-100 to-blue-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-40 animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-gray-300 rounded-full opacity-30 animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block font-light">Fortalecendo</span>
          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Conexões Estratégicas
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-6 font-light">
            entre Inovação Científica e o Setor Produtivo
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo{" "}
            <span className="text-blue-600 font-semibold">
              soluções estratégicas
            </span>{" "}
            que impulsionam a segurança cibernética em empresas públicas e
            privadas.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Nossos Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Monitoramento</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Disponibilidade</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              +500
            </div>
            <div className="text-gray-600 font-medium">Empresas Protegidas</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-blue-600"
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

export default HeroModern;
