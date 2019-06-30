import React from 'react';
import { Text, View } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Featured from './Components/Featured';
import Movies from './Components/Movie';
import Series from './Components/Series';
import TvShows from './Components/TvShows';


const HomeScreen = createMaterialTopTabNavigator(
  {
    Featured: Featured,
    Movies: Movies,
    Series: Series,
    TvShows: TvShows,
},
{
  tabBarOptions: {
      style:{
        backgroundColor: 'black'
      }
  },
}
);

  export default HomeScreen;