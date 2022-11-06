import react from "react";
import {Text,View,ImageBackground} from "react-native";
import styles from "./styles";
import Styledbutton from "../Styledbutton";


const Caritem = (props)=>{

     const {name,tagline,taglineCTA,image }= props.car;

     return(
    <View style={styles.carContainer}>
        <ImageBackground  style={ styles.image} source={image}/>
           
            <View style={styles.titles}>
                 <Text style={styles.title}>{name}</Text>
                 <Text style={styles.subtitle}>{tagline}
                 {" "}
                 <Text style={styles.taglinectc}>{taglineCTA}</Text>
                 </Text>
            </View> 

          <View style={styles.buttoncontainer}>
            <Styledbutton type="primary"/>
            </View>
        </View> 
     );
};

export default Caritem;