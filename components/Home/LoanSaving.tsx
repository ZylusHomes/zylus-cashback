import React from "react";
import cashbackphoto from "@/asset/cashbackphoto.png";
import investImg from "@/asset/invest-img.png";

const LoanSavingsSection = () => {
  return (
    <section>
      <div className="px-[0] py-[70px] grid grid-cols-[repeat(2,_1fr)] gap-[60px] items-center w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
        <div className="px-[0] py-[20px] [border-bottom:1px_solid_#deddde]">
          <h2 className="max-w-[435px] font-bold text-[1.5rem]">
            Gain access to platforms optimized for loans and secure savings.
          </h2>
          <p className="mx-[0] my-[30px] max-w-[510px] text-[#686868] font-medium">
            We have designed a series of products to offer you access to savings
            and loans. They also guarantee profit sharing among members, quick
            access to loans, and secured savings opportunities.
          </p>
          <ul className="flex flex-col">
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Unlimited loans
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Optimized saving platform
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Guaranteed returns on savings
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Quick access to loans
            </li>
            <li>
              <span className="inline-block mt-[20px] text-sm px-[20px] py-[15px] bg-[#ff5402] rounded-[5px] outline-[0] cursor-pointer border-none text-white">
                Explore Now
              </span>
            </li>
          </ul>
        </div>
        <div className="dImg">
          <img src={cashbackphoto.src} alt="xave-img" className="max-w-full" />
        </div>
      </div>

      <div className="px-[0] py-[70px] grid grid-cols-[repeat(2,_1fr)] gap-[60px] items-center w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
        <div className="dImg">
          <img src={investImg.src} alt="xave-img" className="max-w-full" />
        </div>

        <div className="px-[0] py-[20px] [border-bottom:1px_solid_#deddde]">
          <h2 className="max-w-[435px] font-bold text-[1.5rem]">
            Business opportunities in real estate investments and mortgage
            opportunities.
          </h2>
          <p className="mx-[0] my-[30px] max-w-[510px] text-[#686868] font-medium">
            Real Estate Cashback corporative also provides business
            opportunities in real estate and real estate investment with
            carefully designed products which makes it easy to invest properly
            and also thoroughly manage your investments.
          </p>
          <ul className="flex flex-col">
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Real estate investment
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Mortgage opportunities
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Property acquisitions
            </li>
            <li className="text-[#686868] font-medium mb-[20px] flex items-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ff5402] mr-[7px]"
                >
                  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
                </svg>
              </span>
              Agro investment
            </li>
            <li>
              <span className="inline-block mt-[20px] text-sm px-[20px] py-[15px] bg-[#ff5402] rounded-[5px] outline-[0] cursor-pointer border-none text-white">
                Explore Now
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LoanSavingsSection;
