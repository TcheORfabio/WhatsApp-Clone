import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Login from './src/login/login';
import Registry from './src/registry/registry';

const RootStack = createStackNavigator({
  Home: {
    screen: Login,
  },
  Register: {
    screen: Registry,
  },
},
{
  initialRouteName: 'Home',
}
);

const App = (props) => ( // eslint-disable-line no-unused-vars
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
