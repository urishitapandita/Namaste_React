# Episode 4: Talk is, cheap show me the code! - Assignment

### Q1. Is JSX mandatory for React?
- JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
- Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

###  Q2. Is eS6 mandatory for React?
- Normally you would define a React component as a plain JavaScript class:
  
```
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
- If you don’t use ES6 yet, you may use the create-react-class module instead:

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});

```
###  Q3.  {TitleComponent} vs { < TitleComponent /> } vs { < TitleComponent >< /TitleComponent > } in JSX.
- The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/>: This value represents a Component returning Some JSX value. In simple terms, TitleComponent is a function that returns a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

- Example
  ```
  <TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>


### Q4. How to add comments in JSX?
- You'll need to use JavaScript comments inside of JSX.
- You can use regular /* Block Comments */, but they need to be wrapped in curly braces: {/* A JSX comment */}

### Q5.  React Fragment vs <></> [Read More](https://react.dev/reference/react/Fragment)
- React Fragments are used to wrap multiple adjacent JSX elements into one single unit without leaving a trace of that wrapping element in the DOM.
  ```
    <React.Fragment>
      <div>Hi</div>
      <div>Hello</div>
   </React.Fragment>
  ```
 - The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases:
     ```
     <>
        <h1>Hi</h1>
        <div>Hello</div>
      <>
     ```
### Q6. What is Virtual DOM? 
- It is a representation of the actual DOM.
- It is in the form of a tree of React Elements ie a tree of JS objects.
- Used by React to compute the difference between the previous and the current VDOM to optimally update the actual DOM.
- It is a programming concept where a virtual representation of the UI is stored in the memory.

### Q6. What is Reconciliation in React?
- It is a process by which React finds the difference between the old VDOM and the new VDOM whenever there is some state update/change.
- The process in which React computes which parts of the tree changed.

### Q7. What is React Fiber?
- It is the latest core React Algorithm followed by react to do the Reconciliation process.
- It came with React 16. It is the new way of finding diff and updating the dom.
- Its main feature is INCREMENTAL RENDERING(splitting the rendering work into chunks).

### Q8. Why do we need keys in React?
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

  ```
  const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
  );

- [Why keys are necessary?- read more](https://legacy.reactjs.org/docs/reconciliation.html#recursing-on-children)

### Q9. Can we use Index as keys?
- It is not recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
- Read this article : [Read more](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

### Q10.  What are props in React?
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
- Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
- Passing props to Functional Components === Passing arguments to JS functions.

### Q11. What is Config-Driven UI?
- Config driven UI makes our app dynamic and allows the same app to have different UI across different geographical locations based upon what data is coming from backend.


   
 
