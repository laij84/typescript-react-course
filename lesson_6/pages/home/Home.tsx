import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { Form } from '../../components/form/Form'
import { TodoItem } from '../../components/todoItem/TodoItem'

export interface Todo {
  readonly id: number
  readonly completed: boolean
  readonly text: string
}

interface Action {
  type: 'CREATE' | 'UPDATE' | 'DELETE'
  value: Todo
}

type Filter = 'all' | 'completed' | 'incomplete'

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

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

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

  const filterTodos = (todo: Todo) => {
    return filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <fieldset>
        <legend>Filter by:</legend>
        <ul>
          <li>
            <input
              type="radio" //
              name="filters"
              id="all"
              checked={filter === 'all'}
              onChange={() => setFilter('all')}
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="radio"
              name="filters"
              id="completed"
              checked={filter === 'completed'}
              onChange={() => setFilter('completed')}
            />
            <label htmlFor="completed">Completed</label>
          </li>
          <li>
            <input
              type="radio"
              name="filters"
              id="incomplete"
              checked={filter === 'incomplete'}
              onChange={() => setFilter('incomplete')}
            />
            <label htmlFor="incomplete">Incomplete</label>
          </li>
        </ul>
      </fieldset>
      <ul>
        {state.filter(filterTodos).map(todo => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}
