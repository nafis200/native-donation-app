
import React from "react";
import { View,Text } from "react-native";
import PropTypes from 'prop-types';
import style from "./style";

const Header = (props)=>{

    const styleApply = ()=>{
        switch(props.type){
            case 1: 
              return style.title1
            case 2:
              return style.title2 
            case 3:
              return style.title3
            default:
                return style.title1

        }
    }

     return (
        <View style={[styleApply(), props.color && {color: props.color}]}numberOfLines={props.numberOfLines ? props.numberOfLines : null } >
        <Text style={[{color:'black'},styleApply()]}>{props.title}</Text>
     </View>
     )
}

Header.default = {
    title: '',
    type: '1'
}

Header.propTypes = {
    title: PropTypes.string,
    type: PropTypes.number,
    color: PropTypes.string,
    numberOfLines: PropTypes.number
  };


export default Header