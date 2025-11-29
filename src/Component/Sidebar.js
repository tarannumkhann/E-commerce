import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total,  itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full "
      } w-full bg-white fixed top-0 h-full duration-300 z-20 px-4 lg:px-[45px] `}
    >
      <div className=" flex item-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({ itemAmount})
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center item-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[430px]  overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className="  flex justify-between w-full item-center">
          {/* total */}
          <div>
            <span>Total :</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={ clearCart } className="cursor-pointer py-4 bg-red-500 border flex justify-center text-white w-12 h-12 item-center text-xl">
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className="uppercase p-3 bg-gray-200 flex justify-center m-2 items-center text-primary w-full font-medium">view cart
        </Link>
        <Link to={'/'} className="uppercase p-3 bg-black m-2 flex justify-center items-center text-white w-full font-medium">
        checkout </Link>
      </div>
    </div>
  );
}
export default Sidebar;
