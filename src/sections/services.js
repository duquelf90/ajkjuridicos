import React from 'react'

const Services = () => {
    return (
        <section className="code-section py-20 bg-white relative overflow-hidden" id="services">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary-color)] via-[var(--accent-color)] to-[var(--accent3-color)]"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 font-[var(--font-family-heading)]">
                        Nuestras
                        <span className="text-[var(--primary-color)]">Especialidades</span> Legales
                    </h2>
                    <p className="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto leading-relaxed">
                        Ofrecemos servicios jurídicos integrales en todas las áreas del derecho,
                        con un enfoque personalizado y resultados efectivos para cada cliente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-button-hover-bg-color)] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-home text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Derecho Civil
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Recuperación de inmuebles
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Juicios de arrendamiento
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Cobro de deudas civiles
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Elaboración de contratos
                            </li>
                        </ul>
                        <a href="/servicios/civil" className="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--accent4-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent4-color)] to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-heart text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Derecho Familiar
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Divorcios
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Guarda y custodia
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Pensiones alimenticias
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Juicios testamentarios
                            </li>
                        </ul>
                        <a href="/servicios/familiar" className="inline-flex items-center text-[var(--accent4-color)] font-semibold hover:text-purple-600 transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--accent2-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent2-color)] to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-shield-alt text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Derecho Penal
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Libertad de detenidos
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Defensa en juicio oral
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Asesoría a víctimas
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Amparos
                            </li>
                        </ul>
                        <a href="/servicios/penal" className="inline-flex items-center text-[var(--accent2-color)] font-semibold hover:text-red-600 transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--accent-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-briefcase text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Derecho Laboral
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Despidos injustificados
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Acoso laboral
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Reincorporación laboral
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Pensión por invalidez
                            </li>
                        </ul>
                        <a href="/servicios/laboral" className="inline-flex items-center text-[var(--accent-color)] font-semibold hover:text-green-600 transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--accent3-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-yellow-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-handshake text-[var(--dark-text-color)] text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Derecho Mercantil
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Cobro de pagarés
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Juicio oral mercantil
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Contratos comerciales
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Sociedades mercantiles
                            </li>
                        </ul>
                        <a href="/servicios/mercantil" className="inline-flex items-center text-[var(--accent3-color)] font-semibold hover:text-yellow-500 transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-calculator text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                Fiscal/Administrativo
                            </h3>
                        </div>
                        <ul className="space-y-3 text-[var(--gray-text-color)] mb-6">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Impugnación de multas
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Juicio de nulidad
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Prescripción de deudas
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-[var(--accent-color)] mr-3" aria-hidden="true"></i>Defensa fiscal
                            </li>
                        </ul>
                        <a href="/servicios/fiscal-administrativo" className="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-blue-600 transition-colors duration-300">
                            Ver más servicios
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-button-hover-bg-color)] rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4 font-[var(--font-family-heading)]">
                        ¿Necesitas Asesoría Legal Especializada?
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                        Agenda tu consulta gratuita y recibe atención personalizada
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contacto" className="bg-[var(--accent3-color)] text-[var(--dark-text-color)] px-8 py-4 rounded-[var(--button-rounded-radius)] font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <i className="fas fa-calendar-alt mr-2" aria-hidden="true"></i>
                            Agendar Consulta
                        </a>
                        <a href="https://wa.me/5511999999999" target="_blank" className="bg-[var(--accent-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <i className="fab fa-whatsapp mr-2" aria-hidden="true"></i>
                            Consulta por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services