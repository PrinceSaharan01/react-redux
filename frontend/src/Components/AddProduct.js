import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const addProduct = async () => {


        if (!name || !price || !image || !category) {
            alert('Kindly Check The Values')

        } else {
            let result = await fetch('http://localhost:4000/add', {
                method: "post",
                body: JSON.stringify({ name, price, image, category }),
                headers: {
                    "content-type": "application/json"
                }
            });
            result = await result.json();
            // console.log(result);
            navigate('/')
        }



    }

    return (
        <div>
            <h1>Add Product</h1><br></br><Link to='/'>Home</Link><br></br>
            <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}></input><br></br><br></br>
            <input type="number" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }}></input><br></br><br></br>
            <input type="text" placeholder="Image Address" value={image} onChange={(e) => { setImage(e.target.value) }}></input><br></br><br></br>
            <input type="text" placeholder="Category" value={category} onChange={(e) => { setCategory(e.target.value) }}></input><br></br><br></br>
            <button onClick={addProduct}>Add</button>


        </div>
    )

}
export default AddProduct;
