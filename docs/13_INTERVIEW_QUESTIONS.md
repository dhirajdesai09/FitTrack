# FitTrack Master Interview Questions Index

A massive, high-caliber study manual hosting **180 technical questions and answers** across React, Core JavaScript, and Project-specific architecture.

---

## 🏛️ PART 1: 100 React Interview Questions & Answers

### 1. What is React?
React is an open-source, component-based front-end JavaScript library used to build interactive, fast, and scalable user interfaces, primarily single-page applications.

### 2. What is the Virtual DOM?
The Virtual DOM is an in-memory representation of the real HTML DOM. When state changes, React updates this Virtual DOM first in a lightweight process, avoiding expensive direct updates to the browser.

### 3. How does React's Reconciliation work?
Reconciliation is the algorithm React uses to compare the new Virtual DOM tree with the previous one. It identifies the exact changes (diffing) and updates only those nodes in the real DOM.

### 4. What is JSX?
JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like markup directly inside JavaScript files, which is compiled by tools like Vite into standard React element calls.

### 5. Why do React components need keys?
Keys help React uniquely identify which elements in a list have changed, been added, or been removed. They are critical for reconciliation performance and avoiding rendering bugs.

### 6. What is the difference between state and props?
- **State:** Represents local, mutable data owned and managed privately inside a component.
- **Props:** Represents read-only data passed down from parent to child components, enabling unidirectional data flow.

### 7. What are Hooks?
Hooks are functions introduced in React 16.8 that allow functional components to use state, lifecycles, and other class-equivalent features.

### 8. What is the purpose of `useState`?
It is a hook that declares a state variable in a functional component, returning the current state value and a setter function to update it.

### 9. How does `useEffect` work?
It is a hook that handles side-effects (fetching data, setting timers, or mutating DOM) in functional components. It runs after rendering, controlled by its dependency array.

### 10. What happens if the dependency array of `useEffect` is empty?
The effect runs exactly once after the component mounts, equivalent to `componentDidMount` in class components.

### 11. What is the cleanup function in `useEffect`?
A function returned by the effect callback. React runs it before the component unmounts or before the effect re-runs to clean up resources like subscription intervals.

### 12. What is the difference between `useEffect` and `useLayoutEffect`?
- `useEffect` runs asynchronously after the browser paints the screen, preventing blocking.
- `useLayoutEffect` runs synchronously before the paint cycle, useful for measuring layout dimensions.

### 13. What is React Context?
An API that shares values (global states, configurations) across the component tree without manually passing props through intermediate layers (avoiding prop-drilling).

### 14. What is `useContext`?
A hook that consumes a value from a React Context provider, subscribing the component to state updates.

### 15. What is `useRef`?
A hook that returns a mutable object with a `.current` property. It persists across renders without triggering a re-render when modified, and is commonly used to access direct DOM nodes.

### 16. What is the difference between `useMemo` and `useCallback`?
- `useMemo` memoizes the computed *result* of a costly function.
- `useCallback` memoizes the *function instance* itself, preventing recreation on re-renders.

### 17. What is React.memo?
A higher-order component that shallow-compares props, preventing functional components from re-rendering if their input props have not changed.

### 18. What is Prop-Drilling?
The process of passing props down through multiple layers of intermediate components that do not actually need the data, just to deliver it to a deeply nested child.

### 19. How do you avoid Prop-Drilling?
By utilizing state managers like React Context API, custom hooks, or state containers like Redux.

### 20. What is a Custom Hook?
A reusable JavaScript function whose name starts with "use" and which can call other React hooks, abstracting complex component logic.

### 21. What is strict mode in React?
A development tool that runs components twice to detect side-effects, deprecated APIs, and memory leaks.

### 22. What is unidirectional data flow?
The principle that data in React always flows downwards from parent components to children via props.

### 23. What are Controlled Components?
Components where form input values are driven and managed entirely by React state.

### 24. What are Uncontrolled Components?
Components where form values are stored and driven directly by the DOM, accessed using React refs.

### 25. What is the difference between functional and class components?
- **Functional:** Pure JavaScript functions that use hooks to manage state.
- **Class:** Legacy components using ES6 class syntax, inheritance, and `this.state`.

### 26. What is the role of `children` prop?
A special prop that passes nested elements from parent tags down into the child container.

