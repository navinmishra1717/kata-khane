import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-600">{restaurant.cuisine.join(', ')}</p>
          <p className="text-sm text-gray-500 mt-1">
            Price Range: {restaurant.priceRange.charAt(0).toUpperCase() + restaurant.priceRange.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};