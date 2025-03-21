import React, { useState } from "react";
import { Link } from "react-router-dom";
import X from "/assets/X.png";
import cross from "/assets/cross.png";
import hamburger from "/assets/hamburgermenu.png";
import Logo from "/assets/Logo.png";
import searchIcon from "/assets/searchIcon.png";
import Cart from "/assets/cartIcon.png";
import profile from "/assets/profileIcon.png";
import dropdown from "/assets/dropDownIcon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative md:w-[1260px] mx-auto border-b border-gray-400">
      {/* Banner */}
      <div className="bg-black text-white">
        <div className="flex justify-center items-center text-xs mx-auto gap-4 py-2 md:py-3">
          <div className="text-center flex-grow">
            Sign up and get 20% off your first order.{" "}
            <Link to="/" className="underline">
              Sign Up Now
            </Link>
          </div>
          <div className="cursor-pointer hidden md:block md:absolute md:right-8">
            <img src={cross} alt="Close" />
          </div>
        </div>
      </div>

      {/* Small Screen Navbar (Hamburger menu, Logo, Icons) */}
      <div className="flex justify-between items-center bg-white p-4 md:hidden">
        <div className="flex gap-4 items-center">
          <img
            src={hamburger}
            alt="Hamburger Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[126px] h-[18px] " />
          </Link>
        </div>

        <div className="flex gap-3">
          <img src={searchIcon} alt="Search" className="w-6 h-6" />
          <img src={Cart} alt="Cart" className="w-6 h-6" />
          <img src={profile} alt="Profile" className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-10">
          <div className="flex justify-between items-center p-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-[126px] h-[18px] text-black"
            />
            <div className="cursor-pointer" onClick={toggleMenu}>
              <img src={X} alt="Close" className="w-6 h-6" />
            </div>
          </div>
          <ul className="flex flex-col items-center">
            <li className="py-4">
              <Link to="/Category">Shop</Link>
            </li>
            <li className="py-4">
              <Link to="/ProductDetailPage">On Sale</Link>
            </li>
            <li className="py-4">
              <Link to="/category">New Arrivals</Link>
            </li>
            <li className="py-4">
              <Link to="/category">Brands</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Large Screen Navbar */}
      <div className="hidden md:flex justify-between items-center bg-white text-black py-4 px-16 z-20">
        <div className="flex gap-12">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[160px] h-[24px] " />
          </Link>
          <ul className="flex gap-12 text-lg font-medium">
            <li className="relative">
              <Link to="/category">Shop</Link>
              <img
                src={dropdown}
                alt="Dropdown"
                className="absolute top-3 right-0 left-12 w-3"
              />
            </li>
            <li><Link to="/ProductDetailPage">On Sale</Link></li>
            <li>
              <Link to="/category">New Arrivals</Link>
            </li>
            <li><Link to="/category">Brands</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 w-[377px]">
          <img src={searchIcon} alt="Search" className="w-6 h-6 opacity-40" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent w-[300px] px-4 py-2 text-gray-500 outline-none"
          />
        </div>

        {/* Icons (Cart, Profile) */}
        <div className="flex gap-4">
          <Link to="/Cart">
            <img
              src={Cart}
              alt="Cart"
              className="w-5 h-5 cursor-pointer hover:opacity-50"
            />
          </Link>
          <img
            src={profile}
            alt="Profile"
            className="w-5 h-5 cursor-pointer hover:opacity-50"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#292e43] text-white w-full border-b border-white rounded-lg">
//       <div className="container mx-auto flex justify-between items-center h-[80px] px-6 md:px-20">
//         <Link to="/" className="text-2xl font-bold">
//           BrandName
//         </Link>

//         <ul className="flex gap-6 text-sm font-semibold">
//           <li>
//             <Link to="/" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/CartPage" className="hover:text-gray-300">
//               Product
//             </Link>
//           </li>
//           <li>
//             <Link to="/ProductList" className="hover:text-gray-300">
//               Pricing
//             </Link>
//           </li>
//           <li>
//             <Link to="/ProductDetailPage" className="hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         <div className="flex items-center gap-6">
//           {/* <Link to="/login" className="hover:text-gray-300"> */}
//             Login
//           {/* </Link> */}
//           <button className="bg-[#23A6F0] border border-white hover:bg-white hover:text-black hover:border hover:border-black transition-colors w-[100px] h-[52px] rounded-l-lg">
//             Join Us
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
