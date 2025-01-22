import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteList from './RouteList';
import Article from '../components/Aritcle/Article';

const Router: React.FC = () => {
  return (
    <Article>
      <Routes>
        {RouteList.map((route) => (
          <Route
            path={route.path}
            key={`${route.name}:${route.path}`}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Article>
  );
};

export default Router;
