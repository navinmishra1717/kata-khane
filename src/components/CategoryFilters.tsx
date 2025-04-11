import React from 'react';
import { Coffee, Utensils, Sandwich, Sun } from 'lucide-react';
import { FoodCategory } from '../types';

interface CategoryFiltersProps {
  selectedCategory: FoodCategory | null;
  onCategoryChange: (category: FoodCategory | null) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: { id: FoodCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'main-course', label: 'Main Course', icon: <Utensils className="h-5 w-5" /> },
    { id: 'breakfast', label: 'Breakfast', icon: <Sun className="h-5 w-5" /> },
    { id: 'fast-food', label: 'Fast Food', icon: <Sandwich className="h-5 w-5" /> },
    { id: 'drinks', label: 'Drinks', icon: <Coffee className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <button
        onClick={() => onCategoryChange(null)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
          selectedCategory === null
            ? 'bg-orange-500 text-white'
            : 'bg-white text-gray-600 hover:bg-orange-100'
        }`}
      >
        All Items
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-600 hover:bg-orange-100'
          }`}
        >
          {category.icon}
          {category.label}
        </button>
      ))}
    </div>
  );
};