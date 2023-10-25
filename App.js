// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from './Componet/HomePage/HomePage';
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();
// // import HomePage from './Componet/HomePage/HomePage';
// import Viewmore from './Componet/HomePage/Viewmore';
// import { NavigationContainer } from '@react-navigation/native';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//       {/* <Tab.Screen name="Home" component={HomePage} />
//       <Tab.Screen name="Settings" component={Viewmore} /> */}
//     </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Componet/HomePage/HomePage';
import Viewmore from './Componet/HomePage/Viewmore';
import Callpage from './Componet/HomePage/Callpage';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.navbar}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="#6B50F6" size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="PopularRestaurant"
          component={Viewmore}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color="#6B50F6" size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="PopularRestaurants"
          component={Callpage}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color="#6B50F6" size={26} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0, // Adjust this value to position your navbar as needed
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20, // Border radius for top-left corner
    borderTopRightRadius: 20, // Border radius for top-right corner
    borderTopWidth: 2, // Adjust this value to control the border thickness
    borderTopColor: 'white', // Border color (set it to white for no visible border)
    height: 60, // Adjust this value to control the height of the navbar
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
