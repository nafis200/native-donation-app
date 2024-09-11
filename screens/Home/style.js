
import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
   
    header: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerIntroText: {
       fontSize: scaleFontSize(16), 
       lineHeight: scaleFontSize(19),
       fontWeight: '400',
       color: '#636776'
    },
    username:{
        marginTop: verticalScale(5), 
    },
    profileimage:{
        width: horizontalScale(100),
        height:verticalScale(50),

    }

})

export default style