export default function Inventory(props) {
    return (
        <div className="text-stone-900 shadow-xl bg-rdr-paper p-4 m-0 rounded-sm">
            <h2 className>Inventory</h2>
            <h3>Your Satchel:</h3>
            {Object.entries(props.inventory).map(([itemName, count]) => (
            <p key={itemName}>{itemName}: {count}</p>
            ))}
            <button className="mt-4 p-2" onClick={props.resetInventory}>Reset Inventory</button>
        </div>
    )
}