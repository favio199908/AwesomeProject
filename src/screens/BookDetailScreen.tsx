import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definición de un tipo para representar la información de un libro
interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
}

// Componente BookDetailScreen que muestra los detalles de un libro específico
const BookDetailScreen: React.FC<{ route: { params: { book: Book } } }> = ({ route }) => {
  // Obtener el libro pasado como parámetro de la ruta de navegación
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <Text style={styles.genre}>{book.genre}</Text>
      <Text style={styles.description}>{book.description}</Text>
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
  author: {
    fontSize: 18,
    marginBottom: 8,
  },
  genre: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default BookDetailScreen;
