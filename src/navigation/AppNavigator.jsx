import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import LanguageScreen from "../screens/LanguageScreen";
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

      <Tab.Screen
        name="language"
        component={LanguageScreen}
      />
    </Tab.Navigator>
  );
}
