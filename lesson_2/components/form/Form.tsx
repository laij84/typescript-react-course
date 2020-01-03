import React, { useState } from 'react'

interface FormProps {
  /**
   * A default value for the text input
   */
  value?: string
  /**
   * A callback when the form is submitted
   */
  onSubmit: (value: string) => void
}

export const Form: React.FC<FormProps> = React.memo(({ onSubmit, value }) => {
  const [state, setState] = useState<string>(value || '')

  // Example of typing a function that takes an Event as argument that is not inline
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (state) {
      onSubmit(state) // Pass state up to parent component
      setState('') // Reset form
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="create_todo">Enter todo:</label>
      <br />
      <input id="create_todo" type="text" value={state} onChange={(e): void => setState(e.target.value)} />
    </form>
  )
})
