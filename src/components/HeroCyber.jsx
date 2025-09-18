import { useState, useEffect, useRef } from "react";

const HeroCyber = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Digital Rain Effect
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アカサタナハマヤラワンABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = chars.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff94";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = i % 3 === 0 ? "#00ff94" : "rgba(0, 255, 148, 0.3)";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-10">
      {/* Animated Digital Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ pointerEvents: "none" }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-backgrond/30 to-black/50"></div>

      {/* Cybersecurity Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {/* Large Security Icons */}
        <div className="absolute top-20 left-20 transform rotate-12">
          <svg
            className="w-32 h-32 text-primary"
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

        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <svg
            className="w-40 h-40 text-primary"
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

        <div className="absolute top-1/2 left-1/4 transform rotate-45">
          <svg
            className="w-24 h-24 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping delay-500"></div>

        {/* Moving Lines */}
        <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-primary to-transparent animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block">Fortalecendo</span>
          <span className="block text-primary drop-shadow-[0_0_10px_rgba(0,255,148,0.5)]">
            Conexões Estratégicas
          </span>
          <span className="block text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-gray-300 mt-4">
            entre Inovação Científica e o Setor Produtivo
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
            Conectamos o conhecimento científico à inovação tecnológica,
            oferecendo
            <span className="text-primary font-medium drop-shadow-[0_0_5px_rgba(0,255,148,0.3)]">
              {" "}
              soluções estratégicas
            </span>{" "}
            que impulsionam a segurança cibernética em empresas públicas e
            privadas.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105">
            <span className="relative z-10">Nossos Serviços</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-primary/20">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_8px_rgba(0,255,148,0.4)]">
              24/7
            </div>
            <div className="text-gray-300">Monitoramento</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-primary/20">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_8px_rgba(0,255,148,0.4)]">
              99.9%
            </div>
            <div className="text-gray-300">Disponibilidade</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-primary/20">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_8px_rgba(0,255,148,0.4)]">
              +500
            </div>
            <div className="text-gray-300">Empresas Protegidas</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(0,255,148,0.5)]"
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

export default HeroCyber;
