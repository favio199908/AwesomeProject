import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Componente MapScreen que muestra el mapa de la feria del libro
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de la Feria del Libro</Text>
      <Image
        source={require('../assets/r.jpg')} // Reemplaza 'mapa_feria.png' con la ruta de tu imagen del mapa
        style={styles.mapImage}
        resizeMode="contain"
      />
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mapImage: {
    width: '100%',
    height: '80%',
  },
});

export default MapScreen;
