# mycelia

```
A minimal, DOM manipulation library with Javascript functions as elements and a universal dispatching system
```

This is a continuation/improvement/evolution from [mantle](https://github.com/mdxprograms/mantle)

## Example Usage

```typescript
import { mount, dom } from "@wallerbuilt/mycelia";

// Main element to mount the mycelia app to
const appSelector = "#app"

// abstracting the div and h1 element from dom object (could also use it as `dom.div` and `dom.h1`)
const { div, h1 } = dom;

const Heading = h1({ classname: 'intro-heading' }, "Hello mycelia!");'

// Children are an array of mycelia elements or non-array strings
const App = div({ classname: 'app-container' }, [Heading])

// mount our App to appSelector element
mount(App, appSelector);
```
