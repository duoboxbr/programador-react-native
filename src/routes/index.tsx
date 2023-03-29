import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks/Auth';

import {SignIn} from '../screens/SignIn';

import {Clients} from '../screens/Clients';

const Routes = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>{user ? <Clients /> : <SignIn />}</NavigationContainer>
  );
};

export {Routes};
