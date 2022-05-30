import { FC } from 'react';
import { Home, Products } from '@pages';
import { useRoutes } from 'react-router-dom';
import { HOME_PATH, US_PATH, PRODUCTS_PATH, PRODUCT_PATH, SERVICES_PATH } from './name';

const PrivateRoutes: FC = function () {
  const Routes = useRoutes([
    { path: HOME_PATH, element: <Home /> },
    { path: US_PATH, element: <div>Nosotros</div> },
    { path: PRODUCTS_PATH, element: <Products /> },
    { path: PRODUCT_PATH, element: <div>Item</div> },
    { path: SERVICES_PATH, element: <div>Servicios</div> },
    { path: '*', element: <div>404</div> },
  ]);

  return Routes;
};

export default PrivateRoutes;
