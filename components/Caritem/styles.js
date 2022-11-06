import {StyleSheet,Dimensions} from "react-native";

const style= StyleSheet.create({
    image:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        position:"absolute",
         },
         carContainer:{
          width:Dimensions.get('window').width,
          height:Dimensions.get('window').height,
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
           color:"black"
         },
        buttoncontainer:{
          position:"absolute",
          bottom:50,
          width:"100%",
        },
        taglinectc:{
          textDecorationLine:"underline",
        }
});

export default style;