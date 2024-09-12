
import { combineReducers } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {persistReducer, persistStore} from 'redux-persist'

import {logger} from 'redux-logger'

import User from './reducer/User'
import { version } from 'react'
import Categories from './reducer/Categories'
import Donation from './reducer/Donation'


const root = combineReducers({
    user: User,
    categories: Categories,
    donation: Donation
})

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
}

const persistedReducer = persistReducer(configuration,root)

const stroe = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>{
        return getDefaultMiddleware({
            serializableCheck:false,
        })
    }
})

export default stroe

export const persistor = persistStore(stroe);
persistor.purge()

