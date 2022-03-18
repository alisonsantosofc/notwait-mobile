import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StatusBar, LogBox } from 'react-native';

import Routes from './routes';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#12283C" />
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#12283C' }}>
        <Routes />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
