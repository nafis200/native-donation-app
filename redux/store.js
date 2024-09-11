import { combineReducers } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'

import User from './reducer/User'

const root = combineReducers({
    user: User
})


const stroe = configureStore({
    reducer: root
})

export default stroe

