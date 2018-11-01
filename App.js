import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Login, Registry, Welcome, Main, AddContact } from './src/components/index';
import initializeApp from './src/firebase/initfirebase';
import NavigationService from './navigationservice';

// Disabling yellow warnings
console.disableYellowBox = true; // eslint-disable-line

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
  AddContact: {
    screen: AddContact,
  },
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#115E54',
      elevation: 0,
    },
    headerTintColor: '#fff',
    labelStyle: {
      fontSize: 10,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
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
