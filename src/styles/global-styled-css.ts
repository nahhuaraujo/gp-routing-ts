import { css } from 'styled-components';

export const darkGrey = '#222f3e';

export const lightGrey = '#576574';

export const superLightGrey = '#c8d6e5';

export const darkGreen = '#10ac84';

export const lightGreen = '#1dd1a1';

const border = css`
  margin: 1rem auto 0;
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;
  width: 70%;
  border-color: ${darkGreen};
`;

export const tableBorder = css`
  ${border}

  td {
    ${border}
  }
`;

export const buttonStyle = css`
  color: inherit;
  font-size: inherit;
  cursor: pointer;

  :hover {
    background-color: ${lightGreen};
    color: ${darkGrey};
  }
  :active {
    background-color: inherit;
    color: inherit;
  }
  transition: 300ms;
`;