### 27. What is React Suspense?
A feature that lets components "wait" for asynchronous actions (like lazy-loading code or data fetching) before rendering.

### 28. What is Lazy Loading in React?
A optimization technique using `React.lazy()` to defer loading component code chunks until they are actively rendered.

### 29. What is a Higher-Order Component (HOC)?
A custom function that takes a component as an argument and returns a new component with enhanced capabilities.

### 30. What are React Portals?
A mechanism to render DOM nodes outside the parent component's structural wrapper, useful for modals, tooltips, or overlays.

### 31. What is the difference between rendering and painting?
- **Rendering:** React executing components to calculate the virtual DOM tree.
- **Painting:** The browser drawing pixels onto the physical screen after the layout cycle.

### 32. Can hooks be called conditionally?
No. Hooks must always be called at the top level of a component to preserve execution order across renders.

### 33. Why must hook names start with "use"?
It allows linter plugins to identify them and enforce rules of hooks.

### 34. What is state batching?
A performance feature where React groups multiple state updates into a single re-render cycle.

### 35. What is hydration in React?
The process where client-side JavaScript attaches event listeners to pre-rendered HTML sent by a server.

### 36. What is Single Page Application (SPA)?
A website that loads a single HTML document and dynamically rewrites its content in response to interactions, avoiding full page reloads.

### 37. What are fragments in React?
Empty tags `<></>` that group sibling nodes without injecting redundant structural divs into the HTML DOM.

### 38. How does `setCount(count + 1)` differ from `setCount(prev => prev + 1)`?
The functional updater guarantees access to the absolute latest state value, preventing race condition bugs in asynchronous updates.

### 39. What are error boundaries?
Class components that implement `getDerivedStateFromError` or `componentDidCatch` to catch errors in child components and display fallback UIs.

### 40. Can you use hooks inside a class component?
No. Hooks are strictly exclusive to functional components.

### 41. What is prop-types?
A legacy library used to validate the runtime data types of incoming component props.

### 42. What is the diffing algorithm?
React's heuristic O(n) algorithm that compares DOM nodes of the same level to identify structural mutations efficiently.

### 43. What happens when a component's state changes?
React schedule a re-render for that component and all of its nested children.

### 44. How do you optimize React render performance?
Using `React.memo`, `useMemo`, `useCallback`, state colocation, and lazy loading.

### 45. What is CSS-in-JS?
A styling pattern where CSS styles are declared directly inside JavaScript files using libraries like styled-components.

### 46. What is tailwind css?
A utility-first CSS framework that compiles styles directly into HTML classes, speeding up development.

### 47. Why should we avoid using array indexes as keys?
If list items are reordered, inserted, or deleted, using index keys causes React to misidentify nodes, leading to broken UI states.

### 48. What are synthetic events?
Cross-browser wrappers React wraps around native DOM events to ensure consistent event behavior.

### 49. What is the purpose of `useImperativeHandle`?
A hook that customizes the instance value exposed to parent components when using refs.

### 50. What does `forwardRef` do?
Enables components to pass their incoming ref down to an internal child DOM node.

### 51. What is component colocation?
The best-practice of keeping state, assets, and styles as close to the consuming component as possible.

### 52. What is code-splitting?
Breaking down large JavaScript bundles into smaller chunks loaded on-demand.

### 53. Does React support double data binding?
No. React uses strictly one-way unidirectional data binding.

### 54. What is the difference between `element` and `component`?
- **Element:** A plain object describing a DOM node or component instance.
- **Component:** A reusable function or class that returns elements.

### 55. What is the purpose of `useDebugValue`?
A hook used to display custom labels for custom hooks in React Developer Tools.

### 56. What is concurrent mode?
A set of React features that help applications remain responsive by pausing long-running render cycles to handle urgent user inputs.

### 57. What is `useTransition`?
A hook that lets developers mark low-priority state updates as transitions, preventing them from blocking high-priority user interactions.

### 58. What is `useDeferredValue`?
A hook that defers updating a state value to prevent lag on heavy UI renders.

### 59. What is fallback rendering?
Showing secondary UI elements (like spinners or skeleton bars) while primary assets load.

### 60. How do you handle file uploads in React?
Using ref input triggers to capture files via `e.target.files`.

