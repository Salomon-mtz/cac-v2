import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // Animaciones GSAP para las secciones
    gsap.from('.bento-grid', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-light mb-6">
              Educación que <span className="text-primary">Transforma</span>
            </h1>
            <p className="text-xl md:text-2xl text-light/90 mb-8 max-w-2xl mx-auto">
              Formando líderes del mañana con valores, excelencia académica e innovación
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/colegio" className="btn btn-primary">
                Conoce más
              </Link>
              <Link to="/inscripciones" className="btn btn-outline">
                Inscripciones abiertas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-light mb-12 text-center">
            Descubre Nuestra <span className="text-primary">Escuela</span>
          </h2>
          
          <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Programas Académicos */}
            <div className="row-span-2 bg-light/5 rounded-xl p-6 hover:bg-light/10 transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Programas Académicos
              </h3>
              <p className="text-light/80">
                Descubre nuestra metodología única que combina excelencia académica
                con desarrollo personal. Nuestros programas están diseñados para
                inspirar y desafiar a cada estudiante.
              </p>
            </div>

            {/* Instalaciones */}
            <div className="bg-light/5 rounded-xl p-6 hover:bg-light/10 transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Instalaciones Modernas
              </h3>
              <p className="text-light/80">
                Espacios diseñados para potenciar el aprendizaje y la creatividad.
              </p>
            </div>

            {/* Actividades */}
            <div className="bg-light/5 rounded-xl p-6 hover:bg-light/10 transition-colors">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Actividades Extracurriculares
              </h3>
              <p className="text-light/80">
                Desarrollo integral a través del arte, deporte y tecnología.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-light/5 rounded-xl p-6 hover:bg-light/10 transition-colors col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestros Valores
              </h3>
              <p className="text-light/80">
                Formamos estudiantes con principios sólidos, pensamiento crítico
                y compromiso social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">
            ¿Listo para ser parte de nuestra comunidad?
          </h2>
          <p className="text-dark/80 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad educativa y descubre un mundo de
            oportunidades para el desarrollo integral de tus hijos.
          </p>
          <Link to="/contacto" className="btn bg-dark text-light hover:bg-dark/90">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;