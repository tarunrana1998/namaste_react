// Dummy restaurant data

const RestaurantCard = ({  image,name, cuisines, rating, deliveryTime }) => {
    return (
      <div className="restaurant-card">
        <img className="restaurant-img" src={image} alt={name} />
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-info">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>{deliveryTime} mins</span>
        </div>
      </div>
    );
  };

export default RestaurantCard;