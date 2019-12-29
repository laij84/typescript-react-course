# TypeScript 101

This lesson is a crash course to cover the fundamentals of TypeScript. This won't cover everything, but it will be enough to get started building a React Todo App.

## What is TypeScript?

TypeScript is a superset of JavaScript - meaning it contains all the features of JS and has been expanded or enhanced to include other features as well. TypeScript adds static typing to JavaScript, meaning that the types of all variables are known or inferred at compile time.

## Why Bother?

There is a bit of a learning curve and some of the error messages can be a bit long and intimidating, but overall TypeScript adds a lot of benefits to your app such as:

- Catches errors on compile time instead of runtime
- Reduces amount of bugs in your application.
- Better Developer Experience (DX)
- Documents your code and makes code easier to understand.

## Getting Started - Basic Types

### Primitive String, Number, Boolean

The four main primitive types you will see in TypeScript are: string, number, boolean, object - don't confuse this with the javascript constructors String, Number, Boolean, Object.

You can explicitly assign a type to variable declarations like this:

```ts
const name: string = 'Kitty Pimms'

const age: number = '28'

const deceased: boolean = false
```

### Array Types

You can type the contents of an array, using the square brackets or the Array type.

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

Enums can be used to define a fixed set of types that can be selected from. You can use the dot notation like with objects to specify which type you want.

```ts
enum Cat {
  Calico,
  Ginger,
  Tabby,
  Tuxedo,
}

const cat: Cat = Cat.Calico
```

Enums also use numeric indexes (similar to arrays)

```ts
const kitten: Cat = Cat[2] // Evalutes to 'Ginger'
```

### Any

Sometimes we may not know the type, for example if the variable is dynamic or coming from a third party library. In this case, we can use `any` - which is basically an opt-out type - meaning its no safer in terms of type checking than regular JavaScript.

```ts
let notSure: any = 3
notSure = 'foo bar'
notSure = false
```

### Null, Undefined

In TypeScript, both undefined and null actually have their own types named undefined and null respectively.

```ts
let u: undefined = undefined
let n: null = null
```

You wouldn't really ever use this to define a variable declaration, the most common use case you'll see for this in union types (which will be covered later) where a variable may possibily be null or undefined.

### Void

Type `void` is the absence of any type at all. You may commonly see this as the return type of functions that do not return a value:

A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript. Although we typically say that such a function "doesn't return anything", it returns. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.

```ts
function warnUser(): void {
  console.log('This is my warning message')
}
```

### Never

The `never` type represents the type of values that never occur. For example, a function that throws an exception never returns any values.

```ts
function error(message: string): never {
  throw new Error(message)
}
```

A function that has a never return type never returns. It doesn't return undefined, either. The function doesn't have a normal completion, which means it throws an error or never finishes running at all.

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

This usage of `object` is not particularly helpful in these examples as there are other ways we can type functions and objects literals.

## Advanced Types

### Union Types

### Interfaces

### Intersection Types
