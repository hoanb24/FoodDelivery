import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
export default function HomePage() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.top}>
          <Text style={styles.textC}>Find Your {`\n`}Favorite Food</Text>
          <Icon
            style={styles.notificationIcon}
            name="notifications-outline"
            size={30}
            color="#6B50F6"
          />
        </View>
        <View style={styles.service}>
          <SafeAreaView>
            <Icon
              style={styles.searchIcon}
              name="ios-search"
              size={30}
              color="#6B50F6"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <Text style={styles.textsearch}>What do you want to order?</Text>
          </SafeAreaView>
          <View>
            <Icon
              style={styles.filterIcon}
              name="filter-outline"
              size={30}
              color="#6B50F6"
            />
          </View>
        </View>
        <View style={styles.ads}>
          <Text style={styles.textads}>Speacial Deal For {`\n`} October</Text>
          <Image
            style={styles.imageads}
            source={require("../../assets/img/adv.png")}
          />
          <Pressable style={styles.button}>
            <Text style={styles.textbutton}>Buy Now</Text>
          </Pressable>
        </View>
        <View style={styles.middle}>
          <View style={styles.restaurant}>
            <Text style={styles.textr}>Nearest Restaurant</Text>
            <Text style={styles.textview}>View More</Text>
          </View>
          <View style={styles.listrts}>
            <View style={styles.pro1}>
              <Image
                style={styles.imgpro}
                resizeMode="cover"
                source={require("../../assets/img/pro1.png")}
              />
              <Text style={styles.textpro}>Vegan Resto</Text>
              <Text style={styles.minutepro}>12 Mins</Text>
            </View>
            <View style={styles.pro2}>
              <Image
                style={styles.imgpro}
                resizeMode="cover"
                source={require("../../assets/img/pro2.png")}
              />
              <Text style={styles.textpro}>Healthy Food</Text>
              <Text style={styles.minutepro}>8 Mins</Text>
            </View>
          </View>

          <View style={styles.menu}>
            <Text style={styles.textr}>Popular Menu</Text>
            <Text style={styles.textview}>View More</Text>
          </View>

          <View style={styles.menupro}>
            <Image
              style={styles.imageads}
              source={require("../../assets/img/menu1.png")}
            />
            <View>
              <Text style={styles.textpro}>Green Noddle</Text>
              <Text style={styles.minutepro}>Noodlle Home</Text>
            </View>
            <View>
              <Text style={styles.money}>$15</Text>
            </View>
          </View>
        </View>
        <View style={styles.menubar}>
          <View>
            <Icon
              style={styles.searchIcon}
              name="home-outline"
              size={20}
              color="#6B50F6"
            />
          </View>
          <View>
            <Icon
              style={styles.searchIcon}
              name="person-outline"
              size={20}
              color="#6B50F6"
            />
          </View>
          <View>
            <Icon
              style={styles.searchIcon}
              name="bag-outline"
              size={20}
              color="#6B50F6"
            />
          </View>
          <View>
            <Icon
              style={styles.searchIcon}
              name="chatbubbles-outline"
              size={20}
              color="#6B50F6"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  notificationIcon: {},
  textC: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    marginRight:-40,
  },
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: 250,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#E6E1FF",
  },
  image: {
    flex: 1,
  },
  imageads: {
    backgroundColor: "#6B50F6",
    borderRadius: 20,
  },
  ads: {
    position: "relative",
    marginTop: 20,
  },
  textads: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 170,
    position: "absolute",
    zIndex: 1,
    marginTop: 30,
  },
  button: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 170,
    height: 30,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 90,
  },
  textbutton: {
    color: "#6B50F6",
    fontWeight: "bold",
  },
  restaurant: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textview: {
    color: "#6B50F6",
  },
  listrts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pro1: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pro2: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textpro: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imgpro: {
    width: 110,
    height: 98,
  },
  minutepro: {
    color: "#a2a3a8",
    fontWeight: "light",
    fontSize: 13,
  },
  menupro: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fbfcfa",
    borderRadius: 10,
    height: 100,
    alignItems: "center",
  },
  money: {
    color: "#6B50F6",
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textr: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textview: {
    marginRight:10,
    color: "#6B50F6",
    fontSize: 13,
    fontWeight: "300",
  },
  menubar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#B1A9D6",
  },
  service: {
    position: "relative",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 5,
    paddingLeft: 10,
  },
  textsearch: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 10,
    paddingLeft: 50,
    color: "#9481F9",
  },
});
