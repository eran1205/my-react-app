import React from 'react';
import { Routes } from 'src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
