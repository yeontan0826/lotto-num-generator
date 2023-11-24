import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { lottoNumberReducers } from '../reducers/lottoNumbers';

const rootReducer = combineReducers({
  numbers: lottoNumberReducers,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer
);
export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
