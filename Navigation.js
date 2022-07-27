import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import MenuItems from "./Resto/MenuItems";
import Zoom from "./Resto/Zoom";
import OrderPlaced from "./Resto/OrderPlaced";

import Annonces from "./screens/Annonces";
import Songi from "./screens/Songi";
import Notif from "./screens/Notif";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import useAuth, { AuthProvider } from "./redux/useAuth";
import Login from "./screens/Login";

const store = configureStore();

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function RootNavigation() {
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <ReduxProvider store={store}>
          <BaseNavigation />
        </ReduxProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

function BaseNavigation() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#3D7DFF"
          inactiveColor="#ccc"
          barStyle={{ backgroundColor: "white" }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
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
      ) : (
        <LoginPage />
      )}
    </>
  );
}
const screenOptions = {
  headerShown: false
};
function HomePage() {
  return (
    <Stack.Navigator initialRouteName="SubHome" screenOptions={screenOptions}>
      <Stack.Screen name="SubHome" component={Home} />
      <Stack.Screen name="Menu" component={MenuItems} />
      <Stack.Screen name="Zoom" component={Zoom} />
      <Stack.Screen name="orderPlaced" component={OrderPlaced} />
    </Stack.Navigator>
  );
}

function LoginPage() {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={screenOptions}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
