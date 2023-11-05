import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, ScrollView, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// Импортируем компоненты экранаМаршрутизация  259
import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './myNotes';
import NoteScreen from './cardThree';
import noun from './noun';
import CardTwo from './Card2';
import CardThree from './cardThree';
// Стек навигации
const FeedStack = createStackNavigator({
  Головна: Feed,
  Іменник: noun,
  Емоція: CardThree,
  Прикметник: CardTwo,
  
});
const MyStack = createStackNavigator({
  MyNotes: MyNotes,
  Note: NoteScreen,
});
const FavStack = createStackNavigator({
  Правила: Favorites,
  Note: NoteScreen,
});
const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Головна',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="home" size={24} color={tintColor} />
        )
    },
    tabBarIcon: ({ tintColor }) => (
<MaterialCommunityIcons name="home" size={24} color={tintColor} />
)
  },
 /*  MyNoteScreen: {
    screen: MyStack,
    navigationOptions: {
      tabBarLabel: 'My Notes',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
        )
    },
  }, */
  FavoriteScreen: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: 'Правила',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="star" size={24} color={tintColor} />
        )
    },
  },
});
export default createAppContainer(TabNavigator);
