import Image from "next/image";
import Link from "next/link";

import CashbackImg from "@/asset/cashbackImg.png";
import CashbackImg2 from "@/asset/cashbackImg2.png";

export default function PlatformsSection() {
  const platforms = [
    {
      id: 1,
      title: "Real Estate Cashback",
      text: "Real Estate Cashback is a real estate trading initiative developed by Real Estate Cashback Cooperative Society Limited. It involves the acquisition of landed properties in a prime location for the purpose of reselling for profit maximization.",
      img: CashbackImg,
      link: "/real-estate",
      linkText: "Explore Cashback",
    },
    {
      id: 2,
      title: "PSS",
      text: "Property Savings Scheme is a real estate investment platform that allows every individual to save monthly for a period of one (1) year to co-join the development of a building project to resale and earn from the profit generated collectively as a cooperative.",
      img: CashbackImg2,
      link: "/pdss",
      linkText: "Explore PSS",
    },
  ];

  return (
    <div className="bg-[#fcb0020a]">
      <div className="w-[90vw] max-w-[1350px] mx-[auto] my-[0] px-[0] py-[70px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            One Platform, Infinite Possibilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive finance management solution designed to simplify
            planning, enhance investments, and unlock seamless wealth creation
            like never before.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="card bg-white shadow-lg rounded-lg p-6 space-y-4 w-[350px] mx-[auto] my-[0]"
            >
              <div className="upper">
                <h3 className="text-xl font-bold text-orange-600">
                  {platform.title}
                </h3>
                <p className="text-gray-600">{platform.text}</p>
                <Image
                  src={platform.img}
                  alt={`${platform.title} image`}
                  className="rounded-md"
                />
              </div>
              <div className="ctaCont">
                <Link
                  href={platform.link}
                  className="cta inline-flex items-center text-orange-600 font-semibold"
                >
                  {platform.linkText}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
