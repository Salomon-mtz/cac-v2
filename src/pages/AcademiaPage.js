import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Book, Users, Calendar, Award, Brain, Baby } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AcademiaPage = () => {
  useEffect(() => {
    gsap.from('.program-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.programs-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-light mb-6"
          >
            Nuestros <span className="text-primary">Programas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light/80 max-w-3xl mx-auto"
          >
            Descubre nuestra metodología educativa integral, diseñada para
            potenciar el desarrollo académico y personal de cada estudiante
          </motion.p>
        </div>
      </section>

      {/* Programas Grid - Bento Box Style */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto">
          <div className="programs-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kinder */}
            <div className="program-card md:col-span-2 bg-light/5 rounded-xl p-8 hover:bg-light/10 transition-colors">
              <div className="flex items-start gap-4">
                <Baby className="text-primary" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Kinder</h3>
                  <p className="text-light/80 mb-4">
                    Programa diseñado para desarrollar las habilidades fundamentales
                    y la curiosidad natural de los más pequeños.
                  </p>
                  <ul className="space-y-2 text-light/70">
                    <li>• Desarrollo motriz y sensorial</li>
                    <li>• Introducción al lenguaje y números</li>
                    <li>• Actividades artísticas y creativas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metodología */}
            <div className="program-card bg-light/5 rounded-xl p-8 hover:bg-light/10 transition-colors">
              <Brain className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Metodología
              </h3>
              <p className="text-light/80">
                Aprendizaje activo y personalizado, adaptado al ritmo de cada estudiante.
              </p>
            </div>

            {/* Primaria */}
            <div className="program-card bg-light/5 rounded-xl p-8 hover:bg-light/10 transition-colors">
              <Book className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Primaria
              </h3>
              <p className="text-light/80">
                Formación académica sólida con énfasis en pensamiento crítico
                y valores.
              </p>
            </div>

            {/* Actividades */}
            <div className="program-card md:col-span-2 bg-light/5 rounded-xl p-8 hover:bg-light/10 transition-colors">
              <Calendar className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Actividades Complementarias
              </h3>
              <p className="text-light/80">
                Programa integral que incluye deportes, arte, música y tecnología
                para un desarrollo completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-light mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Docentes Calificados */}
            <div className="flex items-start gap-4">
              <Users className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-light mb-2">
                  Docentes Calificados
                </h3>
                <p className="text-light/80">
                  Profesionales comprometidos con la excelencia educativa.
                </p>
              </div>
            </div>

            {/* Grupos Reducidos */}
            <div className="flex items-start gap-4">
              <Award className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-light mb-2">
                  Grupos Reducidos
                </h3>
                <p className="text-light/80">
                  Atención personalizada para cada estudiante.
                </p>
              </div>
            </div>

            {/* Infraestructura */}
            <div className="flex items-start gap-4">
              <Book className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-light mb-2">
                  Infraestructura Moderna
                </h3>
                <p className="text-light/80">
                  Espacios diseñados para el aprendizaje óptimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademiaPage;