import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PrimaryButton } from '../components/shared/PrimaryButton';



export const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Feria de Libros</Text>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>
        Bienvenido a nuestra feria de libros. Explora nuestra amplia selección de libros y eventos.
      </Text>
      <PrimaryButton
      onPress={()=>navigation.navigate('About' as never)}
      label= 'About'
      />
      <PrimaryButton
      onPress={()=>navigation.navigate('Event' as never)}
      label= 'Events'
      />
      {/* Otros botones o enlaces para navegar a diferentes secciones */}
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
