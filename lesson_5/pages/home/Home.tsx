import React, { useReducer, useCallback } from 'react'
import { Form } from '../../components/form/Form'
import { TodoItem } from '../../components/todoItem/TodoItem'

export interface Todo {
  id: number
  completed: boolean
  text: string
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
  const initialState: Todo[] = []
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleUpdate = useCallback(
    todo =>
      dispatch({
        type: 'UPDATE',
        value: todo,
      }),
    []
  )

  const handleDelete = useCallback(
    todo =>
      dispatch({
        type: 'DELETE',
        value: todo,
      }),
    []
  )

  const handleSubmit = (value: string): void => {
    dispatch({
      type: 'CREATE',
      value: {
        text: value,
        completed: false,
        id: Date.now(),
      },
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <ul>
        {state.map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}
