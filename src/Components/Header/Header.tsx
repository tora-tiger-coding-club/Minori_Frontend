/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import Dropdown from '../DropdownSuggestion/Dropdown';
import Alert from '../../assets/svgs/alert.svg';
import Search from '../../assets/svgs/search.svg';
import DownArrow from '../../assets/svgs/down-arrow.svg';
import { COLORS } from '@/components/commons/styles/colors';

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
    color: ${COLORS.PRIMARY};
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 30px 0 0;

    transition: text-shadow 0.3s ease-in-out;

    &:hover {
      text-shadow:
        0 0 10px ${COLORS.PRIMARY_SHADOW.LIGHT},
        0 0 20px ${COLORS.PRIMARY_SHADOW.MEDIUM},
        0 0 30px ${COLORS.PRIMARY_SHADOW.DARK},
        1px 1px 2px ${COLORS.SHADOW.DEFAULT};
    }
  }
`;

const LinkStyle = css`
  a {
    color: ${COLORS.TEXT.PRIMARY};
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 20px;

    &:hover {
      color: ${COLORS.TEXT.SECONDARY};
    }
    &.active {
      color: ${COLORS.PRIMARY};
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
    border: 1px solid ${COLORS.BORDER.DEFAULT};
    border-radius: 20px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${COLORS.TEXT.PLACEHOLDER};
    }
    &:focus {
      border-color: ${COLORS.PRIMARY};
      box-shadow: 0 0 0 4px ${COLORS.PRIMARY_SHADOW.LIGHT};
    }
  }
  img {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    pointer-events: none;
  }
`;

const UserInfoStyle = css`
  margin-left: 16px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 16px;
  align-items: center;
`;

const NotificationIconStyle = css`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ProfileStyle = css`
  width: 32px;
  height: 32px;
  background-color: ${COLORS.BACKGROUND.GRAY};
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
            <img src={Search} alt='검색' />
            {suggestions.length > 0 && (
              <Dropdown suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
            )}
          </div>
          <div css={UserInfoStyle}>
            <button
              css={NotificationIconStyle}
              onClick={onNotificationClick || (() => alert('알림 버튼 클릭됨'))}
            >
              <img src={Alert} alt='알림' />
            </button>
            <div css={ProfileStyle} title={userName || '사용자'}></div>
            <div>{userName || '사용자'}</div>
            <img src={DownArrow} alt='펼치기' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
