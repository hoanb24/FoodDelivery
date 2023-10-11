import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Componet/HomePage/HomePage';
import Icon from 'react-native-ico-material-design';
import Navbar from './Componet/NavBar/ViewNavBar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './Componet/NavBar/BottomTab';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage/> */}
      {/* <Navbar/> */}
      <View style={styles.NavBar}>
        <BottomTab />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Để tạo khoảng cách giữa nội dung và thanh tab bar
    
  },
  NavBar: {
    marginBottom:200,
  },
});
