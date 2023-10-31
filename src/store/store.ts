import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import categoriesReducer from './reducers/categoriesSlice'
import tasksReducer from './reducers/tasksSlice'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    tasks: tasksReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
