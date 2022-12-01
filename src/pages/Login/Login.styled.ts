import styled from 'styled-components';
import { buttonStyle, darkGreen, defaultPadding } from '../../styles/global-styled-css';

export const Login = styled.form`
  width: max-content;
  border: 1px solid ${darkGreen};
  padding: 1rem;
  margin: 2rem auto 0;

  > h1 {
    padding-bottom: 1rem;
  }
  > label {
    display: block;
  }
  > input {
    padding: ${defaultPadding};
    margin: 1rem;
    background-color: transparent;
    color: inherit;
  }
  > button {
    width: max-content;
    padding: ${defaultPadding};
    border: 1px solid ${darkGreen};
    margin: 0 auto;
    display: block;
    background-color: transparent;
    ${buttonStyle}
  }
`;
