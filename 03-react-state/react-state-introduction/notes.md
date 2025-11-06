**Props** refers to the properties *being passed into a component* 
in order for it to work correctly, similar to how a function 
receives parameters: "from above." 
- A component receiving props is not allowed to modify those props
(i.e. they are "immutable.")

**State** refers to values *that are managed by the component*,
similar to variables declared inside a function. Any time you have
changing values that should be saved/displayed, you'll likely be
using state.


-- "view as a function of state" --

1: **Render**
React runs your function and displays whatever gets returned.
The function will only be run again if 
 - a) it receives new props from above, or
 - b) its internal state values change.
2: **setState**
Changing a local, non-state variable doesn't cause React to re-
render the component. 
However, changing state with a built-in `setState` function does.
3: **view = function(state)**
Thus, when state changes and React re-runs (re-renders) your 
component, something new gets returned and replaces what used to
be on the page.