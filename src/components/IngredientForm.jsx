import React from 'react'
import { useState,useEffect } from 'react'
import IngredientsList from './IngredientsList';
import Recipe from './Recipe'
import {getRecipeFromMistral} from '../AI'

const IngredientForm = () => {

  const [ingredients, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loader, setLoader] = useState(false);
  

  const addIngredient = (FormData) => {
    const ingredientInput = FormData.get("ingredient-input")
    if (ingredientInput.length > 0) {
      setIngredient(prev => [...prev, ingredientInput])
    }
  }

  const handleSubmit = async() => {
    handleLoader();
    setRecipe(prev => !prev)
    const recipe = await getRecipeFromMistral(ingredients);
    setRecipe(recipe)
    recipe ? setLoader(false) : null
  }

  const handleLoader = ()=>{
    setLoader(prev => !prev)
  }

  useEffect(() => {
    if (recipe) {
        document.querySelector(".thisContainer")?.scrollTo({ top: 400, behavior: "smooth" });
    }
}, [recipe]);


  return (
    <>
      <form action={addIngredient} className='ingredient-input-form flex flex-col lg:flex-row justify-center pt-10 gap-4'>
        <input type="text" autoComplete='off' name="ingredient-input" placeholder='e.g. oregano' className='bg-white border-2 border-[#D1D5DB] rounded-lg py-1 px-2 mx-auto lg:mx-0 w-[80%] lg:w-[60%]' />
        <button className='bg-[#141413] mx-auto lg:mx-0 py-1 px-2 rounded-lg text-white text-center cursor-pointer'>+ Add ingredient</button>
      </form>

      {loader &&
        <div className="loader">
        <div className="chef-hat"></div>
        <div className="text">Cooking up something delicious...</div>
    </div>}
      {
        ingredients.length > 0 &&
        <IngredientsList
          ingredients={ingredients}
          handleSubmit={handleSubmit}
           />
      }
      {
        recipe &&
        <Recipe yourRecipe={recipe} />
      }
    </>
  )
}

export default IngredientForm