import { Logo, Nav } from '../../components';
import * as S from './Navbar.styled';

const Navbar = () => {
  return (
    <S.Navbar>
      <Logo />
      <Nav />
    </S.Navbar>
  );
};

export default Navbar;
