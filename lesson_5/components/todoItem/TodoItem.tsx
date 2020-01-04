import React, { useCallback, useState } from 'react'
import { Todo } from '../../pages/home/Home'
import { Form } from '../../components/form/Form'

interface TodoItemProps {
  /**
   * The todo to display
   */
  readonly todo: Todo
  /**
   * Function that exposes the current todo for you to handle update
   */
  onUpdate: (todo: Todo) => void
  /**
   * Function that exposes the current todo for you to handle update
   */
  onDelete: (todo: Todo) => void
}

export const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false)
  const handleSubmit = useCallback(
    (value: string) => {
      onUpdate({ ...todo, text: value })
      setEditing(false)
    },
    [onUpdate, todo]
  )

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        aria-label={`Mark ${todo.completed ? 'incomplete' : 'completed'}`}
        onChange={e => onUpdate({ ...todo, completed: e.target.checked })}
      />
      {editing ? (
        <Form value={todo.text} onSubmit={handleSubmit} />
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo)}>Delete</button>
        </>
      )}
    </li>
  )
})
