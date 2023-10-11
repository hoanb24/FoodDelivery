import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,

} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import React from 'react';

export default function Filter() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.top}>
          <Text style={styles.textC}>Find Your {`\n`} Favorite Food</Text>
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
        </View>

        <View>
          <Text style={styles.Name_Categorys}>Type</Text>
          <View style={styles.Categorys}>
            <Pressable style={styles.Categorys_btn}>
              <Text style={styles.Categorys_btnText}>Restaurant</Text>
            </Pressable>

            <Pressable style={styles.Categorys_btn}>
              <Text style={styles.Categorys_btnText}>Menu</Text>
            </Pressable>
          </View>
        </View>

        <View>
            <Text style={styles.Name_Categorys}>Location</Text>
            <View style={styles.Categorys}>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>1 KM</Text>
              </Pressable>
              
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>{'>10 Km'}</Text>
              </Pressable>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>{'<10 Km'}</Text>
              </Pressable>
            </View>
        </View>

        <View>
          <Text style={styles.Name_Categorys}>Food</Text>
          <View style={styles.Categorys}>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>Cake</Text>
              </Pressable>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>Soup</Text>
              </Pressable>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>Main Course</Text>
              </Pressable>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>Appetizer</Text>
              </Pressable>
              <Pressable style={styles.Categorys_btn}>
                <Text style={styles.Categorys_btnText}>Desert</Text>
              </Pressable>
          </View>
        </View>
        <View style={styles.Bottom_btn}>
          <Pressable style={styles.searchButton}>
            <Text style={styles.searchText}>Search</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textC: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#E6E1FF",
  },
  image: {
    flex: 1,
  },
  service: {
    position: "relative",
    flexDirection:"row",
    alignSelf:"center"
  },
  searchIcon: {
    position: "absolute",
    zIndex: 2,
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
  Categorys: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },
  Categorys_btn: {
    margin: 5,
    backgroundColor: 'rgba(0, 255, 102, 0.3)',
    borderRadius: 20,
    padding:20
  },
  Categorys_btnText: {
    fontSize: 14, 
    color:"#6B50F6"
  },
  Bottom_btn: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#6B50F6',
    width: '80%',
    alignItems: 'center',
    borderRadius:20
  },
  searchButton:{
    paddingVertical:20,
    
  },
  searchText:{
    color:"#FFFFFF",
    textAlign:"center"
  }
});
