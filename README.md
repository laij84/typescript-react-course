# Introduction to TypeScript in React

## About the course

The aim of this course is to help developers coming from ReactJS learn basic TypeScript, specifically how to use it when building a React application. We will be focusing on modern React syntax using Function Components and Hooks.

Learn by doing - this course will use the core principles of persistent storage - `Create`, `Read`, `Update`, and `Delete` (CRUD) - to build a Todo App (original, I know!) in React with TypeScript.

## Outcomes

By the end of the course you should be familiar with:

- Typescript basics (e.g. string, number, boolean, tuples, enums)
- Some advanced types (e.g. unions, interfaces, generics)
- Adding type assertions to your variables and functions to make them safer.
- Using TypeScript instead of PropTypes when typing your React component props.
- Debugging TypeScript and inspecting existing type definitions from third party libraries like React.
- Using Typescript with Function Components and Hooks

## Class format

Each lesson will have various tasks to complete. It is encouraged that you work in pairs or small groups to solve the problem. Each group should use **one** computer and take turns being the "driver" (person typing) while the others in the group help "navigate".

You'll be given a short amount of time to look into the problem, after which one group will present their solution, (or how far they have gotten), and collectively as a class we will go through it and fix/refactor etc. Don't worry, each group will get a chance to present.

## Prerequisites

### 1 Reading

Please read the Lesson 0 README.md in full in advance of the workshop. This is your TypeScript 101 cheatsheet which explains all the fundamental concepts. We won't be going through this during the course. The course will be focused on the practical application of TypeScript (specifically in React).

### 2. Setup

To ensure we are working with all the same tooling and to prevent any issues with setup differences on the day of the course, we will be using VSCode. The repository will come with a settings file to ensure consistency.

Please download and install VSCode at [https://code.visualstudio.com/](https://code.visualstudio.com/)

Once you have done this, please ensure you have the following extensions installed.

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Getting started

Clone the repository and run `yarn` in the project root to install dependencies.

If you want to commit your work, please checkout a new branch with your name in it (to prevent naming collision with fellow classmates). It is recommended (at least for the duration of the course) you clone rather than fork the repo, so that you can merge any updates from master into your branch.

The repository contains a folder for each lesson. The starter code for each subsequent lesson should be the finishing code for the previous lesson.

Lesson 0 contains a README.md file which is an introduction to TypeScript and should be read in full before starting Lesson 1.

To run a lesson, make sure you have an `.env` file in the root of your project - copy the `.env.example`. Update the .env variable `REACT_APP_LESSON` to the number of the lesson you want to run. For example, to run lesson 1, your `.env` file should contain `REACT_APP_LESSON=1`. Note: This won't work with Lesson 0 as this does not require using React.

After you have selected the lesson, run `yarn start` to run the application in your browser.

Each lesson has an accompanying README. Read it IN FULL first before attempting anything, then refer to it throughout the lesson.

The ending code for each lesson is the starter code for the next. Try and not look ahead, but use it as a reference if needed.

## Looking Forward

In the following workshops after we have build the Todo App, we will be using this codebase as a sandbox / playground for learning Styled-System with Styled-Components.
