import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";  // used for calling a reducer from a slice
import { Link } from "react-router-dom";
import { add } from "../store/cartslice";
import { fetchProducts, STATUSES } from "../store/productSlice";


const Product = () => {
    const dispatch = useDispatch();
    // const products = [];
    const {data:products,status} = useSelector((state)=>state.product)

    // const [products, setProducts] = useState([])

    useEffect(() => {
        // fetchProducts();

       dispatch(fetchProducts()) ;

    }, [])

    // const fetchProducts = async () => {

    //     let data = await fetch('http://localhost:4000/');
    //     data = await data.json();
    //     setProducts(data);
    //     // console.log(data);
    // }


    const handleAdd = (item)=>{
        dispatch(add(item));


    }

    if(status== STATUSES.LOADING){
        return(
            <h2>Loading.......</h2>
        )

    }
    if(status== STATUSES.LOADING){
        return(
            <h2>Something Went Wrong</h2>
        )

    }
    return (
        <div className="productsWrapper">
            {
                products.length>0? products.map((item) => 
                <div className="card" key={item._id}>
                    <img src={item.image}></img>
                    <h4>{item.name}</h4>
                    <h4>${item.price}</h4>
                    <h4>{item.category}</h4>
                    <button onClick={()=>handleAdd(item)} className="btn">ADD</button><Link to={'/update/' + item._id}>Update</Link> 
                    {/* use arrow function while passing an argument or else it will keep on calling  */}

                </div>

                ):<h1>No Product Found</h1>
            }


        </div>
    )

}
export default Product;
