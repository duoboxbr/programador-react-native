import React from 'react';

import {ThemeProvider} from 'styled-components';

import {AuthProvider} from './src/hooks/Auth';
import {Routes} from './src/routes';

import theme from './src/global/styles/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
