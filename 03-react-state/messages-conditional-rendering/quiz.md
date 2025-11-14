1. What is "conditional rendering"?

Conditional rendering is when we want to only sometimes display something
on the page based on some kind of condition.


2. When would you use &&?

We would use the && when we want to either (a) display something or 
(b) NOT display something.


3. When would you use a ternary?

We would use a ternary when we need to decide which of 2 things to 
display. A nested ternary would be possible if we need to decide between
more than 2 options to display, but see below:


4. What if you need to decide between > 2 options on what to display?

There are several possibilities: e.g. if... else if... else conditional,
or maybe a `switch` statement.