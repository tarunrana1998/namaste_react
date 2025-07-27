import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const Menu = ({ restaurantId, onClose }) => {
    const [categories, setCategories] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!restaurantId) return;
        setLoading(true);
        setError("");
        fetchMenu();
    }, [restaurantId]);

    const fetchMenu = async () => {
        try {
            const res = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971599&lng=77.594566&restaurantId=${restaurantId}`
            );
            const json = await res.json();
            // Try multiple paths for menu items
            let items = [];
            // Path 1
            items = json?.data?.cards?.find(card => card.card?.card?.itemCards)?.card?.card?.itemCards || [];
            // Path 2 (sometimes menu items are nested deeper)
            if (!items.length) {
                const categories = json?.data?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>  c.card?.card?.['@type'].search('ItemCategory') !== -1) || [];
                console.log("Categories found:", categories);
                setCategories(categories);
            }
            setRestaurantName(json?.data?.cards?.[2]?.card?.card?.info?.name || "");
            if (!items.length) setError("No menu found.");
        } catch (e) {
            setError("Failed to fetch menu.");
        }
        setLoading(false);
    };

    if (!restaurantId) return null;
    return (
        <section className="menu-section bg-white rounded-2xl shadow-xl p-4 sm:p-8 m-2 sm:m-6 w-full max-w-2xl mx-auto animate-fadeInUp relative flex flex-col">
            <button onClick={onClose} className="absolute top-2 right-2 sm:top-4 sm:right-4 text-indigo-500 hover:text-red-500 text-2xl font-bold transition duration-300">×</button>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4 text-center">{restaurantName} Menu</h2>
            {loading && <div className="text-center py-8 animate-pulse">Loading menu...</div>}
            {categories.map((category, index) => (
                <RestaurantCategory key={index} title={category.card.card.title} items={category.card.card.itemCards}    />

            ))}

            {/* {error && !loading && <div className="text-center py-8 text-red-500">{error}</div>}
            {!loading && !error && menu.length > 0 && (
                <ul className="divide-y divide-indigo-100 w-full">
                    {menu.map(item => (
                        <li key={item.card.info.id} className="py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center animate-fadeInUp gap-2 sm:gap-0">
                            <span className="font-semibold text-gray-700 text-base sm:text-lg">{item.card.info.name}</span>
                            <span className="text-green-600 font-bold text-base sm:text-lg">₹{item.card.info.price / 100}</span>
                        </li>
                    ))}
                </ul>
            )} */}
        </section>
    );
};

export default Menu;
