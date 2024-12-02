import HeroImg from "@/asset/heroImage.png"; // Update with the correct path to your image

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-16">
      <main className="min-h-screen w-[90vw] mx-[auto] my-[0] max-w-[1350px] grid items-center grid-cols-[40%_50%] gap-[10%]">
        {/* Hero Image */}
        <div className="flex w-full">
          <Image
            src={HeroImg}
            alt="hero image"
            className="max-w-full"
            priority
          />
        </div>
        {/* Hero Text */}
        <div className="">
          <p className="max-w-[439px] mx-[0] my-[30px] font-semibold text-[17px] text-[#9c9e9f]">
            <span className="text-[#ff5402]">
              Real Estate Cashback Cooperative
            </span>
          </p>
          <h1 className="text-5xl max-w-[580px] font-bold">
            Empowering your financial Capabilities Through Smart Investments
          </h1>
          <p className="max-w-[439px] mx-[0] my-[30px] font-semibold text-[17px] text-[#9c9e9f]">
            Join our cooperative to secure your future and achieve
            your financial goals
            <span className="text-orange-600 font-medium">save</span>,{" "}
            <span className="text-orange-600 font-medium">invest</span>, and{" "}
            <span className="text-orange-600 font-medium">earn</span>.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="bit.ly/realestatecashback"
              target="_blank"
              className="bg-[#ff5402] rounded-[5px] inline-block outline-[0] cursor-pointer border-none px-[32px] py-[14px] text-[white]"
            >
              Subscribe
            </a>
            <Link href="/about" className="ml-[40px] font-semibold text-base">
              Learn more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
