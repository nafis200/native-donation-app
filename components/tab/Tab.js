

import { View, Text,Pressable } from 'react-native'
import React,{useRef,useState} from 'react'
import PropTypes from 'prop-types';
import style from './style';
style
const Tab = (props) => {
 
 const [width,setWidth] = useState(0)
 const textRef = useRef(null)
 console.log(width)
  return (
    <Pressable disabled={props.isInactive} style={[style.tab, props.isInactive && style.inactiveTab]} onPress={()=>props.onPress()}  >
        <Text 
         onTextLayout={(event) => {
            const newWidth = event.nativeEvent.lines[0]?.width || 0;
            setWidth(newWidth);
        }}
        ref = {textRef}
        style={[style.title,props.isInactive && style.inactiveTitle]}>{props.title}</Text>
    </Pressable>
  )
}

Tab.default = {
    isInactive: false,
    onPress: ()=>{},
}

Tab.propTypes = {
    title: PropTypes.string,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}

export default Tab











