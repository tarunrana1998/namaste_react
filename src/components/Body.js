import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";

const initialRestaurants = [
];

const Body = () => {
    console.log("body is renderinh");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {

        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("json", json);
        console.log("json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants", json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };
    console.log("BOdy is rendered before useEffect");

    const topRatedRestaurants = () => {
        let topRatedRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating >= 4.4);
        console.log("Top Rated Restaurants:", topRatedRestaurants);
        setListOfRestaurants(topRatedRestaurants);
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
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            // Filter the restraunt cards and update the UI
                            // searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
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
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                ))}
            </div>
        </main>
    );
};

export default Body;
