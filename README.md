# mycelia

```
A minimal, DOM manipulation library with Javascript functions as elements and a universal dispatching system
```

This is a continuation/improvement/evolution from [mantle](https://github.com/mdxprograms/mantle)

## Installation

```
npm i -S @wallerbuilt/mycelia
```

## Basic Usage

```typescript
import { mount, dom } from "@wallerbuilt/mycelia";

// Main element to mount the mycelia app to
const appSelector = "#app"

// abstracting the div and h1 element from dom object (could also use it as `dom.div` and `dom.h1`)
const { div, h1 } = dom;

const Heading = h1({ classname: 'intro-heading' }, "Hello mycelia!");

// Children are an array of mycelia elements or non-array strings
const App = div({ classname: 'app-container' }, [Heading])

// mount our App to appSelector element
mount(App, appSelector);
```

## Elements

Elements are created from the `dom` object.

```typescript
import { dom } from "@wallerbuilt/mycelia";

const { div, button, p } = dom;

const Item = div({ className: "item" }, [
	p("I have some interesting things to say in this item's paragraph."),
	button({ onclick: console.log }, "Click me!")
]);
```

## Mount

`mount` is the jumping off point of your application and typically takes the outermost element as an argument.

```typescript
import { mount, dom } from "@wallerbuilt/mycelia";

const appSelector = "#app";

const App = dom.div("the app here")

mount(App, appSelector);
```

## Events and Dispatch

```typescript
import { Emitter } from "@wallerbuilt/mycelia";

type State = {
  todos: string[];
}

const emit = new Emitter<State>(); // the generic is then passed to `on` and `dispatch` on instantiation
```

When using `emit.on` or `emit.dispatch`, your payload returned and sent (respectively), requires that type of state object to be passed.

```typescript
emit.on("event:name")(({ todos }) => console.log(todos));

emit.dispatch("event:name")({ todos: ["one added"] });
```