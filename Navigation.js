import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";

import Annonces from "./screens/Annonces";
import Songi from "./screens/Songi";
import Notif from "./screens/Notif";


const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <>
      <NavigationContainer>
        <BaseNavigation />
      </NavigationContainer>
    </>
  );
}

function BaseNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3D7DFF"
      inactiveColor="#ccc"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Annonces"
        component={Annonces}
        options={{
          tabBarLabel: "Annonces",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="swap-vertical-circle"
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Songi-Songi"
        component={Songi}
        options={{
          tabBarLabel: "Songi-Songi",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-voice"
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notif}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
