import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);
  const [farmName, setFarmName] = useState('');
  const [grandmas, setGrandmas] = useState(0);
  const [grandmaCost, setGrandmaCost] = useState(10);
  const [gallos, setGallos] = useState(0);
  const [galloCost, setGalloCost] = useState(50);

  // Produção automática
  useEffect(() => {
    const interval = setInterval(() => {
      const generated = (grandmas * 1) + (gallos * 2);
      if (generated > 0) {
        setCount(prev => prev + generated);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [grandmas, gallos]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  const buyGrandma = () => {
    if (count >= grandmaCost) {
      setCount(prev => prev - grandmaCost);
      setGrandmas(prev => prev + 1);
      setGrandmaCost(prev => Math.floor(prev * 1.5));
    }
  };

  const buyGallo = () => {
    if (count >= galloCost) {
      setCount(prev => prev - galloCost);
      setGallos(prev => prev + 1);
      setGalloCost(prev => Math.floor(galloCost * 1.5));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.bk} source={require('./assets/img/cafe.jpg')} />
      <TextInput
        style={styles.input}
        placeholder="Nome da sua fazenda!"
        placeholderTextColor="#ccc"
        value={farmName}
        onChangeText={setFarmName}
      />

      <Text style={styles.counter}>
        {farmName ? `${farmName}: ` : ''}{count} café{count !== 1 ? 's' : ''}
      </Text>

      <TouchableOpacity onPress={handleClick} style={styles.cafeButton}>
        <Image
          source={require('./assets/img/cafegrao.png')}
          style={styles.cafeImage}
        />
      </TouchableOpacity>

      <View style={styles.shop}>
        <Pressable
          onPress={buyGrandma}
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed || count < grandmaCost ? 0.6 : 1 },
          ]}
          disabled={count < grandmaCost}
        >
          <Text style={styles.buttonText}>
            Comprar Vovó ☕ ({grandmas}) - {grandmaCost} cafés
          </Text>
        </Pressable>

        <Pressable
          onPress={buyGallo}
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed || count < galloCost ? 0.6 : 1 },
          ]}
          disabled={count < galloCost}
        >
          <Text style={styles.buttonText}>
            Comprar Gallo 🐓 ({gallos}) - {galloCost} cafés
          </Text>
        </Pressable>
      </View>

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
  },

  input: {
    zIndex: 2,
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '8%',
    color: 'white',
    textAlign: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  bk: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  counter: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  cafeButton: {
    zIndex: 2,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cafeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  shop: {
    marginTop: 30,
    alignItems: 'center',
    gap: 15,
  },

  button: {
    backgroundColor: '#6b3e26',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
