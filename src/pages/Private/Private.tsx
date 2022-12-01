import { Navigate, Route, Routes } from 'react-router-dom';
import { RoleGuard } from '../../guard';
import { Roles } from '../../models';
import { PrivateRoutes } from '../../routes';
import { Dashboard, Fruits, Profile } from './';
import { NotFound } from '../';

const Private = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.FRUITS} element={<Fruits />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        <Route element={<RoleGuard role={Roles.ADMIN} />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Private;
