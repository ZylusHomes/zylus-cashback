"use client";

import Image from "next/image";
import backgr from "@/asset/backgr.png";
import about1 from "@/asset/about1.svg";
import about2 from "@/asset/about2.svg";
import about3 from "@/asset/about3.svg";
import about4 from "@/asset/about4.svg";
import about5 from "@/asset/about5.svg";
import about6 from "@/asset/about6.svg";
import Header from "@/components/Menu/menu";
import FooterSection from "@/components/Footer/footer";
import { useState } from "react";

const values = [
  {
    id: 1,
    icon: about1,
    title: "Integrity",
    description:
      "We analyze circumstances, strategies and processes to find the optimal solution for our clients.",
  },
  {
    id: 2,
    icon: about2,
    title: "Transparency",
    description:
      "We communicate ideas and processes clearly and transparently.",
  },
  {
    id: 3,
    icon: about3,
    title: "Excellent Service Delivery",
    description: "We all love what we do. That's our powerful engine.",
  },
  {
    id: 4,
    icon: about4,
    title: "Competency and Dynamism",
    description:
      "We analyze circumstances, strategies and processes to find the optimal solution for our clients.",
  },
  {
    id: 5,
    icon: about5,
    title: "Creativity and Innovation",
    description:
      "We communicate ideas and processes clearly and transparently.",
  },
  {
    id: 6,
    icon: about6,
    title: "Passion and Professionalism",
    description: "We all love what we do. That's our powerful engine.",
  },
];

export default function AboutSection() {
  const [toogle, setToggle] = useState(false);
  return (
    <main>
      <Header />
      <div className="relative py-16 mt-[70px] flex justify-center">
        <div className="max-w-[1200px] sm:w-full">
          {/* Background Image */}

          <div className="container mx-auto px-4">
            {/* Content Section */}
            <div className="absolute z-[-1] opacity-20 max-w-[1110px] top-[0]">
              <Image src={backgr} alt="Background" />
            </div>
            <div
              className={`text-center mb-12 ${
                toogle ? "h-auto" : "h-[350px]"
              } flex justify-center items-center flex-col`}
            >
              <h3 className="text-lg font-bold text-orange-500">OUR VALUES</h3>
              <h1 className="text-4xl font-bold text-gray-900 w-[500px] sm:w-full">
                The common spirit characterizes us.
              </h1>
              <p className="mt-4 text-gray-600 sm:w-[80%]">
                We have a vision to help many other people to be even more
                successful.
              </p>
              <p className="text-gray-600 sm:w-full">
                This is what we do and why we work every day.
              </p>

              {toogle ? (
                <div className="text-gray-600 mt-2 m-0 text-left flex justify-center items-center">
                  <div className="text-gray-600 mt-2 m-0 text-left flex justify-between items-baseline flex-col gap-[40px] w-[900px] sm:w-full">
                    <p>
                      Real Estate Cashback Cooperative limited was created in
                      2018 to offer members access to opportunities in multiple
                      markets, where members can invest collectively and share
                      dividend . The cooperative also provide members with
                      innovative tools to save, access loans and build long term
                      wealth.
                    </p>
                    <p>
                      As an internationally recognized business Capital
                      organization, RECB Cooperative Limited provides members
                      access to opportunities in Real Estate Investment,
                      Property Sales, Agriculture, Infrastructure and General
                      Construction, Property acquisition Property Management and
                      many more.
                    </p>
                    <p>
                      RECB Cooperative limited manages and controls innovative
                      products such as Property Savings Scheme, Real Estate Cash
                      Back and Target Save.
                    </p>
                    <p>
                      The company’s culture speaks Professionalism, Excellence,
                      Integrity, Knowledge, and Service to offering top-notch
                      business relationship to all members of the cooperative.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-6 flex justify-center align-middle">
                  <button
                    className="btnAbout bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center"
                    onClick={() => setToggle(true)}
                  >
                    Read more
                    <svg
                      className="ml-2"
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
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-8">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="box bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center flex justify-start items-start flex-col gap-[16px]"
                >
                  {/* Icon */}
                  <div className="relative w-20 h-20">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-orange-500">
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mt-2 m-0 text-left">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
