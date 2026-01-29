import Inventory from './components/Inventory';
import RecipeCard from './components/RecipeCard';
import Dashboard from './components/Dashboard';
import recipesData from './data/recipes.json';
import React from 'react';

export default function App() {
  const [inventory, setInventory] = React.useState({});
  const recipes = recipesData

  function addItem(item, amount) {
    setInventory((prevInventory) => ({
      ...prevInventory,
      [item]: (prevInventory[item] || 0) + amount,
    }));
  }
  function resetInventory() {
    setInventory({});
  }

  const ingredients = recipes.map((recipe,index)=>(
        <RecipeCard
          key={index}
          recipe={recipe}
          inventory={inventory}
          addItem={addItem}
        />
      ))
  
  const completedRecipes = recipes.filter((recipe) =>
    recipe.ingredients.every((ingredient) =>
      (inventory[ingredient.item] || 0) >= ingredient.amount
    )
  );

  console.log(completedRecipes)
  
  return (
    <div>   
      <header className='text-center p-4 border-b border-[#4a3f35]'>
        <h1>Crafting Ledger</h1>
        <Dashboard recipes={recipes} inventory={inventory} completedRecipes={completedRecipes}/>
      </header>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#1a1510]">
        <aside className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r border-[#4a3f35]">
          <Inventory inventory={inventory} addItem={addItem} resetInventory={resetInventory}/>
        </aside>
        <main className="grid grid-cols-1 lg:grid-cols-2">
            {ingredients}
        </main>
      </div>
    </div>
  )
}