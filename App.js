import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MovieList} from './Movies';
import {Boats} from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>Lesson 05 Exercises</Text>
        <Text>
          <MovieList />
          <Text>GetABoat - For Sale</Text>
          <Boats />
        </Text>
      </View>
    </ScrollView>
  );
};
export default App;
