import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const items = useSelector((state)=>state.cart);
    return (

        <div style={{display:'flex', alignItems:"center" , justifyContent:"space-between"}}>
            <span className="logo"> <img src="https://www.nicepng.com/png/detail/139-1391888_png-file-retail-store-icon-png.png"></img></span>
            <div>
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/cart'>Cart</Link>
                <Link className="navLink" to='/add'>Add Product</Link>
                <span className="cartCount">Items:- {items.length}</span>
            </div>

        </div>
    )

}
export default Navbar;