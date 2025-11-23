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
    
     /**
     * Problem:
     * We want to scroll the "Ready for a recipe?" div into view
     * ONLY AFTER the ClaudeRecipe section is rendered to the page 
     * (i.e. when `recipe` is not an empty string). How can we do that?
     */

     /**
      * Challenge:
      * Add a new effect that calls `recipeSection.current.scrollIntoView()`
      * only if recipe is not an empty string and recipeSection.current is 
      * not null. Think carefully about what values you would want to include
      * in the dependencies array.
      */

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

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