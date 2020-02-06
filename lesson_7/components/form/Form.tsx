import React, { useState } from 'react'
import { Field, Label, Input, StyledForm, Error } from './Form.styles'

interface FormProps {
  value?: string
  onSubmit: (value: string) => void
}

export const Form: React.FC<FormProps> = React.memo(({ onSubmit, value }) => {
  const [state, setState] = useState<string>(value || '')
  const [error, setError] = useState<boolean>(false)

  // Example of typing a function that takes an Event as argument that is not inline
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (state) {
      onSubmit(state) // Pass state up to parent component
      setState('') // Reset form
    } else {
      setError(true)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="create_todo">Enter todo:</Label>
        <Input
          id="create_todo"
          type="text"
          name="todo"
          value={state}
          onChange={(e): void => {
            setState(e.target.value)
            if (state && error) setError(false)
          }}
        />
      </Field>
      {error && <Error role="alert">Todo is required</Error>}
    </StyledForm>
  )
})
