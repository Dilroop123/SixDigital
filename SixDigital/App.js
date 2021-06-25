import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MianStack from './navigation/navigation';
import {StatusBar} from 'react-native';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import userReducer from './store/reducers/UserReducer';
import homeReducer from './store/reducers/HomeReducer';
import fileReducer from './store/reducers/FileReducer';
import cardReducer from './store/reducers/CreditReducer';

const rootReducer = combineReducers({
  user: userReducer,
  home: homeReducer,
  file: fileReducer,
  card: cardReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <MianStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
