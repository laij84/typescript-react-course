import styled, { css } from 'styled-components'
import { compose, variant, space, layout, SpaceProps, LayoutProps } from 'styled-system'

export const List = styled.ul<SpaceProps & LayoutProps>`
  ${compose(
    space,
    layout
  )}
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 0.5em;

  form {
    margin-bottom: 0;
  }
`

interface TextProps {
  variant?: 'completed' | 'incomplete'
}

export const Text = styled.span<TextProps>`
  margin-right: 0.5em;
  ${variant({
    variants: {
      completed: {
        textDecoration: 'line-through',
        opacity: 0.5,
      },
      incomplete: {
        textDecoration: 'none',
        opacity: 1,
      },
    },
  })}
`

interface ButtonProps {
  variant?: 'edit' | 'delete'
}

export const Button = styled.button<ButtonProps>(
  ({ theme }) => css`
    padding: ${theme.space.sm} ${theme.space.md};
    border-radius: 5px;
    font-size: 1rem;
    font-family: ${theme.fonts.title};

    & + & {
      margin-left: 0.5em;
    }

    ${variant({
      variants: {
        edit: {
          backgroundColor: theme.colors.eucalyptusGreen,
          color: theme.colors.indigo,
        },
        delete: {
          backgroundColor: theme.colors.tomato,
          color: theme.colors.white,
        },
      },
    })};
  `
)

Button.defaultProps = {
  variant: 'edit',
}

export const Checkbox = styled.input.attrs(() => ({ type: 'checkbox' }))(
  ({ theme }) => css`
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    border: 2px solid ${theme.colors.eucalyptusGreen};
    position: relative;
    margin-right: 0.5em;
    font-size: 1rem;

    &:checked {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20' height='20' viewBox='0 0 20 20' data-tags='checkmark'%3E%3Cg fill='%232CDA9D' transform='scale(0.01953125 0.01953125)'%3E%3Cpath d='M0 563.2l102.4-102.4 256 256 563.2-563.2 102.4 102.4-665.6 665.6z' /%3E%3C/g%3E%3C/svg%3E");
      background-size: 80%;
      background-position: center center;
      background-repeat: no-repeat;
    }
  `
)
