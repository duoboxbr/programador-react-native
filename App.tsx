import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {BankSlipActionsProvider} from './src/hooks/BankSlipsActions';
import {AuthProvider} from './src/hooks/Auth';
import {Routes} from './src/routes';

import theme from './src/global/styles/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <BankSlipActionsProvider>
          <Routes />
        </BankSlipActionsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
