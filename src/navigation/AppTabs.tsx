import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import useTheme from 'src/hooks/useTheme';
import HomeScreen from '@screens/HomeScreen';
import MyToolsScreen from '@screens/MyToolsScreen';
import AccountScreen from '@screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.background},
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Tools" component={MyToolsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
