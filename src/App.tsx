import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#12283C" />
      <View style={{ flex: 1, backgroundColor: '#12283C' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

export default App;
