import styled from 'styled-components';

export const Login = styled.form`
  border: 1px solid black;
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
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: block;
    background-color: transparent;
    color: inherit;
  }
`;
