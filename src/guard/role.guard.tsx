import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../models';
import { AppStore } from '../redux/store';
import { PrivateRoutes } from '../routes';

interface IProps {
  role: Roles;
}

export const RoleGuard = (props: IProps) => {
  const user = useSelector((store: AppStore) => store.user);
  return user.role === props.role ? <Outlet /> : <Navigate to={`/private/${PrivateRoutes.FRUITS}`} />;
};
