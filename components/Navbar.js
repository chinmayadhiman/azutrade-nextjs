import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
const Navbar = () => {
  const Menus = [
    { name: "Home", icon: "fa-solid fa-house",link:"/" },
    {
      name: "Product",
      icon: "fa-brands fa-product-hunt",
      link:"/product"
    },
    {
      name: "Faq",
      icon: "fa-sharp fa-solid fa-question",
      link:"/faq"
    },
    { name: "Contact", icon: "fa-solid fa-envelope", link:"/contactus"},
    {
      name: "About us",
      icon: "fa-solid fa-address-card",
      link:"/aboutus"
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <>
      {/* ------------------------------Desktop Navigation---------------------------------- */}
      <div className="nav p-2 bg-white hidden md:block fixed w-full top-0 z-50">
        <ul className="flex gap-20 justify-center p-2">
          {Menus.map((menu, i) => (
            <Link href={menu.link}>
              <li
                key={i}
                className="flex gap-5 text-2xl p-2 "
                onClick={() => setActive(i)}
              >
                {" "}
                <span
                  className={`text-2xl cursor-pointer duration-500 flex gap-5 p-2 px-4 rounded-xl ${
                    i === active && "text-white bg-orange-500 "
                  }`}
                >
                  <i className={`${menu.icon}`}></i>
                  {menu.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* --------------------------Mobile Navigation--------------------------------------- */}

      <div className="md:hidden">
        <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl fixed bottom-0 w-full z-50">
          <ul className="flex relative justify-evenly">
            {Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <Link
                  href={menu.link}
                  className="flex flex-col text-center pt-6"
                  onClick={() => setActive(i)}
                >
                  <span
                    className={`text-xl cursor-pointer duration-500 ${
                      i === active && "-mt-4 text-orange-500"
                    }`}
                  >
                    <i className={`${menu.icon}`}></i>
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? "translate-y-2 duration-200 opacity-100 text-xl font-semibold"
                        : "opacity-0 translate-y-10"
                    } `}
                  >
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* -----------------------------------------Mobile Navigation Ends Here------------------------ */}
    </>
  );
};

export default Navbar;
