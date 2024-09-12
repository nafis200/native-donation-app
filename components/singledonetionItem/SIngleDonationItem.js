
import { View, Text, Image,Pressable } from 'react-native'
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import React from 'react'
import style from './style'
import PropTypes from 'prop-types';
const SIngleDonationItem = (props) => {
  return (
    <Pressable onPress={()=>{
      props.onPress(props.donationItemId)
    }}>
      <View>
        <View style={style.badge}>
        <Badge  title={props.badgeTitle}></Badge>
        </View>
        <Image style={[style.image,{height:150, width:150,backgroundColor:'gray'}]} source={{uri: props.uri}} />
      </View>
      <Header title={props.donationTitle} type={3} color={'#0A043c'} numberOfLines={1} ></Header>
      <Header title={'$'+props.price}></Header>
    </Pressable>
  )
}

SIngleDonationItem.defaultProps = {
   onPress: ()=>{},
}

SIngleDonationItem.propTypes = {
    donationItemId: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onPress: PropTypes.func
}

export default SIngleDonationItem