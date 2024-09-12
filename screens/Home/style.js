
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

    },
    searchBox:{
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20)
    },
    highlighted:{
        height:horizontalScale(400),
        width: '100%',
        
    },
    hightlightedContainer:{
        marginHorizontal: horizontalScale(24),
        marginTop:scaleFontSize(20)
    },
    categories:{
        marginLeft:horizontalScale(24),
    },
    categoryItem:{
        marginRight: horizontalScale(10)
    },
    donationcontainer:{
        marginTop:verticalScale(20),
        marginHorizontal:horizontalScale(24),
    }

})

export default style