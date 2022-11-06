import {StyleSheet} from 'react-native';

const style= StyleSheet.create({
container:{
   position:'absolute',
   top:50,
   zIndex:100,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:20,
},
logo:{
   height:30,
   width:100,
   resizeMode:'contain',
},
menu:{
   width:30,
   height:30,
   resizeMode:'contain',
}



});

export default style;
