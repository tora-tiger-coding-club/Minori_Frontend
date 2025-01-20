/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

interface ArticleProps {
  children: ReactNode;
}

const ArticleStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <article css={ArticleStyle}>{children}</article>;
};

export default Article;
