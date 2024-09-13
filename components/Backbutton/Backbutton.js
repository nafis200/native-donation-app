
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import style from './style'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Backbutton = (props) => {
  return (
    <Pressable onPress={()=> props.onPress()}>
        <FontAwesomeIcon style={{color:'black'}} icon={faArrowLeft}></FontAwesomeIcon>
    </Pressable>
  )
}


Backbutton.propTypes = {
    onPress: PropTypes.func.isRequired
}
export default Backbutton