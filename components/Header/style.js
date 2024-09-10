import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scalling";

const style = StyleSheet.create({
   
    title1:{
        fontWeight:'600',
        fontSize: scaleFontSize(24),
        lineHeight:scaleFontSize(29)
    },
    title2:{
        fontWeight:'600',
        fontSize: scaleFontSize(10),
        lineHeight:scaleFontSize(22)
    },
    title3:{
        fontWeight:'600',
        fontSize: scaleFontSize(40),
        lineHeight:scaleFontSize(50)
    }


})

export default style