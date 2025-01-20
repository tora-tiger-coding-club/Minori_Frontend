/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Carousel from '../components/Carousel/Carousel';
import { AnimeGrid } from '../components/AnimeGridList/AnimeGrid';
import CategorySelection from '../components/CategorySelection';

const carouselContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const txt = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const txt2 = css`
  width: 100%;
  font-size: 24px;
`;

const mtop50 = css`
  margin-top: 50px;
`;

const categoryList = [
  {
    title: '실시간 인기',
    href: '#',
  },
  {
    title: '오늘 방영',
    href: '#',
  },
  {
    title: '분기 화제작',
    href: '#',
  },
];

const ContentTopMargin = css`
  margin-top: 20px;
`;
const ContentBottomMargin = css`
  margin-bottom: 20px;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <div css={[txt, ContentBottomMargin]}>
        <h1 css={txt2}>추천 작품</h1>
      </div>
      <CategorySelection onClick={() => {}} categoryList={categoryList} />
      <div css={[carouselContainer, ContentTopMargin]}>
        <Carousel />
      </div>
      <div css={[txt, mtop50]}>
        <h1 css={txt2}>감상중인 작품</h1>
      </div>
      <div css={carouselContainer}>
        <AnimeGrid />
      </div>
    </>
  );
};

export default MainPage;
