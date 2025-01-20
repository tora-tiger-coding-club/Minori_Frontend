import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/Header';
import Router from './routes';
import { Global } from '@emotion/react';
import { globalStyles } from './components/commons/styles/globalStyles/globalStyles';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <div className='app'>
        <Header />
        <Router />
      </div>
    </QueryClientProvider>
  );
};

export default App;
