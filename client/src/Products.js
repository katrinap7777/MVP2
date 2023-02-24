import React, { useState, useEffect } from "react";

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
 

return (
  <>
  <h2 className="text-[70px] leading-[-.1] font-light mb-4">Product</h2>
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
)};


export default Products;