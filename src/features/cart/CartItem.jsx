import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helpers";
// import { deleteItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <li className=" py-3 px-5 md:px-3 sm:flex sm:justify-between sm:items-center ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex sm:gap-4 justify-between items-center">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
