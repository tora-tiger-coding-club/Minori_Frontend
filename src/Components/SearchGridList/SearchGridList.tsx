/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { COLORS } from '@/components/commons/styles/colors';

//@emotion CSS

const container = css`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: auto;
  gap: 50px;
`;

const listContainer = css`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  width: 400px;
`;

const contentContainer = css`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 250px;
  height: 100%;
`;

const image = css`
  width: 100%;
  aspect-ratio: 160/208;
  max-width: 120px;
`;

const text = css`
  color: ${COLORS.TEXT.PRIMARY};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  white-space: normal;
  word-wrap: break-word;
`;

const text2 = css`
  color: ${COLORS.TEXT.PLACEHOLDER};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const statusBox = css`
  display: flex;
  width: 90%;
  height: 30px;
  background-color: #34c759;
  text-align: center;
  color: white;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-radius: 5px;
`;

const textHighlight = css`
  color: ${COLORS.PRIMARY};
`;

const highlightKeyword = (text: string, keyword: string) => {
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} css={textHighlight}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const data = [
  {
    id: 1,
    title: '나 혼자만 레벨업 ~ARISE FROM THE SHADOW~',
    status: 'TVA / 12화 / 방영 중',
    rating: '★ 4.8 (36,123)',
    imageUrl: '/img/2.webp',
    statusText: '시청 중',
  },
  {
    id: 2,
    title: '이세계에서 치트 스킬을 얻은 나는 현실 세계에서도 무쌍한다 ~레벨업이 인생을 바꿨다~',
    status: 'TVA / 12화 / 방영 중',
    rating: '★ 4.8 (36,123)',
    imageUrl: '/img/2.webp',
    statusText: '시청 중',
  },
  {
    id: 3,
    title: '밥만먹고 레벨업',
    status: 'TVA / 12화 / 방영 중',
    rating: '★ 4.8 (36,123)',
    imageUrl: '/img/2.webp',
    statusText: '시청 중',
  },
];

const SearchGrid: React.FC<{ keyword: string }> = ({ keyword }) => {
  return (
    <div css={container}>
      {data.map((item) => (
        <div key={item.id} css={listContainer}>
          <img css={image} src={item.imageUrl} alt={item.title} />
          <div css={contentContainer}>
            <p css={text}>{highlightKeyword(item.title, keyword)}</p>
            <p css={text2}>{item.status}</p>
            <p css={text2}>{item.rating}</p>
            <div css={statusBox}>{item.statusText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchGrid;
