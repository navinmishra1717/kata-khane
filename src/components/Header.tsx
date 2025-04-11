import React from 'react';
import { Menu, Search, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Kata Khane</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for food or restaurants..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          <button className="p-2 hover:bg-orange-600 rounded-lg">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};