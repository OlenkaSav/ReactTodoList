import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTaskCompletion } from '../redux/reducers/todo-slice'
import { IoCheckmarkDoneSharp, IoCreateOutline } from 'react-icons/io5'
import styled from 'styled-components'

const TodosList = ({ list }) => {
  const dispatch = useDispatch()
  const toggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId))
  }

  return (
    <ul>
    {list.map(({ id, completed, text }) => (
      <Item key={id} onClick={() => toggleCompletion(id)}>
        {completed && <>
          <IoCheckmarkDoneSharp style={{ 'color': 'green' }} />
          <Text style={{ 'textDecoration': 'line-through' }}>{text}</Text>
          </>
        }
        {!completed && <>
          <IoCreateOutline />
          <Text>{text}</Text>
          </>
        }
      </Item>
    ))}
    </ul>
  )
}

const Item = styled.li`
  font-size: 1.5em;
  display: flex;
  align-items: center;
`
const Text = styled.p`
  margin-left: 10px;
  font-style: italic;
  /* text-decoration: {completed ? line-through : none }; */
`

export default TodosList
