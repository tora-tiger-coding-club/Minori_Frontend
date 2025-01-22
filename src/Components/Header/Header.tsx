/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import Dropdown from '../DropdownSuggestion/Dropdown';
import { Link } from 'react-router-dom';
import Alert from '../../assets/svgs/alert.svg';

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
  height: 100%;
  max-width: 1312px;
  padding: 0 16px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const HeaderItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyle = css`
  a {
    color: #fca;
    text-align: center;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 30px 0 0;

    transition: text-shadow 0.3s ease-in-out;

    &:hover {
      text-shadow:
        0 0 10px rgba(255, 204, 170, 0.25),
        0 0 20px rgba(255, 204, 170, 0.15),
        0 0 30px rgba(255, 204, 170, 0.1),
        1px 1px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

const LinkStyle = css`
  a {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 20px;

    &:hover {
      color: rgba(129, 129, 129, 0.8);
    }
    &.active {
      color: #fca;
    }
  }
`;

const SearchBarStyle = css`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  input {
    width: 300px;
    height: 35px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
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
  const location = useLocation();

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
    <header css={MainContainer}>
      <div css={HeaderStyle}>
        <div css={HeaderItem}>
          <div css={LogoStyle}>
            <Link to='/'>minori</Link>
          </div>
          <div css={LinkStyle}>
            <Link className={location.pathname === '/search' ? 'active' : ''} to='/search'>
              작품 탐색
            </Link>
          </div>
          <div css={LinkStyle}>
            <Link className={location.pathname === '/record' ? 'active' : ''} to='/record'>
              내 기록
            </Link>
          </div>
        </div>
        <div css={HeaderItem}>
          <div css={SearchBarStyle}>
            <input
              type='text'
              placeholder='제목을 입력하세요.'
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
              <img src={Alert} alt='' />
            </button>
            <div css={ProfileStyle} title={userName || '사용자'}></div>
            <div>{userName || '사용자'}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
