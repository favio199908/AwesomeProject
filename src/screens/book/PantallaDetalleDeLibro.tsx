import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';


export const PantallaDetalleDeLibro = () => {
    // Obtener los parámetros de la ruta usando useRoute
    const params = useRoute<RouteProp<RootStackParams, 'Libros'>>().params;
    // Obtener el objeto de navegación
    const navigation = useNavigation();

    // Actualizar el título de la pantalla con el título del libro
    useEffect(() => {
        navigation.setOptions({
            title: params.titulo // Establecer el título de la pantalla con el título del libro
        });
    }, []); // Este efecto se ejecutará solo una vez después de que el componente se monte

    return (
        <View style={globalStyles.container}>
            <Text>Detalles Del Libro</Text>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20,
            }}>{params.titulo}</Text>
            <Text style={{
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
            }}>Autor: {params.autor}</Text>
            <Text style={{
                fontSize: 14,
                textAlign: 'center',
                marginTop: 10,
            }}>ID: {params.id}</Text>
        </View>
    );
};
