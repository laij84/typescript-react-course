# Lesson 1 - Creating Todos

## 1. Planning

What do we need to make a Todo App?

- A way for users to create todos
- A way to display the todos
- A way to complete todos
- Filter todos between incomplete/complete (bonus)

Lets start with the first point - A way for users to create todos. It sounds like we'll need a form for users to submit their todos.

## 3. Create a Form component

- Create the following directory with the command: `mkdir ./components/form`
- Create a file inside it called `Form.tsx` - the `tsx` extension is used for TypeScript files that contain JSX.
- Inside `Form.tsx` scaffold out a React Arrow Function Component which returns a `<form>` element.
- There should be an input field for them to enter their todo. We'll need to use [controlled inputs](https://reactjs.org/docs/forms.html#controlled-components) in React to do this. We want our React component state to be our "single source of truth", giving us greater control and (likely) fewer bugs.
- Use the hook `useState` to make the text input inside the form a controlled input.
- Look at the type definition for the `useState` hook. How can we apply type guarding to the state of our component?
- Write a `handleChange` function to set the component state.
- Write a `handleSubmit` function that gets called when the form is submitted. Don't forget to `preventDefault` to stop the page from reloading.
- Use the React Dev tools to check your controlled input is working.

## 3. Typing our Component

- Think about how this `Form` component is going to be used. We need a way to access the value of this text input outside the component. What props should it take?
- Hint: consider using a TypeScript `interface`.
