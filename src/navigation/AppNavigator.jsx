import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
// import LessonScreen from "../screens/LessonScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="login"
        component={LoginScreen}
      />
    </Tab.Navigator>
  );
}
