import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import counter from './src/screens/counter';
import { Provider } from 'react-redux';

import configureStore from './src/redux/configure';

const Stack = createStackNavigator();
const store = configureStore()

export default function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='counter'>
          <Stack.Screen>
            name='counter'
            component={counter}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  
  </Provider>  

  );
};


