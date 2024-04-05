import {Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';

import {FullLibro} from '../../../core/entities/libro.entity';

interface Props {
  libro: FullLibro;
}

export const LibrosDetails = ({libro}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{libro.title}</Text>

          <Text style={{marginLeft: 5}}>- {libro.subtitle}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{marginLeft: 5}}>- {libro.authors}</Text>

        <Text style={{fontSize: 16}}>{libro.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}></Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>

        <Text style={{fontSize: 16}}>{libro.categories}</Text>
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
