
import React from "react";
import { View,Text } from "react-native";
import PropTypes from 'prop-types';

const Header = (props)=>{
     return (
        <View>
        <Text style={{color:'black'}}>{props.title}</Text>
     </View>
     )
}

Header.default = {
    title: '',
}

Header.propTypes = {
    title: PropTypes.string,
  };


export default Header