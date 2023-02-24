import React, { useState, useEffect } from "react";
// import cloche from "./image/cloche.png";



const Products = () => {
  const [products, setProducts] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:5001/products`);
    const product = await response.json();

    setProducts(product);

  };

    fetchData();
  }, []);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [image, setImage] = useState("");

// const jsonMsg =
// {
//    "message": "Carrot Cake is great"
// }
// const product = {
//   title,
//   description,
//   price,
//   image
// };

// console.log(products);
// const handleBtnClick = () => {
//     fetch(`https://buy.stripe.com/test_eVa3d253o51a5Ww144`, {
//         method: 'GET',
//     })
//     console.log(handleBtnClick);
//  };
 

// const handleBtnClick = () => {
//    fetch(`http://localhost:5001/products`, {
//        method: 'POST',
//        mode: 'cors',
//        body: JSON.stringify(product)
//    })
//    console.log(handleBtnClick);
//    console.log(product);
// };
// eslint-disable-next-line
// const Product = ({
//   title,
//   description,
//   price,
//   image
//   }) => {
return (
  <>
  <h2 className="text-[70px] leading-[-.1] font-light mb-4">Products</h2>
  <ul className="">
    {products.map((product) => {

      return (
        <div key={product.id}>
        <div className="border border-[grey] h-[300px] mb-4 relative overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
        <li className="list-none" >
            <div className="img">
              <img
                src={product.image} 
                // src={`./image/${product.image}`}
                alt={product.description}
                className="product-image"
              />
            </div>
          <div className="">
            <h3 className="">{product.title}</h3>
            <p className="">{product.description}</p>
            <p className="">{product.price}</p>
          </div>
        </li>
        </div>
        </div>
        </div>
      );
    })}
    <div>
        <a href="https://buy.stripe.com/test_eVa3d253o51a5Ww144" target="_blank" rel="noopener noreferrer">
            <button>Buy now</button>
        </a>
    </div>
   
  </ul>
</>
// );
// };
//    <button onClick={handleBtnClick}>Post Button</button>
)};


export default Products;