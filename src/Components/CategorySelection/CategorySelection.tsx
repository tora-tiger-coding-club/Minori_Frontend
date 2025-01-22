/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { COLORS } from '@/components/commons/styles/colors';

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
  border: 1px solid ${COLORS.CATEGORY.BORDER};
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;

  transition: background-color 0.3s ease;

  &.selected {
    border-color: ${COLORS.PRIMARY};
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.BACKGROUND.WHITE};
  }

  &:hover {
    background-color: ${COLORS.HOVER.LIGHT};
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
