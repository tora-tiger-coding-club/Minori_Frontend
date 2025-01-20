import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteList from './RouteList';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouteList.map((route) => (
          <Route path={route.path} key={route.name} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
