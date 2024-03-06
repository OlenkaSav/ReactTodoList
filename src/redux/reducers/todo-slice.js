import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  'name': 'todo',
  'initialState': {
    'tasksList': [],
  },
  'reducers': {
    'addTask': (state, action) => {
      state.tasksList.push(action.payload)
    },
    'toggleTaskCompletion': (state, action) => {
      const taskId = action.payload
      const task = state.tasksList.find((taskItem) => taskItem.id === taskId)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { addTask, toggleTaskCompletion } = todoSlice.actions

export const selectTasksList = (state) => state.todo.tasksList

export default todoSlice.reducer
