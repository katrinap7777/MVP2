import React from "react";
import { BsBag } from "react-icons/bs";
import Logo from "../image/Logo.png";
import MobileNav from "./MobileNav";
// import { Link } from "react-router-dom";

const Header = () => {



    // const { itemAmount } = useContext(CartContext);
  return (
    <>
    <header className="fixed w-full bg-cover bg-gradient-to-r from-teal-200 to-cyan-200 px-[30px] lg:px-[100px] lf:h-[140px] flex-items items-center">
        <div>
            <img className="center-item" src={Logo} alt="logo" />
          </div>

        <nav className="hidden xl:flex gap-x-12 font-semibold">
        <div>
        <a
            href="https://buy.stripe.com/test_eVa3d253o51a5Ww144"
            target="_blank"
            rel="noopener noreferrer"
          >
                    <BsBag className='text-2xl' />
            </a>
        </div>
        </nav>

        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-black rounded-full flex justify-center items-center">

        </div>
      
      <MobileNav />
    </header>
    </>
  );
};

export default Header;


