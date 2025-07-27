import RestaurantCard from "./RestaurantCard";
import Menu from "./Menu";
import { useEffect, useState , useContext } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

    const { setUserName } = useContext(UserContext); // ✅ Valid now

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        console.log("API call initiated");
        setTimeout(() => {
            console.log("API call completed");
        }, 2000);
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING"
        );
        console.log("API call completed without Timeout ");
        const json = await data.json();
        console.log("Data fetched from API: ", json);
        const restaurants =
            json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    const topRatedRestaurants = () => {
        const topRated = listOfRestaurants.filter(
            (restaurant) => Number(restaurant.info.avgRating) >= 4.4
        );
        setFilteredRestaurant(topRated);
    };

    return (
        <main className="main-content max-w-6xl mx-auto py-6 sm:py-10 px-2 sm:px-4 animate-fadeIn">
            <section className="filter flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 sm:gap-6">
                <div className="filter-search flex flex-col sm:flex-row gap-2 sm:gap-4 items-center w-full sm:w-auto animate-fadeInUp">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-indigo-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-2 text-base sm:text-lg shadow-sm transition duration-300 w-full sm:w-64"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search restaurants..."
                    />
                    <button
                        className="btn bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:from-blue-400 hover:to-green-400"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Search
                    </button>
                    <label className="text-gray-700 font-semibold">
                        Change User:
                    </label>
                    <input
                        type="text"
                        data-testid="changeUser"
                        className="border border-indigo-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-2 text-base sm:text-lg shadow-sm transition duration-300 w-full sm:w-64"
                        value=''
                        // onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Change Username"
                    />

                </div>
                <div className="toprated animate-fadeInUp">
                    <button
                        style={{ padding: "10px", marginBottom: "20px" }}
                        onClick={topRatedRestaurants}
                    >
                        Top rated Restaurant
                    </button>
                </div>
            </section>
            <h2>Welcome to the Food App</h2>
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
                {!selectedRestaurantId && filteredRestaurant.map((restaurant) => (
                    <div key={restaurant.info.id} onClick={() => setSelectedRestaurantId(restaurant.info.id)} className="cursor-pointer transition-transform hover:scale-105 w-full sm:w-auto">
                        <RestaurantCard resData={restaurant.info} />
                    </div>
                ))}
            </div>
            {selectedRestaurantId && (
                <Menu restaurantId={selectedRestaurantId} onClose={() => setSelectedRestaurantId(null)} />
            )}
        </main>
    );
};

export default Body;