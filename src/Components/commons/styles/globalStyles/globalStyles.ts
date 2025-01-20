import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  textarea {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  select {
    appearance: none;
  }
  button {
    background-color: #fff;
    cursor: pointer;
  }
`;
