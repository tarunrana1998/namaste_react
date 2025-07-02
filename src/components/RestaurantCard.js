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
        <div className="restaurant-card">
            <img
                className="restaurant-image"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="restaurant-name">{name}</h3>
            <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>
            <div className="restaurant-info">
                <span>⭐ {avgRating}</span>
                <span>{costForTwo}</span>
                <span>{deliveryTime} mins</span>
            </div>
        </div>
    );
};

export default RestaurantCard;
