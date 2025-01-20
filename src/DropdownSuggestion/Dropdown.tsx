/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const DropdownStyle = css`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 8px;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

type DropdownProps = {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div css={DropdownStyle}>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => onSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
