/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

//@emotion CSS
const embla = css`
  overflow: hidden;
  display: flex;
  justify-content: center;
  aligh-items: center;
  width: 65%;
`;

const emblaContainer = css`
  display: flex;
  width: 100%;
  margin: 0;
`;

const emblaSlide = css`
  flex: 0 0 20%;
  min-width: 0;
  margin: 0 0;
`;

const image = css`
  width: 200px;
  hegith: 250px;
  margin: 0 0;
`;

const text = css`
  margin: 0;
  font-size: 15x;
  font-weight: bold;
`;
/////////////////////////////////////////////////////////

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div css={embla} ref={emblaRef}>
      <div css={emblaContainer}>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/1.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>스즈메의 문단속</p>
        </div>
        <div css={emblaSlide}>
          <img src='/img/2.webp' css={image} alt='스즈메의 문단속' />
          <p css={text}>트라페지움</p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
