# Lesson 1 - Starting our Todo App in TypeScript

## 1. Planning

What do we need to make a Todo App? Start thinking about what properties a todo needs.

## 2. Create a type definition for your Todo

- Now that we roughly know what the todo should look like, lets write a type definition `TodoProps` to use. (Tip: consider using a TypeScript `interface`).
- For now, lets do this inside `./lesson_1/pages/home/Home.tsx` above the `Home` component.

## 3. Make a Todo the user can create.

- Lets make a way for users to create todos. There should be an input field for them to enter task for their todo list. We'll need to use [controlled inputs](https://reactjs.org/docs/forms.html#controlled-components) in React to do this. We want our React component state to be our "single source of truth", giving us greater control and (likely) fewer bugs.
- The `<Product/>` component needs its own state to manage the controlled input where the user enters the value of the voucher. (Tip: Use the useState hook to do this).
