
import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import style from './style'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'

import Button from '../../components/Header/button/Button'
import Tab from '../../components/tab/Tab'
import { horizontalScale } from '../../assets/styles/scalling'


const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <Header title={"Azzahri A."} type={1}></Header>
        {/* <Button title={'Donate'}></Button>
        <Button title={'Donate'} isDisabled={true} onPress={()=>{
            console.log("you press me|||")
        }} ></Button> */}
       
        <View>
        <Tab title={"highlights"}></Tab>
        </View>

    </SafeAreaView>
  )
}

export default Home