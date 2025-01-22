import HomePage from '../pages/HomePage';
import ColegioPage from '../pages/ColegioPage';
import InscripcionesPage from '../pages/InscripcionesPage';
import AcademiaPage from '../pages/AcademiaPage';
import ActividadesPage from '../pages/ActividadesPage';
import ContactoPage from '../pages/ContactoPage';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    name: 'Inicio',
  },
  {
    path: '/colegio',
    component: ColegioPage,
    name: 'Nuestro Colegio',
  },
  {
    path: '/inscripciones',
    component: InscripcionesPage,
    name: 'Inscripciones',
  },
  {
    path: '/academia',
    component: AcademiaPage,
    name: 'Academia',
    children: [
      {
        path: '/academia/primaria',
        name: 'Primaria',
      },
      {
        path: '/academia/kinder',
        name: 'Kinder',
      },
    ],
  },
  {
    path: '/actividades',
    component: ActividadesPage,
    name: 'Actividades',
  },
  {
    path: '/contacto',
    component: ContactoPage,
    name: 'Contacto',
  },
];

export const getRouteByPath = (path) => {
  return routes.find(route => route.path === path);
};

export const getBreadcrumbsForPath = (path) => {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [];
  let currentPath = '';

  parts.forEach(part => {
    currentPath += `/${part}`;
    const route = getRouteByPath(currentPath);
    if (route) {
      breadcrumbs.push({
        path: currentPath,
        name: route.name,
      });
    }
  });

  return breadcrumbs;
};

export default routes;