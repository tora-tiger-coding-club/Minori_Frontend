/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { COLORS } from '@/components/commons/styles/colors';

//@emotion CSS

const container = css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: auto;
  gap: 10px;
`;

const image = css`
  width: 100%;
  aspect-ratio: 160/208;
  max-width: 322px;
`;

const text = css`
  color: ${COLORS.TEXT.PRIMARY};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const text2 = css`
  color: ${COLORS.PRIMARY};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

export function AnimeGrid() {
  return (
    <div css={container}>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/1.webp' alt='스즈메의 문단속' />
        <p css={text}>스즈메의 문단속</p>
        <p css={text2}>1화</p>
      </div>
      <div>
        <img css={image} src='/img/2.webp' alt='트라페지움' />
        <p css={text}>트라페지움</p>
        <p css={text2}>1화</p>
      </div>
    </div>
  );
}
