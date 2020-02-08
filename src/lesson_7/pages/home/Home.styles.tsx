import styled from 'styled-components'
import { hideVisually } from 'polished'

export const Status = styled.div.attrs(() => ({ role: 'status' }))`
  ${hideVisually()}
`
