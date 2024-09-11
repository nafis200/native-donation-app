
import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
   
    header: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24)
    },
    headerIntroText: {
       fontSize: scaleFontSize(16), 
       lineHeight: scaleFontSize(19),
       fontWeight: '400',
       color: '#636776'
    },

})

export default style