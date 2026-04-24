"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import { footernavlinks, footerservices, footergallery } from "@/utils/helper";

const Footer = () => {
     const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-[#F9F8F5] px-4 sm:px-0">
      <footer className=" max-w-337 mx-auto pt-10 sm:pt-12 lg:pt-14 pb-0">
        <div className="max-w-305 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-0 gap-10">
            {/* Left Section */}
            <div className="pr-0 lg:pr-10.5 xl:border-r border-[#01010129]">
              <Image
                src="/assets/images/webp/logo.webp"
                alt="DKS Upholstery"
                width={160}
                height={48}
                className="object-contain"
              />

              <p className="mt-4 sm:mt-6 text-sm leading-160 pop text-[#4D4D4D] max-w-full lg:max-w-[452.1px]">
                At DKS, we specialize in expert upholstery, custom furniture,
                and repairs combining craftsmanship with care to bring new life
                to your furniture.
              </p>

              <hr className="mt-6 sm:mt-8 mb-5 border-[#01010129]" />

              <div className="flex gap-6 sm:gap-10">
                {/* Address + Social */}
                <div className=" flex flex-col">
                    <div>
                  <div className=" flex flex-row gap-2 items-start">
                    <Icons icon={"location"} />
                    <a  href="https://www.google.com/maps/place/37+Defu+Lane+10,+%2301-41,+Singapore+539214/@1.3518544,103.8883542,17z/data=!3m1!4b1!4m6!3m5!1s0x31da17b88117fced:0xab8ac08c9939cc05!8m2!3d1.3518544!4d103.8909291!16s%2Fg%2F11wy7dy_jl?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D">
                    <p className="text-sm leading-160  text-blacky">
                      Defu Industrial Estate
                      <br />
                      Address: 37 Defu Lane 10,
                      <br />
                      #01/41, Singapore 539214
                    </p>
                    </a>
                    </div>
                    <div className="block sm:hidden">
                    <div className="flex sm:hidden flex-row items-center gap-2">
                    <Icons icon={"mail"} />
                    <span className="text-sm pop text-blacky break-all">
                      info@dksinternational.com
                    </span>
                    </div>
                  <span className="text-sm pop text-blacky ml-6 break-all">
                    dks.int@live.com
                  </span>
                  </div>
                
                  </div>

                  <div className="flex flex-row items-center gap-4 mt-5 sm:mt-7">
                    <div className="lg:flex hidden flex-row items-center gap-2">
                      <Icons icon={"follow"} />
                      <span className="text-sm font-semibold pop text-blacky">
                        Follow Us
                      </span>
                    </div>

                    <div className="lg:flex hidden flex-row items-center gap-3">
                      <Link href="https://www.instagram.com/dksinternationalsg/" aria-label="Instagram">
                        <Icons icon={"insta"} />
                      </Link>
                      <Link href="https://www.facebook.com/dksinternationalsg/photos/" aria-label="Facebook">
                        <Icons icon={"facebook"} />
                      </Link>
                      <Link href="#" aria-label="LinkedIn">
                        <Icons icon={"linkedin"} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col flex-wrap gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <Icons icon={"whatsappsm"} />
                    <span className="text-sm pop text-blacky">
                      98385685, 93832006
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Icons icon={"blackPhone"} />
                    <span className="text-sm pop text-blacky">62844186</span>
                  </div>
                  <div className="hidden sm:flex flex-row items-center gap-2">
                    <Icons icon={"mail"} />
                    <span className="text-sm pop text-blacky break-all">
                      info@dksinternational.com
                    </span>
                  </div>
                  <span className="text-sm hidden sm:flex text-blacky ml-6 break-all">
                    dks.int@live.com
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="ml-0 xl:ml-19.5 flex flex-col max-w-full lg:max-w-[562.1px] w-full gap-6">
              {/* Nav Links */}
              <div className="flex flex-wrap items-center gap-y-2">
                {footernavlinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={link.href}
                      className="text-sm pop text-blacky hover:text-green transition-colors whitespace-nowrap mr-3"
                    >
                      {link.label}
                    </Link>
                    {index < footernavlinks.length - 1 && (
                      <span className="text-[#01010129] mr-3">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <hr className="border-[#01010129] hidden sm:flex  w-full" />

              {/* Gallery */}
              <div className="hidden sm:flex  gap-3.75">
                {footergallery.map((item, index) => (
                  <div
                    key={index}
                    className="w-17.5 sm:w-[81.1px] h-15 sm:h-17.5 rounded-xl overflow-hidden shrink-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={81}
                      height={70}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <hr className="border-[#01010129]" />

              {/* Services */}
              <div className="flex flex-wrap gap-y-3">
                {footerservices.map((service, index) => (
                  <React.Fragment key={index}>
                    <Link
                      href={service.href}
                      className="text-sm pop text-blacky hover:text-green transition-colors whitespace-nowrap px-2 sm:px-2 first:pl-0"
                    >
                      {service.label}
                    </Link>
                    {index < footerservices.length - 1 && (
                      <span className="text-[#01010129]">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full lg:hidden flex justify-between pt-5 border-t border-t-[#0101011F] mt-7.5 items-center ">
          <div className="flex flex-row items-center gap-2">
                      <Icons icon={"follow"} />
                      <span className="text-sm font-semibold pop text-blacky">
                        Follow Us
                      </span>
                    </div>
          <div className="lg:hidden flex flex-row items-center gap-3">
            <Link href="#" aria-label="Instagram">
              <Icons icon={"insta"} />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Icons icon={"facebook"} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Icons icon={"linkedin"} />
            </Link>
          </div>
          </div>
         
        </div>
      </footer>
       <div className="mt-5 max-w-337 w-full mx-auto sm:mt-10 border-top-gradient py-4 sm:py-5 text-center">
            <p className="text-xs sm:text-sm pop text-[#4D4D4D]">
              Copyright Â© {year} DKS Upholstery Pte Ltd | DKS International
              Supplier & Services. All Rights Reserved.
            </p>
          </div>
    </div>
  );
};

export default Footer;
