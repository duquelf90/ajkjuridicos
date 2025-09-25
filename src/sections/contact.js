import React from 'react'

const Contact = () => {
    return (
        <section className="code-section py-20 bg-gradient-to-br from-[#001a33] to-[#004aad] relative overflow-hidden" id="contact">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent"></div>
                <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-[var(--font-family-heading)]">
                        Proceso <span className="text-[var(--accent3-color)]">Simple</span> y
                        Efectivo
                    </h2>
                    <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Te acompañamos paso a paso en tu proceso legal con transparencia total y
                        comunicación constante
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent3-color)] to-yellow-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <i className="fas fa-calendar-alt text-[var(--dark-text-color)] text-3xl" aria-hidden="true"></i>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                1
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-family-heading)]">
                            Agenda tu Consulta
                        </h3>
                        <p className="text-white opacity-80 leading-relaxed">
                            Programa una cita inicial gratuita por teléfono, WhatsApp o formulario
                            web
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-color)] to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <i className="fas fa-search text-white text-3xl" aria-hidden="true"></i>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                2
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-family-heading)]">
                            Evaluamos tu Caso
                        </h3>
                        <p className="text-white opacity-80 leading-relaxed">
                            Analizamos tu situación legal y te explicamos las mejores opciones
                            disponibles
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent2-color)] to-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <i className="fas fa-file-contract text-white text-3xl" aria-hidden="true"></i>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                3
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-family-heading)]">
                            Diseñamos Estrategia
                        </h3>
                        <p className="text-white opacity-80 leading-relaxed">
                            Creamos un plan legal personalizado con costos transparentes y tiempos
                            definidos
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent4-color)] to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <i className="fas fa-trophy text-white text-3xl" aria-hidden="true"></i>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                4
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-family-heading)]">
                            Logramos Resultados
                        </h3>
                        <p className="text-white opacity-80 leading-relaxed">
                            Ejecutamos la estrategia manteniendo comunicación constante hasta
                            resolver tu caso
                        </p>
                    </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 text-center">
                    <div className="mb-8">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[var(--font-family-heading)]">
                            ¿Listo para Resolver tu Situación Legal?
                        </h3>
                        <p className="text-xl text-white opacity-90 mb-2">
                            La primera consulta es completamente gratuita y sin compromiso
                        </p>
                        <p className="text-lg text-[var(--accent3-color)] font-semibold">
                            Atención personalizada • Confidencialidad total • Resultados efectivos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fab fa-whatsapp text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
                            <p className="text-white opacity-80 text-sm mb-4">Respuesta inmediata</p>
                            <a href="https://wa.me/5511999999999" target="_blank" className="inline-block bg-[var(--accent-color)] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300">
                                Enviar Mensaje
                            </a>
                        </div>

                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-[var(--accent2-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-phone text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Teléfono</h4>
                            <p className="text-white opacity-80 text-sm mb-4">Llamada directa</p>
                            <a href="tel:+5511999999999" className="inline-block bg-[var(--accent2-color)] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300">
                                Llamar Ahora
                            </a>
                        </div>

                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-[var(--accent3-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-envelope text-[var(--dark-text-color)] text-2xl" aria-hidden="true"></i>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Formulario</h4>
                            <p className="text-white opacity-80 text-sm mb-4">Contacto detallado</p>
                            <a href="/contacto" className="inline-block bg-[var(--accent3-color)] text-[var(--dark-text-color)] px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
                                Llenar Formulario
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <a href="/contacto" className="inline-block bg-[var(--accent3-color)] text-[var(--dark-text-color)] px-12 py-4 rounded-[var(--button-rounded-radius)] font-bold text-xl hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-2 hover:scale-105">
                            <i className="fas fa-calendar-check mr-3" aria-hidden="true"></i>
                            Agendar Mi Consulta Gratuita
                        </a>
                        <div className="text-white opacity-80 text-sm">
                            <i className="fas fa-lock mr-2" aria-hidden="true"></i>
                            Información 100% confidencial y protegida
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact