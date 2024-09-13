
import React from "react";
import { View,Text } from "react-native";
import style from "./style";
import { useSelector } from "react-redux";

const SingleDonationItem = () => {
    const donationItemInformation = useSelector(state =>state.donation.selectedDonationInformation)
    console.log(donationItemInformation)
  return (
    null
  )
}

export default SingleDonationItem