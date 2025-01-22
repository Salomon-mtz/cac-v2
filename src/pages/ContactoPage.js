import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí iría la lógica para enviar el formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Mensaje enviado con éxito');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
    setIsSubmitting(false);
  };

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
            Contacta con <span className="text-primary">Nosotros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light/80 max-w-3xl mx-auto"
          >
            Estamos aquí para responder tus dudas y ayudarte en todo lo que necesites
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-light mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">
                      Dirección
                    </h3>
                    <p className="text-light/80">
                      Av. Principal #123<br />
                      Ciudad, País
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">
                      Teléfono
                    </h3>
                    <p className="text-light/80">
                      (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">
                      Email
                    </h3>
                    <p className="text-light/80">
                      info@escuela.edu
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-64 bg-light/5 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1435606250276"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Google Maps'
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-light mb-8">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-light mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-light/5 border border-light/10 rounded-lg focus:outline-none focus:border-primary text-light"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-light/5 border border-light/10 rounded-lg focus:outline-none focus:border-primary text-light"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-light mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-light/5 border border-light/10 rounded-lg focus:outline-none focus:border-primary text-light"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-light mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-light/5 border border-light/10 rounded-lg focus:outline-none focus:border-primary text-light resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;