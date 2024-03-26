import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definición de un tipo para representar la información de un evento
interface Event {
  id: string;
  title: string;
  location: string;
  time: string;
  description: string;
}

// Componente EventDetailScreen que muestra los detalles de un evento específico
const EventDetailScreen: React.FC<{ route: { params: { event: Event } } }> = ({ route }) => {
  // Obtener el evento pasado como parámetro de la ruta de navegación
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.detail}>Ubicación: {event.location}</Text>
      <Text style={styles.detail}>Hora: {event.time}</Text>
      <Text style={styles.description}>{event.description}</Text>
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
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default EventDetailScreen;
