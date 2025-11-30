import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full duration-300 z-20 px-4 lg:px-[45px]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>

        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-y-2 h-[430px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4">
        {/* Total & Clear */}
        <div className="flex justify-between w-full items-center">
          <div className="text-lg font-medium">
            Total: $ {parseFloat(total).toFixed(2)}
          </div>

          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 border flex justify-center items-center text-white w-12 h-12 text-xl"
          >
            <FiTrash2 />
          </div>
        </div>

      

        <Link
  to="/checkout"
  onClick={handleClose}
  className="uppercase p-3 bg-black m-2 flex justify-center items-center text-white w-full font-medium"
>
  Checkout
</Link>
      </div>
    </div>
  );
}

export default Sidebar;
