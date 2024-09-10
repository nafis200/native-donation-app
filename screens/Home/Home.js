
import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import style from './style'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'
import Tab from '../../components/tab/Tab'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Badge from '../../components/Badge/Badge'
import Search from '../../components/search/Search'
import Button from '../../components/Header/button/Button'
import SIngleDonationItem from '../../components/singledonetionItem/SIngleDonationItem'
import { horizontalScale } from '../../assets/styles/scalling'



const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <Header title={"Azzahri A."} type={1}></Header>
        {/* <Button title={'Donate'}></Button>
        <Button title={'Donate'} isDisabled={true} onPress={()=>{
            console.log("you press me|||")
        }} ></Button> */}
       
        <Search onSearch={(value)=>{
               console.log(value)
        }}></Search>

        <View>
        <Tab title={"highlights"} onPress={()=>{
           console.log("hellow ")
        }}></Tab>
        <Tab title={"LifeStyle"} isInactive={true}></Tab>
       
        <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:horizontalScale(24)}}>
        <SIngleDonationItem 
        uri = {"https://i.postimg.cc/mkGsv8Hy/1000-F-767620795-dc-VEg9-TKd-QQ3-PO8km54pc-A5-C1pd-K87l-U.jpg"} 
        badgeTitle={"Environment"}
        donationTitle={"tree cactus"}
        price={44}
        />
        <SIngleDonationItem 
        uri = {"https://i.postimg.cc/mkGsv8Hy/1000-F-767620795-dc-VEg9-TKd-QQ3-PO8km54pc-A5-C1pd-K87l-U.jpg"} 
        badgeTitle={"Environment"}
        donationTitle={"tree cactus"}
        price={44}
        />
        </SafeAreaView>

        </View>
       

    </SafeAreaView>
  )
}

export default Home