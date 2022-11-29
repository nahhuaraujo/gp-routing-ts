import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.header`
  background-color: #222f3e;
  display: flex;
  justify-content: space-around;
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
`;
