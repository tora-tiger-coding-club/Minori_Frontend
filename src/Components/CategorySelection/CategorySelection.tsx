/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

interface CategoryProps {
  categoryList: CategoryItem[];
  onClick: (idx: number) => void;
}

interface CategoryItem {
  title: string;
  href: string;
}

const CategoryContainer = css`
  display: flex;
  height: 32px;
`;

const CategoryItemStyle = css`
  border-radius: 16px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;

  transition: background-color 0.3s ease;

  &.selected {
    border-color: #ffccaa;
    background-color: #ffccaa;
    color: #fff;
  }

  &:hover {
    background-color: #ffe5d5;
  }
`;

const CategorySelection: React.FC<CategoryProps> = ({ categoryList, onClick }) => {
  const [selected, setSelected] = useState(0);

  const handleButtonClick = (idx: number) => {
    setSelected(idx);
    onClick(idx);
  };

  return (
    <div css={CategoryContainer}>
      {categoryList.map((item, idx) => (
        <button
          className={idx === selected ? 'selected' : ''}
          onClick={() => handleButtonClick(idx)}
          css={CategoryItemStyle}
          key={item.title + item.href}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
