1. What does the `.map()` array method do?

It iterates over each object in an array and applies a function to it,
returning a new array.

2. What do we usually use `.map()` for in React?

We use `.map()` to convert an array of raw data into an array of JSX
elements that can be displayed on the page.

3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?

    a. We often don't have the data ahead of time when we're building
       the app, so we can't simply manually type them out.
    b. It makes our code more "self-sustaining" - not requiring add'l
       changes to the code whenever the data changes.