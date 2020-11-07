import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-native-paper';
import Route from './src/Router';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}
