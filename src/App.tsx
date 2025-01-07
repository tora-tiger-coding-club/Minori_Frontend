import { useState } from 'react';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import { css, keyframes } from '@emotion/css';

function App() {
  const [count, setCount] = useState(0);

  const C_a = 0;

  const logospin = keyframes`  
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank' rel='noreferrer'>
          <img
            src={viteLogo}
            className={css`
              height: 6em;
              padding: 1.5em;
              will-change: filter;
              transition: filter 300ms;
              &:hover {
                filter: drop-shadow(0 0 2em #646cffaa);
              }
            `}
            alt='Vite logo'
          />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img
            src={reactLogo}
            className={css`
              height: 6em;
              padding: 1.5em;
              will-change: filter;
              transition: filter 300ms;
              animation: ${logospin} 20s linear infinite;
              &:hover {
                filter: drop-shadow(0 0 2em #61dafbaa);
              }
            `}
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div
        className={css`
          padding: 2em;
        `}
      >
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p
        className={css`
          color: #888;
        `}
      >
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
