import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";


const UpdateProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();
    const params = useParams();


    useEffect(()=>{
        getInfo();
    },[])

    const getInfo = async ()=>{

        const data = await fetch (`http://localhost:4000/update/${params.id}`);
        let result =  await data.json();
        console.log(result);

        setName(``);
    }

    const updatePro = async () => {


        if (!name || !price || !image || !category) {
            alert('Kindly Check The Values')

        } else {
            let result = await fetch(`http://localhost:4000/update/${params.id}`, {
                method: "put",
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
            <h1>Update Product</h1><br></br><br></br>
            <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}></input><br></br><br></br>
            <input type="number" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }}></input><br></br><br></br>
            <input type="text" placeholder="Image Address" value={image} onChange={(e) => { setImage(e.target.value) }}></input><br></br><br></br>
            <input type="text" placeholder="Category" value={category} onChange={(e) => { setCategory(e.target.value) }}></input><br></br><br></br>
            <button onClick={updatePro}>Update</button>


        </div>
    )

}
export default UpdateProduct;
