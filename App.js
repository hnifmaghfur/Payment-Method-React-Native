// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-native-paper';
import {Provider as ProviderRedux} from 'react-redux';
import Route from './src/Router';
import {store} from './src/redux/store';

export default function App() {
  return (
    <ProviderRedux store={store}>
      <Provider>
        <Route />
      </Provider>
    </ProviderRedux>
  );
}
