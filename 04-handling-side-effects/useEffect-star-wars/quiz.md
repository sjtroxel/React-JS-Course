1.  In what way are React components meant to be "pure functions"?

    Given the same props or state, the component will always return
    the same content, or UI.
    Rendering and re-rendering a component will never have any kind
    of side effect on an outside system.

2.  What is a "side effect" in React? What are some examples?

    Any code that affects (or interacts with), an outside system.
    E.g. local storage, API, websockets, DOM-manipulation.

3.  What is NOT a "side effect" in React? Examples?

    Anything that React is in charge of:
    E.g. Maintaining state, keeping the UI in sync with data, rendering
    DOM elements, etc.

4.  When does React run your useEffect function? When does it NOT run
    the effect function?

 a.  As soon as the component renders for the first time.
 b.  On every re-render of the component, assuming no dependencies array.
 c.  The effect function will not run when the values of the dependencies
     array stay the same between renders.

5. How would you explain what the "dependencies array" is?

    The dependencies array is a second parameter to the useEffect
    function and is a way for React to know whether or not it should re-
    run the effect function.