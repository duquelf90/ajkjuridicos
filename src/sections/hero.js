import React from 'react'

const Hero = () => {
  return (
    <section className="code-section relative min-h-screen flex items-center bg-gradient-to-br from-[#001a33] via-[#004aad] to-[#001a33] overflow-hidden" id="home">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
    <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
    <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
    <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-family-heading)]">
          Soluciones Legales
          <span className="text-[var(--accent3-color)]">Integrales</span>
          y Personalizadas
        </h1>
        <p className="text-xl lg:text-2xl text-[var(--light-text-color)] mb-8 opacity-90 leading-relaxed">
          Despacho jurídico con experiencia, compromiso y resultados. Brindamos
          asesoría legal especializada en todas las áreas del derecho.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
          <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <i className="fas fa-shield-alt text-[var(--accent3-color)] mr-2" aria-hidden="true"></i>
            <span className="text-white font-medium">Experiencia Comprobada</span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <i className="fas fa-clock text-[var(--accent3-color)] mr-2" aria-hidden="true"></i>
            <span className="text-white font-medium">Atención 24/7</span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
            <i className="fas fa-user-shield text-[var(--accent3-color)] mr-2" aria-hidden="true"></i>
            <span className="text-white font-medium">Confidencialidad Total</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="/contacto" className="bg-[var(--accent3-color)] text-[var(--dark-text-color)] px-8 py-4 rounded-[var(--button-rounded-radius)] font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 hover:scale-105">
            <i className="fas fa-calendar-check mr-2" aria-hidden="true"></i>
            Agendar Consulta Gratuita
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" className="bg-[var(--accent-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105">
            <i className="fab fa-whatsapp mr-2" aria-hidden="true"></i>
            WhatsApp Directo
          </a>
        </div>

        <div className="mt-12 text-center lg:text-left">
          <p className="text-[var(--light-text-color)] opacity-80 mb-4">
            Especialistas en:
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Civil</span>
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Familiar</span>
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Penal</span>
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Laboral</span>
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Mercantil</span>
            <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm">Derecho Fiscal</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/125e8e6e-02c2-46df-fe51-7c180c7a4c00/public" alt="Justice statue, gavel, with LAW Justice lawyers having team meeting at law firm background. Concepts of Law and Legal services." className="w-full h-96 lg:h-[500px] object-cover" data-media="{&quot;id&quot;:&quot;2202761531&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>

        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--accent3-color)] rounded-full flex items-center justify-center shadow-xl animate-float">
          <i className="fas fa-balance-scale text-[var(--dark-text-color)] text-2xl" aria-hidden="true"></i>
        </div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center shadow-xl animate-float">
          <i className="fas fa-gavel text-white text-xl" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
    <div className="flex flex-col items-center">
      <span className="text-sm mb-2">Conoce nuestros servicios</span>
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </div>

  
</section>
  )
}

export default Hero