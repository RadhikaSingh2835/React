import React from 'react'


function Navbar({setIsCartOpen , cartItems}) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          Shop<span className="text-blue-600">Ease</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            onClick={() => setIsCartOpen(false)}
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </a>
        </div>

        {/* Search */}
        <div className="hidden items-center rounded-lg border bg-gray-50 px-3 py-2 lg:flex">
          <input
            type="text"
            placeholder="Search products..."
            className="w-48 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />

          <span className="text-gray-500">⌕</span>
        </div>

        {/* Cart */}
        <button 
        onClick={() => setIsCartOpen(true)}
        className="relative rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
          🛒 Cart

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartItems.length}
          </span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

