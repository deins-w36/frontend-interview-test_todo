/* VENDOR */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

/* APPLICATION */
import { RootState } from '../store'

export interface TasksState {
    id: string
    name: string
    description: string
    category?: string
}
type newTask = Omit<TasksState, 'id'>

const initialState: TasksState[] = [
    {
        id: 'dcf6c7ea-56fe-4e36-960b-686ebf86d651',
        name: 'Задача',
        description: 'Описание может быть длинным',
        category: 'd485a644-5a24-4f55-b3f7-a083338be879'
    },
    {
        id: '8c90d466-4d2b-4813-a5b4-110b014bf7f2',
        name: 'Задача2',
        description: 'Описание может быть длинным',
        category: '52f7451a-0f06-4ddc-affa-b1d8ed24aee3'
    },
    {
        id: '5a034ea1-6159-4805-a4be-e8c160d8ef10',
        name: 'Задача3',
        description: 'Описание может быть длинным',
        category: ''
    }
]

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasksAdded: (state: TasksState[], { payload }: PayloadAction<newTask>) => {
            state.push({
                id: uuidv4(),
                ...payload
            })
        },
        tasksUpdated: (state: TasksState[], { payload }: PayloadAction<TasksState>) => {
            const { id, name, description, category } = payload
            const existingTask = state.find((task) => task.id === id)

            if (!existingTask) return
            existingTask.name = name
            existingTask.description = description
            existingTask.category = category
        },
        tasksRemoved: (state: TasksState[], { payload }: PayloadAction<string>) => {
            const rmTaskIndex = state.findIndex((el) => el.id === payload)

            state.splice(rmTaskIndex, 1)
        },
        tasksClearedCategories: (state: TasksState[], { payload }: PayloadAction<string>) => {
            const existingTask = state.find((task) => task.category === payload)

            if (!existingTask) return
            existingTask.category = ''
        }
    }
})

export const { tasksAdded, tasksUpdated, tasksRemoved, tasksClearedCategories } = tasksSlice.actions

export const selectAllTasks = (state: RootState) => state.tasks

export default tasksSlice.reducer
