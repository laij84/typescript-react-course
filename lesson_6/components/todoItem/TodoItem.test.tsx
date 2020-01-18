import React from 'react'
import { render, fireEvent } from '../../utils/testing'
import { TodoItem } from './TodoItem'
import { mockTodo } from './TodoItem.mocks'

const onDelete = jest.fn()
const onUpdate = jest.fn()

test('it should render', () => {
  const { getByText } = render(<TodoItem todo={mockTodo} onUpdate={onUpdate} onDelete={onDelete} />)

  fireEvent.click(getByText('Delete'))
  expect(onDelete).toHaveBeenCalledTimes(1)
})
