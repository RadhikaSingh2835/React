import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Cart
          </h1>

          <p className="mt-1 text-gray-500">
            {cartItems.length} item(s) in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mb-4 text-6xl">🛒</div>

            <h2 className="text-xl font-semibold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart and they will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
                >
                  {/* Image */}
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {product.category}
                      </p>

                      <h2 className="line-clamp-1 text-lg font-semibold text-gray-800">
                        {product.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        ⭐ {product.rating.rate} ({product.rating.count})
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-4 flex items-center justify-between">

                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-lg border">
                        <button className="px-3 py-1 text-lg hover:bg-gray-100">
                          −
                        </button>

                        <span className="px-4 py-1 text-sm font-semibold">
                          1
                        </span>

                        <button className="px-3 py-1 text-lg hover:bg-gray-100">
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>
                    $
                    {cartItems
                      .reduce((total, product) => total + product.price, 0)
                      .toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>

                    <span>
                      $
                      {cartItems
                        .reduce((total, product) => total + product.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

