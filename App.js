import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Login, Registry, Welcome } from './src/components/index';
import initFirebase from './src/firebase/initfirebase';

const RootStack = createStackNavigator({
  Home: {
    screen: Login,
  },
  Register: {
    screen: Registry,
  },
  Welcome: {
    screen: Welcome,
  },
},
{
  initialRouteName: 'Welcome',
}
);

export default class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
