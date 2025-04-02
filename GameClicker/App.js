import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "@expo/vector-icons/Ionicons";''

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='Nome da sua confeitaria!'
            keyboardType='Text'></TextInput>
        <Image source={require('img/cookie.jpeg')}></Image>
        <View style={styles.ContainerCookie}>
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
    fontWeight: 'bold',
  },
});


