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
import HomePage from './Componet/HomePage/HomePage';
import Viewmore from './Componet/HomePage/Viewmore';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: 'white' }}
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
        {/* <Tab.Screen
          name="PopularRestaurant"
          component={Viewmore}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color="#6B50F6" size={26} />
            ),
            headerShown: false,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
