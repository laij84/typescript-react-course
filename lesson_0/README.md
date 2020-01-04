# TypeScript 101

This lesson is a crash course to cover the fundamentals of TypeScript. This won't cover everything, but it will be enough to get started building React applications.

## What is TypeScript?

TypeScript is a superset of JavaScript - meaning it contains all the features of JS and has been expanded or enhanced to include other features as well. TypeScript adds static typing to JavaScript, meaning that the types of variables are checked at compile time.

## Why should we bother using it?

TypeScript adds a lot of benefits to your app such as:

- Catches errors on compile time instead of runtime
- Reduces amount of bugs in your application.
- Better Developer Experience (DX)
- Documents your code and makes code easier to understand.

## Getting Started - Basic Types

### String, Number, Boolean

The three most common primitive types you will see in TypeScript are: `string`, `number`, `boolean` - don't confuse this with the javascript constructors `String`, `Number`, `Boolean`.

You can explicitly assign types to variable declarations like this:

```ts
const name: string = 'Kitty Pimms'

const age: number = '28'

const deceased: boolean = false
```

### Array Types

You can type the contents of an array, using the square brackets or the `Array` type.

```ts
const drinks: string[] = ['vodka', 'gin', 'rum', 'tequila']
const food: Array<string> = ['ramen', 'sushi', 'pizza', 'pasta']
```

### Tuples

Similar to the Array types, however Tuples are used to define a fixed number of items in an array.

```ts
const person: [string, number] = ['Kitty Pimms', 28]
```

In this example `person` is an array with 2 items, the first is always a string, the second is always a number. Adding items to the array, or changing the order will throw an error.

### Enums

Enums can be used to define a set of constants. This is similar to union types (which will be discussed later), but there are some key differences.

```ts
enum Cat {
  Calico,
  Ginger,
  Tabby,
  Tuxedo,
}

// You can use the dot notation like with objects to specify which type you want.
const cat: Cat = Cat.Calico // Valid

const kitten: Cat = 'Bengal' // Error: Type '"Bengal"' is not assignable to type 'Cat'.
```

Unlike other types in TypeScript which only exist at compile time, enum values can be used at runtime. Enums are numeric by default - meaning at runtime they evaluate to a numeric value (their index value).

```ts
enum Cat {
  Calico,
  Ginger,
  Tabby,
  Tuxedo,
}
console.log(Cat.Calico) // outputs 0
console.log(Cat.Ginger) // outputs 1
console.log(Cat.Tabby) // outputs 2
console.log(Cat.Tuxedo) // outputs 3
```

You can also assign string values to enums, like this:

```ts
enum Cat {
  Calico = 'CALICO',
  Ginger = 'GINGER',
  Tabby = 'TABBY',
  Tuxedo = 'TUXEDO',
}

console.log(Cat.Calico) // outputs "CALICO"
console.log(Cat.Ginger) // outputs "GINGER"
console.log(Cat.Tabby) // outputs "TABBY"
console.log(Cat.Tuxedo) // outputs "TUXEDO"
```

Even though enums are classified as a "basic type" they can be quite complicated. Most of the time you will be using a union types (discussed later) for a predefined set of things, so don't worry too much about understanding enums if you don't get it right now.

### Any

Sometimes we may not know the type, for example if the variable is dynamic or we are scaffolding part of our app and we aren't sure of a specific type yet. In this case, we can use `any` - which is basically an _opt-out_ type - meaning its no safer in terms of type checking than regular JavaScript.

```ts
let dunno: any = 3
dunno = 'foo bar' // Valid
dunno = false // Valid
```

### Unknown

`unknown` is the type-safe alternative to `any`. It's useful for us to signal “this can be any value (which is potentially very dangerous, so you must perform some type of checking before you use it”. This forces other users to safely use returned values

Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or proper type checking:

