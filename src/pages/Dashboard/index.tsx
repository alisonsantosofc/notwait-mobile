import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

function Dashboard() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={signOut}>Sair</Button>
    </View>
  );
}

export default Dashboard;
