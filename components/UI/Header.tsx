/* eslint-disable @next/next/no-img-element */
import { RootState } from "@/globalRedux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function CartPopover() {
  const counter = useSelector((state: RootState) => state.counter);
  
  return (
    <div className="popover-content md:top-18 absolute left-1/2 top-20 z-40 w-[360px] -translate-x-1/2 transform rounded-xl bg-white shadow-lg shadow-very-dark-blue md:left-auto md:right-6 md:translate-x-0">
      <div className="">
        <h3 className="border-b border-grayish-blue px-5 pb-6 pt-4 text-xl font-bold text-very-dark-blue">
          Cart
        </h3>
      </div>
      <div className="flex flex-col gap-4 px-5 py-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <img
              src="/image-product-1-thumbnail.jpg"
              alt="product"
              width={50}
              className="rounded-md"
            />
            <div className="text-dark-grayish-blue">
              <h4 className="text-md">Fall Limited Edition Sneakers</h4>
              <div className="flex items-center gap-2">
                <p id="here" className="text-sm">$125.00 x {counter}</p>
                <p className="font-bold text-very-dark-blue">$125.00</p>
              </div>
            </div>
          </div>
          <button className="hover:text-very-dark-blue">
            <svg
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              href="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="currentColor" fill-rule="nonzero" href="#a" />
            </svg>
          </button>
        </div>
        <button className="mt-4 w-full rounded-lg bg-orange p-4 font-semibold text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default function Header() {
  const [isOpen, SetIsOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggle = () => SetIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <>
      <section className="w-full bg-white px-6 py-6 md:py-0 text-black">
        <div className="max-w-6xl lg:mx-auto">
          <div id="this-div" className="flex w-full items-center justify-between md:border-b md:border-grayish-blue">
            <div className="flex gap-4">
              <button
                onClick={toggle}
                className="z-40 cursor-pointer md:hidden"
              >
                <img
                  src={isOpen ? "icon-menu.svg" : "icon-close.svg"}
                  alt="menu"
                />
              </button>
              <div>
                <img src="/logo.svg" alt="Logo" className="cursor-pointer md:py-8" />
              </div>
              {/* Sidebar - Web */}
              <nav className="ml-8 hidden md:flex">
                <ul className="flex gap-8">
                  {links.map((link, i) => (
                    <li
                      key={i}
                      className="text-md cursor-pointer border-b-4 border-transparent  font-medium text-dark-grayish-blue transition ease-in-out duration-300 hover:border-orange hover:text-very-dark-blue md:py-8"
                      id="this-element"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="relative flex items-center gap-4 md:pb-6 lg:space-x-8">
              <div className="absolute -top-1 right-8 rounded-full bg-orange px-1 text-center text-xs font-bold text-white md:right-14 lg:right-[60%] md:top-1.5">
                {counter}
              </div>
              <button
                id="cart-button"
                className="text-dark-grayish-blue transition duration-300 ease-in-out hover:text-black"
                onClick={toggleCart}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
              <img
                src="image-avatar.png"
                alt="avatar"
                className="easy-in-out w-6 cursor-pointer rounded-full transition duration-300 hover:ring hover:ring-orange md:w-12"
              />
            </div>
          </div>

          {/* Sidebar - Mobile */}
          <aside
            className={`${
              isOpen ? "pointer-events-none opacity-0 " : ""
            } transition-all duration-300 ease-in-out`}
          >
            <div
              className={`absolute left-0 top-0 z-20 h-screen w-full bg-black bg-opacity-60 transition-opacity duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div className={`absolute left-0 top-0 z-20 h-screen w-4/6 bg-white transform transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}>
              <nav className="px-6 py-24">
                <ul className="space-y-5">
                  {links.map((link, i) => (
                    <li key={i} className="text-lg font-bold">
                      {link}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {isCartOpen && <CartPopover />}
    </>
  );
}
