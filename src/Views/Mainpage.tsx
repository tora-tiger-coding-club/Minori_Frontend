/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Carousel from '../components/Carousel/Carousel';
import { AnimeGrid } from '../components/AnimeGridList/AnimeGrid';

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
  width: 70%;
  font-size: 24px;
`;

const mtop50 = css`
  margin-top: 50px;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <div css={txt}>
        <h1 css={txt2}>추천 작품</h1>
      </div>
      <div css={carouselContainer}>
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
