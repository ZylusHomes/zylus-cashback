import Image from "next/image";
import Header from "@/components/Menu/menu";
import FooterSection from "@/components/Footer/footer";
import pss2 from "@/asset/pss2.svg";
// import pss3 from "@/asset/pss3.svg";
import pss4 from "@/asset/pss4.svg";
import int2 from "@/asset/int2.svg";
import int3 from "@/asset/int3.svg";
import int4 from "@/asset/int4.svg";
import lekki1 from "@/asset/lekki1.png";
import lekki2 from "@/asset/lekki2.png";
import lekki3 from "@/asset/lekki3.png";
import lekkii1 from "@/asset/lekkii1.png";
import lekkii2 from "@/asset/lekkii2.png";
import lekkii3 from "@/asset/lekkii3.png";
import lekki31 from "@/asset/lekki31.png";
import lekki32 from "@/asset/lekki32.png";
import lekki33 from "@/asset/lekki33.png";
import real1 from "@/asset/real1.png";
import real2 from "@/asset/real2.png";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="bg-gray-50 py-16 mt-[50px]">
        <div className="max-w-[1200px] mx-auto px-4 space-y-16">
          {/* Main Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Real Estate Cashback
            </h1>
            <p className="mt-4 text-gray-600">
              Capture and build your real estate investment/portfolio with{" "}
              <span className="text-orange-600 font-semibold">
                {" "}
                Real Estate Cashback.
              </span>
            </p>
            <form className="mt-6">
              <a
                href="http://bit.ly/realestatecashback"
                className="btn px-6 py-3 bg-orange-600 text-white rounded-lg"
                target="_blank"
              >
                Subscribe Here
              </a>
            </form>
          </div>

          {/* Investment Details Section */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-12">
            {/* Investment Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  More than an investment.
                </h2>
                <p className="mt-2 text-gray-600">
                  Cashback allows you to put in the right amount, at the right
                  time, to meet your financial goals through generated profit on
                  capital put into property holding for the specified duration.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    img: pss2,
                    title: "Invest",
                    text: "Real estate is known to appreciate in value and holding a property for duration for the purpose of resale definitely guarantees profit.",
                  },
                  // {
                  //   img: pss3,
                  //   title: "Returns",
                  //   text: "Profit and capital entrusted in land is payable at the trading period. The profit is pegged at 32% for 12months duration.",
                  // },
                  {
                    img: pss4,
                    title: "Funds Security",
                    text: "Partnering with us gives you the assurance that your capital put into property trading is secured because we are intentional about upholding the ethics of our business; our reputation precedes us.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-12 h-12 "
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Placeholder for Image */}
            <div className="h-[600px]">
              <Image
                src={real1}
                alt={"Not Available"}
                className="w-[80%] h-full sm:w-full"
              />
            </div>
          </div>

          {/* Multiple Interest Section */}
          <div className="grid grid-cols-2 gap-12 sm:flex-col-reverse sm:flex">
            {/* Placeholder for Image */}
            <div className="h-[600px]">
              <Image
                src={real2}
                alt={"Not Available"}
                className="w-[80%] h-full sm:w-full"
              />
            </div>
            {/* Investment Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get multiple interests on investment.
                </h2>
                <p className="mt-2 text-gray-600">
                  Build your finances with ease with our secured and seamless
                  products.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    img: int2,
                    title: "Profit Maximization.",
                    text: "It is a Real Estate trading initiative that involves the acquisition and development of a large expanse of land for building, ownership, and profit maximization.",
                  },
                  {
                    img: int3,
                    title: "Sales Rollover",
                    text: "Sales proceeds can be rolled over for another property flipping tenure on the same property or used to purchase any other estate property for the same duration.",
                  },
                  {
                    img: int4,
                    title: "Proof of Investment",
                    text: "Upon entrusting us with your funds for property trading, clients get: Receipt of payment, Deed of Agreement, Portal Access by the client to cash out investment",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-12 h-12"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Assets Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Assets We Invest On.
            </h2>
            <p className="mt-4 text-gray-600">
              These are some of the projects we invest in.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 sm:grid-cols-[1fr]">
              {[
                lekki1,
                lekki2,
                lekki3,
                lekkii1,
                lekkii2,
                lekkii3,
                lekki31,
                lekki32,
                lekki33,
              ].map((img, index) => (
                <div key={index} className="overflow-hidden">
                  <Image
                    src={img}
                    alt={`Asset ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Form */}
          <form className="text-center mt-12">
            <input
              type="email"
              name="estate-email"
              placeholder="info@realestatecashbackltd.com"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              className="btn px-6 py-3 bg-orange-600 text-white rounded-lg ml-4"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
