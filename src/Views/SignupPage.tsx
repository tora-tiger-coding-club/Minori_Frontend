/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { COLORS } from '@/components/commons/styles/colors';
import { useSignup } from '@/api/mutations/useSignup';

const SignupContainer = css`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SignupHeader = css`
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

const SignupBox = css`
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

const SignupPage: React.FC = () => {
  const { mutate: signup } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signup({
      userId: 1,
      username: 'test',
      introduce: '자기소개임',
    });
  };

  return (
    <div css={SignupContainer}>
      <div css={SignupHeader}>
        <h1>minori</h1>
        <h2>
          대충 멋진 케치프라이즈 <br />
          그것이 바로 미노리
        </h2>
      </div>
      <div css={SignupBox}>
        <h2>회원가입 하기</h2>
        <button onClick={handleSubmit}>이걸 누르면 회원가입이 되어여</button>
      </div>
    </div>
  );
};

export default SignupPage;
