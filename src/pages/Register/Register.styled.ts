import styled from 'styled-components';
import { darkGreen, defaultLinkButtonStyle, defaultPadding } from '../../styles/global-styled-css';

export const Register = styled.div`
  h1 {
    padding-top: 1rem;
    text-align: center;
  }
`;

export const RegisterForm = styled.form`
  width: max-content;
  border: 1px solid ${darkGreen};
  padding: 1rem;
  margin: 1rem auto 0;

  > label {
    padding-left: 1rem;
    text-align: left;
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
    ${defaultLinkButtonStyle}
  }
`;
