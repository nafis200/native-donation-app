import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../assets/styles/scalling";

const style = StyleSheet.create({
    button:{
        backgroundColor:'#2979F2',
        height:verticalScale(55),
        justifyContent:'center',
        borderRadius: horizontalScale(50),
    },
    title:{
      fontSize: scaleFontSize(16),
      fontWeight:'500',
      lineHeight:scaleFontSize(19),
      textAlign:'center', 
      color:'#FFFFFF'
         
    },
    disabled:{
        opacity:0.5
    }
})

export default style