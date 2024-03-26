import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente AboutScreen que muestra información sobre la aplicación
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la Aplicación</Text>
      <Text style={styles.description}>
        La aplicación MyBookFairApp es una herramienta diseñada para ayudarte a disfrutar al máximo de tu experiencia en la feria del libro. 
        Con ella, podrás explorar una amplia selección de libros, conocer detalles sobre eventos interesantes, navegar por el mapa de la feria y 
        personalizar tu experiencia según tus preferencias. ¡Esperamos que disfrutes de la feria del libro con nuestra aplicación!
      </Text>
      <Text style={styles.version}>Versión 1.0.0</Text>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  version: {
    fontSize: 14,
    color: '#666666',
  },
});

export default AboutScreen;
