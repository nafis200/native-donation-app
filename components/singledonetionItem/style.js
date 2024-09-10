
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scalling";
import { version } from "react";

const style = StyleSheet.create({
   image: {
     width: horizontalScale(155),
     height: verticalScale(170)
   },
   badge:{
      position:'absolute',
      zIndex:1,
      top: verticalScale(5),
      left: horizontalScale(10),

   }
})

export default style