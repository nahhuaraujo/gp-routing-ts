import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../models';
import { AppStore } from '../redux/store';
import { PrivateRoutes } from '../routes';

interface Props {
  role: Roles;
}

export const RoleGuard = (props: Props) => {
  const user = useSelector((store: AppStore) => store.user);
  return user.role === props.role ? <Outlet /> : <Navigate to={`/${PrivateRoutes.PRIVATE}`} />;
};
