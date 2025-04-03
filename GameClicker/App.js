import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da sua fazenda!"
        keyboardType="default"/>
      
      <Image 
        style={styles.bk} 
        source={require('./assets/img/cafe.jpg')} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  input: {
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '20%',
    color: 'white',
    textAlign: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
