import React from 'react';
import {Text, Image, View} from 'react-native';
class Movie extends React.Component {
  render(): React$Node {
    return (
      <Text>
        {movie.title} {'\n'}
        {movie.year}
        {'\n'}
      </Text>
    );
  }
}
const MovieList = () => {
  return MOVIES_DATA.map((movieInfo) => (
    <Text>
      {movieInfo.title} {'\n'} {movieInfo.year} {'\n'}
      <View>
        <Image source={movieInfo.poster} />
      </View>
      {'\n'}
    </Text>
  ));
};
const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
export {MovieList};
