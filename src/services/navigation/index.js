import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authNavigation';

const MainStack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        <MainStack.Screen name="Auth" component={AuthNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
