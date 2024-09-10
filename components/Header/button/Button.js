
import { View, Text,Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import style from './style';
style
const Button = (props) => {
  return (
    <Pressable disabled={props.isDisabled}>
        <Text style={[{color:'black'},style.button]}>{props.title}</Text>
    </Pressable>
  )
}

Button.default = {
    isDisabled: false,
}

Button.propTypes = {
    title: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button