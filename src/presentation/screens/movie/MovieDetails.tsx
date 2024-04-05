import {Text, View} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {Cast} from '../../../core/entities/cast.entity';
import {CastActor} from '../../components/cast/CastActor';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import LeerButton from '../../components/shared/LeerButton';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  const [isSpeaking, setIsSpeaking] = useState(false); // Estado para controlar si se está reproduciendo el texto

  useEffect(() => {
    Tts.setDefaultLanguage('es-ES'); // Establece el idioma en español

    Tts.setDefaultRate(0.5);
    Tts.setDefaultPitch(1);
  }, []);

  const speakText = () => {
    if (isSpeaking) {
      Tts.stop(); // Detiene la reproducción si ya está hablando
    } else {
      Tts.speak(movie.description); // Inicia la reproducción si no está hablando
    }
    setIsSpeaking(!isSpeaking); // Cambia el estado de isSpeaking
  };

  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>

          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>

        <Text style={{fontSize: 16}}>{movie.description}</Text>
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

        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
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

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};
