import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!items || !items.length) {
        return null;
    }

    const toggleAccordion = () => setIsOpen(prev => !prev);

    return (
        <div className="category-section mb-6 border border-indigo-200 rounded-md shadow">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700">
                    {title}
                </h3>
                <span className="text-indigo-600 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            {isOpen && (
                <ul className="divide-y divide-indigo-100 px-4 pb-4">
                    {items.map(item => (
                        <li
                            key={item.card.info.id}
                            className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-4"
                        >
                            {/* Left: Text content */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                                        {item.card.info.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {item.card.info.description || "No description available"}
                                    </p>
                                </div>
                                <div className="text-green-600 font-bold text-base sm:text-lg mt-2">
                                    ₹{(item.card.info.price || item.card.info.defaultPrice || 0) / 100}
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="sm:w-28 flex-shrink-0">
                                <img
                                    className="w-50 h-50 object-cover rounded-md"
                                    src={CDN_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                />
                            </div>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    );
};

export default RestaurantCategory;
