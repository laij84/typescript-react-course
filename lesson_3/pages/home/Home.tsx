import React, { useState } from 'react'
import { Form } from '../../components/form/Form'
import { TodoItem } from '../../components/todoItem/TodoItem'

export interface Todo {
  id: number
  completed: boolean
  text: string
}

export const Home = () => {
  const [state, setState] = useState<Todo[]>([])

  const handleSubmit = (value: string): void => {
    console.log(value)
    setState([...state, { text: value, completed: false, id: Date.now() }])
  }

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