### 61. Can we have multiple providers of the same Context?
Yes. Children consume the value of the nearest provider above them in the tree.

### 62. What is the default value of a Context?
The fallback value specified when creating the context, used if a component consumes it outside of any provider wrapper.

### 63. How do you implement global themes in React?
By storing theme flags in a Context provider at the root level and applying styles globally.

### 64. What is Vite?
A modern, fast front-end build tool and dev server that utilizes native ES modules for rapid hot-rebuilds.

### 65. What is SSR (Server-Side Rendering)?
A rendering pattern where the server compiles components into raw HTML strings on every request before sending them to the client.

### 66. What is SSG (Static Site Generation)?
Compiling components into static HTML files at build-time.

### 67. What is the Virtual DOM diffing time complexity?
O(n), achieved by assuming different components produce different trees and elements need unique keys.

### 68. Can `useEffect` return anything other than a function?
No. It must either return a cleanup function or nothing (`undefined`).

### 69. How does React handle memory leaks?
React does not clean them up automatically; developers must manually clean up timers, intervals, and event listeners in the `useEffect` cleanup return.

### 70. What is React Router?
The standard routing library used to handle view navigation in React SPAs.

### 71. What is declarative programming in React?
Describing *what* the UI should look like based on current state, leaving React to handle DOM updates.

### 72. What is imperative programming?
Writing step-by-step instructions telling the browser *how* to update the DOM directly.

### 73. What is lifting state up?
Moving shared state from child components up to their nearest common parent so they can stay synchronized.

### 74. How do you handle global event listeners in React?
By attaching them in `useEffect` on `window` and removing them in the cleanup function.

### 75. What is a pure component?
A component that always renders the exact same output for the same props and state.

### 76. What are side-effects?
Operations that affect states outside of the local component scope (such as database writes, API calls, or logging).

### 77. What is a ref?
A reference reference object that holds mutable data without triggering re-renders on update.

### 78. What is CSS Modules?
A styling pattern where class names are scoped locally to prevent style bleeding across components.

### 79. Why can't we use standard `class` in JSX?
Because `class` is a reserved keyword in JavaScript; JSX uses `className` instead.

### 80. Why can't we use `for` in JSX labels?
Because `for` is a reserved JavaScript loop keyword; JSX labels use `htmlFor`.

### 81. What is the role of the `main.jsx` file?
It is the entry script that mounts the root React component onto the physical HTML DOM.

### 82. What is public folder used for?
Storing static assets (icons, images, fonts) served directly without Vite compilation.

### 83. What is an import alias?
A compiler mapping (such as `@/`) used to reference folders with clean paths instead of long relative paths like `../../`.

### 84. Can we use multiple `useEffect` in one component?
Yes. It is best practice to separate unrelated concerns into distinct effect blocks.

### 85. What is the performance cost of Context?
When context state changes, all consuming components re-render, which can be mitigated by splitting contexts or using selectors.

### 86. How do you implement debounce in React?
Using `setTimeout` inside a custom hook or effect to delay committing state updates until a user stops typing.

### 87. What is HMR (Hot Module Replacement)?
A feature that updates modules in a running application without triggering a full page refresh, preserving state.

### 88. Is React a framework?
No. React is a front-end library, focused strictly on UI views; frameworks like Next.js add routing and server capabilities.

### 89. What is hydration mismatch?
An error where the server-rendered HTML differs from the initial virtual DOM tree compiled on the client.

### 90. What is server component?
Components that execute and compile strictly on the server, sending zero client-side JavaScript to the browser.

### 91. What is portal target element?
A physical DOM node (like `<div id="modal-root">`) used as the target anchor for rendering a portal.

### 92. What are skeleton screens?
Visual mock placeholders representing content blocks while actual assets load.

### 93. How do you manage layout dimensions dynamically?
Using a `ResizeObserver` bound to container elements inside a hook.

### 94. What is shallow comparison?
Comparing primitive values directly, and comparing reference addresses (pointers) for objects and arrays.

### 95. What is deep comparison?
Recursively inspecting all nested properties of objects or arrays to verify structural equivalence.

### 96. What is the purpose of `useId`?
A hook that generates unique, accessible IDs for form inputs and ARIA labels.

### 97. What is atomic design?
A design system methodology that breaks interfaces down into atoms, molecules, organisms, templates, and pages.

