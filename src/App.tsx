import React from 'react';

import { InstanceProvider } from './context';
import MainPage from './pages/main';

function App() {
  return (
  <InstanceProvider>
    <MainPage />
  </InstanceProvider>
  );
}

export default App;
