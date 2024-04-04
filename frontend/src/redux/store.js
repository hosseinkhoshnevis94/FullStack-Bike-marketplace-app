import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSilce'
import storage from 'redux-persist/lib/storage'
import{persistStore,persistReducer} from'redux-persist'

const rootReducer = combineReducers({user:userReducer})
const persistConfig ={
    key:'root',
    storage,
    version:1
}

const presistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: presistedReducer,
})

export const persistor = persistStore(store)