### 98. How do you test React hooks?
Using testing libraries to wrap and simulate rendering inside test containers.

### 99. Does React support portal events propagation?
Yes. Even if a portal renders outside the parent DOM node, events still bubble up through the virtual React tree.

### 100. Why is React highly favored by major companies?
Its modularity, rich ecosystem, component reusability, Virtual DOM speed, and massive community support make it ideal for large applications.

---

## ☕ PART 2: 50 Core JavaScript Interview Questions & Answers

### 101. What is JavaScript?
JavaScript is a high-level, interpreted, prototype-based, multi-paradigm language that serves as the scripting engine for web browsers.

### 102. What is a Closure?
A closure is a function that retains access to its lexical scope (outer variables) even after the outer function has finished executing.

### 103. What is Hoisting?
Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during compile-time.

### 104. What is the Event Loop?
The mechanism that allows JavaScript to perform non-blocking, asynchronous tasks despite being single-threaded, coordinating call stacks, web APIs, callback queues, and microtask queues.

### 105. What is a Promise?
An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

### 106. What are the three states of a Promise?
- **Pending:** Initial state, not fulfilled or rejected.
- **Fulfilled:** Operation completed successfully.
- **Rejected:** Operation failed.

### 107. What is prototype-based inheritance?
A system where objects inherit properties and methods directly from other objects (prototypes) via a prototype chain, rather than from static class blueprints.

### 108. What is the difference between `==` and `===`?
- `==` performs loose equality checking with automatic type coercion.
- `===` performs strict equality checking without type coercion (verifying both value and type).

### 109. What is type coercion?
The automatic or implicit conversion of a value from one data type to another during execution (e.g., `5 + "5"` yielding `"55"`).

### 110. What is the difference between `var`, `let`, and `const`?
- `var`: Function-scoped, hoisted with default value `undefined`, can be re-declared.
- `let`: Block-scoped, not initialized (temporal dead zone), cannot be re-declared.
- `const`: Block-scoped, not initialized, must be assigned immediately and cannot be reassigned.

### 111. What is the Temporal Dead Zone (TDZ)?
The period between entering a scope and the actual variable declaration, during which accessing a `let` or `const` variable throws a ReferenceError.

### 112. What is an arrow function?
A compact ES6 function syntax that does not bind its own `this` context, inheriting it lexically from the surrounding scope.

### 113. What is `this` keyword in JavaScript?
A reference containing the execution context of the current function invocation, determined by how and where the function is called.

### 114. How do `call`, `apply`, and `bind` differ?
- `call`: Invokes a function immediately, setting `this` with arguments passed individually.
- `apply`: Invokes a function immediately, setting `this` with arguments passed as an array.
- `bind`: Returns a *new* function with `this` bound, designed for execution later.

### 115. What is the difference between synchronous and asynchronous code?
- **Synchronous:** Executed step-by-step in order, blocking subsequent lines until the current line completes.
- **Asynchronous:** Defers long-running tasks, letting other lines execute first, then returning results via callbacks or promises.

### 116. What is the Callback Queue?
A queue of asynchronous callbacks (from events or timers) waiting to be pushed onto the call stack once it is completely empty.

### 117. What is the Microtask Queue?
A high-priority queue (for Promises and MutationObservers) processed immediately after the current call stack clears, before the Callback Queue.

### 118. What is the difference between a shallow copy and a deep copy?
- **Shallow:** Copies top-level properties; nested objects still share reference pointers.
- **Deep:** Duplicates all nested properties recursively, producing a completely independent object.

### 119. What is Destructuring?
An ES6 feature that lets developers extract properties from objects or items from arrays into distinct local variables with clean syntax.

