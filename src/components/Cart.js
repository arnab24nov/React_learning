import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-auto w-[500px] h-[500px] shadow-lg m-10 p-4">
      <h1 className=" text-center font-bold text-slate-600 text-[30px] text-decoration-line: underline">
        Cart
      </h1>
      {cartItems.length == 0 ? (
        <h1 className=" text-center my-4 font-semibold text-slate-600 text-[16px]">
          {" "}
          There is no item in the cart.
        </h1>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                className="font-semibold text-slate-600 text-[18px]"
                key={item.card.info.id}
              >
                {item.card.info.name}
              </li>
            ))}
          </ul>
          <button
            className="m-4 p-2 bg-green-600 rounded-lg hover:text-white font-semibold"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
