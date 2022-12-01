import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../redux/store';
import { PublicRoutes } from '../routes';

export const AuthGuard = () => {
  const user = useSelector((store: AppStore) => store.user);
  return !!user.token ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />;
};
