import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Componet/HomePage/HomePage';
import Filter from './Componet/Filter/Filter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage/> */}
      <Filter></Filter>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


