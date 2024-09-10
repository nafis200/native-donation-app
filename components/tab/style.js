import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
    tab:{
        backgroundColor:'#2979F2',
        height:verticalScale(30),
        justifyContent:'center',
        borderRadius: horizontalScale(50),
    },
    title:{
      fontSize: scaleFontSize(14),
      fontWeight:'500',
      lineHeight:scaleFontSize(17),
      textAlign:'center', 
      color:'#FFFFFF'
         
    },
    disabled:{
        opacity:0.5
    },
    inactiveTab:{
        backgroundColor:'#F3F5F9'
    },
    inactiveTitle:{
         color:'#79869F'
    }
})

export default style