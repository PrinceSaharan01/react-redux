import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartslice";

const Cart = () => {

    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const removeProduct = (id) => {
        dispatch(remove(id))
    }

    return (

        <div>

            <h1>Cart Page</h1>
            <div className="cartWrapper">
                {
                    items.map((itm) =>
                        <div className="cartCard" key={itm._id}>
                            <img src={itm.image}></img>
                            <h4>{itm.name}</h4>
                            <h4>${itm.price}</h4>
                            <h4>{itm.category}</h4>
                            <button onClick={() => removeProduct(itm._id)} className="btn">Delete</button>

                        </div>

                    )
                }
            </div>

        </div>
    )

}
export default Cart;