
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
import { useSelector } from 'react-redux'



const Home = () => {
  const user = useSelector(state => state.user)
  
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
        
        <Header title={user.firstName + ' ' + user.lastName}></Header>
       

    </SafeAreaView>
  )
}

export default Home