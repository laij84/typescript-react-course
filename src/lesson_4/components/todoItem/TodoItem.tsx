import React from 'react'
import { Todo } from '../../pages/home/Home'

interface TodoItemProps {
  /**
   * The todo to display
   */
  readonly todo: Todo
  /**
   * Function that exposes the current todo for you to handle update
   */
  onUpdate: (todo: Todo) => void
}

export const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo, onUpdate }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        aria-label={`Mark ${todo.completed ? 'incomplete' : 'completed'}`}
        onChange={e => onUpdate({ ...todo, completed: e.target.checked })}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
    </li>
  )
})
