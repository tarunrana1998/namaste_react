import { CDN_URL } from "../utils/constants";
// import "./RestaurantCard.css";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;

    return (
        <div className="restaurant-card bg-white rounded-2xl shadow-xl p-4 sm:p-6 m-2 sm:m-6 w-full sm:w-72 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fadeInUp">
            <img
                className="restaurant-image w-full h-32 sm:h-40 object-cover rounded-xl mb-4 shadow-md animate-fadeIn"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="restaurant-name text-xl font-bold text-indigo-600 mb-2 text-center animate-fadeInUp">{name}</h3>
            <p className="restaurant-cuisines text-gray-500 text-center mb-2 animate-fadeInUp">{cuisines?.join(", ")}</p>
            <div className="restaurant-info flex justify-between w-full text-gray-700 text-sm animate-fadeInUp">
                <span className="font-semibold">⭐ {avgRating}</span>
                <span>{costForTwo}</span>
                <span>{deliveryTime} mins</span>
            </div>
        </div>
    );
};

export default RestaurantCard;
