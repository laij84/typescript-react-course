import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { Form } from '../../components/form/Form'
import { TodoItem } from '../../components/todoItem/TodoItem'
import { Filters } from '../../components/filters/Filters'
import { Filter } from '../../components/filters/Filters.types'
import { List } from '../../components/todoItem/TodoItem.styles'
import { Status } from './Home.styles'

export interface Todo {
  readonly id: number
  readonly completed: boolean
  readonly text: string
}

interface Action {
  type: 'CREATE' | 'UPDATE' | 'DELETE'
  value: Todo
}

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.value, ...state]
    case 'UPDATE':
      return state.map(todo => {
        if (todo.id === action.value.id) {
          return action.value
        }
        return todo
      })
    case 'DELETE':
      return state.filter(todo => {
        return todo.id !== action.value.id
      })
    default:
      return state
  }
}

export const Home = () => {
  const cache = window.localStorage.getItem('todos')
  const initialState: Todo[] = (cache && JSON.parse(cache)) || []
  const [state, dispatch] = useReducer(reducer, initialState)
  const [filter, setFilter] = useState<Filter>('all')
  const [statusMessage, setStatus] = useState<string>('')

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    setStatus(`Displaying ${filter} todos`)
  }, [filter])

  const handleUpdate = useCallback(todo => {
    dispatch({
      type: 'UPDATE',
      value: todo,
    })
    setStatus(`Todo "${todo.text}" updated`)
  }, [])

  const handleDelete = useCallback(todo => {
    dispatch({
      type: 'DELETE',
      value: todo,
    })
    setStatus(`Todo "${todo.text}" deleted`)
  }, [])

  const handleSubmit = (value: string): void => {
    dispatch({
      type: 'CREATE',
      value: {
        text: value,
        completed: false,
        id: Date.now(),
      },
    })
    setStatus(`Todo "${value}" added`)
  }

  const filterTodos = (todo: Todo) => {
    return filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Filters onChange={e => setFilter(e.target.value as Filter)} initialValue={filter} />
      <Status>{statusMessage}</Status>
      <List padding="0">
        {state.filter(filterTodos).map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </List>
    </div>
  )
}
