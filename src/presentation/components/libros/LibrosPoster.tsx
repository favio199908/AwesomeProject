import {View, Image, StyleSheet, Pressable} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../routes/StackNavigator';
import {Libros} from '../../../core/entities/libro.entity';

interface Props {
  libro: Libros;
  height?: number;
  width?: number;
}

export const LibrosPoster = ({libro, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('DetalleDeLibro', {librosid: libro.id})
      }
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={{uri: libro.volumeInfo.imageLinks.smallThumbnail}}></Image>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imagecontainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
