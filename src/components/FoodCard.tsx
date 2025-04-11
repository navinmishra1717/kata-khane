import React from 'react';
import { Star } from 'lucide-react';
import { MenuItem } from '../types';

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{item.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-orange-500 font-semibold">Rs. {item.price}</span>
          <span className="text-sm text-gray-500">{item.category}</span>
        </div>
      </div>
    </div>
  );
};