
import React from "react";
import { View,Text,SafeAreaView, ScrollView,Image } from "react-native";
import style from "./style";
import { useSelector } from "react-redux";
import Backbutton from "../../components/Backbutton/Backbutton";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Header/button/Button";


const items = [
    {
      "name": "Winter Jacket",
      "description": "A warm and cozy winter jacket perfect for cold weather dgdgfgfgfd.",
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
        <Image style={style.image}>
        </Image>
        <View>
         <Badge title={items[0].name}></Badge>
        </View>
        <Text style={{color:'black'}}>{items[0].description} {items[0].description} {items[0].description} {items[0].description} {items[0].description}</Text>
        <Button title={"Donate"}></Button>
      </ScrollView>
      <View>
      </View>
    </SafeAreaView>
  )
}

export default SingleDonationItem