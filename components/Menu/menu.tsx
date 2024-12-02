import Link from "next/link";
import Logo from "@/asset/logo.png";

export default function Header() {
  return (
    <div className="absolute top-[0] left-2/4 transform -translate-x-1/2 w-full z-20 bg-[#fff]">
      <div className="flex items-center justify-between mx-[auto] my-[0] max-w-[1350px] px-[0] py-[15px] w-[90vw]">
        {/* Logo Section */}
        <div className="logo">
          <Link href="/">
            <img src={Logo.src} alt="logo" className="max-w-[240px]" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="linksCont">
          <ul className="flex [list-style:none]">
            <li className="font-medium flex items-center mr-[50px] hk">
              <Link href={"/"} className="mr-[2px] cursor-pointer hk">
                Products
              </Link>
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
            </li>
            <li className="font-medium flex items-center mr-[50px] hk">
              <a className="mr-[2px] cursor-pointer hk">Company</a>
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
            </li>
            <li className="font-medium flex items-center mr-[50px]">Gallery</li>
            <li className="font-medium flex items-center mr-[50px]">
              <Link className="mr-[2px] cursor-pointer" href="/partner">
                Partner
              </Link>
            </li>
            <li className="font-medium flex items-center mr-[50px] hk">
              <a className="mr-[2px] cursor-pointer hk">Help</a>
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
            </li>
            <li className="font-medium flex items-center mr-[50px]">
              <Link
                className="mr-[2px] cursor-pointer px-[20px] py-[15px] bg-[#ff5402] rounded-[5px] inline-block outline-[0] border-none text-[white]"
                href="/member"
              >
                Subscribe Here
              </Link>
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
