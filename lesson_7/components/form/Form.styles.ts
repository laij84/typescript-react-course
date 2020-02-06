import styled, { css } from 'styled-components'

export const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`
export const Label = styled.label(
  ({ theme }) => css`
    color: ${theme.colors.indigo};
    font-family: ${theme.fonts.title};
    margin-right: 1em;
  `
)

export const Input = styled.input(
  ({ theme }) => css`
    appearance: none;
    border: 1px solid ${theme.colors.darkGrey};
    font-size: 1rem;
    font-family: ${theme.fonts.body};
    padding: ${theme.space.sm};
    border-radius: 5px;
  `
)

export const StyledForm = styled.form`
  margin-bottom: 2em;
`

export const Error = styled.small(
  ({ theme }) => css`
    color: ${theme.colors.tomato};
  `
)
