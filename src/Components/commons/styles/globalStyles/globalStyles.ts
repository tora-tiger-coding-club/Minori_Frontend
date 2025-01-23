import { css } from '@emotion/react';
import { COLORS } from '@/components/commons/styles/colors';

export const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Pretendard;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${COLORS.TEXT.PRIMARY};
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    &:focus {
      outline: none;
    }
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
    background-color: ${COLORS.BACKGROUND.WHITE};
    cursor: pointer;
  }
`;
