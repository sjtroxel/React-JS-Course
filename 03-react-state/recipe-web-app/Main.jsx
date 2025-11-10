import React from 'react'

export default function Main() {

    /**
     * Challenge: Update our app so that when the user enters
     * a new ingredient and submits the form, it adds that 
     * new ingredient to the list!!
     */

    const [ingredients, setIngredients ] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function handleSubmit(event) {
        event.preventDefault()

        /**
         * Like before, don't worry about this FormData stuff 
         * yet. Just use the newIngredient below to help you
         * finish the challenge!!
         */

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients => [ ...prevIngredients, newIngredient])
        event.currentTarget.reset()       // optionally clear input after submitting        
        // ingredients.push(newIngredient)
        // console.log(ingredients)
    }

    return (
    <main>
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add Ingredient" 
                name="ingredient" />
            <button>Add Ingredient!</button>
        </form>
        <ul>
            {ingredientsListItems}
        </ul>
    </main>
    )
}