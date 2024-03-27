import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../presentation/components/shared/PrimaryButton';
import { PosterCarousel } from '../presentation/components/movies/PosterCarousel';
import { HorizontalCarousel } from '../presentation/components/movies/HorizontalCarousel';
import { UseMovies } from '../presentation/hooks/UseMovies';
import { RootStackParams } from '../routes/StackNavigator';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = UseMovies();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    if (isLoading) {
        return <Text>Cargando...</Text>;
    }

    return (
        <ScrollView>
            <View>
                <PosterCarousel movies={nowPlaying} />

                {/* Populares */}
                <HorizontalCarousel 
                    movies={popular} 
                    title="Populares" 
                    loadNextPage={popularNextPage}
                />

                {/* Mejor Calificadas */}
                <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

                {/* Próximamente */}
                <HorizontalCarousel movies={upcoming} title="Próximamente" />

                <Text>Pantalla de Inicio</Text>

                <PrimaryButton
                    onPress={() => navigation.navigate('Eventos')}
                    label='Eventos'
                />
                <PrimaryButton
                    onPress={() => navigation.navigate('Libros')}
                    label='Libros'
                />
                <PrimaryButton
                    onPress={() => navigation.navigate('About' as never)}
                    label='About'
                />
            </View>
        </ScrollView>
    );
};
