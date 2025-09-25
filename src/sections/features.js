import React from 'react'

const Features = () => {
  return (
    <section class="code-section py-20 bg-gradient-to-br from-[var(--light-background-color)] to-white relative overflow-hidden" id="features">
  <div class="absolute top-0 right-0 w-96 h-96 bg-[var(--accent3-color)] rounded-full opacity-5 -translate-y-48 translate-x-48"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-[var(--primary-color)] rounded-full opacity-5 translate-y-40 -translate-x-40"></div>

  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-8 font-[var(--font-family-heading)]">
          ¿Por Qué Elegir
          <span class="text-[var(--primary-color)]">AJK Jurídicos</span>?
        </h2>
        <p class="text-xl text-[var(--gray-text-color)] mb-12 leading-relaxed">
          Somos más que un despacho jurídico. Somos tu aliado estratégico en
          cada proceso legal, comprometidos con la excelencia y los resultados.
        </p>

        <div class="grid gap-8 mb-12">
          <div class="flex items-start group">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-button-hover-bg-color)] rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-award text-white text-2xl" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-3 font-[var(--font-family-heading)]">
                Experiencia Comprobada
              </h3>
              <p class="text-[var(--gray-text-color)] leading-relaxed">
                Años de experiencia respaldando a nuestros clientes en casos
                complejos. Conocemos el sistema legal mexicano a profundidad.
              </p>
            </div>
          </div>

          <div class="flex items-start group">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-green-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-user-friends text-white text-2xl" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-3 font-[var(--font-family-heading)]">
                Atención Personalizada
              </h3>
              <p class="text-[var(--gray-text-color)] leading-relaxed">
                Cada caso es único. Te acompañamos de cerca, brindando
                soluciones adaptadas a tu situación específica con total
                confidencialidad.
              </p>
            </div>
          </div>

          <div class="flex items-start group">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-yellow-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-clock text-[var(--dark-text-color)] text-2xl" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-3 font-[var(--font-family-heading)]">
                Respuesta Rápida
              </h3>
              <p class="text-[var(--gray-text-color)] leading-relaxed">
                Entendemos la urgencia de los asuntos legales. Ofrecemos
                atención inmediata y seguimiento constante en todos nuestros
                casos.
              </p>
            </div>
          </div>

          <div class="flex items-start group">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--accent2-color)] to-red-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-target text-white text-2xl" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-3 font-[var(--font-family-heading)]">
                Resultados Efectivos
              </h3>
              <p class="text-[var(--gray-text-color)] leading-relaxed">
                Nuestro compromiso va más allá de la asesoría. Trabajamos
                incansablemente para lograr los mejores resultados en cada
                proceso.
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-[var(--primary-color)] mb-2">
              10+
            </div>
            <div class="text-sm text-[var(--gray-text-color)]">
              Años de Experiencia
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[var(--accent-color)] mb-2">
              500+
            </div>
            <div class="text-sm text-[var(--gray-text-color)]">
              Casos Exitosos
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[var(--accent3-color)] mb-2">
              6
            </div>
            <div class="text-sm text-[var(--gray-text-color)]">
              Áreas Especializadas
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[var(--accent2-color)] mb-2">
              24/7
            </div>
            <div class="text-sm text-[var(--gray-text-color)]">
              Atención Disponible
            </div>
          </div>
        </div>

        <div class="text-center lg:text-left">
          <a href="/quienes-somos" class="inline-flex items-center bg-[var(--primary-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <i class="fas fa-info-circle mr-2" aria-hidden="true"></i>
            Conoce Más Sobre Nosotros
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0a69c303-9d1d-4a12-a629-a0544648c500/public" alt="Gavel, lawyers and hands of business people in meeting for legal consultation, contract and discussion. Corporate, professional and workers in office for legislation, agreement and deal at law firm" class="w-full h-96 lg:h-[600px] object-cover" data-media="{&quot;id&quot;:&quot;2198106774&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[var(--dark-background-color)] via-transparent to-transparent opacity-30"></div>
        </div>

        <div class="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center mr-3">
              <i class="fas fa-shield-check text-white" aria-hidden="true"></i>
            </div>
            <div>
              <div class="font-bold text-[var(--dark-text-color)]">100%</div>
              <div class="text-sm text-[var(--gray-text-color)]">
                Confidencial
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl animate-float">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-[var(--accent3-color)] rounded-full flex items-center justify-center mr-3">
              <i class="fas fa-handshake text-[var(--dark-text-color)]" aria-hidden="true"></i>
            </div>
            <div>
              <div class="font-bold text-[var(--dark-text-color)]">
                Consulta
              </div>
              <div class="text-sm text-[var(--gray-text-color)]">Gratuita</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</section>
  )
}

export default Features