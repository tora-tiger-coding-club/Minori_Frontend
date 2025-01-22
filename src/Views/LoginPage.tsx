/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Google from '@/assets/svgs/google.svg';
import { COLORS } from '@/components/commons/styles/colors';

const LoginContainer = css`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LoginHeader = css`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${COLORS.PRIMARY};
    font-size: 72px;
  }
  h2 {
    color: ${COLORS.TITLE.GRAY};
    font-size: 14px;
    text-align: center;
  }
`;

const LoginBox = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 384px;
  height: 200px;
  padding: 16px;
  border: 1px solid ${COLORS.BORDER.DEFAULT};
  h2 {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 15px;
  }
`;
const GoogleLoginButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 280px;
  height: 48px;
  background-color: ${COLORS.BACKGROUND.WHITE};
  border: 1px solid ${COLORS.BORDER.DEFAULT};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${COLORS.HOVER.GRAY};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <div css={LoginContainer}>
      <div css={LoginHeader}>
        <h1>minori</h1>
        <h2>
          대충 멋진 케치프라이즈 <br />
          그것이 바로 미노리
        </h2>
      </div>
      <div css={LoginBox}>
        <h2>로그인 하기</h2>
        <button css={GoogleLoginButton}>
          <img src={Google} alt='google icon' />
          Google로 계속하기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
