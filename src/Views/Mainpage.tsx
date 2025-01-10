import React from 'react';
import Header from '../Components/Header/Header';

const MainPage: React.FC = () => {
  const handleNotificationClick = () => {
    console.log('알림 버튼이 클릭되었습니다.');
  };
  return (
    <>
      <Header userName='홍길동' onNotificationClick={handleNotificationClick} />
    </>
  );
};

export default MainPage;
