

import { View, Text,Pressable } from 'react-native'
import React,{useRef,useState} from 'react'
import PropTypes from 'prop-types';
import style from './style';
import { horizontalScale } from '../../assets/styles/scalling';
style
const Tab = (props) => {
 
 const [width,setWidth] = useState(0)
 const textRef = useRef(null)
 const paddingHorizontal = 50
 const tabWidth = {
    width: horizontalScale(paddingHorizontal * 3 + width)
 }

 





  return (
    <Pressable style={[style.tab, props.isInactive && style.inactiveTab,tabWidth]} onPress={()=>props.onPress(props.tabId)}  >
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
    tabId: PropTypes.number.isRequired,
    title: PropTypes.string,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}

export default Tab











