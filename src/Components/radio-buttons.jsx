import styled from 'styled-components'

const RadioBtn = ({ status, onHandleFilterChange }) => {
  return (
    <FilterWrapper>
        <Label>
            <input
                type="radio"
                value="all"
                checked={status === 'all'}
                onChange={onHandleFilterChange}
            />
            All
        </Label>
        <Label>
            <input
                type="radio"
                value="completed"
                checked={status === 'completed'}
                onChange={onHandleFilterChange}
            />
            Completed
        </Label>
        <Label>
            <input
                type="radio"
                value="uncompleted"
                checked={status === 'uncompleted'}
                onChange={onHandleFilterChange}
            />
            Uncompleted
        </Label>
    </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
margin: 10px auto;
`
const Label = styled.label`
    margin-right: 10px;
`
export default RadioBtn
