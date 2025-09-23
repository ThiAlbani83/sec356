import { useState, useEffect } from "react";

const HeroElegant = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern
                id="elegant-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#1e40af" />
                <circle cx="0" cy="0" r="1" fill="#3b82f6" />
                <circle cx="40" cy="40" r="1" fill="#60a5fa" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegant-pattern)" />
          </svg>
        </div>

        {/* Central Image with Elegant Transparency */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-5xl h-80 mx-auto flex items-center justify-center">
            {/* Elegant Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-slate-100/20 to-blue-50/30 rounded-full blur-3xl"></div>

            {/* Central Security Icon */}
            <div className="relative z-10 opacity-15">
              <svg
                className="w-80 h-80 text-blue-600"
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

        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-24 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-60 right-32 w-1 h-1 bg-slate-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute bottom-24 right-24 w-2 h-2 bg-slate-300 rounded-full opacity-15 animate-pulse delay-700"></div>

          {/* Elegant Lines */}
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-blue-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-slate-300 to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-800 leading-tight mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block font-extralight tracking-wide">
            Fortalecendo
          </span>
          <span className="block font-medium bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
            Conexões Estratégicas
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 leading-relaxed mb-6 font-light tracking-wide">
            entre Inovação Científica e o Setor Produtivo
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo{" "}
            <span className="text-blue-700 font-medium">
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
          <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 tracking-wide">Nossos Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <button className="px-10 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 font-medium rounded-full transition-all duration-500 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 tracking-wide">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                24/7
              </div>
              <div className="text-slate-500 font-medium tracking-wide">
                Monitoramento
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                99.9%
              </div>
              <div className="text-slate-500 font-medium tracking-wide">
                Disponibilidade
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl lg:text-4xl font-light bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                +500
              </div>
              <div className="text-slate-500 font-medium tracking-wide">
                Empresas Protegidas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full opacity-40">
            <div className="w-1 h-2 bg-blue-600 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroElegant;
