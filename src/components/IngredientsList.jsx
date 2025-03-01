import React from 'react'

const IngredientsList = (props) => {
const minItems = 4;

const ingredientsListItems = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section className='w-[90%] mx-auto mt-5 '>
      <h2 className='text-2xl font-semibold'>Ingredients on hand:</h2>
      {props.ingredients.length < 4 && 
        <p className='text-orange-500'>please add {minItems - props.ingredients.length} more items</p>
      }
      <ul className='mx-4 my-5 text-[#475467] flex flex-col gap-2 max-h-[35vh] list-disc overflow-y-scroll overflow-x-visible 
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-[#475467]
       pl-4'>
      {ingredientsListItems}
    </ul>
    {
      props.ingredients.length >= 4 &&
    <div className='getRecipe bg-[#F0EFEB] flex p-4 rounded-lg justify-between flex-col sm:flex-row gap-4 sm:gap-0'>
        <div>
            <h3 className='text-base font-semibold'>Ready for a recipe?</h3>
            <p className='text-[12px] text-[#6B7280] '>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.handleSubmit} className='bg-[#D17557] cursor-pointer text-white  py-1 px-2 rounded-lg whitespace-nowrap'>Get a recipe</button>
    </div>
}
    </section>
  )
}

export default IngredientsList