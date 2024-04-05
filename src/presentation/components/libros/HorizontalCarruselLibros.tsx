import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import {useEffect, useRef} from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {Libros} from '../../../core/entities/libro.entity';
import {LibrosPoster} from './LibrosPoster';

interface Props {
  libros: Libros[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarouselLibros = ({
  libros,
  title,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [libros]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;

    // Cargar las siguientes películas
    loadNextPage && loadNextPage();
  };

  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={libros}
        renderItem={({item}) => (
          <LibrosPoster libro={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
