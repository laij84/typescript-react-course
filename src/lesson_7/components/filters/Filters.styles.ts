import styled, { css } from 'styled-components'

export const Legend = styled.legend(
  ({ theme }) => css`
    color: ${theme.colors.indigo};
    font-family: ${theme.fonts.title};
  `
)

export const Fieldset = styled.fieldset(
  ({ theme }) => css`
    border: 2px solid ${theme.colors.eucalyptusGreen};
    border-radius: 5px;
    margin-bottom: 1em;
  `
)

export const Optionset = styled.ul`
  padding: 0;
  margin-bottom: 0;

  li {
    list-style: none;
    display: flex;
    align-items: center;
  }
`

export const Radio = styled.input.attrs(() => ({ type: 'radio' }))(
  ({ theme }) => css`
    appearance: none;
    border: 2px solid ${theme.colors.skyBlue};
    border-radius: 50%;
    height: 1.5em;
    width: 1.5em;
    position: relative;
    display: inline-block;
    font-size: 1rem;
    margin-right: 0.5em;

    &:checked {
      &:before {
        content: '';
        font-size: 1rem;
        position: absolute;
        display: block;
        height: 0.75em;
        width: 0.75em;
        background-color: ${theme.colors.skyBlue};
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  `
)
