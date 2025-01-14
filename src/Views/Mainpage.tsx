/** @jsxImportSource @emotion/react */
import React from 'react';
import Header from '../Components/Header/Header';
import { css } from '@emotion/react';
import Carousel from '../Components/Carousel/Carousel';
import { AnimeGrid } from '../Components/AnimeGridList/AnimeGrid';

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
  const handleNotificationClick = () => {
    console.log('알림 버튼이 클릭되었습니다.');
  };
  return (
    <>
      <Header userName='홍길동' onNotificationClick={handleNotificationClick} />
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
