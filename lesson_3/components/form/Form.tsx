import React, { useState, useCallback } from 'react'

interface FormProps {
  value?: string
  onSubmit: (value: string) => void
}

export const Form: React.FC<FormProps> = ({ onSubmit, value }) => {
  const [state, setState] = useState<string>(value || '')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(state) // Pass state up to parent component
      setState('') // Reset form
    },
    [onSubmit, state]
  )

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="create_todo">Enter todo:</label>
      <br />
      <input id="create_todo" type="text" value={state} onChange={handleChange} />
    </form>
  )
}
