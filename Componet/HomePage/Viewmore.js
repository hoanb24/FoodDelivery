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
import React, { useState } from 'react';

import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function Viewmore() {
  const [text, onChangeText] = React.useState("");
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (pageName) => {
    if (currentPage === pageName) {
      setCurrentPage('Home');
    } else {
      setCurrentPage(pageName);
    }
  };

  return (
    <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/background.png")}
          resizeMode="cover"
          style={styles.image}
        >
               <ScrollView>
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
                onPress={() => handleNavigation('Filter')}
              />
            </View>
          </View>
        
          {currentPage === 'Home' && (
          <View style={styles.middle}>
            <View style={styles.restaurant}>
              <Text style={styles.textr}>Nearest Restaurant</Text>
            </View>
       
            <View style={styles.listrts}>
              <View style={styles.pro1}>
                <Image
                  style={styles.imgpro1}
                  resizeMode="cover"
                  source={require("../../assets/img/pro1.png")}
                />
                <Text style={styles.textpro1}>Vegan Resto</Text>
                <Text style={styles.minutepro1}>12 Mins</Text>
              </View>
              <View style={styles.pro2}>
                <Image
                  style={styles.imgpro2}
                  resizeMode="cover"
                  source={require("../../assets/img/pro2.png")}
                />
                <Text style={styles.textpro2}>Healthy Food</Text>
                <Text style={styles.minutepro2}>8 Mins</Text>
              </View>
            </View>
            <View style={styles.listrts}>
              <View style={styles.pro3}>
                <Image
                  style={styles.imgpro3}
                  resizeMode="cover"
                  source={require("../../assets/img/pro3.png")}
                />
                {/* <Text style={styles.textpro}>Vegan Resto</Text>
                <Text style={styles.minutepro}>12 Mins</Text> */}
              </View>
              <View style={styles.pro4}>
                <Image
                  style={styles.imgpro4}
                  resizeMode="cover"
                  source={require("../../assets/img/pro4.png")}
                />
                {/* <Text style={styles.textpro}>Healthy Food</Text>
                <Text style={styles.minutepro}>8 Mins</Text> */}
              </View>
            </View>
            <View style={styles.listrts}>
              <View style={styles.pro5}>
                <Image
                  style={styles.imgpro5}
                  resizeMode="cover"
                  source={require("../../assets/img/pro5.png")}
                />
                {/* <Text style={styles.textpro}>Vegan Resto</Text>
                <Text style={styles.minutepro}>12 Mins</Text> */}
              </View>
              <View style={styles.pro6}>
                <Image
                  style={styles.imgpro6}
                  resizeMode="cover"
                  source={require("../../assets/img/pro6.png")}
                />
                {/* <Text style={styles.textpro}>Healthy Food</Text>
                <Text style={styles.minutepro}>8 Mins</Text> */}
              </View>
            </View>
         
          </View>
           )}
             {currentPage === 'Filter' && (
                <View>
                  <View style={styles.type}>
                    <Text style={styles.texttype}>Type</Text>
                  </View>
                  <View style={styles.types}>
                    <Text>Restaurant</Text>
                    <Text>Menu</Text>
                  </View>
                </View>
             )}
          </ScrollView>
        </ImageBackground>

    

    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewRef:{},
  minutepro1: {
    color: '#cfd0d1',
  },
  minutepro2: {
    color: '#cfd0d1',
  },
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
    marginRight: -40,
  },
  container: {
    flex: 1,
    padding:30,
  },
  input: {
    height: 40,
    width: 360,
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
    width: 147,
    height: 184,
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  pro2: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: -13,
    alignItems: "center",
    justifyContent: "center",

  },
  pro3: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  pro4: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  pro5: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: -55,
    alignItems: "center",
    justifyContent: "center",
  },
  pro6: {
    backgroundColor: "#fbfcfa",
    width: 147,
    height: 184,
    borderRadius: 10,
    borderColor: "#fbfcfa",
    marginTop: -55,
    alignItems: "center",
    justifyContent: "center",
  },
  textpro1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textpro2: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25
  },
  imgpro1: {
    width: 110,
    height: 98,

  },
  imgpro2: {
    width: 100,
    height: 98,

  },
  imgpro3: {
    marginLeft: 20,
    fontSize: 20,
  },

  minutepro: {
    color: "#a2a3a8",
    fontWeight: "light",
    fontSize: 13,
  },
  textr: {
    fontWeight: "bold",
    fontSize: 15,
  },
  service: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    paddingLeft: 97,
    color: "#9481F9",
  },
  searchiconme: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 6,
    paddingLeft: 100,
  },
  homemenu: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 8,
    paddingLeft: 40,
    color: "#6B50F6"

  },
  searchIconhome: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 5,
    paddingLeft: 10,
  },
  searchIconcar: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 6,
    paddingLeft: 170,
  },
  searchIconchat: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 5,
    paddingLeft: 253,
  },
  menubar: {
    top: 30
  },
  texttype :{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10,
    marginBottom:20,
  },
  types:{
    flexDirection:"row",
    
  },
});
