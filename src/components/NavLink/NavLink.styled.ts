import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { defaultLinkButtonStyle, defaultLinkTextStyle, defaultPadding } from '../../styles/global-styled-css';

interface IProps {
  padding?: 'none' | 'default';
  type?: 'text' | 'button';
}

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: ${({ padding = 'default' }: IProps) => (padding === 'default' ? `${defaultPadding}` : '0')};
  display: flex;
  align-items: center;
  ${({ type = 'button' }: IProps) => (type === 'button' ? defaultLinkButtonStyle : defaultLinkTextStyle)}
`;
