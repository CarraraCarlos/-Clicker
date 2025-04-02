import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ContainerCoockie}>
      <TextInput
            style={styles.input}
            placeholder='Nome da sua confeitaria!'
            keyboardType='Text'
          ></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  input: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});


