import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './src/srceens/Explore'
import Saved from './src/srceens/Saved'
import Trips from './src/srceens/Trips'
import Inbox from './src/srceens/Inbox'
import Profile from './src/srceens/Profile'

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-search-outline' color={tintColor} size={24} />
      )
    },
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-heart-outline' color={tintColor} size={24} />
      )
    },
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/assets/airbnb.png')}
          style={{ height: 24, width: 24, tintColor }}
        />
      )
    },
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-chatboxes-outline' color={tintColor} size={24} />
      )
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-person-outline' color={tintColor} size={24} />
      )
    },
  },
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {
        width: 5,
        height: 3,
      },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
    }
  }
})
