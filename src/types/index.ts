export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  image: string;
  cuisine: string[];
  priceRange: 'low' | 'medium' | 'high';
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: FoodCategory;
  subCategory?: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export type FoodCategory = 'main-course' | 'breakfast' | 'fast-food' | 'drinks';
export type DrinkCategory = 'tea' | 'coffee' | 'soft-drink';
export type SortOrder = 'rating' | 'price-low' | 'price-high';