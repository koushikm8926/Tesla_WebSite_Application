import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import react from 'react';
//import Caritem from './components/Caritem';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
      <View style={styles.container}>
      <Header/>
      <CarsList/>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
