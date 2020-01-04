import React from 'react'
import { Todo } from '../../pages/home/Home'

interface TodoItemProps {
  /**
   * The todo to display
   */
  readonly todo: Todo
}

export const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        aria-label={`Mark ${todo.completed ? 'incomplete' : 'completed'}`}
      />
      {todo.text}
    </li>
  )
})
