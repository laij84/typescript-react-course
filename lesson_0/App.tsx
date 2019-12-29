import React from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './App.styles'
import { Home } from './pages/Home'

const StyledHeader = styled.header`
  padding: 0 20px;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>
        Lesson <span style={{ color: 'red' }}>{process.env.REACT_APP_LESSON}</span>
      </h1>
      <hr />
    </StyledHeader>
  )
}

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  )
}
