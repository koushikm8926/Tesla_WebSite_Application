import react from "react";
import {View,Text,FlatList, Dimensions, SafeAreaView} from 'react-native';
import Caritem from '../Caritem';
import styles from './styles';
import cars from "./cars";
const CarsList =(props)=>{
    return(
            <View styles={styles.container}> 
                <FlatList
                    data={cars}
                    renderItem={({item}) => <Caritem car={item}/>}
                    snapToAlignment={"start"}    
                    decelerationRate={0.6}
                    snapToInterval={ Dimensions.get('window').height}
                    showsVerticalScrollIndicator={false}
                />
            </View> 
    );
};
export default CarsList;