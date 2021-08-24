import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../../../screens/welcomeFlow';

const AuthStack = createStackNavigator();

function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Welcome">
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;
