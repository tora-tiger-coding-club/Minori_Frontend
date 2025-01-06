import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import BottomBar from '../../Components/NavigationBar/NavigationBar';
import BookmarkButton from '../../Components/Bookmark/BookmarkButton';
import './App.css';

function App() {
  return (
    <>
      <div className='main-container'>
        <header>
          <h1>존쩌에메</h1>
          <p>대충 애니 리뷰를 한곳에 담는다는 내용</p>
        </header>
        <section>
          <h2>Hot</h2>
          <Carousel />
        </section>
        <section>
          <h2>시청중</h2>
          {/* 목록 */}
          <div className='anime-list'>
            {/* 시청 중 리스트 아이템템 */}
            <div className='anime-item'>애니1</div>
            <div className='anime-item'>애니2</div>
            <div className='anime-item'>애니3</div>
          </div>
        </section>
        <BookmarkButton />
        <BottomBar />
      </div>
    </>
  );
}

export default App;
