import styled from 'styled-components';
import { buttonStyle, darkGreen } from '../../styles/global-styled-css';

export const Login = styled.form`
  border: 1px solid ${darkGreen};
  padding: 1rem;
  width: max-content;
  margin: 0 auto;

  > h1 {
    padding-bottom: 1rem;
  }
  > label {
    display: block;
  }
  > input {
    padding: 0.5rem 1rem;
    margin: 1rem;
    background-color: transparent;
    color: inherit;
  }
  > button {
    width: max-content;
    padding: 0.5rem 1rem;
    border: 1px solid ${darkGreen};
    margin: 0 auto;
    display: block;
    background-color: transparent;
    ${buttonStyle}
  }
`;
