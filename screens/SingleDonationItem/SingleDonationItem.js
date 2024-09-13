
import React from "react";
import { View,Text,SafeAreaView, ScrollView } from "react-native";
import style from "./style";
import { useSelector } from "react-redux";
import Backbutton from "../../components/Backbutton/Backbutton";


const items = [
    {
      "name": "Winter Jacket",
      "description": "A warm and cozy winter jacket perfect for cold weather.",
      "image": "https://example.com/images/winter-jacket.jpg",
      "donationItemId": 2,
      "categoriesIds": [1, 5],
      "price": 50.00
    },
];

const SingleDonationItem = ({navigation}) => {
    
    const donationItemInformation = useSelector(state => state.donation.selectedDonationInformation);
    console.log(donationItemInformation,items[0])
  return (
    <SafeAreaView style={[style.backgroundWhite]}>
      <ScrollView showsVerticalScrollIndicator={false}>
         <Backbutton onPress={()=>{
             navigation.goBack()
         }}></Backbutton>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingleDonationItem