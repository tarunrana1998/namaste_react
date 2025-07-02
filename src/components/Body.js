import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const initialRestaurants = [
  {
    name: "Spicy Delight",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=80",
    cuisines: ["Indian", "Chinese"],
    rating: 4.5,
    deliveryTime: 30,
  },
  {
    name: "Pasta Palace",
    image: "https://images.unsplash.com/photo-1601315576607-015906c1a0d9?auto=format&fit=crop&w=300&q=80",
    cuisines: ["Italian"],
    rating: 4.2,
    deliveryTime: 25,
  },
  {
    name: "Sushi Spot",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=300&q=80",
    cuisines: ["Japanese"],
    rating: 4.8,
    deliveryTime: 40,
  },
  {
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    cuisines: ["American", "Fast Food"],
    rating: 3.1,
    deliveryTime: 20,
  },
];

const Body = () => {
    const arr = useState(initialRestaurants);
    console.log("body is renderinh");
  const [listOfRestaurants, setListOfRestaurants] = arr;

  useEffect(() => {
   
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async  () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("json", json);
    };
  console.log("BOdy is rendered before useEffect");
  const addRestaurant = () => {
    console.log("Clicked from body");

    const newRestaurant = {
      name: "New Restaurant",
      image: "https://images.unsplash.com/photo-1601315576607-015906c1a0d9?auto=format&fit=crop&w=300&q=80",
      cuisines: ["New Cuisine"],
      rating: 4.0,
      deliveryTime: 30,
    };

    // Use immutable update
    console.log("listOfRestaurants", listOfRestaurants);
    setListOfRestaurants([...listOfRestaurants, newRestaurant]);
    console.log("listOfRestaurants", listOfRestaurants);
  };

  const topRatedRestaurants = () => {
    let topRatedRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating >= 4.0);
    console.log("Top Rated Restaurants:", topRatedRestaurants);
    setListOfRestaurants(listOfRestaurants => {
      listOfRestaurants.push(...topRatedRestaurants);
      return [...listOfRestaurants];
    });
  };

  return (
    <main style={{ padding: "10px" }}>
      <button
        style={{ padding: "10px", marginBottom: "20px" }}
        onClick={topRatedRestaurants}
      >
        Click Me
      </button>
      <h2>Welcome to the Food App</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Body;
