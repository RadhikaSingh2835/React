import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems , setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 49.99,
      description:
        "Comfortable wireless headphones with clear sound, deep bass, and long battery life.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: {
        rate: 4.5,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Classic Cotton T-Shirt",
      price: 19.99,
      description:
        "Soft and comfortable cotton t-shirt suitable for everyday casual wear.",
      category: "men's clothing",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      rating: {
        rate: 4.2,
        count: 85,
      },
    },
    {
      id: 3,
      title: "Women's Casual Jacket",
      price: 59.99,
      description:
        "Stylish casual jacket made with lightweight material and a comfortable fit.",
      category: "women's clothing",
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
      rating: {
        rate: 4.7,
        count: 156,
      },
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      price: 79.99,
      description:
        "Smart fitness watch with activity tracking, heart-rate monitoring, and notifications.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: {
        rate: 4.4,
        count: 210,
      },
    },
    {
      id: 5,
      title: "Leather Backpack",
      price: 64.99,
      description:
        "Durable leather backpack with multiple compartments for work, college, and travel.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      rating: {
        rate: 4.6,
        count: 98,
      },
    },
    {
      id: 6,
      title: "Running Shoes",
      price: 44.99,
      description:
        "Lightweight running shoes designed for comfort, daily workouts, and outdoor activities.",
      category: "men's footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: {
        rate: 4.3,
        count: 134,
      },
    },
    {
      id: 7,
      title: "Minimalist Wrist Watch",
      price: 89.99,
      description:
        "Elegant minimalist wrist watch with a classic design suitable for everyday use.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
      rating: {
        rate: 4.8,
        count: 176,
      },
    },
    {
      id: 8,
      title: "Canvas Sneakers",
      price: 34.99,
      description:
        "Comfortable canvas sneakers with a simple design perfect for casual outfits.",
      category: "women's footwear",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      rating: {
        rate: 4.1,
        count: 72,
      },
    },
    {
      id: 9,
      title: "Portable Bluetooth Speaker",
      price: 39.99,
      description:
        "Compact Bluetooth speaker with powerful audio and long-lasting battery performance.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      rating: {
        rate: 4.5,
        count: 143,
      },
    },
    {
      id: 10,
      title: "Denim Jacket",
      price: 69.99,
      description:
        "Classic denim jacket with a comfortable fit and timeless casual style.",
      category: "men's clothing",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
      rating: {
        rate: 4.4,
        count: 109,
      },
    },
    {
      id: 11,
      title: "Women's Handbag",
      price: 54.99,
      description:
        "Stylish handbag with spacious compartments for everyday essentials.",
      category: "women's accessories",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      rating: {
        rate: 4.6,
        count: 201,
      },
    },
    {
      id: 12,
      title: "Gaming Mouse",
      price: 29.99,
      description:
        "Responsive gaming mouse with adjustable DPI and ergonomic design.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      rating: {
        rate: 4.3,
        count: 167,
      },
    },
    {
      id: 13,
      title: "Oversized Hoodie",
      price: 39.99,
      description:
        "Warm oversized hoodie made from soft fabric for maximum comfort.",
      category: "women's clothing",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      rating: {
        rate: 4.7,
        count: 188,
      },
    },
    {
      id: 14,
      title: "Sunglasses",
      price: 24.99,
      description:
        "Modern sunglasses with UV protection and a stylish lightweight frame.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      rating: {
        rate: 4.2,
        count: 94,
      },
    },
    {
      id: 15,
      title: "Mechanical Keyboard",
      price: 74.99,
      description:
        "Mechanical keyboard with tactile switches, RGB lighting, and a compact layout.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      rating: {
        rate: 4.8,
        count: 245,
      },
    },
    {
      id: 16,
      title: "Women's Running Shoes",
      price: 49.99,
      description:
        "Lightweight running shoes designed to provide comfort and support during workouts.",
      category: "women's footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: {
        rate: 4.5,
        count: 131,
      },
    },
    {
      id: 17,
      title: "Travel Duffel Bag",
      price: 45.99,
      description:
        "Spacious travel duffel bag with durable handles and multiple storage compartments.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      rating: {
        rate: 4.4,
        count: 116,
      },
    },
    {
      id: 18,
      title: "Smartphone",
      price: 499.99,
      description:
        "Modern smartphone with a high-resolution display, powerful processor, and excellent camera.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      rating: {
        rate: 4.6,
        count: 320,
      },
    },
    {
      id: 19,
      title: "Casual Polo Shirt",
      price: 27.99,
      description:
        "Comfortable polo shirt made from breathable fabric for casual everyday wear.",
      category: "men's clothing",
      image: "https://images.unsplash.com/photo-1625910513413-5fc45b1d6f87",
      rating: {
        rate: 4.1,
        count: 63,
      },
    },
    {
      id: 20,
      title: "Ceramic Coffee Mug",
      price: 14.99,
      description:
        "Minimal ceramic coffee mug with a comfortable handle and durable finish.",
      category: "home",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
      rating: {
        rate: 4.7,
        count: 152,
      },
    },
  ];

  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} cartItems={cartItems}/>
      <main className="bg-gray-100 px-6 py-10">
        {isCartOpen ? (
          <Cart cartItems={cartItems}/>
        ) : (
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} setCartItems={setCartItems} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
