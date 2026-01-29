🤠 Pearson’s Ledger - RDR2 Crafting Tracker
A web-based crafting companion for Red Dead Redemption 2. This app helps players track their hunting progress for camp upgrades and satchels, just like Arthur Morgan does in his journal.

🛠 Features
Live Inventory Management: Add items to your satchel with a single click.

Dynamic Crafting Logic: Recipes automatically track if you have enough pelts, skins, or feathers.

Smart Dashboard: A progress bar showing how close you are to completing all camp upgrades.

Ready-to-Craft Section: Instantly see which upgrades you can turn in to Pearson right now.

Authentic UI: Styled with Tailwind CSS to mimic the weathered parchment and western aesthetic of the game.

🚀 Tech Stack
React (Vite)

Tailwind CSS (Custom theme with Western & Journal fonts)

Lucide React (Icons)

📖 How it works
The app follows the Single Source of Truth principle. The global state of the inventory is passed down to individual RecipeCard components, which calculate their status in real-time.

JavaScript

// Example of the "Ready to Craft" logic
const completedRecipes = recipes.filter(recipe => 
  recipe.ingredients.every(ing => (inventory[ing.item] || 0) >= ing.amount)
);
🌲 Project Structure
App.jsx: State management and main layout.

Dashboard.jsx: Progress tracking and "Ready to Craft" notifications.

RecipeCard.jsx: Individual recipe requirements and "Add to Inventory" actions.

Inventory.jsx: A breakdown of everything Arthur is currently carrying.

🐎 Installation
Clone the repository: git clone https://github.com/your-username/rdr2-ledger.git

Install dependencies: npm install

Run the development server: npm run dev
