import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

// import HomeIconWithBadge from './Icons/HomeIcomWithBage';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingSreen';


// const ExploreStack = createStackNavigator({
//   ExploreScreen: ExploreScreen,
// }
// ,{
//   navigationOptions: ({navigation}) => ({
//     header:'Ignore Offer',
//     // headerTitle: 'Ignore Offer',
//     // headerLeft: 'Ignore Offer',
//     headerBackTitle
//   })
// })

const TabNavigator = createBottomTabNavigator(
    {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;          
        }
        else if (routeName === 'Explore') {
            iconName = `md-search`;
        }
        else if (routeName === 'Profile') {
        iconName = `md-person`;
        }
        else if (routeName === 'Settings') {
        iconName = `md-settings`;
        }
        // You can return any component that you like here!
        return <Icons style={{padding:20}} name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
        showIcon:true,
        activeTintColor: 'tomato',
        inactiveTintColor: 'white',
        style:{
          backgroundColor:'black'
        }
    },
  }
  );
  
export default createAppContainer(TabNavigator);