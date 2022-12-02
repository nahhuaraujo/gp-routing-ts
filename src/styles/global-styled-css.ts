import { css } from 'styled-components';

export const defaultPadding = '0.5rem 1rem';

export const darkGrey = '#222f3e';

export const lightGrey = '#576574';

export const superLightGrey = '#c8d6e5';

export const darkGreen = '#10ac84';

export const lightGreen = '#1dd1a1';

const border = css`
  padding: ${defaultPadding};
  border: 1px solid black;
  border-collapse: collapse;
  border-color: ${darkGreen};
`;

export const tableBorder = css`
  width: 70%;
  margin: 1rem auto 0;
  table-layout: fixed;

  ${border}

  td {
    ${border}
  }
  th {
    ${border}
  }
`;

export const defaultLinkButtonStyle = css`
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

export const defaultLinkTextStyle = css`
  display: inline;
  text-decoration: none;
  color: inherit;

  :hover {
    color: ${darkGreen};
  }
`;
