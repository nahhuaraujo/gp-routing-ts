import { useSelector } from 'react-redux';
import { LogoutButton, NavLink } from '../';
import { AppStore } from '../../redux/store';
import { PrivateRoutes } from '../../routes';
import * as S from './Nav.styled';

const Nav = () => {
  const { role, token } = useSelector((store: AppStore) => store.user);
  return (
    <S.Nav>
      {!token ? <NavLink to='about'>About</NavLink> : null}
      {!!token ? <NavLink to={`private/${PrivateRoutes.FRUITS}`}>Fruits</NavLink> : null}
      {!!token && role === 'ADMIN' ? <NavLink to={`private/${PrivateRoutes.DASHBOARD}`}>Dashboard</NavLink> : null}
      {!!token ? <NavLink to={`private/${PrivateRoutes.PROFILE}`}>Profile</NavLink> : null}
      {!!token ? <LogoutButton /> : <NavLink to='login'>Login</NavLink>}
    </S.Nav>
  );
};

export default Nav;
