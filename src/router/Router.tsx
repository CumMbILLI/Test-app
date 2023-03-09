import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageWrapper from 'components/Layouts/PageWrapper';
import AppRoute from './AppRoute';
import { PATHNAMES } from 'constants/routes';

import Home from 'pages/Home';
import CreateTest from 'pages/CreateTest';

const layoutRoutes: { element: ReactNode; path: PATHNAMES }[] = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <CreateTest />,
    path: PATHNAMES.CREATE_TEST,
  },
];

const routes = [
  {
    element: <div>Not found</div>,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {layoutRoutes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageWrapper>
              <AppRoute>{element}</AppRoute>
            </PageWrapper>
          }
        />
      ))}
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<AppRoute>{element}</AppRoute>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
