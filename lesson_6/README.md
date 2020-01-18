# Intro to Styled-System with Styled-Components

Most of you probably have some experience with styled components. In case you haven't, here is the basic syntax in JS.

```jsx
// First import it
import styled from 'styled-components'

// Create a component with it, and use tagged template literal syntax to pass it CSS propertiesconsole.log();
const Button = styled.button`
  background-color: green;
  color: white;
  border-radius: 5px;
`

// In your JSX, use the component
const App = () => {
  return <Button>Click Me</Button>
}
```

If your App is wrapped in a `ThemeProvider`, you can access the theme from props by using an embedded expression with the interpolation syntax `${}`. You can also access any other custom props passed to your component this way.

```js
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`
```

_NOTE_: Its actually more performant to import the theme object you need directly into the file, than it is to consume the theme via context (the ThemeProvider). In the PIL Codebase, we are importing the theme directly in most places. It is alright to do this because we do not have multiple brands and need our code to work with different theme styles. However, if you are building a component library that needs to work for multiple "themes" or "brands", its better to consume the theme using the embedded expression instead of importing the file. This way, you can give a different `theme` prop to your `ThemeProvider` and all the components will get the properties of that theme.

```js
const Button = styled.button`
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
  color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
  border-radius: 5px;
`

// In your JSX, pass a prop
const App = () => {
  return <Button variant="primary">Click Me</Button>
}
```

## TypeScript and Styled Components

Although the syntax might be different, at the end of the day, styled components are just what they claim to be: `Components`. Like any Function Component in TypeScript, you need to provide a type so TypeScript can infer what props are valid.

Note: You don't need to type the `theme` prop here in the interface, as the types for styled-components already has this.

```ts
interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
  color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
  border-radius: 5px;
`
```

You can also style another component, but the syntax to pass the interface is slightly different:

```ts
import Link from 'gatsby-link'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const Button = styled(Link)<ButtonProps>`
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
  color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
  border-radius: 5px;
`
```

### Make your Styled-Components a bit cleaner

While you can use an embedded expression for each CSS property, this is a bit verbose and not really efficient, as you're calling multiple functions on render. You can use the `css` template tag function from styled-components, so you only have to call your function once and destructure all the necessary props, and return a block of css.

```ts
import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    background-color: ${variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
    color: ${variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
    border-radius: 5px;
  `
)
```

## Styled-Components with Styled-System

Styled-System is a library of utility functions that can be used with CSS-in-JS libraries like Emotion and Styled Components, which will allow you to control your component styles by passing props. One of the main benefits is that it works with values from your `theme` and is responsive to your theme breakpoints.

Here is a common scenario, you have a styled component, like a `Button`, but when its inside a `Card` component it needs some extra margin-top to fit in with the design provided. So now you need to extend the styled-component's styles, by wrapping it in another styled component.

```tsx
const CardButton = styled(Button)<ButtonProps>`
  margin-top: 20px;
`
```

Now we have 2 implementations of the same button, the regular `Button` and the `CardButton`. Not a big deal, right? But this can quickly escalate where you end up with multiple versions of the button to fit into different scenarios.

Another issue is responsive design - where styles can change depending on what breakpoint you are at. In the example bellow, this button is full width on smaller screens, but auto width on larger screens.

```tsx
const ResponsiveButton = styled(Button)<ButtonProps>(
  ({ theme }) => css`
    width: 100%;

    ${theme.mediaQueries.md} {
      width: auto;
    }
  `
)
```

This is where Styled-System comes in. They have a lot of utility functions out of the box, I would recommend you check out their [reference table](https://styled-system.com/table) to see what is available.

```tsx
import styled, { css } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

interface ButtonProps extends MarginProps {
  variant: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    background-color: ${variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
    color: ${variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
    border-radius: 5px;
    ${margin}
  `
)

// Pass prop to control margin when using in JSX
// `mr` is shorthand for Margin Right.
<Button mr="20px"/>
```

Styled System is also _responsive_, meaning you can map your props to breakpoint names defined on your theme. This is _mobile first_, meaning your style will be applied at that breakpoint and above.

```tsx
<Button mr={{ default: 0, sm: '10px', md: '20px' }} />
```

This does _not_ mean you should inline all your styles. Think about your component and what will make it most re-usable and flexible for other developers to use. The most common utility props will be _space_ (things like margin / padding) and _layout_ (things like width/height/min-width/max-width etc).

### Variants

One of the main benefits of Styled-System is its variants api. Take the `Button` example:

```tsx
import styled, { css } from 'styled-components'

interface ButtonProps extends MarginProps {
  variant: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    background-color: ${variant === 'primary' ? theme.colors.green : theme.colors.indigo)};
    color: ${variant === 'primary' ? theme.colors.indigo : theme.colors.white)};
    border-radius: 5px;
  `
)
```

Here it has 2 variants, `primary` and `secondary`. We have to use a ternary here to conditionally render styles. What if there were a lot more css properties which were conditional? What if there were many more variants? We'd end up with a mess of nested ternaries all over the place. Luckily, the variant api can handle a lot of this for us. You can even have multiple variants. Using the `ResponsiveValue` type definition, we can type our component to accept props that map to the theme breakpoints (e.g. if you want the size variant to be small on mobile but large on desktop).

```tsx
import styled, { css } from 'styled-components'
import { variant, ResponsiveValue } from 'styled-system'

interface ButtonProps extends MarginProps {
  variant: ResponsiveValue<'primary' | 'secondary'>
  size: ResponsiveValue<'sm' | 'md' | 'lg'>
}

const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    border-radius: 5px;
    ${variant({
      prop: 'variant',
      variants: {
        primary: {
          backgroundColor: theme.colors.green,
          color: theme.colors.indigo,
        },
        secondary: {
          backgroundColor: theme.colors.indigo,
          color: theme.colors.white,
        },
      },
    })}

    ${variant({
      prop: 'size',
      variants: {
        sm: {
          fontSize: '14px',
        },
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
    })}
  `
)

// in your JSX
<Button variant="primary" />

// with responsive props
<Button size={{ default: 'sm', md: 'md', lg: 'lg' }} />
```

Unfortunately with the variant API we have to use object syntax css. Remember, Styled-System is framework agnostic, it works with any CSS-in-JS library that uses the React Context API to deliver the theme, so it doesn't follow the Styled-Components syntax. However, its still a lot cleaner than nested ternaries.

## Exercises:

Style your Todo App however you want. The App is wrapped with the PIL Theme so you can use any of those properties.

Be sure to:

1. Have some dynamic styles (e.g. by passing a prop).
2. Consume some properties from the `theme`.
3. Make use of any of the Styled-System utility functions (e.g. space, layout, typography.) (https://styled-system.com/table)[https://styled-system.com/table]
4. Make use of the Styled-System `variant` function to make variants of your components.

_BONUS_

1. Can you use the cascade to style nested elements when writing your styles inside the `variant` function?
2. Can you refer to other components in your styles using the cascade?
3. Can you select _up_ the cascade to a parent?
