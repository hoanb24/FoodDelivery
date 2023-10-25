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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
export default function HomePage() {
    const Tab = createBottomTabNavigator();
    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.container}>
            <GestureHandlerRootView>
                <ScrollView>
                    <ImageBackground
                        source={require("../../assets/img/background.png")}
                        resizeMode="cover"
                        style={styles.image}
                    >
                        <View style={styles.user}>
                            <Image style={styles.avtar}
                                source={require("../../assets/img/At.png")} />
                        </View>
                        <Text style={styles.name}>Richard Lewis</Text>
                        <Text style={styles.des}>Ringing . . .</Text>

                        <View style={styles.buttonspeaker}>
                            <Image style={styles.iconspreaker}
                            source={require("../../assets/img/Sp.png")}
                            />
                        </View>
                        <View style={styles.buttondelete}>
                            <Image style={styles.icondelete}
                            source={require("../../assets/img/Dt.png")}
                            />
                        </View>




                    </ImageBackground>

                </ScrollView>
            </GestureHandlerRootView>

        </View>
    );
}
const styles = StyleSheet.create({
    user: {
        marginTop: 184,
        alignItems: "center",
    },
    name: {
        color: "#22242E",
        fontSize: 25,
        fontWeight: "400",
        marginTop: 59,
        flexDirection: "row",
        textAlign: "center",
    },
    des: {
        color: "#22242E",
        fontSize: 19,
        fontWeight: "400",
        marginTop: 6,
        flexDirection: "row",
        textAlign: "center",
        opacity: 0.3,
    },
    buttonspeaker: {
       
        justifyContent: "center",
      
        marginTop: 170,
        marginLeft:140,
      },
      buttondelete:{
        justifyContent: "center",
        marginTop:-75,
        marginLeft:260,
      }
});
