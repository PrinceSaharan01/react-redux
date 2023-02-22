import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home =()=>{

const [product,setProduct] = useState([])
    useEffect(()=>{

        getData();

    },[])

    const getData = async()=>{

        let data = await fetch('http://localhost:4000/');
        data= await data.json();
        // console.log(data);
        setProduct(data);


    }

return(
    <div>

    <h1>Home Page Component</h1>
    <Link to='/add'>Add Product</Link>
    <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Image</li>
    </ul>
    {
        product.map((item,k =0)=>

<ul key={k}>
    <li>{k+1}</li>
    <li>{item.name}</li>
    <li>$ {item.price}</li>
    <li>{item.category}</li>
    {/* <li>{item.image}</li> */}
    <li><img src={item.image}></img></li>
</ul>
       
        )
    }
    </div>
)

}
export default Home;