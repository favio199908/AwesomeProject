import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Definición de la interfaz para representar la información de un libro
interface Book {
  id: string;
  title: string;
  author: string;
}

// Props para el componente BookCard
interface BookCardProps {
  book: Book;
  onPress?: () => void; // Función opcional para manejar el evento onPress
}

// Componente funcional BookCard que muestra la información de un libro
const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </TouchableOpacity>
  );
};

// Estilos para el componente BookCard
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2, // Sombra en Android
    shadowColor: '#000000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default BookCard;
