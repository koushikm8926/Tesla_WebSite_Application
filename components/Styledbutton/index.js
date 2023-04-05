import react from "react";
import {Text,View,Pressable} from "react-native";
import styles from "./styles";

const Styledbutton = (props)=>{

     const type = props.type;
   
     const backgroundcolor = type ==='primary'? 'black' : 'white';
     const textColor = type ==='primary'? 'white' : 'black';

     return(
        <View style={styles.container} >
            <Pressable style={[styles.button,{backgroundColor:backgroundcolor}]} 
            onPress={()=>{console.warn("Button Pressed")}}>
            
                 <Text style={[ {color:textColor}]}>BUY NOW</Text>
             </Pressable>

            
            
        </View> 
     );
};

export default Styledbutton ;