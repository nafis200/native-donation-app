



import { View, Text,Pressable } from 'react-native'
import React,{useRef,useState} from 'react'
import PropTypes from 'prop-types';
import style from './style';
import { horizontalScale } from '../../assets/styles/scalling';
style
const Badge = (props) => {
 
 const [width,setWidth] = useState(0)
 const textRef = useRef(null)
 const paddingHorizontal = 30
 const tabWidth = {
    width: horizontalScale(paddingHorizontal * 3 + width)
 }

  return (
    <View style={[style.badge,tabWidth]}>
        <Text 
         onTextLayout={(event) => {
            const newWidth = event.nativeEvent.lines[0]?.width || 0;
            setWidth(newWidth);
        }}
        ref = {textRef}
        style={[style.title]}>{props.title}</Text>
    </View>
  )
}


Badge.propTypes = {
    title: PropTypes.string,
}

export default Badge


