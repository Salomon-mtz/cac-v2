import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, User, School, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Checkbox } from '../components/ui';

const InscripcionesPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos del Estudiante
    nombreEstudiante: '',
    fechaNacimiento: '',
    gradoPostular: '',
    escuelaAnterior: '',
    // Datos de los Padres
    nombrePadre: '',
    telefonoPadre: '',
    emailPadre: '',
    nombreMadre: '',
    telefonoMadre: '',
    emailMadre: '',
    // Documentos
    documentos: {
      actaNacimiento: false,
      boletaAnterior: false,
      certificadoMedico: false,
      cartaRecomendacion: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        documentos: {
          ...prev.documentos,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Formulario enviado con éxito');
      navigate('/');
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Error al enviar el formulario. Por favor intente nuevamente.');
    }
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
            Proceso de <span className="text-primary">Inscripción</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-light/80 max-w-3xl mx-auto"
          >
            Únete a nuestra comunidad educativa siguiendo estos sencillos pasos
          </motion.p>
        </div>
      </section>

      {/* Steps Indicator */}
      <section className="py-8 px-4 bg-dark/50">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? 'bg-primary text-dark' : 'bg-light/10 text-light/50'
                  }`}
                >
                  {stepNumber === 1 && <User size={20} />}
                  {stepNumber === 2 && <School size={20} />}
                  {stepNumber === 3 && <FileText size={20} />}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-primary' : 'bg-light/10'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-light/5 rounded-xl p-8">
            {/* Step 1: Datos del Estudiante */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-light mb-6">
                  Datos del Estudiante
                </h2>
                <Input
                  label="Nombre Completo"
                  type="text"
                  id="nombreEstudiante"
                  name="nombreEstudiante"
                  value={formData.nombreEstudiante}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Grado al que Postula"
                  id="gradoPostular"
                  name="gradoPostular"
                  value={formData.gradoPostular}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar grado</option>
                  <option value="kinder3">Kinder 3 años</option>
                  <option value="kinder4">Kinder 4 años</option>
                  <option value="kinder5">Kinder 5 años</option>
                  <option value="primero">1° Primaria</option>
                  <option value="segundo">2° Primaria</option>
                  <option value="tercero">3° Primaria</option>
                  <option value="cuarto">4° Primaria</option>
                  <option value="quinto">5° Primaria</option>
                  <option value="sexto">6° Primaria</option>
                </Select>
                <Input
                  label="Escuela Anterior"
                  type="text"
                  id="escuelaAnterior"
                  name="escuelaAnterior"
                  value={formData.escuelaAnterior}
                  onChange={handleChange}
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Siguiente
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Datos de los Padres */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-light mb-6">
                  Datos de los Padres
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl text-light/90">Padre</h3>
                  <Input
                    label="Nombre Completo"
                    type="text"
                    id="nombrePadre"
                    name="nombrePadre"
                    value={formData.nombrePadre}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Teléfono"
                    type="tel"
                    id="telefonoPadre"
                    name="telefonoPadre"
                    value={formData.telefonoPadre}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    id="emailPadre"
                    name="emailPadre"
                    value={formData.emailPadre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl text-light/90">Madre</h3>
                  <Input
                    label="Nombre Completo"
                    type="text"
                    id="nombreMadre"
                    name="nombreMadre"
                    value={formData.nombreMadre}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Teléfono"
                    type="tel"
                    id="telefonoMadre"
                    name="telefonoMadre"
                    value={formData.telefonoMadre}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    id="emailMadre"
                    name="emailMadre"
                    value={formData.emailMadre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Siguiente
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Documentos */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-light mb-6">
                  Documentos Requeridos
                </h2>
                <div className="space-y-4">
                  <Checkbox
                    label="Acta de Nacimiento"
                    id="actaNacimiento"
                    name="actaNacimiento"
                    checked={formData.documentos.actaNacimiento}
                    onChange={handleChange}
                  />
                  <Checkbox
                    label="Boleta de Calificaciones del Año Anterior"
                    id="boletaAnterior"
                    name="boletaAnterior"
                    checked={formData.documentos.boletaAnterior}
                    onChange={handleChange}
                  />
                  <Checkbox
                    label="Certificado Médico"
                    id="certificadoMedico"
                    name="certificadoMedico"
                    checked={formData.documentos.certificadoMedico}
                    onChange={handleChange}
                  />
                  <Checkbox
                    label="Carta de Recomendación (opcional)"
                    id="cartaRecomendacion"
                    name="cartaRecomendacion"
                    checked={formData.documentos.cartaRecomendacion}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-light/90">
                    <strong>Nota:</strong> Todos los documentos deben ser entregados en original y copia
                    en la secretaría de la escuela una vez que el proceso de inscripción en línea haya
                    sido completado.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    Anterior
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <CheckCircle size={20} />
                    Completar Inscripción
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default InscripcionesPage;
