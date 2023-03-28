import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Hello world!</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
