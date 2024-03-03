import React from 'react';
import { Routes } from 'src/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'src/lib/react-query';

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />;
      </QueryClientProvider>
    </>
  );
};

export default App;
