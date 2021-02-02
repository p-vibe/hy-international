import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {BottomTabParamList, TabOneParamList} from '../../types';
import TabOneScreen from '../screens/TapOneScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        // options={{
        //   tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        // }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerTitle: 'Tab One Title'}}
      />
    </TabOneStack.Navigator>
  );
}
