import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ActividadesPage = () => {
  const activities = [
    {
      title: "Deportes",
      description: "Fútbol, básquetbol, voleibol y más deportes para el desarrollo físico integral.",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Arte y Música",
      description: "Talleres de pintura, música y danza para despertar la creatividad.",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Tecnología",
      description: "Laboratorio de computación y robótica para desarrollar habilidades digitales.",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Club de Ciencias",
      description: "Experimentos y proyectos científicos para despertar la curiosidad.",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Idiomas",
      description: "Clases de inglés y otros idiomas para una formación internacional.",
      image: "/api/placeholder/800/500"
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
            Nuestras <span className="text-primary">Actividades</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light/80 max-w-3xl mx-auto"
          >
            Descubre todas las actividades extracurriculares que ofrecemos para
            el desarrollo integral de nuestros estudiantes
          </motion.p>
        </div>
      </section>

      {/* Activities Slider */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-96"
          >
            {activities.map((activity, index) => (
              <SwiperSlide key={index} className="w-3/4">
                <div className="relative h-full rounded-xl overflow-hidden group">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold text-light mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-light/90 opacity-0 group-hover:opacity-100 transition-opacity">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4 bg-dark/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-light mb-12 text-center">
            Actividades Destacadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light/5 rounded-xl overflow-hidden hover:bg-light/10 transition-colors"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-light/80">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActividadesPage;