import React from "react";

export default function Vision() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold text-center mb-8 w-[500px] leading-[45px] font-[cursive] text-[#ff5402]">
          6 Years of Trusted Financial Growth and Empowerment
        </h2>
        <div className="gap-8 flex justify-center items-center flex-col">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg w-[500px] p-[20px] border-[2px] border-solid border-[#ff5402] rounded-[5px] text-[gray]">
              To deliver innovative, secure, and member-focused financial
              solutions that help investors achieve their dreams and create
              long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
