import React, { useState, useEffect } from "react";
import StripePricePull from "./StripePricePull";
import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8");

const StripeProductPull = () => {
  const [products, setProducts] = useState([]);


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

 

  return (
    <>
      <h2 className="text-[70px] leading-[-.1] font-light mb-4">Product From Stripe</h2>
      <ul className="">
        {stripeProduct.map((stripeProduct) => {
          return (
            <div className="productStripe" key={stripeProduct.id}>
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
                  <h3 className="">{stripeProduct.name}</h3>
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
