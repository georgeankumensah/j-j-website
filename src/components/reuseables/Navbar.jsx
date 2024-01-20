import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
    
    <div className="hidden lg:flex  justify-between items-center px-[8.75rem] py-[1.38rem] sticky top-0 w-full bg-white  z-[100]">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul
        className="flex items-center @apply text-[#1E1E1E] gap-[2.56rem] text-lg not-italic font-normal leading-[normal] default-font"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending p-2.5"
              : isActive
              ? "bg-[#abb7f95d] p-2.5"
              : "p-2.5"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink to="/about"    className={({ isActive, isPending }) =>
            isPending
              ? "pending p-2.5"
              : isActive
              ? "bg-[#abb7f95d] p-2.5"
              : "p-2.5"
          }>
          <li>About Us</li>
        </NavLink>
        <NavLink to="/services"    className={({ isActive, isPending }) =>
            isPending
              ? "pending p-2.5"
              : isActive
              ? "bg-[#abb7f95d] p-2.5"
              : "p-2.5"
          }>
          <li>Services</li>
        </NavLink>
      </ul>
      <button className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[8.75rem]">
        Contact Us
      </button>
    </div>
    {/* mobile navbar */}
    <div className="flex  items-center justify-between lg:hidden bg-white h-[82px] absolute z-[100] top-0 w-full p-[1.89rem]">
    <Link to="/">
        <img src={logo} alt="logo" className="w-[2.375rem] h-[2.6875rem]" />
      </Link>
    <GrMenu className="w-[2.239rem] h-[2.625rem]" />
    </div>
    </>
  );
};

export default Navbar;
