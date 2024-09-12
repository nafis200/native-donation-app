
import { combineReducers } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {persistReducer, persistStore} from 'redux-persist'

import {logger} from 'redux-logger'

import User from './reducer/User'
import { version } from 'react'
import Categories from './reducer/Categories'

const root = combineReducers({
    user: User,
    categories: Categories
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
        }).concat(logger)
    }
})

export default stroe

export const persistor = persistStore(stroe);

