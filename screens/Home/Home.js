
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

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        <Header title={"Azzahri A."} type={1}></Header>
        {/* <Button title={'Donate'}></Button>
        <Button title={'Donate'} isDisabled={true} onPress={()=>{
            console.log("you press me|||")
        }} ></Button> */}
       
        <Search></Search>

        <View>
        <Tab title={"highlights"} onPress={()=>{
           console.log("hellow ")
        }}></Tab>
        <Tab title={"LifeStyle"} isInactive={true}></Tab>
        {/* <Badge title={"environment"}></Badge> */}
        <Badge title={"Environment"}></Badge>
        <FontAwesomeIcon style={{color:'black'}} icon={faSearch} />
        </View>

    </SafeAreaView>
  )
}

export default Home