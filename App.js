import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsOverViewScreen from "./src/screens/MealsOverViewScreen";
import MealDetailsScreen from "./src/screens/MealDetails";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerActiveTintColor: "#3f2f25",
        drawerInactiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        component={FavoriteScreen}
        name="FavoriteScreen"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              cardStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Drawer"
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
