
import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import style from './style'
import globalStyle from '../../assets/styles/globalStyle'
import Header from '../../components/Header/Header'

import Button from '../../components/Header/button/Button'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <Header title={"Azzahri A."} type={1}></Header>

        <Button title={'Donate'}></Button>
        
    </SafeAreaView>
  )
}

export default Home