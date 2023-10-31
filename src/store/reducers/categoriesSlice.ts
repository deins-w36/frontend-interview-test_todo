/* VENDOR */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

/* APPLICATION */
import { RootState } from '../store'

export interface CategoriesState {
    id: string
    name: string
    description: string
}
type newCategory = Omit<CategoriesState, 'id'>

const initialState: CategoriesState[] = [
    {
        id: 'd485a644-5a24-4f55-b3f7-a083338be879',
        name: 'Категория',
        description: 'Описание может быть длинным'
    },
    {
        id: '52f7451a-0f06-4ddc-affa-b1d8ed24aee3',
        name: 'Категория2',
        description: 'Описание может быть длинным'
    },
    {
        id: '36704c57-4575-4112-b962-948b04a20506',
        name: 'Категория3',
        description: 'Описание может быть длинным'
    }
]

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesAdded: (state: CategoriesState[], { payload }: PayloadAction<newCategory>) => {
            state.push({
                id: uuidv4(),
                ...payload
            })
        },
        categoriesUpdated: (state: CategoriesState[], { payload }: PayloadAction<CategoriesState>) => {
            const { id, name, description } = payload
            const existingCategory = state.find((category) => category.id === id)

            if (existingCategory) {
                existingCategory.name = name
                existingCategory.description = description
            }
        },
        categoriesRemoved: (state: CategoriesState[], { payload }: PayloadAction<string>) => {
            const rmTaskIndex = state.findIndex((el) => el.id === payload)

            state.splice(rmTaskIndex, 1)
        }
    }
})

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } = categoriesSlice.actions

export const selectAllCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
