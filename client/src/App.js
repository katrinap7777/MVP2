import React from "react";
import Products from "./Products";
import StripeProductPull from "./StripeProductPull";
import Header from "./component/Header";


const App = () => {
//   const [products, setProducts] = useState([]);


// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(`http://localhost:5001/products`);
//     const product = await response.json();

//     setProducts(product);

//   };

//     fetchData();
//   }, []);
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
//    fetch(`http://localhost:5001/products`, {
//        method: 'POST',
//        mode: 'cors',
//        body: JSON.stringify(product)
//    })
//    console.log(handleBtnClick);
//    console.log(product);
// };


return (
    <>
    <div className="overflow-hidden">
    <Header />
    <Products />
    <br />
    <StripeProductPull /> 
    </div>
    </>
  // <>
)};



export default App;
