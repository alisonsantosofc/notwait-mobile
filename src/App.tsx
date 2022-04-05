import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, LogBox } from 'react-native';

import AppProvider from './hooks';
import AppRoutes from './routes';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#12283C" />

      <AppProvider>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#12283C' }}>
          <AppRoutes />
        </GestureHandlerRootView>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;
