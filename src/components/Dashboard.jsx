export default function Dashboard({completedRecipes, recipes}) {
    const completedCount = completedRecipes.length;
    return (
        <div className="text-stone-900 shadow-xl bg-rdr-paper p-4 m-4 rounded-sm">
            <h2>Dashboard</h2>
            <h3>Completed Upgrades:</h3>
            <div className="w-full bg-stone-800 h-4 rounded-full h-2 overflow-hidden border border-stone-700">
                <div 
                className="bg-orange-700 transition-all h-2 duration-500"
                style={{width: `${(completedCount / recipes.length) * 100}%`}}
                ></div>
            </div>
            <h3>Ready To Craft:</h3>
            <ul>{completedCount > 0 ? completedRecipes.map((r, index) => (
                <li key={index}
                className="text-green-600 font-bold">{r.name}</li>)
                ) : 
                <p className="opacity-60">Nothing to craft. Go Hunt!</p>}</ul>
        </div>
    )
}