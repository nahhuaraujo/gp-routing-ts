import { ReactNode } from 'react';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  padding?: 'none' | 'default';
  children: ReactNode;
}

const NavLink = ({ to, padding, children }: IProps) => {
  return (
    <S.NavLink to={to} padding={padding}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
