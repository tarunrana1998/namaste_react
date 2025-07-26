import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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
        <main style={{ padding: "10px" }}>
            <div className="filter">
                <div className="filter-search">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="toprated">
                    <button
                        style={{ padding: "10px", marginBottom: "20px" }}
                        onClick={topRatedRestaurants}
                    >
                        Top rated Restaurant
                    </button>
                </div>
            </div>
            <h2>Welcome to the Food App</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                ))}
            </div>
        </main>
    );
};

export default Body;