import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from "react-redux"
import stroe, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
   
      <Provider store ={stroe}>
        <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
        <MainNavigation>
        </MainNavigation>
      </NavigationContainer>
        </PersistGate>
      </Provider>
   
  )
}

export default App

