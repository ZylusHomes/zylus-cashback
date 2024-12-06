"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/asset/logo.png";
import piggy2 from "@/asset/piggy2.png";
import piggy3 from "@/asset/piggy3.png";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [toogle, setToogle] = useState<boolean>(false);

  const handleClick = (e: boolean) => {
    setToogle(e);
  };

  return (
    <div className="absolute top-[0] left-2/4 transform -translate-x-1/2 w-full z-20 bg-[#fff]">
      <div className="flex items-center justify-between mx-[auto] my-[0] max-w-[1350px] px-[0] py-[15px] w-[90vw]">
        {/* Logo Section */}
        <div className="sm:w-full sm:flex sm:justify-between sm:items-center">
          <Link href="/">
            <img
              src={Logo.src}
              alt="logo"
              className="max-w-[240px] sm:w-[70%]"
            />
          </Link>

          <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-[10px]">
            <a
              className="cursor-pointer rounded-[5px] inline-block outline-[0] border-[2px] border-solid border-[#ff5402] text-[#313131] bg-[white] p-[10px] text-sm"
              href="http://bit.ly/realestatecashback"
              target="_blank"
            >
              Subscribe Here
            </a>
            {toogle ? (
              <IoClose
                className="text-[2.1rem] border-[1.5px] border-solid border-[#313131] rounded-[5px] text-[#313131]"
                onClick={() => handleClick(false)}
              />
            ) : (
              <IoMenu
                className="text-[2.1rem] border-[1.5px] border-solid border-[#313131] rounded-[5px] text-[#313131]"
                onClick={() => handleClick(true)}
              />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`block sm:absolute ${
            toogle ? "sm:block" : "sm:hidden"
          } sm:bg-[white] sm:top-full sm:right-[10px] sm:w-full sm:left-[0]`}
        >
          <ul className="flex [list-style:none] sm:flex-col sm:gap-[25px] sm:px-[0] sm:py-[25px]">
            <li className="font-medium flex items-center mr-[50px] holdLink relative hk sm:w-full sm:m-0 sm:p-[10px] sm:text-[#313131] sm:flex sm:flex-col sm:justify-start sm:items-center sm:px-[25px] sm:py-[0] sm:gap-[10px]">
              <Link
                href={"/"}
                className="mr-[2px] cursor-pointer flex justify-center items-center gap-[10px] hk sm:flex sm:justify-between sm:items-center sm:w-full"
              >
                Products
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </Link>

              <ul className="absolute bg-[white] border-[1px] border-solid border-[darkgray] top-full w-[250px] holdLinkChild rounded-[5px] sm:static sm:w-full sm:border-none">
                <li>
                  <Link
                    href={"/pss"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    <img
                      src={piggy2.src}
                      alt="Not Available"
                      className="w-[40px] sm:hidden"
                    />{" "}
                    <span>PSS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/real-estate-cashback"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    <img
                      src={piggy3.src}
                      alt="Not Available"
                      className="w-[40px] sm:hidden"
                    />{" "}
                    <span>Real Estate Cashback</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="font-medium flex items-center mr-[50px] holdLink relative hk sm:w-full sm:m-0 sm:p-[10px] sm:text-[#313131] sm:flex sm:flex-col sm:justify-start sm:items-center sm:px-[25px] sm:py-[0] sm:gap-[10px]">
              <a className="mr-[2px] cursor-pointer flex justify-center items-center gap-[10px] hk sm:flex sm:justify-between sm:items-center sm:w-full">
                Company
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </a>

              <ul className="absolute bg-[white] border-[1px] border-solid border-[darkgray] top-full w-[250px] holdLinkChild rounded-[5px] sm:static sm:w-full sm:border-none">
                <li>
                  <Link
                    href={"/management"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    The Management
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about-us"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </li>
            <li className="font-medium flex items-center mr-[50px] holdLink relative hk sm:w-full sm:m-0 sm:p-[10px] sm:text-[#313131] sm:flex sm:flex-col sm:justify-start sm:items-center sm:px-[25px] sm:py-[0] sm:gap-[10px]">
              <a className="mr-[2px] cursor-pointer flex justify-center items-center gap-[10px] hk sm:flex sm:justify-between sm:items-center sm:w-full">
                Help
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </a>

              <ul className="absolute bg-[white] border-[1px] border-solid border-[darkgray] top-full w-[250px] holdLinkChild rounded-[5px] sm:static sm:w-full sm:border-none">
                <li>
                  <Link
                    href={"/help"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    Get Help
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/faq"}
                    className="text-[17px] font-medium flex justify-start items-center gap-[10px] p-[10px] sm:px-[0] sm:py-[10px] sm:text-[15px]"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="font-medium flex items-center sm:px-[25px] sm:py-[10px] sm:hidden">
              <a
                className="cursor-pointer px-[20px] py-[15px] bg-[#ff5402] rounded-[5px] inline-block outline-[0] border-none text-[white] sm:ml-[10px]"
                href="http://bit.ly/realestatecashback"
                target="_blank"
              >
                Subscribe Here
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="navigation">
          <Link className="btn" href="/member">
            Subscribe
          </Link>
          <span className="nav-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </span>
        </div> */}
      </div>
    </div>
  );
}
