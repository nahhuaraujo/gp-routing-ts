import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../../routes';

const Home = lazy(() => import('./Home/Home'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default Private;
