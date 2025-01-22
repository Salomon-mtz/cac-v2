import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Book, Users, Target, Star, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ColegioPage = () => {
  useEffect(() => {
    // Animaciones GSAP
    gsap.from('.history-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.history-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.value-card', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.values-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const values = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Integridad",
      description: "Formamos personas honestas y éticas, comprometidas con la verdad y la justicia."
    },
    {
      icon: <Book className="text-primary" size={32} />,
      title: "Excelencia Académica",
      description: "Buscamos el más alto nivel educativo a través de la innovación y el compromiso."
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Comunidad",
      description: "Creamos un ambiente inclusivo donde todos pueden crecer y desarrollarse."
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Responsabilidad",
      description: "Formamos estudiantes comprometidos con su educación y su entorno."
    },
    {
      icon: <Star className="text-primary" size={32} />,
      title: "Creatividad",
      description: "Fomentamos el pensamiento innovador y la expresión artística."
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Liderazgo",
      description: "Desarrollamos líderes capaces de generar cambios positivos en la sociedad."
    }
  ];

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
            Nuestro <span className="text-primary">Colegio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light/80 max-w-3xl mx-auto"
          >
            Más de 20 años formando líderes con valores y excelencia académica
          </motion.p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 px-4 bg-dark/50 history-section">
        <div className="container mx-auto max-w-4xl">
          <div className="history-content space-y-8">
            <h2 className="text-3xl font-bold text-light mb-8 text-center">
              Nuestra Historia
            </h2>
            
            <div className="space-y-6 text-light/80">
              <p>
                Fundada en 2003, nuestra institución nació con la visión de crear
                un espacio educativo que combinara la excelencia académica con una
                formación integral en valores. Desde entonces, hemos crecido y
                evolucionado, manteniendo siempre nuestro compromiso con la
                calidad educativa.
              </p>
              
              <p>
                A lo largo de los años, hemos implementado metodologías
                innovadoras y programas educativos de vanguardia, formando
                generaciones de estudiantes que hoy son profesionales exitosos
                y ciudadanos comprometidos con su comunidad.
              </p>
              
              <p>
                Nuestro colegio se ha distinguido por mantener un equilibrio
                entre la tradición y la innovación, adaptándonos a los cambios
                tecnológicos y sociales sin perder nuestra esencia y valores
                fundamentales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-light mb-12 text-center">
            Nuestros Valores
          </h2>
          
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-light/5 rounded-xl p-6 hover:bg-light/10 transition-colors"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-light/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-light">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-light">Estudiantes Activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-light">Docentes Calificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-light">Compromiso Educativo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColegioPage;