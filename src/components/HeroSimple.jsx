import { useState, useEffect } from "react";

const HeroSimple = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-96 mx-auto">
          {/* Placeholder for security/tech image - replace with actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl opacity-30">
            <div className="flex items-center justify-center h-full">
              <svg
                className="w-64 h-64 text-gray-400 opacity-40"
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block font-extralight">Fortalecendo</span>
          <span className="block font-medium text-blue-600">
            Conexões Estratégicas
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
            entre Inovação Científica e o Setor Produtivo
          </p>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo{" "}
            <span className="text-blue-600 font-medium">
              soluções estratégicas
            </span>{" "}
            que impulsionam a segurança cibernética.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5">
            Nossos Serviços
          </button>

          <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-blue-600 mb-2">
              24/7
            </div>
            <div className="text-gray-500">Monitoramento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-blue-600 mb-2">
              99.9%
            </div>
            <div className="text-gray-500">Disponibilidade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-blue-600 mb-2">
              +500
            </div>
            <div className="text-gray-500">Empresas Protegidas</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
