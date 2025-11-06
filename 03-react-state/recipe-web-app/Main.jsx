export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    /**
     * Challenge:
     * Add an 'onSubmit' event listener on the form. Have the function 
     * simply console.log("Form submitted!") for now.
     */

    /**
     * Challenge: 
     * Add the new ingredient to the array of ingredients. Also, add
     * console.log(ingredients) after adding the ingredient, because
     * **warning** you aren't going to see the page update!!
     * 
     * Hint: this is a one-liner solution, so don't overthink it :).
     */

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        // console.log(newIngredient)
        console.log(ingredients)
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