/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface HeaderProps {
  userName?: string; // 사용자 이름 (optional)
  onNotificationClick?: () => void; // 알림 버튼 클릭 이벤트 (optional)
}

const MainContainer = css`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 세로 가운데 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  height: 100vh; /* 전체 화면 높이 */
  width: 100%; /* 전체 화면 너비 */
  margin: 0; /* 외부 여백 제거 */
`;

const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  width: 80%;
`;

const LogoStyle = css`
  h1 {
    font-size: 24px;
    color: #ffccaa; /* 원하는 브랜드 색상으로 변경 가능 */
    padding: 0px 10px;
  }
`;

const CategoryStyle = css`
  h2 {
    font-size: 16px;
    color: black;
    padding: 0px 10px;
  }
`;

const SearchBarStyle = css`
  flex: 1;
  margin: 0 20px;

  input {
    width: 30%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
  }
`;

const UserInfoStyle = css`
  display: flex;
  align-items: center;
`;

const NotificationIconStyle = css`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const ProfileStyle = css`
  width: 32px;
  height: 32px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ userName, onNotificationClick }) => {
  return (
    <div css={MainContainer}>
      <header css={HeaderStyle}>
        <div css={LogoStyle}>
          <h1>minori</h1>
        </div>
        <div css={CategoryStyle}>
          <h2>홈</h2>
        </div>
        <div css={CategoryStyle}>
          <h2>작품 탐색</h2>
        </div>
        <div css={CategoryStyle}>
          <h2>홈</h2>
        </div>
        <div css={CategoryStyle}>
          <h2>작품 탐색</h2>
        </div>
        <div css={SearchBarStyle}>
          <input type='text' placeholder='작품을 입력하세요...' />
        </div>
        <div css={UserInfoStyle}>
          <button
            css={NotificationIconStyle}
            onClick={onNotificationClick || (() => alert('알림 버튼 클릭됨'))}
          >
            🔔
          </button>
          <div css={ProfileStyle} title={userName || '사용자'}>
            💁‍♀️
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
