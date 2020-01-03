# Lesson 4 - Finish updating and deleting todos

## 1. Make todo text editable

- We not only want to be able to mark todos as complete, but edit the actual text as well.
- The `CREATE` action we created in the previous lesson should already handle this for us. All we need to do is make the todo editable.
- Hint: We can re-use the `Form` component we created previously.
- You'll need to `useState` to manage the edit mode of the `TodoItem` component. Add this and apply type guards like we have done previously with `useState`.

## 2. Delete Todos

- Write a `DELETE` case for your reducer function, and update your `Action` type definition to include it.
- Pass your delete function to the `TodoItem` component. Update the `TodoItemProps` type definition to accept this.
- Wire it up - add a delete button to trigger your delete function.
