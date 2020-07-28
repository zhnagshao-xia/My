import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screen/welcome'
import bottom_nav from './Screen/jump'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="jump" component={bottom_nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
