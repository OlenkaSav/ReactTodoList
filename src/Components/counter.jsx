import styled from 'styled-components'

const Counter = ({ list }) => {
  const completed = list.filter((itemList) => itemList.completed).length
  const uncompleted = list.filter((itemList) => !itemList.completed).length
  return (
    <CounterWrapper>
        <p>Completed: {completed}</p>
        <p>Uncompleted: {uncompleted}</p>
    </CounterWrapper>
  )
}

const CounterWrapper = styled.div`
margin: 10px auto;
border-top: 1px solid #1d551d;
`

export default Counter