```ts
// We assign a value here, one with `any`, one with `unknown`:
let myThing1: any = 10 // We can assign anthing to any
let myThing2: unknown = 10 // We can assign anthing to unknown just like any

// We try to assign our variables to something we've explicity said is a string:
let s1: string = myThing1 // OK! Any is assigable to anything
let s2: string = myThing2 // NOT OK! We can't assign myThing2 to any other type (without an explicit assertion)

// So we need to EXPLICITLY use a type assertion (as ___) in order to use `myThing2, so as to tell the type system we know better:`
let s2: string = myThing2 as string
```

### Null, Undefined

In TypeScript, both `undefined` and `null` have types of the same name.

```ts
let u: undefined = undefined
let n: null = null
```

By default null and undefined are assignable to all types in TypeScript.

```ts
let fizz: number = 123
fizz = null // Okay
fizz = undefined // Okay
```

In strict mode (which is encouraged), you cannot assign null or undefined to another type.

```ts
let fizz: number = 123
fizz = null // Error: Type 'null' is not assignable to type 'number'.
fizz = undefined // Error: Type 'undefined' is not assignable to type 'number'.
```

### Void

Type `void` is the absence of any type at all. You may commonly see this as the return type of functions that do not return a value:

A function that doesn't explicitly return a value implicitly returns the value `undefined` in JavaScript. Although it doesn't return anything, it still returns. We usually ignore the return value in these cases. Such a function is inferred to have a `void` return type in TypeScript.

```ts
function warnUser(): void {
  console.log('This is my warning message')
}
```

### Never

The `never` type represents the type of values that never occur. For example, a function that doesn't complete normally (e.g. throws an exception) never returns. It doesn't return `undefined`, either. In this case we can define the return type as `never`.

```ts
function error(message: string): never {
  throw new Error(message)
}
```

### Object

The type `object` is a bit of a misnomer, it actually refers to anything that is _not_ a primitive type (string, number, boolean, null, undefined).

```ts
const person: object = {
    name: 'Kitty Pimms',
    age: 28
    deceased: false
}
```

Many things in JavaScript are technically objects (functions, arrays etc), so this would be valid:

```
const hello: object = () => {
  console.log('world')
}
```

This usage of `object` is not particularly helpful in the example above. There are other ways we can safely type functions and objects literals.

## Advanced Types

### Union Types

A variable with a union type can have more than one type. Each possible type is separated with `|`.

```ts
type Value = string | number | boolean

const value1: Value = 'hello' // Valid
const value2: Value = 3 // Valid
const value3: Value = false // Valid

const value4: Value = ['hello', 'world'] // Error: Type 'string[]' is not assignable to type 'Value'.
```

### Literal Types

Literal types specify the exact value of the type.

```ts
// String Literal Type - Although it is a string, it is more specific. It must exactly match 'Kitty' or will error.
type Name = 'Kitty'

const firstName: Name = 'Kitty' // Valid
const anotherName: Name = 'Bob' // Error: Type '"Bob"' is not assignable to type '"Kitty"'.

// Number Literal Type - Although it is a number, it is more specific. It must exactly match 3 or will error.
type Num = 3

const num: Num = 3 // Valid
const anotherNum: Num = 52 // Error: Type '52' is not assignable to type '3'.
```

Literal types can also be used with union types to define an exact list of types.

```ts
type TextAlign = 'left' | 'right' | 'center'

const leftAlign: TextAlign = 'left' // Valid
const rightAlign: TextAlign = 'right' // Valid

const verticalAlign: TextAlign = 'top' // Error: Type '"top"' is not assignable to type 'TextAlign'
```

You can also use the `type` keyword to describe the shape of an object. For example:

```ts
type Person = {
  name: string
  age: number
}

const bob: Person = {
  name: 'Bob',
  age: 53,
}
```

In the next section we will be talking about interfaces, which also describe the shape of an object. There are differences between using a `type` vs `interface`, but in general in your React application, either would work. Just use them consistently.

