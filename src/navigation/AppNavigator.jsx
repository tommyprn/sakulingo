import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RewardScreen from "../screens/RewardScreen";
import LessonScreen from "../screens/LessonScreen";
import MissionScreen from "../screens/MissionScreen";
import LanguageScreen from "../screens/LanguageScreen";
import FlashcardScreen from "../screens/FlashcardScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "flashcard") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "mission") {
            iconName = focused ? "flag" : "flag-outline";
          } else if (route.name === "reward") {
            iconName = focused ? "gift" : "gift-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#85C88A",
        tabBarInactiveTintColor: "#6A9C89",
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Dashboard" }}
      />
      <Tab.Screen
        name="flashcard"
        component={FlashcardScreen}
        options={{ title: "Flashcard" }}
      />
      <Tab.Screen
        name="mission"
        component={MissionScreen}
        options={{ title: "Mission" }}
      />
      <Tab.Screen
        name="reward"
        component={RewardScreen}
        options={{ title: "Reward" }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      {/* Screen tanpa tab */}
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="language"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />

      {/* Lesson ada di Stack, bukan Tab */}
      <Stack.Screen
        name="lesson"
        component={LessonScreen}
        options={{ headerShown: false }}
      />

      {/* Screen dengan tab */}
      <Stack.Screen
        name="main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
