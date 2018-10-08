import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Login, Registry, Welcome, Main } from './src/components/index';
import initializeApp from './src/firebase/initfirebase';
import NavigationService from './navigationservice';

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
  Main: {
    screen: Main,
  },
},
{
  initialRouteName: 'Home',
}
);

export default class App extends Component {
  componentWillMount() {
    initializeApp();
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
