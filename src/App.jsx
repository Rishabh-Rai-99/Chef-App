import Header from "./components/Header"
import IngredientForm from "./components/IngredientForm"
import './loader.css'

function App() {
  
  return (
    <>
    <main className="flex justify-center bg-[#afb4ad] h-screen ">
      <div className="thisContainer w-[100%] sm:w-[70%] lg:w-[40%] my-0 sm:my-5 border-none sm:border-black border-[1.4px] bg-[#FAFAF8] rounded-none sm:rounded-lg overflow-y-auto
      [&::-webkit-scrollbar]:w-[0px]
      ">
      <Header />
      <IngredientForm />
      </div>
    </main>
    </>
  )
}

export default App
