import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from '../theme/global.styles'
import { theme } from '../theme/theme'
import { Home } from './pages/home/Home'

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

const Wrapper = styled.div`
  padding: 0 20px;
`

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}
