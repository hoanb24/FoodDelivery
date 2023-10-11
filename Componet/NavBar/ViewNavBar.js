import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-ico-material-design";

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{ borderRadius: true, radius: 50 }}
          >
            <Icon
              name="home-button"
              style={styles.icon}
              color={"#6B50F6"}
            />

          </Pressable>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{ borderRadius: true, radius: 50 }}
          >
            <Icon
              name="user-shape"
              style={styles.icon}
              color={"#6B50F6"}
            />

          </Pressable>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{ borderRadius: true, radius: 50 }}
          >
            <Icon
              name="shopping-cart"
              style={styles.icon}
              color={"#6B50F6"}
            />

          </Pressable>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{ borderRadius: true, radius: 50 }}
          >
            <Icon
              name="black-bubble-speech"
              style={styles.icon}
              color={"#6B50F6"}
            />

          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  IconBehave: {
    padding: 14,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  icon: {
    height: 14,

    width: 20,
  },
});
