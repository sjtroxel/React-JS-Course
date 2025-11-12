import React from 'react'

export default function Main() {

    const [ingredients, setIngredients ] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    /**
     * Challenge: Use form action instead of onSubmit to 
     *            handle the data from the form!
     */

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevIngredients => [ ...prevIngredients, newIngredient])
    //     event.currentTarget.reset()
    // }

    return (
    <main>
        {/* <form className="add-ingredient-form" onSubmit={handleSubmit}> */}
        <form action={addIngredient} className="add-ingredient-form">
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