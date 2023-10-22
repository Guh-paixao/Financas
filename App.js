import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F4FF' }}>
          <Routes />
          <StatusBar style='auto' />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}


