// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-native-paper';
import {Provider as ProviderRedux} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/Router';
import {store, persistor} from './src/redux/store';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider>
          <Route />
        </Provider>
      </PersistGate>
    </ProviderRedux>
  );
}
