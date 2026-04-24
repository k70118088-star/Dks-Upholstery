"use client";
import { menuItems } from "@/utils/helper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Icons from "./Icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = React.useState(null);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="w-full z-100 fixed flex items-center justify-center py-3.75 bg-white">
      <div className="w-full max-w-285 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2 z-101">
          <Image
            src={"/assets/images/webp/logo.webp"}
            alt="logo img"
            width={193}
            height={41}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex shadow-[backdrop-blur-sm] items-center gap-8 border border-[#0101011F] px-5 py-2 rounded-full">
          {menuItems.map((item, index) => {
            if (item.isDropdown) {
              return (
                <div
                  key={index}
                  ref={openIndex === index ? dropdownRef : null}
                  className="relative cursor-pointer"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="text-blacky hover:text-green cursor-pointer leading-160 font-normal flex items-center gap-1.75"
                  >
                    {item.name}
                    <Icons icon={"downArrow"} />
                  </button>

                  <div
                    className={`absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-40 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Service 1
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Service 2
                    </a>
                  </div>
                </div>
              );
            }
            return (
              <a key={index} href="#" className={`${item.className} hover:text-green`}>
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="bg-green cursor-pointer text-whity font-semibold w-44.25 h-12.5 rounded-[245px] hover:bg-green-700 transition">
            Get Free Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden cursor-pointer z-101"
          onClick={() => setOpen(!open)}
        >
          {open ? <Icons icon={"x"} /> : <Icons icon={"hamburger"} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 transition-all duration-300 z-99 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menuItems.map((item, index) => {
          if (item.isDropdown) {
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <a href="#">{item.name}</a>
                  <Icons icon={"downArrow"} />
                </span>
                <a href="#" className="text-sm text-gray-600">
                  Service 1
                </a>
                <a href="#" className="text-sm text-gray-600">
                  Service 2
                </a>
              </div>
            );
          }
          return (
            <a key={index} href="#" className={item.className}>
              {item.name}
            </a>
          );
        })}

        <button className="bg-green cursor-pointer hover:bg-green-700 text-white w-44.25 h-12.5 rounded-[245px]">
          Get Free Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
