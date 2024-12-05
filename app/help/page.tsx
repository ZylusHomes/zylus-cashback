"use client";

import React from "react";
import social1 from "@/asset/social1.png";
import social2 from "@/asset/social2.png";
import social3 from "@/asset/social3.png";
import social4 from "@/asset/social4.png";
import FooterSection from "@/components/Footer/footer";
import Header from "@/components/Menu/menu";

const Page = () => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     phone: "",
  //     subscribe: false,
  //   });

  //   const handleChange = (e:{name: string, }) => {
  //     const { name, value, type, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: type === "checkbox" ? checked : value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted", formData);
  //   };

  return (
    <main>
      <Header />
      <div className=" w-full mt-[90px]">
        <div className="container mx-auto px-4 py-10 max-w-[1200px] sm:w-full sm:pt-0">
          <div className="flex sm:flex-col flex-row items-start justify-between gap-8 sm:gap-[50px]">
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-[3rem] font-bold">Reach out to us</h2>
              <p className="text-gray-600 text-[1.5rem] m-0">
                We would love to hear from you.
              </p>
              <div className="space-y-4 text-gray-800">
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-xl">&#9993;</span>
                  <p className="text-[1.5rem]">info@recbcoop.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-xl">&#127970;</span>
                  <p className="text-[1.5rem]">
                    168, Awolowo Road, Ikoyi Lagos. replace with The zylus
                    place, Lekki
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-xl">&#9742;</span>
                  <p className="text-[1.5rem]">+2349166613191</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <form className="w-full max-w-md space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  // value={formData.name}
                  //   onChange={handleChange}
                  className="w-full border-2 border-[#ff5402] rounded-md p-4 pl-10 focus:outline-none"
                  required
                />
                <span className="absolute left-3 top-4 text-[#ff5402]">
                  &#128100;
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                  className="w-full border-2 border-[#ff5402] rounded-md p-4 pl-10 focus:outline-none"
                  required
                />
                <span className="absolute left-3 top-4 text-[#ff5402]">
                  &#9993;
                </span>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  // value={formData.message}
                  //   onChange={handleChange}
                  className="w-full border-2 border-[#ff5402] rounded-md p-4 pl-10 focus:outline-none h-32"
                  required
                />
                <span className="absolute left-3 top-4 text-orange-500">
                  &#9997;
                </span>
              </div>
              <button
                type="submit"
                className=" bg-[#ff5402] text-white font-bold rounded-md hover:bg-orange-600 transition w-[fit-content] px-[50px] py-[20px]"
              >
                Send an email &rarr;
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center align-middle sm:overflow-y-scroll">
          <div className="mt-[80px] mb-[80px] grid grid-cols-[repeat(4,_1fr)] gap-[70px] max-w-[1250px] w-[90%]">
            <a
              href="#"
              className="flex items-center justify-center rounded-[10px] border-[1px] border-solid border-[rgba(0,0,0,.072)] px-[13px] py-[20px] [transition:all_.3s]"
            >
              <span className="mr-[20px]">
                <img src={social1.src} alt="whatsapp" />
              </span>
              Whatsapp
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-[10px] border-[1px] border-solid border-[rgba(0,0,0,.072)] px-[13px] py-[20px] [transition:all_.3s]"
            >
              <span>
                <img src={social2.src} alt="facebook" className="mr-[20px]" />
              </span>
              Facebook
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-[10px] border-[1px] border-solid border-[rgba(0,0,0,.072)] px-[13px] py-[20px] [transition:all_.3s]"
            >
              <span>
                <img src={social3.src} alt="other" className="mr-[20px]" />
              </span>
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-[10px] border-[1px] border-solid border-[rgba(0,0,0,.072)] px-[13px] py-[20px] [transition:all_.3s]"
            >
              <span>
                <img src={social4.src} alt="other" className="mr-[20px]" />
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-[#ff5402] pt-[70px] pb-[70px]">
          <div className="w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
            <div className="nText">
              <h2 className="text-[#fff] max-w-[510px] font-bold text-3xl">
                Receiving daily updates from us actually increases your chances
                of getting topnotch services.
              </h2>
              <p className="mx-[0] my-[20px] text-[#fff] max-w-[510px] font-semibold">
                We definitely cannot wait to send you more offers about our
                products.
              </p>
            </div>
            <form className="cInputs">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-[14px] py-[20px] rounded-[5px] border-[0] w-[300px] mr-[20px]"
                required
                // value={formData.email}
                // onChange={handleChange}
              />
              <input
                className="px-[14px] py-[20px] rounded-[5px] border-[0] w-[300px]"
                type="tel"
                name="phone"
                placeholder="Phone (Include country code)"
                required
                // value={formData.phone}
                // onChange={handleChange}
              />
              <div className="mt-[20px]">
                <input
                  type="checkbox"
                  name="subscribe"
                  id="subscribe"
                  //   checked={formData.subscribe}
                  //   onChange={handleChange}
                  className="mr-[7px] cursor-pointer"
                />
                <label htmlFor="subscribe" className="text-[#fff]">
                  I agree to receive other communication from Real Estate Cash
                  Back Cooperative.
                </label>
              </div>
              <button
                type="submit"
                className="outline-[none] border-none px-[20px] py-[15px] rounded-[5px] cursor-pointer w-[fit-content] mt-[30px] text-[15px] font-semibold bg-[white] flex text-[#ff5402] items-center gap-[20px]"
              >
                Send me mails{" "}
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
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
};

export default Page;
