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
