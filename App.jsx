import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
   
      <NavigationContainer>
        <MainNavigation>
        </MainNavigation>
      </NavigationContainer>
   
  )
}

export default App

