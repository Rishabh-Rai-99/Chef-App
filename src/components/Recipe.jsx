import React from 'react'
import Markdown from 'react-markdown'

const Recipe = (props) => {

  return (
    <>
      <section className="w-[90%] mx-auto mt-7 text-[#475467] mb-10 suggested-recipe-container">
        <h2 className="font-semibold text-2xl text-black">Chef Claude Recommends:</h2>
        <div className="prose prose-lg text-gray-700 markdown-styles">
          <Markdown>{props.yourRecipe}</Markdown>
        </div>
      </section>

    </>
  )
}

export default Recipe