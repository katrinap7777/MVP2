// import React, {useState,  useEffect } from "react";

// const stripe = require('stripe')('sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8');

// const ProductPricePull = () => {

//     const [products, setProducts] = useState([]);
//     const [prices, setPrices] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//         const product = await stripe.products.retrieve('prod_NP6tgOqEeyQ7HH');
//         const price = await stripe.prices.retrieve('price_1MeIfWCDSrHORaZX7lcKvh2S');
      
//           console.log(price);
//           setPrices(price);
//           console.log(product);
//           setProducts(product);
//         };
      
//           fetchData();
//         }, []);

//         console.log(products);
//         console.log(prices);

//         const stripeProduct = [
//             {
//                 "id": "prod_NP6tgOqEeyQ7HH",
//                 "object": "product",
//                 "active": true,
//                 "attributes": [],
//                 "created": 1677073657,
//                 "default_price": "price_1MeIfWCDSrHORaZX7lcKvh2S",
//                 "description": "The perfect accessory to take your cooking to the next level.",
//                 "images": [
//                     "https://files.stripe.com/links/MDB8YWNjdF8xTWVJZUJDRFNySE9SYVpYfGZsX3Rlc3RfdlZUSXlmbmdONFdFZ1ZXWHlpbE1DTnRM00CHOP97L1"
//                 ],
//                 "livemode": false,
//                 "metadata": {},
//                 "name": "Original Cloche",
//                 "package_dimensions": null,
//                 "shippable": null,
//                 "statement_descriptor": null,
//                 "tax_code": "txcd_99999999",
//                 "type": "service",
//                 "unit_label": null,
//                 "updated": 1677074217,
//                 "url": null
//             }
//           ];
    

//           const stripePrice = [
//             {
//                 "id": "price_1MeIfWCDSrHORaZX7lcKvh2S",
//                 "object": "price",
//                 "active": true,
//                 "billing_scheme": "per_unit",
//                 "created": 1677073658,
//                 "currency": "nzd",
//                 "custom_unit_amount": null,
//                 "livemode": false,
//                 "lookup_key": null,
//                 "metadata": {},
//                 "nickname": null,
//                 "product": "prod_NP6tgOqEeyQ7HH",
//                 "recurring": null,
//                 "tax_behavior": "unspecified",
//                 "tiers_mode": null,
//                 "transform_quantity": null,
//                 "type": "one_time",
//                 "unit_amount": 7900,
//                 "unit_amount_decimal": "7900"
//             }
//           ];

//           return (
//             <>
//             <h2>Products From Stripe</h2>
//             <ul className="">
//               {stripePrice && stripeProduct.map((stripeProduct, stripePrice) => {
//                 // {stripePrice.map((stripePrice) => {
          
//                 return (
//                   <div key={stripeProduct.id && stripePrice.id}>
//                   <li className="" >
//                       <div className="img">
//                         <img
//                           src={stripeProduct.images[0]} 
//                           // src={`./image/${product.image}`}
//                           alt={stripeProduct.description}
//                           className="product-image"
//                         />
//                       </div>
//                     <div className="">
//                       <h2 className="">{stripeProduct.name}</h2>
//                       <p className="">{stripeProduct.description}</p>
//                       <p className="">{stripePrice.unit_amount}</p>
//                     </div>
//                   </li>
//                   </div>
//                 );
//               })}
//               <div>
//                   <a href="https://buy.stripe.com/test_eVa3d253o51a5Ww144" target="_blank" rel="noopener noreferrer">
//                       <button>Buy now</button>
//                   </a>
//               </div>
             
//             </ul>
//           </>
        
//           )};
            
        
        
        
        
//         export default ProductPricePull;