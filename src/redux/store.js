import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['Auth'] //kesimpen semua data kecuali yang ada dilists
  // whiltelist: ['Auth', 'Favorites'] //kesimpen  data hanya dilists
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk, logger));

let persistor = persistStore(store);

export {persistor, store};
