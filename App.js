import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import HomePage from './Componet/HomePage/HomePage';
import Viewmore from './Componet/HomePage/Viewmore';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage/> */}
      <Viewmore/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
