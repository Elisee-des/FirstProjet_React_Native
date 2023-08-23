import React from "react";
import { Text, View } from "react-native";
import {Home, Profile, Search} from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../constants/index";
import {Ionicons} from "@expo/vector-icons"

const Tap = createBottomTabNavigator();

const screenOptions = { 
  tabBarShowLabel: false,
  tabBarHideOnKeyBoard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
  },
};

const BottonTabNavigation = () => {
  return (
    <Tap.Navigator screenOptions={screenOptions}>
      <Tap.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS?.primary : COLORS?.gray2}
              />
            );
          },
        }}
      />
      <Tap.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={24}
                color={focused ? COLORS?.primary : COLORS?.gray2}
              />
            );
          },
        }}
      />
      <Tap.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS?.primary : COLORS?.gray2}
              />
            );
          },
        }}
      />
    </Tap.Navigator>
  );
};

export default BottonTabNavigation;
