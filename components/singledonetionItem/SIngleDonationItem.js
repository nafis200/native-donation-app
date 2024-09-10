
import { View, Text, Image } from 'react-native'
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import React from 'react'
import style from './style'
import PropTypes from 'prop-types';
const SIngleDonationItem = (props) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
        <Badge  title={props.badgeTitle}></Badge>
        </View>
        <Image style={[style.image,{height:150, width:150,backgroundColor:'gray'}]} source={{uri: props.uri}} />
      </View>
      <Header title={props.donationTitle} type={3}></Header>
      <Header title={'$'+props.price}></Header>
    </View>
  )
}

SIngleDonationItem.propTypes = {
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default SIngleDonationItem