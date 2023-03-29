import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks/Auth';

import {SignIn} from '../screens/SignIn';

import {ClientsStackRoutes} from './app.stack.routes';

const Routes = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user ? <ClientsStackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};

export {Routes};
