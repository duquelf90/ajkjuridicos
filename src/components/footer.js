import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="code-section bg-[#152636] text-white relative overflow-hidden" id="global-footer">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 right-0 w-64 h-64 border-2 border-white rounded-full -translate-y-32 translate-x-32"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 border border-white rounded-full translate-y-24 -translate-x-24"></div>
  </div>

  <div className="container mx-auto px-4 py-16 relative z-10">
    <div className="grid lg:grid-cols-4 gap-12">
      <div className="lg:col-span-1">
        <div className="mb-6">
          <Link href="/" className="inline-block">
            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/03a852c3-e740-44ed-7522-b64bb4407600/public" alt="AJK Jurídicos" className="h-28 py-2 w-auto" data-logo=""/>
          </Link>
        </div>
        <p className="text-gray-300 leading-relaxed mb-6">
          Despacho jurídico especializado en soluciones legales integrales.
          Experiencia, compromiso y resultados para todos nuestros clientes.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-[var(--accent3-color)] font-[var(--font-family-heading)]">
          Nuestros Servicios
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="/servicios/civil" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Servicios
              Civiles</a>
          </li>
          <li>
            <a href="/servicios/familiar" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Servicios
              Familiares</a>
          </li>
          <li>
            <a href="/servicios/mercantil" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Servicios
              Mercantiles</a>
          </li>
          <li>
            <a href="/servicios/penal" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Servicios
              Penales</a>
          </li>
          <li>
            <a href="/servicios/fiscal-administrativo" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Fiscal y
              Administrativo</a>
          </li>
          <li>
            <a href="/servicios/laboral" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Servicios
              Laborales</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-[var(--accent3-color)] font-[var(--font-family-heading)]">
          Empresa
        </h3>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Inicio</Link>
          </li>
          <li>
            <a href="/quienes-somos" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Quiénes Somos</a>
          </li>
          <li>
            <a href="/testimonios" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Testimonios</a>
          </li>
          <li>
            <a href="/contacto" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300 flex items-center"><i className="fas fa-chevron-right text-xs mr-2" aria-hidden="true"></i>Contacto</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-[var(--accent3-color)] font-[var(--font-family-heading)]">
          Contacto
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt text-[var(--accent3-color)] mt-1 mr-3 flex-shrink-0" aria-hidden="true"></i>
            <span className="text-gray-300">Ciudad de México, México</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone text-[var(--accent3-color)] mr-3 flex-shrink-0" aria-hidden="true"></i>
            <a href="tel:+5511999999999" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300">+52 55 1234 5678</a>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope text-[var(--accent3-color)] mr-3 flex-shrink-0" aria-hidden="true"></i>
            <a href="mailto:contacto@ajkjuridicos.com" className="text-gray-300 hover:text-[var(--accent3-color)] transition-colors duration-300">contacto@ajkjuridicos.com</a>
          </li>
          <li className="flex items-center">
            <i className="fab fa-whatsapp text-[var(--accent-color)] mr-3 flex-shrink-0" aria-hidden="true"></i>
            <a href="https://wa.me/5511999999999" target="_blank" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors duration-300">WhatsApp</a>
          </li>
        </ul>

        <div className="mt-8 bg-[var(--accent2-color)] bg-opacity-20 rounded-lg p-4">
          <h4 className="font-bold text-[var(--accent2-color)] mb-2">
            <i className="fas fa-exclamation-triangle mr-2" aria-hidden="true"></i>
            Emergencias 24/7
          </h4>
          <p className="text-gray-300 text-sm mb-2">
            Atención inmediata para casos urgentes
          </p>
          <a href="tel:+5511999999999" className="text-[var(--accent2-color)] font-semibold hover:text-red-400 transition-colors duration-300">
            +52 55 1234 5678
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 AJK Jurídicos. Todos los derechos reservados.
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-[var(--accent3-color)] transition-colors duration-300">Política de Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-[var(--accent3-color)] transition-colors duration-300">Términos y Condiciones</a>
          <a href="#" className="text-gray-400 hover:text-[var(--accent3-color)] transition-colors duration-300">Aviso Legal</a>
        </div>
      </div>
    </div>

    <div className="mt-6 text-center">
      <p className="text-gray-500 text-xs leading-relaxed">
        Los servicios legales de AJK Jurídicos están sujetos a las leyes y
        regulaciones mexicanas. La información en este sitio web no constituye
        asesoría legal y no establece una relación abogado-cliente.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer