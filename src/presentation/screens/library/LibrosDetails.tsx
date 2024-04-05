import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import LeerButton from '../../components/shared/LeerButton';
import {Libros} from '../../../core/entities/libro.entity';

interface Props {
  libros: Libros;
}

export const librosDetails = ({libros}: Props) => {
  const [isSpeaking, setIsSpeaking] = useState(false); // Estado para controlar si se está reproduciendo el texto

  useEffect(() => {
    Tts.setDefaultLanguage('es-ES'); // Establece el idioma en español

    Tts.setDefaultRate(0.5);
    Tts.setDefaultPitch(1);
  }, []);

  const speakText = () => {
    if (isSpeaking) {
      Tts.stop(); // Detiene la reproducción si ya está hablando
    }
    setIsSpeaking(!isSpeaking); // Cambia el estado de isSpeaking
  };

  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{libros.id}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}></Text>

        <View>
          <LeerButton
            title={isSpeaking ? 'Detener lectura' : 'Comenzar lectura'}
            onPress={speakText}
          />
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
      </View>
    </>
  );
};
