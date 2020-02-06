# Lesson 5 - Filtering Todos

## 1. Planning

We want users to be able to filter todos depending on if they are `completed`, `incomplete` or be able to view `all`. Lets plan what we need to do. We need:

- A way for the user to select a filter.
- A way to set a filter and get which filter is selected.
- A function that can filter the displayed list of todos.

## 2. Building the filters

- Write a type definition `Filter` for the possible filter options. What kind of type can you use here?
- `useState` to store the selected filter in state. Use the type definition you created previously to make it type safe.
- Use controlled inputs so the user can pick a filter option.

## 2. Cache state in local storage

Lets stop all the todos from getting wiped everytime the page reloads by saving it to local storage. This will make it easier for when we come to style our todos.

- Whenever there is a state change, write trigger a function to write the state to local storage - consider `useEffect`.
- On pageload - set the initial state to be what is fetched from localStorage (or an empty array if `undefined`)
- You may find that TypeScript errors when trying to `JSON.parse` what you get from localStorage. Can you look at the type definitions for each method and figure out why?
