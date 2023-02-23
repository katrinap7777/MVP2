import React, { useState, useEffect } from "react";
const stripe = require("stripe")(
  "sk_test_51MeIeBCDSrHORaZXaHh5JNrjHhgQ87hHixYPELgVZk0iesh7brDhdQdUBvipVrGkg6FsUws4JJCqcM5srXChPw3W00Ef5sRcW8"
);

const StripePricePull = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const price = await stripe.prices.retrieve(
        "price_1MeIfWCDSrHORaZX7lcKvh2S"
      );

      console.log(price);
      setPrices(price);
    };

    fetchData();
  }, []);

  console.log(prices);

  const stripePrice = [
    {
      id: "price_1MeIfWCDSrHORaZX7lcKvh2S",
      object: "price",
      active: true,
      billing_scheme: "per_unit",
      created: 1677073658,
      currency: "nzd",
      custom_unit_amount: null,
      livemode: false,
      lookup_key: null,
      metadata: {},
      nickname: null,
      product: "prod_NP6tgOqEeyQ7HH",
      recurring: null,
      tax_behavior: "unspecified",
      tiers_mode: null,
      transform_quantity: null,
      type: "one_time",
      unit_amount: 7900,
      unit_amount_decimal: "7900",
    },
  ];

  return (
    <>
      <ul className="">
        {stripePrice.map((stripePrice) => {
          return (
            <div key={stripePrice.id}>
              <p>{stripePrice.unit_amount}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default StripePricePull;
