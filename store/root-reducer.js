import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import authReducer from './auth/auth.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['filter'],
};

const rootReducer = combineReducers({auth: authReducer});

export default persistReducer(persistConfig, rootReducer);
