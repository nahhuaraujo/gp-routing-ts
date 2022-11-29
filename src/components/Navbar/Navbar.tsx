import { LogoutButton } from '..';
import * as S from './Navbar.styled';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Navlink to='home'>Home</S.Navlink>
      <S.Navlink to='dashboard'>Dashboard</S.Navlink>
      <S.Navlink to='about'>About</S.Navlink>
      <LogoutButton />
    </S.Navbar>
  );
};

export default Navbar;
