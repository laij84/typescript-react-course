# Lesson 3 - Updating our todos

## 1. Refactor with `useReducer`

- We can now display our todos, but now we need to mark them as complete. The complexity of this app is growing, we need to be able to update a todo, and further down probably delete them.
- It probably makes sense to switch to `useReducer`. Tip: If you're unsure about the usage of `useReducer`, try inspecting the type definitions for it. In VSCode, you can do this by hovering over the function, pressing `cmd` and clicking on it. You might need to inspect a few levels deep.
- In `Home.tsx` refactor your `useState` to `useReducer`.
- Only write a `CREATE` case for your reducer function for now. Check the app still works and you can create todos.
- You may see your reducer function is throwing TypeScript errors as the arguments have an implicit `any` type - how can we add type guards here?

## 2. Mark todo as complete.

- Now write a case in your reducer function for `UPDATE`.
- We'll need to locate the specific todo in our state, and update it. Remember direct state mutation is a no-no in React.
- Wire it up so that when you click the checkbox, the `UPDATE` action is dispatched.
