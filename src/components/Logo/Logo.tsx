import { NavLink } from '../';
import * as S from './Logo.styled';

const Logo = () => {
  return (
    <S.Logo>
      <NavLink to='home' padding={'none'}>
        <img src='https://vgraphs.com/images/players/sprays/high-quality/valorant-spray-viper.png' alt='Viper' />
      </NavLink>
    </S.Logo>
  );
};

export default Logo;
