/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import Dropdown from '../../DropdownSuggestion/Dropdown';

interface HeaderProps {
  userName?: string; // 사용자 이름 (optional)
  onNotificationClick?: () => void; // 알림 버튼 클릭 이벤트 (optional)
}

const MainContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px 0px 0px 0px;
  height: 120px;
  flex-shrink: 0;
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
    color: #fca;
    text-align: center;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 30px 0 0;
  }
`;

const CategoryStyle = css`
  h2 {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 20px;
  }
`;

const SearchBarStyle = css`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  input {
    width: 100%;
    height: 25px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
  }
`;

const UserInfoStyle = css`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
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
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const allSuggestions = ['작품1', '작품2', '작품3', '작품4', '작품5'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

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
        <div
          css={css`
            width: 400px;
          `}
        ></div>
        <div css={SearchBarStyle}>
          <input
            type='text'
            placeholder='작품을 입력하세요...'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {suggestions.length > 0 && (
            <Dropdown suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
          )}
        </div>
        <div css={UserInfoStyle}>
          <button
            css={NotificationIconStyle}
            onClick={onNotificationClick || (() => alert('알림 버튼 클릭됨'))}
          >
            🔔
          </button>
          <div css={ProfileStyle} title={userName || '사용자'}></div>
          <div>{userName || '사용자'}</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
