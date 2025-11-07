1. You have 2 options for what you can pass into a
   state-setter function (e.g. `setCount`). What are they?

    1. Pass the new version of state that we want to use as
       the replacement for the old version of state.

    2. Pass a callback function. It must return what we want 
       the new value of state to be. It will receive the old
       version of state as a parameter so that we can use it
       to help determine what we want the new value of state
       to be.



2. When would you want to pass the first option (from
   answer above) to the state-setter function?

    We can do this when we don't really care about (or need)
    the old value; we just simply want to set a new value.



3. When would you want to pass the first option (from
   answer above) to the state-setter function?

    We do this when we do care about the previous value in
    state and need it to help us determine what the new
    value should be.
