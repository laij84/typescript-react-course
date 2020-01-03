# Lesson 2 - Finish creating and displaying todos

## 1. Displaying todos

- In order to display the todos, we need to store the values returned from the form somewhere, and then render them on the page.
- In `./pages/home/Home.tsx`, use the `useState` hook to store each submitted todo in state.
- We need a way to determine if a todo is completed or not. By default, a todo should be incomplete. Refactor your state to incorporate this.
- Apply type guards to your useState function. Write a `Todo` interface.
- Map over these and display them in a list. Just display the todo text for now. In the next part we will flesh this out more.

## 1. Make a `TodoItem` component

- Create the folder `mkdir ./components/todoItem` and create a file `TodoItem.tsx`. Scaffold out a React Arrow Function Component which returns an `<li>`.
- Think about what props this component should take. Write an interface for it.
- For now, lets focus on just displaying the information. In the next lesson we will handle updating the todos to mark them as completed.
