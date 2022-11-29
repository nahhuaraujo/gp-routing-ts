import { LogoutButton } from '..';
import * as S from './Navbar.styled';
import { AppStore } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Roles } from '../../models';

const Navbar = () => {
  const role = useSelector((store: AppStore) => store.user.role);
  return (
    <S.Navbar>
      <S.Navlink to='home'>Home</S.Navlink>
      {role === Roles.ADMIN ? <S.Navlink to='dashboard'>Dashboard</S.Navlink> : null}
      <S.Navlink to='/about'>About</S.Navlink>
      <LogoutButton />
    </S.Navbar>
  );
};

export default Navbar;
