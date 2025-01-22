import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ColegioPage from './pages/ColegioPage';
import InscripcionesPage from './pages/InscripcionesPage';
import AcademiaPage from './pages/AcademiaPage';
import ActividadesPage from './pages/ActividadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colegio" element={<ColegioPage />} />
          <Route path="/inscripciones" element={<InscripcionesPage />} />
          <Route path="/academia" element={<AcademiaPage />} />
          <Route path="/actividades" element={<ActividadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;