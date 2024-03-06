import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todo-slice'

export const store = configureStore({
  'reducer': {
    'todo': todoReducer,
  },
})

export default store
