import React, { useState, useEffect } from "react";
import StripePricePull from "./StripePricePull";
// import StripeProduct from "./StripeProduct.json";
const stripe = require("stripe")(
  "sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8"
);

const StripeProductPull = () => {
  const [products, setProducts] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [stripeProducts, setstripeProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const product = await stripe.products.retrieve("prod_NP6tgOqEeyQ7HH");

      console.log(product);
      setProducts(product);
    };

    fetchData();
  }, []);

  const stripeProduct = [
    {
      id: "prod_NP6tgOqEeyQ7HH",
      object: "product",
      active: true,
      attributes: [],
      created: 1677073657,
      default_price: "price_1MeIfWCDSrHORaZX7lcKvh2S",
      description:
        "The perfect accessory to take your cooking to the next level.",
      images: [
        "https://files.stripe.com/links/MDB8YWNjdF8xTWVJZUJDRFNySE9SYVpYfGZsX3Rlc3RfdlZUSXlmbmdONFdFZ1ZXWHlpbE1DTnRM00CHOP97L1",
      ],
      livemode: false,
      metadata: {},
      name: "Original Cloche",
      package_dimensions: null,
      shippable: null,
      statement_descriptor: null,
      tax_code: "txcd_99999999",
      type: "service",
      unit_label: null,
      updated: 1677074217,
      url: null,
    },
  ];
  console.log(products);

  // const stripe = require('stripe')('sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8');

  // const price = await stripe.prices.retrieve(
  //   'price_1MeSfWCDSrHORaZX9xAtaZsK'
  // );

  //   setstripeProducts(stripeProduct);
  //   console.log(myProfile['title']);
  // console.log(stripeProduct.id);
  // console.log(product.id);

  // const obj = {
  // 	"id": "prod_NP6tgOqEeyQ7HH",
  // 	"object": "product",
  // 	"active": true,
  // 	"attributes": [],
  // 	"created": 1677073657,
  // 	"default_price": "price_1MeIfWCDSrHORaZX7lcKvh2S",
  // 	"description": "The perfect accessory to take your cooking to the next level.",
  // 	"images": [
  // 		"https://files.stripe.com/links/MDB8YWNjdF8xTWVJZUJDRFNySE9SYVpYfGZsX3Rlc3RfdlZUSXlmbmdONFdFZ1ZXWHlpbE1DTnRM00CHOP97L1"
  // 	],
  // 	"livemode": false,
  // 	"metadata": {},
  // 	"name": "Original Cloche",
  // 	"package_dimensions": null,
  // 	"shippable": null,
  // 	"statement_descriptor": null,
  // 	"tax_code": "txcd_99999999",
  // 	"type": "service",
  // 	"unit_label": null,
  // 	"updated": 1677074217,
  // 	"url": null
  // }
  // console.log(jokes[0].value);

  // console.log(StripeProduct[0].name);
  // console.log(obj.index) // 4
  // console.log(obj.value) // -1

  // console.log(product.id);

  // const properties = require('./properties.json');

  //  const filterProperties = (properties) => {
  //      return properties.filter((property) => property.private === false);
  //  };

  // const filterProperties = properties.filter(property => property.private === false);

  // console.log(filterProperties);

  //  module.exports = filterProperties;

  // const filterProperties = (properties) => {
  //     const nonPrivateSales = [];

  //     for (const property of properties) {
  //         if(property.private === false) {
  //             nonPrivateSales.push(property);
  //         }
  //     }
  //     return nonPrivateSales;
  // }

  return (
    <>
      <h2>Products From Stripe</h2>
      <ul className="">
        {stripeProduct.map((stripeProduct) => {
          return (
            <div key={stripeProduct.id}>
              <li className="">
                <div className="img">
                  <img
                    src={stripeProduct.images[0]}
                    // src={`./image/${product.image}`}
                    alt={stripeProduct.description}
                    className="product-image"
                  />
                </div>
                <div className="">
                  <h2 className="">{stripeProduct.name}</h2>
                  <p className="">{stripeProduct.description}</p>
                  <StripePricePull />
                </div>
              </li>
            </div>
          );
        })}
        <div>
          <a
            href="https://buy.stripe.com/test_eVa3d253o51a5Ww144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Buy now</button>
          </a>
        </div>
      </ul>
    </>
  );
};

export default StripeProductPull;
