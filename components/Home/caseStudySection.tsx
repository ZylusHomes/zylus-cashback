import React from "react";
import case1 from "@/asset/case1.png";
// import case2 from "@/asset/case2.svg";

const CaseStudySection = () => {
  return (
    <div className="mt-[500px] bg-[#0b2230] sm:mt-[350px]">
      <div className="pt-[70px] w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
        <div className="grid grid-cols-[repeat(2,_1fr)] max-w-[1200px] mx-[auto] my-[0] relative -top-[320px] sm:grid-cols-[1fr] sm:rounded-[10px] sm:overflow-hidden">
          <div className="rounded-tl-[10px] rounded-bl-[10px] px-[50px] py-[80px] bg-[#f2ede7] sm:sm:rounded-[0px]">
            <h4 className="font-medium text-[#313131]">CASE STUDY</h4>
            <h3 className="mx-[0] my-[25px] max-w-[320px] text-xl">
              Trusted by the world&apos;s most profit-centric teams
            </h3>
            <p className="max-w-[410px] text-[#686868] font-medium">
              Real Estate Cashback helps individuals and businesses scale their
              finances and businesses positively.
            </p>
            <a
              href="#"
              className="bg-transparent border-[1px] border-solid border-[#313131] text-[#313131] mt-[30px] px-[20px] py-[15px] rounded-[5px] inline-block outline-[0] cursor-pointer"
            >
              Read More
            </a>
          </div>
          <div
            className={`rounded-tr-[10px] rounded-br-[10px] px-[50px] py-[80px] bg-[#ff5402] relative z-[2] before:opacity-[.4] before:absolute before:top-[0] before:left-[0] before:z-[-1] sm:sm:rounded-[0px]`}
          >
            <h5 className="text-[#fff] text-xl font-bold mb-[60px]">
              Since Investing and Partnering with Real Estate Cashback
              Cooperative, I’ve had immense success and turnaround in my
              finances.
            </h5>
            <div className="flex items-center">
              <div className="pImg">
                <img
                  src={case1.src}
                  alt="person-image"
                  className="max-w-full"
                />
              </div>
              <div className="ml-[20px]">
                <h6 className="text-lg text-[#fff] mb-[3px]">Adebayo Joy</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-[150px] flex items-center flex-col pb-[140px] [border-bottom:1px_solid_hsla(0,_0%,_100%,_.137)]">
          <h2 className="text-[#fff] mb-[37px] text-center max-w-[670px] font-semibold text-[28px]">
            Join Real Estate Cashback within minutes, improve your finance
            within hours.
          </h2>
          <p className="opacity-[.9] max-w-[600px] text-[#fff] mb-[37px] text-center">
            Join the Real Estate Cashback and have access to special finance
            tips and offers that would help build your business.
          </p>
          <a
            href="http://bit.ly/realestatecashback"
            className="px-[20px] py-[15px] rounded-[5px] inline-block outline-[0] cursor-pointer text-sm text-[#fff] bg-[#ff5402]"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
