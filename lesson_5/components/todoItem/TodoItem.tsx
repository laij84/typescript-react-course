import React, { useCallback } from 'react'
import { Todo } from '../../pages/home/Home'

interface TodoItemProps {
  /**
   * The todo to display
   */
  todo: Todo
  onUpdate: (todo: Todo) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate }) => {
  const handleUpdate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate({ ...todo, completed: e.target.checked })
    },
    [onUpdate, todo]
  )
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        aria-label={`Mark ${todo.completed ? 'incomplete' : 'completed'}`}
        onChange={handleUpdate}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
    </li>
  )
}
