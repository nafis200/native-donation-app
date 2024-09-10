
import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import style from './style'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <Header title={"hellow world"}></Header>
    </SafeAreaView>
  )
}

export default Home