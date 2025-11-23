import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromChefClaude } from "../ai"
// import { getRecipeFromMistral } from "./ai"


export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    console.log(recipeSection)
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function deleteIngredient(indexToDelete) {
    setIngredients(prevIngredients =>
        prevIngredients.filter((_, index) => index !== indexToDelete))
    }


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && (
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    deleteIngredient={deleteIngredient} />
            )}
           
            
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}