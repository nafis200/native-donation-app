
import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
    badge:{
        backgroundColor:'#145855',
        height:verticalScale(20),
        justifyContent:'center',
        borderRadius: horizontalScale(20),
    },
    title:{
      fontSize: scaleFontSize(10),
      fontWeight:'600',
      lineHeight:scaleFontSize(20),
      textAlign:'center', 
      color:'#FFFFFF'
         
    },
    disabled:{
        opacity:0.5
    },
   
})

export default style