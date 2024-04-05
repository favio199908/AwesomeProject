import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

// Definir tipo de interfaz para representar la estructura de un evento
interface Event {
  id: string;
  title: string;
  location: string;
  time: string;
  description: string;
}

const EventListScreen = () => {
  // Simulación de datos de eventos
  const eventsData: Event[] = [
    {
      id: '1',
      title: 'Charla sobre literatura contemporánea',
      location: 'Sala de conferencias A',
      time: '10:00 AM - 11:30 AM',
      description: 'Un panel de autores discutirá las tendencias actuales en la literatura contemporánea.',
    },
    {
      id: '2',
      title: 'Presentación del libro "El camino del escritor"',
      location: 'Stand 25',
      time: '12:00 PM - 1:00 PM',
      description: 'El autor estará firmando copias de su último libro y conversando con los lectores.',
    },
    {
      id: '3',
      title: 'Taller de escritura creativa para niños',
      location: 'Sala infantil',
      time: '2:00 PM - 3:30 PM',
      description: 'Un taller interactivo donde los niños aprenderán técnicas básicas de escritura creativa.',
    },
    // Agrega más eventos según sea necesario
  ];

  // Función para renderizar cada elemento de la lista de eventos
  const renderEventItem = ({ item }: { item: Event }) => (
    
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{item.location}</Text>
      <Text>{item.time}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
      <FlatList
        data={eventsData}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  eventItem: {
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventDescription: {
    fontStyle: 'italic',
  },
});

export default EventListScreen;
