
import { StyleSheet} from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scalling";

const style = StyleSheet.create({
   
    searchInput:{
        borderWidth: 1,
        flex:1,
        marginLeft: horizontalScale(6),
        color:'black'
    },
    searchInputContainer:{
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#F3F5F9',
        height: verticalScale(25)

    }


})

export default style