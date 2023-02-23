import React, { useState, useEffect} from "react";
import { BsBag } from "react-icons/bs";
import Logo from "../image/Logo.png";
import MobileNav from "./MobileNav";
// import { Link } from "react-router-dom";

const Header = () => {

    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    // const { itemAmount } = useContext(CartContext);
  return (
    <header className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* <Link to={"/products"}> */}
          <div>
            <img className="-scale-50" src={Logo} alt="logo" />
          </div>
        {/* </Link> */}
        <nav className="hidden xl:flex gap-x-12 font-semibold"></nav>
        <div>
        <a
            href="https://buy.stripe.com/test_eVa3d253o51a5Ww144"
            target="_blank"
            rel="noopener noreferrer"
          >
                    <BsBag className='text-2xl' />
            </a>
        </div>

        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-black rounded-full flex justify-center items-center">
            {/* {itemAmount} */}
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
