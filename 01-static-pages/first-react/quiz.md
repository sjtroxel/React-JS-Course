1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

All the elements go inside the <div id="root"> in your main index.html template, whereever that is.
Or, inside a different element if you select a different element while calling createRoot.


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

An object!
Unlike creating an HTML element in vanilla DOM JS, what gets created from the JSX in the React code
is a plain JS object that React will use to fill in the view.


3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

It will throw an error because you can have only one element inside of ( ). To get around this, make a div just after ( and closing div just before ). Then, put all the elements you want (children) between the opening and closing divs.


4. What does it mean for something to be "declarative" instead of "imperative"?

Imperative requires step-by-step instructions to the computer.
Declarative leans on the libraries/tools to do the heavy lifting for us.
Declarative code *describes* what should show up on the page and the tool (React) will handle the details.


5. What does it mean for something to be "composable"?

Composable means the task can be broken down multiple different ways. Small pieces to make 
something smaller or greater than the individual component pieces themselves.