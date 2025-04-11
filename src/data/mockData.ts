import { Restaurant } from "../types";

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Himalayan Flavors",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920",
    cuisine: ["Nepali", "Indian"],
    priceRange: "medium",
    menu: [
      {
        id: "m1",
        name: "Classic Momo",
        category: "fast-food",
        subCategory: "momo",
        price: 150,
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1920",
        description:
          "Steamed dumplings filled with spiced minced meat or vegetables",
      },
      {
        id: "m2",
        name: "Thakali Set",
        category: "main-course",
        subCategory: "thakali",
        price: 350,
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1920",
        description: "Traditional Thakali cuisine with dal, rice, and curry",
      },
      {
        id: "m3",
        name: "Masala Dosa",
        category: "breakfast",
        subCategory: "dosa",
        price: 180,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1920",
        description: "Crispy rice crepe served with potato curry and chutneys",
      },
      {
        id: "m4",
        name: "Masala Chai",
        category: "drinks",
        subCategory: "tea",
        price: 60,
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1920",
        description: "Spiced Indian tea with milk",
      },
    ],
  },
  {
    id: "2",
    name: "Urban Bites",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1920",
    cuisine: ["International", "Fusion"],
    priceRange: "high",
    menu: [
      {
        id: "m5",
        name: "Gourmet Pizza",
        category: "fast-food",
        subCategory: "pizza",
        price: 850,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1920",
        description: "Artisanal pizza with premium toppings",
      },
      {
        id: "m6",
        name: "Eggs Benedict",
        category: "breakfast",
        subCategory: "eggs",
        price: 450,
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1920",
        description: "Poached eggs with hollandaise sauce on English muffins",
      },
      {
        id: "m7",
        name: "Iced Latte",
        category: "drinks",
        subCategory: "coffee",
        price: 220,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1920",
        description: "Chilled espresso with milk and ice",
      },
    ],
  },
];
