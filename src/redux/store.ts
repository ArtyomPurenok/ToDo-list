import {configureStore} from "@reduxjs/toolkit"
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
     PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todoReducer from "./reducer/todoReducer"



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
    reducer: {
        persist: persistedReduser,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)