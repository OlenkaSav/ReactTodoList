import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, selectTasksList } from '../redux/reducers/todo-slice'
import TodosList from './todos-list'
import RadioBtn from './radio-buttons'
import Counter from './counter'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const TodosPage = () => {
  const [task, setTask] = useState('')
  const [filter, setFilter] = useState('all')
  const tasksList = useSelector(selectTasksList)
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setTask(event.target.value)
  }

  const handleAddTask = () => {
    if (task.trim() !== '' && task.length <= 10) {
      dispatch(addTask({ 'text': task, 'id': nanoid(), 'completed': false }))
      setTask('')
    } else if (task.trim() === '') {
      toast('Type something...')
    } else {
      toast('Text must be shorter than 10 characters')
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredTasks = tasksList.filter((singleTask) => {
    switch (filter) {
      case 'completed': {
        return singleTask.completed
      }
      case 'uncompleted': {
        return !singleTask.completed
      }
      default: {
        return true
      }
    }
  })
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <div>
        <Input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <AddBtn onClick={handleAddTask}>Add</AddBtn>
      </div>
      <RadioBtn status={ filter } onHandleFilterChange={handleFilterChange} />
      <TodosList list={filteredTasks} />
      <Counter list={tasksList} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px auto;
  padding: 4em;
  background: #c4f3bf;
  width: 1000px;
  height: 600px;
  border-radius: 50px;
  -webkit-box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.62);
  -moz-box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.62);
  box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.62);
  
`
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`
const Input = styled.input`
width: 300px;
height: 40px;
font-size: 1em;
border-radius: 5px;
margin-right: 10px;
padding-left: 10px;
&:focus {
  outline: none; 
}
`
const AddBtn = styled.button`
width: 50px;
height: 40px;
color: white;
background-color: #1d551d;
border: none;
border-radius: 5px;
`
export default TodosPage
