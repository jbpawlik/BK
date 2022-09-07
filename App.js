import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar
        hidden={true}
      />
      <HomeScreen/>
    </SafeAreaProvider>
  );
}