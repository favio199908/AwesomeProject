import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Definición de un tipo para representar la información de un libro
interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
}

// Datos simulados de la lista de libros (puedes reemplazar esto con datos reales de tu aplicación)
const booksData: Book[] = [
  { id: '1', title: 'El nombre del viento', author: 'Patrick Rothfuss', genre: 'Fantasía' },
  { id: '2', title: 'Cien años de soledad', author: 'Gabriel García Márquez', genre: 'Realismo mágico' },
  { id: '3', title: '1984', author: 'George Orwell', genre: 'Ciencia ficción' },
  // Agrega más libros según sea necesario
];

// Componente funcional BookListScreen que muestra una lista de libros
const BookListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Función para renderizar cada elemento de la lista de libros
  const renderBookItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Text style={styles.genre}>{item.genre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={booksData}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
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
  },
  bookItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  genre: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default BookListScreen;
