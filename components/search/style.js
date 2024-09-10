
import { StyleSheet} from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
   
    searchInput:{
        flex:1,
        marginLeft: horizontalScale(6),
        color:'black',
        height:'100%',
        fontSize: scaleFontSize(14),
        lineHeight:scaleFontSize(14)
    },
    searchInputContainer:{
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#F3F5F9',
        height: verticalScale(25),
        borderRadius:horizontalScale(100),

    }


})

export default style