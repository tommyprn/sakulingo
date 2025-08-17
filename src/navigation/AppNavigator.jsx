import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/HomeScreen";
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
        name="dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        name="language"
        component={LanguageScreen}
      />

      <Tab.Screen
        name="login"
        component={LoginScreen}
      />
    </Tab.Navigator>
  );
}
