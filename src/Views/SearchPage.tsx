/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import SearchGridList from '@/components/SearchGridList/SearchGridList';

const centerContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SearchPage = () => {
  return (
    <div css={centerContent}>
      <div>SearchPage</div>
      <SearchGridList keyword={'레벨업'} />
    </div>
  );
};

export default SearchPage;