### 120. What are template literals?
String declarations using backticks (`` ` ``) that support multi-line strings and string interpolation using `${expression}`.

### 121. What is the rest operator (`...`)?
A syntax that gathers multiple individual parameters or arguments into a single formal array.

### 122. What is the spread operator (`...`)?
A syntax that unpacks or expands elements from an array or properties from an object into distinct fields.

### 123. What are high-order functions?
Functions that either take other functions as arguments, return a function, or both (e.g. `map`, `filter`, `reduce`).

### 124. How does `Array.prototype.map` work?
Iterates over an array, executing a callback on each element, and returns a *new* array of the same length containing the returned values.

### 125. How does `Array.prototype.filter` work?
Iterates over an array, executing a boolean check on each element, and returns a *new* array containing only the elements that passed the check.

### 126. How does `Array.prototype.reduce` work?
Reduces an array to a single value by executing an accumulator callback on every element.

### 127. What is IIFE (Immediately Invoked Function Expression)?
A function expression that executes immediately upon creation, preventing variable leaks to the global scope.

### 128. What is strict mode in JavaScript?
A configuration (`"use/strict"`) that catches silent bugs, prevents deleting active variables, and throws errors on unsafe actions.

### 129. What are ES6 Modules?
The official standardization of modules in JavaScript, using `import` and `export` statements.

### 130. What is CommonJS?
The legacy Node.js module specification, using `require()` and `module.exports`.

### 131. What is a Callback?
A function passed as an argument to another function to be executed once an asynchronous operation completes.

### 132. What is "Callback Hell"?
A anti-pattern of heavily nested, unreadable callbacks that makes code difficult to trace and maintain.

### 133. How does `async/await` work?
Syntactic sugar built on top of Promises that allows writing asynchronous code with clean, synchronous-looking syntax.

### 134. What is the difference between `null` and `undefined`?
- `null`: An intentional assignment representing the absence of any object value.
- `undefined`: The default value assigned by JavaScript to declared variables that have not yet been initialized.

### 135. What is NaN?
Stands for "Not-a-Number", representing an undefined or unrepresentable numerical calculation result.

### 136. What is the difference between global scope and block scope?
- **Global:** Variables accessible anywhere in the application.
- **Block:** Variables (declared with `let` or `const` inside `{}`) restricted to that block.

### 137. What is the scope chain?
The lookup process where JavaScript searches for variables starting from the local scope and moving outwards through nesting scopes up to the global scope.

### 138. What is event delegation?
Attaching a single event listener to a parent node instead of separate listeners to child elements, using event bubbling to identify targets.

### 139. What is event bubbling?
The phase where an event triggers on a target child element and then propagates upwards through its parent nodes in the DOM tree.

### 140. What is event capturing?
The opposite of bubbling, where an event propagates downwards from the outer window to the target child element.

### 141. How do you prevent event bubbling?
By invoking `e.stopPropagation()` inside the event handler.

### 142. How do you prevent default browser actions?
By invoking `e.preventDefault()` inside the event handler (e.g. stopping a form from reloading the page).

### 143. What is the difference between `Map` and standard `Object`?
- `Map` key types can be anything, maintains insertion order, and has built-in size properties.
- `Object` key types are restricted to strings and symbols.

### 144. What is a `Set`?
A built-in collection of unique values, automatically filtering duplicates.

### 145. What is the `typeof` operator?
A unary operator used to determine the data type of a value or variable.

### 146. What does `typeof null` return?
`"object"`, which is a well-known legacy bug in JavaScript's type engine.

### 147. What is currying?
Translating a function that takes multiple arguments into a sequence of nested functions that each take a single argument.

### 148. What is the Temporal Dead Zone?
A safety zone preventing the use of block-scoped variables (`let`, `const`) before their actual initialization.

### 149. What is garbage collection in JS?
The automatic process of identifying and freeing up memory occupied by objects that are no longer referenced in the application.

### 150. What are memory leaks?
Memory allocated by an application that is no longer needed but is not released because references to it still persist.

---

## 🏃 PART 3: 30 FitTrack-Specific Interview Questions & Answers

### 151. What is FitTrack?
FitTrack is a premium client-side wellness and fitness dashboard constructed with React 19, Tailwind CSS v4, and Lucide vector icons.

### 152. How is state managed globally across tabs in FitTrack?
FitTrack utilizes a centralized `FitnessContext` and custom `useFitness` hook. Updates logged on the *Eat* tab dynamically update progress indicators on the *Home* dashboard tab instantly.

### 153. How does FitTrack persist user data?
It uses automatic serialization, writing state changes into `localStorage` inside robust exception-handling blocks.

### 154. How do the interactive progress rings work in FitTrack?
They are built using native SVG elements. We calculate completion percentages from state and apply them to bind the SVG's `strokeDashoffset` dynamically.

### 155. Why did you use pure SVGs instead of a charting library like Recharts?
Using native SVGs keeps the application lightweight and reduces external package bundle overhead, demonstrating a strong grasp of browser drawing layers.

### 156. How is the "live" biometric heart rate simulated?
It uses a `useEffect` hook with a periodic `setInterval` timer, letting the heart rate value drift slightly between 68 and 78 BPM to simulate active cardiovascular drift.

### 157. How is the Mifflin-St Jeor formula implemented in the calculators?
We bind the inputs dynamically to local states and execute the calculation inside a reactive `useEffect` block:
`bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161)`.

### 158. How do you handle storage write exceptions in FitTrack?
We wrap all `localStorage` reads and writes inside robust `try-catch` blocks, preventing the application from crashing if cookies or storage access are disabled.

### 159. What occurs when a user starts a workout on the home tab?
The state registers an `activeWorkout` object, triggering a live timer overlay. If they click complete, the daily caloric burn and streak count increment dynamically.

### 160. How does the search filter in the exercise library operate?
It uses a reactive string check that filters the pre-populated array in real-time, matching both names and categories without lag.

### 161. How does the app estimate food macros?
When a user logs a custom food, the application estimates nutritional distributions: protein (25%), carbs (45%), and fats (30%).

### 162. How does the application maintain mobile responsiveness?
It uses a desktop sidebar navigation rail that collapses into safe, touch-friendly floating bottom buttons on small screens.

### 163. What are the benefits of using Lucide icons over font assets?
Lucide icons render as scalable vector graphics, maintaining crisp sharpness on high-DPI screens and loading instantly.

### 164. What Node version is recommended to run FitTrack?
Node.js version 18 or higher is recommended for compatibility with modern Vite bundling and package dependencies.

### 165. How are button touch targets optimized for mobile screens?
We ensure that all buttons have touch target sizes of at least 44px to prevent collision errors on mobile screens.

### 166. How does FitTrack leverage React 19 features?
It utilizes clean element rendering and optimized hook scheduling patterns, maximizing virtual DOM compilation speeds.

### 167. Why did you choose to build a Javascript-only project?
To strictly adhere to the prompt's negative constraint of avoiding TypeScript, showcasing clean, readable JS with zero compiler compile steps.

### 168. How do you prevent cumulative layout shift when workout images load?
We assign explicit aspect ratio parent divs (`aspect-video`, `h-40 relative`) so the layout remains stable before the image loads.

### 169. What is the role of `tsconfig.json` in this Javascript-only project?
Since we are using JavaScript only, we modified the linting script to bypass TypeScript compiler checks, leaving the config file untouched as legacy.

### 170. Can a user add custom exercises in FitTrack?
Yes. Users can click the plus icon in the exercise library, opening a form modal to create exercises that are appended to the library.

### 171. How do you prevent infinite re-render loops in calculations?
We isolate inputs into controlled components and execute computations strictly inside dedicated `useEffect` arrays, preventing state updates in the component body.

### 172. How did you design the "Kinetic Glass" aesthetic?
By using semi-transparent white fills (`bg-white/5`), thick backdrop filters (`backdrop-blur-[40px]`), and subtle gradients for a clean glassmorphism feel.

### 173. What are the performance benefits of Vite over Webpack?
Vite serves code via native ES modules in development, bypassing bundling steps during startup and offering near-instant module hot-rebuilding.

### 174. How does the weekly schedule calendar update dynamically?
When an active workout is completed, the context hooks today's current day (e.g. Friday) and marks it as completed in the array, rendering a checkmark.

### 175. Why did you choose to use functional components instead of classes?
Functional components are cleaner, modern, encourage writing modular hook logic, and yield better bundling compile times.

### 176. How is accessibility managed inside FitTrack?
By using high-contrast colors, descriptive image alt attributes, and proper label relations for screen readers.

### 177. How is the default state configured?
It provides pre-populated logs for Alex Rivers, giving interviewers immediate data to review on startup without requiring initial manual inputs.

### 178. What is the role of the custom hook `useFitness`?
It centralizes state consumption and validates context boundaries, throwing clear errors if components try to use state outside the provider.

### 179. How are food logs reset?
A "Reset Food Log" button resets calories and meal arrays back to default states in a single click.

### 180. How would you scale this application to support a database backend?
We would implement a Node/Express backend with a database like Firestore, replacing local state setters with secure asynchronous API endpoints.
