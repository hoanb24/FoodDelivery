import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../HomePage/HomePage";
import ProfileScreen from "../Profile/profileScreen";
import ShoppingCartScreen from "../ShoppingCart/shoppingcartScreen";
import ChatScreen from "../Chat/ChatScreen";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo for icons
import { StyleSheet, View } from "react-native";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Setting") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              } else if (route.name === "Shopping Cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "Chat") {
                iconName = focused ? "chatbox" : "chatbox-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF6969",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Setting" component={ProfileScreen} />
          <Tab.Screen name="Shopping Cart" component={ShoppingCartScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
        </Tab.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
