export default function RecipeCard(props) {
    return (
        <div className="text-stone-900 shadow-xl bg-rdr-paper p-4 m-4 rounded-sm" >
          <h2>{props.recipe.name}</h2>
            {props.recipe.ingredients.map((ingredient, idx) => {
                const hasEnough = (props.inventory[ingredient.item] || 0) >= ingredient.amount;
                return (
                  <div className="flex items-center justify-between border-b py-2" key={idx}>
                    <span className={hasEnough ? "text-green-600 font-bold" : "text-red-500"}>
                        {ingredient.item} - {props.inventory[ingredient.item] || 0}/{ingredient.amount}
                    </span>
                    <button className={hasEnough? "opacity-30 cursor-not-allowed" : "hover:bg-stone-700"}
                            disabled={hasEnough} onClick={() => props.addItem(ingredient.item, 1)}>
                                Add to inventory
                    </button>
                  </div>
                );
            })}
        </div>
    )}