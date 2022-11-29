import { css } from 'styled-components';

const border = css`
  margin: 1rem auto 0;
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;
  width: 70%;
`;

export const tableBorder = css`
  ${border}

  td {
    ${border}
  }
`;

export const darkGrey = css`
  #222f3e
`;

export const lightGrey = css`
  #576574
`;

export const superLightGrey = css`
  #c8d6e5
`;
export const darkGreen = css`
  #10ac84
`;

export const lightGreen = css`
  #10ac84
`;

export const linkStyle = css``;
