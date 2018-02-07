//import libraries for component
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

//create component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCJST8WuOnS1fJXJ_nX51kFuL0oB78RgPo',
      authDomain: 'manager-57d49.firebaseapp.com',
      databaseURL: 'https://manager-57d49.firebaseio.com',
      projectId: 'manager-57d49',
      storageBucket: 'manager-57d49.appspot.com',
      messagingSenderId: '105421079776'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

//make it available to the app
export default App;
