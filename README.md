# mycelia

```
A minimal, DOM manipulation library with Javascript functions as elements and a universal dispatching system
```

This is a continuation/improvement/evolution from [mantle](https://github.com/mdxprograms/mantle)

## Installation

```
npm i -S @wallerbuilt/mycelia
```

## Usage

```typescript
import { mount, dom } from "@wallerbuilt/mycelia";

// Main element to mount the mycelia app to
const appSelector = "#app"

// abstracting the div and h1 element from dom object (could also use it as `dom.div` and `dom.h1`)
const { div, h1 } = dom;

const Heading = h1({ classname: 'intro-heading' }, "Hello mycelia!");

const handleClick = () => {
  console.log("Button clicked");
};

const Content = div(
  { className: "container" },
  p("This is a paragraph"),
  button({ onClick: handleClick }, "Click me")
);

// Children are an array of mycelia elements or non-array strings
const App = div({ classname: 'app-container' }, [Heading, Content])

// mount our App to appSelector element
mount(App, appSelector);
```

## Events and Dispatch

### Emitter
Emitter is a class used as a central messaging system in a TypeScript or JavaScript application, allowing different parts of the application to communicate with each other using events and callbacks.

Two was to approach this is either creating a new file defining your "store" and importing into each file that needs access. Or create the store and event functions within the main app file. It depends on the size of the application. Use separate store or event file for bigger applications or all in main file if it is a small footprint.

To use the Emitter class, you need to create an instance of it, and then use its methods to register event listeners and dispatch events.

```typescript
import { Emitter } from "@wallerbuilt/mycelia";

// create an instance of Emitter
const emitter = new Emitter();

// register an event listener for the "myEvent" event
const listener = (payload) => {
  console.log('myEvent payload:', payload);
};
emitter.on('myEvent')(listener);

// dispatch the "myEvent" event with a payload
emitter.dispatch('myEvent')({ data: 'example payload' }); // logs "myEvent payload: { data: 'example payload' }"
```