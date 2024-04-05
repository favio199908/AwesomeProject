import {StackScreenProps} from '@react-navigation/stack';

import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../../routes/StackNavigator';
import {UseMovie} from '../../hooks/UseMovie';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';
import {MovieHeader} from './MovieHeader';
import {MovieDetails} from './MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetalleMovie'> {}

export const PantallaDetalleMovie = ({route}: Props) => {
  const {movieid} = route.params;
  // const { movieId } = useRoute().params;
  const {isLoading, movie, cast = []} = UseMovie(movieid);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
