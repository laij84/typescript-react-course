import React, { useState, useCallback } from 'react'
import { Form } from '../../components/form/Form'
import { TodoItem } from '../../components/todoItem/TodoItem'

export interface Todo {
  readonly id: number
  readonly completed: boolean
  readonly text: string
}

export const Home = () => {
  const [state, setState] = useState<Todo[]>([])

  const handleSubmit = useCallback(
    (value: string): void => {
      setState([...state, { text: value, completed: false, id: Date.now() }])
    },
    [state]
  )

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <ul>
        {state.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
