import React from 'react';
import { Coffee, Store } from 'lucide-react';

interface TabsProps {
  activeTab: 'food' | 'restaurants';
  onTabChange: (tab: 'food' | 'restaurants') => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4">
          <button
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 ${
              activeTab === 'food'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabChange('food')}
          >
            <Coffee className="h-5 w-5" />
            <span>Hunt Food</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 ${
              activeTab === 'restaurants'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabChange('restaurants')}
          >
            <Store className="h-5 w-5" />
            <span>Hunt Restaurants</span>
          </button>
        </div>
      </div>
    </div>
  );
};