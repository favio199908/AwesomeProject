import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../presentation/components/shared/PrimaryButton';


// Lista de libros
const libros = [
    { id: 1, titulo: 'Libro 1', autor: 'Autor 1' },
    { id: 2, titulo: 'Libro 2', autor: 'Autor 2' },
    { id: 3, titulo: 'Libro 3', autor: 'Autor 3' },
    { id: 4, titulo: 'Libro 4', autor: 'Autor 4' },
    { id: 5, titulo: 'Libro 5', autor: 'Autor 5' },
    { id: 6, titulo: 'Libro 6', autor: 'Autor 6' },
    { id: 7, titulo: 'Libro 7', autor: 'Autor 7' },
];

// Componente funcional para la pantalla de lista de libros
export const PantallaListaDeLibros = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text>Libros</Text>
            <FlatList
                data={libros}
                renderItem={({ item }) => (<PrimaryButton
                            onPress={() => navigation.navigate('DetalleDeLibro', { id: item.id, titulo: item.titulo })}
                            label={item.titulo}
                        />
                    
                )}
                
            />
            
        </View>
    );
};
