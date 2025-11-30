import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CheckoutPage = () => {
  const { total, itemAmount } = useContext(CartContext);

  return (
    <div className="pt-28 pb-20 container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Left: Billing Form */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="border p-3 rounded-md w-full"
            />

            <button
              type="submit"
              className="bg-black text-white uppercase py-3 px-5 rounded-md mt-4"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-3 text-lg">
            <span>Total Items:</span> <span>{itemAmount}</span>
          </div>

          <div className="flex justify-between text-2xl font-bold">
          Total: $ {parseFloat(total).toFixed(2)}
          </div>

          <p className="text-sm mt-4 text-gray-600">
            Your order will be delivered to your provided address within 3-5
            business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
