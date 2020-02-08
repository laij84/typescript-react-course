# Intro to Storybook and React Testing Library

## Storybook

Storybook is a sandbox environment for developers to build, share and document components. Storybook runs independently of your main app which allows you to develop components without relying on app specific dependencies or context.

### Getting started

To start up storybook, run `yarn storybook`. There should already be one component available in the Storybook menu, the `TodoItem`.

You can view the source code for the story in `components/todoItem/TodoItem.stories.tsx`

### StoriesOf vs Component Story Format

If you google Storybook, you may find the instructions in the docs look quite different to how our `TodoItem` story is written.

We are currently on version 5.2.8 of Storybook. There were quite significant changes between 5.1 and 5.2+, including the introduction of a new syntax to write stories called Component Story Format (CSF).

Unfortunately, at the moment this new syntax has some issues and does not work well with TypeScript, so we will be sticking to the StoriesOf syntax. You can read more about the (StoriesOf Api here)[https://storybook.js.org/docs/formats/storiesof-api/].

### Writing Stories

You can use the storiesOf function to define a set of stories related to a single component.
Using `.add` you can chain multiple stories together under the one component. For example:

```tsx
storiesOf('Button', module)
  .add('Plain button', () => <Button>Click me</Button>)
  .add('Alert Button', () => <Button onClick={() => alert('hello')}>Click me</Button>)
```

### Addons

Storybook comes with several addons which can give your stories more functionality.

### Addon-Info

The addon-info package generates a code snippet for each story, so you can see what props are passed and how the component is written. This has been enabled in the global storybook configuration, so it should appear automatically.

If using TypeScript, addon-info will also generate a table listing every prop your component can take. It will infer this from the type definition (e.g. interface) you assigned to your component.

You can optionally pass a third argument to your `add` function, an object with a key of `info`, the value of which is an object with any additional configuration. You can see what (options are available here)[https://github.com/storybookjs/storybook/tree/master/addons/info#options-and-defaults].

### Addon-Knobs

The addon-knobs package allows you to make the props a component takes in your story dynamic, so other users can interact with the component and see how different props affect the component. You can have the user type text, check a boolean, or select from a list of predefined options and much more. You can read about the (different knobs here)[https://github.com/storybookjs/storybook/tree/master/addons/knobs].

The addon-knobs feature is enabled globally, so you don't need to use the `addDecorator(withKnobs)` function in your individual stories.

### Addon-Actions

The addon-actions package logs events (e.g. click event, mouseover event, etc) in Storybook for you to see. You can (read more here)[https://github.com/storybookjs/storybook/tree/master/addons/actions]

### Addon-A11y

This addon runs accessibility checks against the component in your story. This has been enabled globally in the Storybook config so you don't need to do anything. In the `TodoItem` example, you should see an `accessibility` tab in the lower pane. You will see there are some passing and some failing accessibility checks.

### Exercises

Write stories for some of the componesnts in your Todo App. In your components folder, you should see 3 components: `TodoItem`, `Form` and `Filters`. You should:

- Write a story for each component.
- Use at least 3 different kinds of knobs (e.g. text, select, boolean, options etc).
- Use addon-actions to log DOM events (e.g. clicking a button).
- Use addon-info to write some explanatory text about your components.

## Intro to React Testing Library with Jest

Testing provides a way for us to check that our code is working in an _automated process_. While you can manually test (have someone physically interact with your app or website), this isn't very efficient.

Typically in React, we write unit tests (checking single components) or integration tests (checking multiple components that work together). We will be doing this with React Testing Library and Jest.

Typically, as developers we don't usually write End-To-End (E2E) testing with these tools as we need access to the full environment to test critical paths (for example, filling out a multi-step form and submitting it, then being redirected to the success page). E2E testing is usually done by a specialised QA (Quality Assurance) team with tools like Selenium or Cypress.

### 1. React Testing Library (RTL)

React Testing Library is part of the @testing-library suite of packages that provide a _user-focused_ way of testing.

What we mean by user-focused is tests should be aimed at testing your code in a way that the user will experience it. This is what really sets React Testing Library apart from other testing frameworks like Enzyme, which focus much more on implementation details.

For example, with enzyme you would test your class component functions, and check the state of the component is correct etc. However, the user doesn't know or care about what functions are doing behind the scenes, or if the props are correct, or what the state of a component is. A more user-centric test would be to check if the UI changed in the way the user expects it to (e.g. if you clicked on a tablist did the relevant tab display?).

React Testing Library facilitates this by rendering the entire DOM generated by your code with its render function, and providing methods for you to interact with that DOM. In contrast, libraries like Enzyme don't render the DOM but instead render the React code or JSX.

Another key benefit of React Testing Library is that because it does not focus on implementation details, we can often refactor code and our tests will still pass, as long as the UI change we are testing for is the same. This saves a lot of time on having to rewrite tests like you would using a traditional testing framework.

### 2. Jest

While RTL provides a way for you to interact with the "DOM" in your tests, Jest is the _test runner_, a framework for executing tests. You could use React Testing Library with another test runner (e.g. Mocha), but typically it is used with Jest.

Jest provides _Matchers_, which are methods of the `expect` output that allow you to test for certain values. Here are some examples:

```ts
expect(variable).toBe('foobar')
expect(x).toBeTruthy()
expect(x).toBeFalsy()
expect(func).toHaveBeenCalled()
```

You can find a full list of Jest (matchers available here)[https://jestjs.io/docs/en/using-matchers].

React Testing Library also comes with another addon-package called `jest-dom`. Jest-dom provides extra matchers to make it easier for you to interact with DOM nodes in your test. For example:

```ts
expect(button).toHaveAttribute('type', 'submit')
expect(div).toHaveStyle('background-color: red;')
expect(input).toHaveValue('foobar')
expect(button).toBeDisabled()
```

You can check out the full list of extra matchers (jest-dom provides here)[https://github.com/testing-library/jest-dom].

### Getting Started

Rather than import the functions directly from React Testing Library, import them from the `utils` folder instead. This is because we have modified the render function to automatically wrap our components in the `ThemeProvider` so the styled-components will work.

The render function provides various query methods - functions to help you locate elements in the DOM. For example, getByTestId, getByLabelText, getByAltText etc.

You may notice that RTL provides 2 types of query methods, ones that begin with `getBy` and ones that begin with `queryBy`. The key difference here is that `get` always expects to find the element you are querying for. If it is not there, your test will error. Query methods that begin with `queryBy` will return null if the element is not present instead of throwing an error. This is useful for testing when an element should not be present.

```tsx
import { render } from '../../../utils/testing.tsx'

test('it should render the Button component', () => {
  const text = 'Click me'

  const { getByText } = render(<Button>{text}</Button>)

  expect(getByText(text)).toBeTruthy()
})
```

### Debug

You can destructure a `debug` method from your render function.

```ts
const { debug } = render(<Button>{text}</Button>)
```

Calling `debug()` will print the generated DOM from the render function in your terminal when running the test.

### Container and Container.firstChild

You can destructure `container` from your render function.

```ts
const { container } = render(<Button>{text}</Button>)
```

This is a `div` that RTL mounts your component inside the `document.body`. `container.firstChild` will be your component's outermost html element.

### Async tests

You can write async tests that wait for DOM changes, (e.g. if an element has been inserted or removed from the DOM). You can find the official documentation on (writing async tests here)[https://testing-library.com/docs/dom-testing-library/api-async].

### Mocking

Mocking allows us to test components in isolation that would typically be integrated with other components. For example, imagine a component that receives a function as a prop which executes and makes some change to the parent component. In our unit test, we want to only test our component and not worry about what the parent is doing, but we have to provide some function as a prop for it to work. In this case we can use a mock function.

Mocking can be used for various things, you can even mock entire node_modules or imports that your component file uses. You can read more about (mock functions here)[https://jestjs.io/docs/en/mock-functions].

### Tips and Good Practices:

- Test for both positive and negative cases (e.g. if the user does something incorrect)
- Test accessibility - the `render` function is giving us the DOM, much in the same way a screen reader would "see" the website. You can test accessibility by checking for the correct `aria` attributes.
- Remember, the `render` function produces a DOM which is basically a NodeList. This means we have access to all the (Node methods and properties)[https://developer.mozilla.org/en-US/docs/Web/API/Node].

### Exercises

- Write a positive test case.
- Write a negative test case.
- Write an accessibility test.
- Write a test using a mock function.
- Write an async test
