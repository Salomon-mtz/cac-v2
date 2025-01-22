import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark/95 text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">ESCUELA</h3>
            <p className="text-light/80 mb-4">
              Formando líderes del mañana con valores, excelencia académica e innovación.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-light hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-light hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-light hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/colegio" className="text-light/80 hover:text-primary transition-colors">
                  Nuestro Colegio
                </Link>
              </li>
              <li>
                <Link to="/inscripciones" className="text-light/80 hover:text-primary transition-colors">
                  Inscripciones
                </Link>
              </li>
              <li>
                <Link to="/academia" className="text-light/80 hover:text-primary transition-colors">
                  Academia
                </Link>
              </li>
              <li>
                <Link to="/actividades" className="text-light/80 hover:text-primary transition-colors">
                  Actividades
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-light/80">
                Dirección: Av. Principal #123
              </li>
              <li className="text-light/80">
                Teléfono: (123) 456-7890
              </li>
              <li className="text-light/80">
                Email: info@escuela.edu
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 mt-8 pt-8 text-center">
          <p className="text-light/60">
            © {new Date().getFullYear()} ESCUELA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;