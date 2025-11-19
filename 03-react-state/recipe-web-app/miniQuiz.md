1.  Think about where the recipe response should live and how you're
    going to make sure it doesn't disappear between each state change
    in the app. (I don't mean between refreshes of your mini-browser.
    You don't need to save this to localStorage or anything more 
    permanent than in React's memory for now.)

I will save the response (returned from the API) in React state!


2.  What action from the user should trigger getting the recipe?

The functions (getRecipeFromChefClaude, getRecipeFromMistral) will be 
pulled in / called upon when the user clicks the "Get a recipe!" button.