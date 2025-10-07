import React, { useState, useEffect } from "react";
import logoVerde from "../../assets/logoVerde.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para envio do formulário
    console.log("Formulário enviado:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Estamos aqui para ajudar
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">ENTRE EM</span>
                <br />
                <span className="text-2xl md:text-3xl">CONTATO</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Conecte-se conosco e descubra como podemos fortalecer a
                segurança cibernética da sua organização
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Company Info */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="text-center lg:text-left">
                <img
                  src={logoVerde}
                  alt="SEC365 Logo"
                  className="h-24 w-auto mb-8 mx-auto lg:mx-0"
                />
              </div>

              {/* About Text */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Sobre a SEC365
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  O projeto SEC365 nasceu de uma iniciativa sem fins lucrativos,
                  a partir de projetos de sucesso desenvolvidos em órgãos
                  públicos. Somos uma empresa de consultoria em PD&I que leva
                  soluções inovadoras do estado-da-arte para o setor produtivo.
                  Estamos comprometidos com a segurança digital e o avanço
                  tecnológico em prol de um ambiente digital confiável com
                  aplicação de uma metodologia exclusiva que integra práticas de
                  pesquisa científica e métodos ágeis, com o objetivo de liderar
                  o desenvolvimento de soluções inovadoras em cibersegurança.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5591932054080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors duration-300 group p-4 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-gray-400">
                        (91) 3205-4080
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contato@sec365.com.br"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors duration-300 group p-4 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">E-mail</div>
                      <div className="text-sm text-gray-400">
                        contato@sec365.com.br
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Entre em Contato
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Como podemos ajudar você?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-cyan-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Additional Contact Methods */}
              <div className="mt-8 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Outras Formas de Contato
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Resposta em até 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>Atendimento personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Consultoria especializada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 SEC365. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
