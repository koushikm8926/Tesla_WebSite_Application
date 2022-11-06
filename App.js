import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
      <View style={styles.carContainer}>
      <ImageBackground  style={ styles.image} source={require('./assets/images/ModelS.jpeg')}/>
      <View style={styles.titles}>
      <Text style={styles.title}>MODEL S</Text>
      <Text style={styles.subtitle}>price is $78,359</Text> 
      </View>
      </View>  
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:"100%",
    width:"100%",
    resizeMode:"cover",
    position:"absolute",
     },
     carContainer:{
       width:"100%",
       height:"100%",
     },
     titles:{
       marginTop:"30%",
       width:"100%",
       alignItems:"center",
   
     },
     title:{
       fontSize:40,
       fontWeight:"600",
     },
     subtitle:{
       fontSize:16,
       color:"grey"
     },
});
