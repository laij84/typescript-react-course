import React from 'react'
import { Form } from '../../components/form/Form'

export const Home = () => {
  return (
    <div>
      <Form onSubmit={() => console.log('Submitting!')} />
    </div>
  )
}
