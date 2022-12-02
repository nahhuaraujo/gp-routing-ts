import { ReactNode } from 'react';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  padding?: 'none' | 'default';
  type?: 'text' | 'button';
  children: ReactNode;
}

const NavLink = ({ to, padding, type, children }: IProps) => {
  return (
    <S.NavLink to={to} padding={padding} type={type}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
