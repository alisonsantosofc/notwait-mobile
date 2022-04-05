import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';

const Session = createNativeStackNavigator();

function SessionRoutes() {
  return (
    <Session.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#12283C' },
      }}
    >
      <Session.Screen name="Dashboard" component={Dashboard} />
    </Session.Navigator>
  );
}

export default SessionRoutes;
