import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { TodoItem } from './TodoItem'
import { mockTodo } from './TodoItem.mocks'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => <TodoItem todo={mockTodo} onUpdate={action('update')} onDelete={action('delete')} />, {
    info: {
      text: 'This is a TodoItem',
    },
  })
