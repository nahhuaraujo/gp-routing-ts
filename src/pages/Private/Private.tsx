import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoleGuard } from '../../guard';
import { PrivateRoutes } from '../../routes';
import { Roles } from '../../models';
import { Navbar } from '../../components';

const Home = lazy(() => import('./Home/Home'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const Private = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route element={<RoleGuard role={Roles.ADMIN} />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Private;
