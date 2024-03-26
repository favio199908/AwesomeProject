import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { PrimaryButton } from '../components/shared/PrimaryButton';



const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Feria de Libros</Text>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>
        Bienvenido a nuestra feria de libros. Explora nuestra amplia selección de libros y eventos.
      </Text>
      <Button 
        title="Ver Lista de Libros"
        
      />
      <Button
        title="Ver Eventos"
       
      />
      <Button
        title="Ver Mapa de feria"
       
      />
      <Button
      onPress={()=>navigation.navigate('About' as never)}
        title="Ver Informacion de Aplicacion"
       
      />
      <PrimaryButton
      onPress={()=>navigation.navigate('About' as never)}
      label= 'About'
      />
      {/* Otros botones o enlaces para navegar a diferentes secciones */}
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
