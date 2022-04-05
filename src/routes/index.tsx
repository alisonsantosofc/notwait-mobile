import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import SessionRoutes from './session.routes';

import { useAuth } from '../hooks/auth';

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff5733" />
      </View>
    );
  }

  return user ? <SessionRoutes /> : <AuthRoutes />;
}

export default AppRoutes;
