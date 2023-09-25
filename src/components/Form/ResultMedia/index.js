import React, {useState} from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Resultmedia(props){
    // const [styleInfo, setStyleInfo]= useState(null);

    // if(props.dataMedia <= 5){
    //     setStyleInfo(styles.inforep)
    // }
    // else if(props.dataMedia < 7 && props.dataMedia > 5){
    //     setStyleInfo(styles.inforec)
    // }
    // else if(props.dataMedia >= 7){
    //     setStyleInfo(styles.infoapr)
    // }
    // else{
    //     setStyleInfo(styles.inforep)
    // }
    return(

        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.resultMedia}</Text>
            <Text style={styles.information}>{props.dataMedia}</Text>
        </View>
    );
}