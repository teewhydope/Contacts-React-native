import React from 'react';
import 'react-native-gesture-handler';
import AppNavContainer from '../presentation/navigations';
import GlobalProvider from '../presentation/provider';
import ErrorBoundary from '../ui/components/Error/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  </ErrorBoundary>
);

export default App;
