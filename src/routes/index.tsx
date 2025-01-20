import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteList from './RouteList';
import Article from '../components/Aritcle/Article';

const Router: React.FC = () => {
  return (
    <Article>
      <BrowserRouter>
        <Routes>
          {RouteList.map((route) => (
            <Route path={route.path} key={route.name} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Article>
  );
};

export default Router;
