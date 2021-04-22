import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authenticated from './Authenticated';
import NotAutenticated from './NotAutenticated';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <Authenticated /> : <NotAutenticated />}
    </NavigationContainer>
  );
}