If you want to learn more about the difference between `type` and `interface`, [this blogpost](https://pawelgrzybek.com/typescript-interface-vs-type/) explains it pretty well.

### Interfaces

Interfaces describe the shape of an object. A similar comparison in React would be `PropTypes.shape({})`.
Unlike the keyword `type` declaration, `interface` can **only** be used to describe the shape of an object.

```ts
interface Person {
  name: string
  age: number
  deceased: boolean
  greet: () => void // Function type
}

const kittyPimms: Person = {
  name: 'Kitty Pimms',
  age: 28,
  deceased: false,
  greet: () => console.log('Hello'),
}
```

Interfaces can be extended to incorporate the properties of another interface. For example:

```ts
interface Job {
  title?: string // Question mark means property is optional
  organisation?: string
}

interface Person extends Job {
  name: string
  age: number
  deceased: boolean
  greet: () => void
}

const kittyPimms: Person = {
  name: 'Kitty Pimms',
  age: 28,
  deceased: false,
  greet: () => console.log('Hello'),
  title: 'Web Developer',
  organisation: 'Pride In London',
}
```

You can also define interface properties as `readonly`. This is useful in React where direct state mutation is an antipattern.

```ts
interface State {
  readonly name: string
  readonly age: number
}

const state: State = {
  name: 'Bob',
  age: 10,
}

state.name = 'Kitty' // Error: Cannot assign to 'name' because it is a read-only property.

const updatedState = { ...state, name: 'Kitty' } // Valid
```

You will often see interfaces used in React to define the props a component is expecting.

### Intersection Types

Intersection types combine multiple types with `&` and the resulting type has the properties of all the types. This is commonly used with interfaces or object literal types.

```ts
interface Person {
  name: string
  job: string
  age: number
}

interface Mammal {
  species: string
}

const bob: Mammal & Person = {
  name: 'Bob',
  job: 'Developer',
  age: 30,
  species: 'Homo Sapien',
}
```

You may notice this seems similar to extending an interface (e.g. `interface Person extends Mammal`). However, there are some differences. This is a bit advanced and outside of the scope of the intro lesson, but you can read more about it on this [Stack Overflow thread](https://stackoverflow.com/questions/52681316/difference-between-extending-and-intersecting-interfaces-in-typescript) which explains it pretty well.

### Utility Types

Interfaces can be used with a range of [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). Here are some of the most common that you'll probably use:

1. Pick

Pick allows you to pick a subset of properties from an interface to use as a type.

```ts
interface Person {
  name: string
  age: number
  deceased: boolean
}

const nameAndAge: Pick<Person, 'name' | 'age'> = {
  name: 'Kitty',
  age: 28,
}
```

In the above example, if we used just `Person` without `Pick`, the `deceased` property would be required and you would get an error.

2. Omit

The opposite of `Pick`, allows you to omit a property from an interface.

```ts
interface Person {
  name: string
  age: number
  deceased: boolean
}

const nameAndAge: Omit<Person, 'deceased'> = {
  name: 'Kitty',
  age: 28,
}
```

3. Partial

`Partial` makes all properties of an interface optional.

```ts
interface Person {
  name: string
  age: number
  deceased: boolean
}

const person: Partial<Person> = { name: 'Kitty' }
// Don't need to define age or deceased as all properties are optional
```

4. Required

The opposite of `Partial` - makes all optional properties required

```ts
interface Person {
  name: string
  age?: number
  deceased?: boolean
}

const person: Required<Person> = { name: 'Kitty' }
// Error: Type '{ name: string; }' is missing the following properties from type 'Required<Person>': age, deceased
```

### Function Types

There are different ways you can type a function.

Here we have a named function `add` which takes two numbers and adds them together.

```ts
function add(x: number, y: number): number {
  return x + y
}
```

It takes arguments which are defined in the function parenthesis as numbers `(x: number, y: number)`. Outside of the parenthesis there is a colon with a `number` after it, before the opening curly bracket. This is the type of what the function returns (number).

Anonymous functions assigned to variables can be typed similar to how we type other variables, by putting a colon and the type definition after the variable name.

```ts
const add: (x: number, y: number) => number = (x, y) => {
  return x + y
}
```

This may be difficult to read, but essentially it is the same as:

```ts
type Add = (x: number, y: number) => number

const add: Add = (x, y) => {
  return x + y
}
```

You can also use interfaces to type functions. Remember, in JavaScript functions are just special objects that can be called / invoked. We can define the call signature of a function with an interface like this:

```ts
interface Add {
  (x: number, y: number): number
}

const add: Add = (x, y) => {
  return x + y
}
```

Why would we bother using an interface to type a function? In some cases functions have properties too. A key example are Function Components in React. They are functions, but also have properties like `Component.defaultProps` or `Component.displayName`. In fact, this is exactly how the React type definitions packages define their function component.

```ts
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null
  propTypes?: WeakValidationMap<P>
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<P>
  displayName?: string
}
```

Don't worry if you don't fully understand the example above, as its using other types specific to the React type definitions and Generics (which we will cover next).

But at a glance from this type definition, we can see that Function Components have properties `propTypes`, `contextTypes`, `defaultProps` and `displayName`, and also have a call signature which takes some `props` and `context` as arguments, and returns some React Elements (JSX), or `null`.

## Generics

Generics in typescript are a way to make our code more reusable, so that our code can work with a variety of types instead of just one type, but still be type safe.

In this example, we have a function that returns the argument that is passed to it. This is a contrived example, but is a simple way to demonstrate generics.

```ts
function output(arg: number): number {
  return arg
}

output(5)
```

This only takes numbers, what if we wanted this function to handle strings as well? We could use a union type like:

```ts
function output(arg: number | string): number | string {
  return arg
}

output('hello')

output(5)
```

While this works, its probably not that reusable since we'd have to keep extending the union if we need the function to handle more types. Another consideration is we might not even know what type is being passed to the function.

We could use `any` but this is not type safe since the return type could be totally different to the argument passed. This is where generics comes to the rescue.

```ts
function output<T>(arg: T): T {
  return arg
}
```

Here we are using a type variable `T`. What the above code is saying is, function `output` accepts type `T` shown in the angle brackets, and its argument will be of the same type `T`, and the function will return `T`.

`T` is a _type variable_ - meaning it can be called anything. We could call it `Scooba` and it wouldn't matter. Typically the standard convention is to use capital single letters to denote type variables, like `T` for `type` or `P` for `props`.

This maintains type safety as if the return type does not match the type definition it will error. For example:

```ts
function output<T>(arg: T): T {
  return 'FooBar' //Error: Type '"FooBar"' is not assignable to type 'T'.
}
```

Because we defined the return type as the generic `T`, this does not match "FooBar" which results in an error. If set the return type as `any` then this would be valid, which does not apply any type guarding.

When invoking the function, you can explicitly set the type. For example:

```ts
function output<T>(arg: T): T {
  return arg
}

output<string>('hello world')

output<number>(123)
```

Generics can also be used in type definitions, like interfaces. Remember you can use an interface as a type definition for a function (because functions are objects).

```ts
interface Output<T> {
  (arg: T): T
}

const output: Output<string> = arg => arg

output('hello')
```

When looking at third party libraries' type definitions, you'll often see them using generics in their interfaces and type definitions. Generics can be a bit confusing to understand, and will make more sense once you start using them more often.

This concludes the beginner TypeScript lesson. In the next lesson, we will apply these core concepts to build a Todo App in React with TypeScript.

## Further Resources

[https://www.typescriptlang.org/docs/home.html](https://www.typescriptlang.org/docs/home.html)

[https://basarat.gitbooks.io/typescript](https://basarat.gitbooks.io/typescript/)

[https://www.saltycrane.com/cheat-sheets/typescript/react/latest](https://www.saltycrane.com/cheat-sheets/typescript/react/latest/)

[https://github.com/typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

[https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md)

[Extending vs Intersecting Interfaces](https://stackoverflow.com/questions/52681316/difference-between-extending-and-intersecting-interfaces-in-typescript)

[Type vs Interface](https://pawelgrzybek.com/typescript-interface-vs-type/)

[Ben Awad - TypeScript Generics Tutorial](https://www.youtube.com/watch?v=nViEqpgwxHE&t=982s)

[Ben Awad - TypeScript React Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8)
