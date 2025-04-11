import React, { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { RestaurantCard } from "./components/RestaurantCard";
import { FoodCard } from "./components/FoodCard";
import { CategoryFilters } from "./components/CategoryFilters";
import { restaurants } from "./data/mockData";
import { MenuItem, Restaurant, SortOrder, FoodCategory } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<"food" | "restaurants">("food");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("rating");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | null>(
    null,
  );

  // Get all menu items from all restaurants
  const allMenuItems = restaurants.flatMap((restaurant) => restaurant.menu);

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase()),
        ) ||
        restaurant.menu.some((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    )
    .sort((a, b) => b.rating - a.rating);

  // Filter and sort menu items
  const filteredMenuItems = allMenuItems
    .filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subCategory &&
          item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "rating") return b.rating - a.rating;
      if (sortOrder === "price-low") return a.price - b.price;
      return b.price - a.price;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeTab === "food" ? "Available Foods" : "Available Restaurants"}
          </h2>

          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          >
            <option value="rating">Best Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {activeTab === "food" && (
          <CategoryFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "restaurants"
            ? filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            : filteredMenuItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
        </div>
      </main>
    </div>
  );
}

export default App;
