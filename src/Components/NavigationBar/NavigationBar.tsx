import React from 'react';
import './App.css';

const BottomBar: React.FC = () => {
  return (
    <div className='bottom-bar'>
      {/*하단바 아이콘 */}
      <button>home</button>
      <button>bell</button>
      <button>folder</button>
      <button>review</button>
    </div>
  );
};

export default BottomBar;
