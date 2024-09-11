import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from "react-redux"
import stroe from './redux/store'
const App = () => {
  return (
   
      <Provider store ={stroe}>
        <NavigationContainer>
        <MainNavigation>
        </MainNavigation>
      </NavigationContainer>
      </Provider>
   
  )
}

export default App

