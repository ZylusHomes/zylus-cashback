import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Menu/menu";
import FooterSection from "@/components/Footer/footer";
import pss1 from "@/asset/pss1.png";
import pss2 from "@/asset/pss2.svg";
import pss3 from "@/asset/pss3.svg";
import pss4 from "@/asset/pss4.svg";
import int1 from "@/asset/int1.png";
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

// import InvestBoxImg from "/public/static/media/invest-box.4192cf61.svg";
// import ReturnsBoxImg from "/public/static/media/returns-box.5bbd440b.svg";
// import FundsBoxImg from "/public/static/media/funds-box.2044bd25.svg";
// import ProfitBoxImg from "/public/static/media/profit-box.09837aa3.svg";
// import SalesBoxImg from "/public/static/media/sales-box.ecc1e8f6.svg";
// import DocBoxImg from "/public/static/media/docbox.3cadfea7.svg";
// import Pride1A from "/public/static/media/pride 1 a.f1af732b.png";
// import Pride1B from "/public/static/media/pride 1 b.cd763593.png";
// import Pride1C from "/public/static/media/pride 1 c.871c68a8.png";
// import Pride2A from "/public/static/media/pride 2 a.9afd7e6b.png";
// import Pride2B from "/public/static/media/pride 2 b.2b98c2db.png";
// import Pride2C from "/public/static/media/pride 2 c.1240d4f2.png";
// import Pride3A from "/public/static/media/pride 3 a.e338936d.png";
// import Pride3B from "/public/static/media/pride 3 b.1eafee9e.png";
// import Pride3C from "/public/static/media/pride 3 c.3e3566db.png";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="bg-gray-50 py-16 mt-[50px]">
        <div className="max-w-[1200px] mx-auto px-4 space-y-16">
          {/* Main Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Property Saving Scheme
            </h1>
            <p className="mt-4 text-gray-600">
              Capture and build your real estate investment/portfolio with{" "}
              <span className="text-orange-600 font-semibold">
                Property Savings Scheme.
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
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-[1fr]">
            {/* Investment Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  More than an investment.
                </h2>
                <p className="mt-2 text-gray-600">
                  PSS is specially designed for low and medium-income earners
                  who are willing to make returns through real estate investment
                  and want to save towards owning or developing a property.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    img: pss2,
                    title: "Invest",
                    text: "PSS allows you to invest a minimum of N20,000 within the space of 12 months and get both your invested amount and ROI.",
                  },
                  {
                    img: pss3,
                    title: "Returns",
                    text: "Profit and capital entrusted in properties is payable at the trading period. The profit is pegged at 15% for 12 months duration.",
                  },
                  {
                    img: pss4,
                    title: "Investment Security",
                    text: "Insurance cover on monthly contribution and funds invested are secured generally.",
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
            {/* Placeholder for Image */}
            <div className="h-[600px]">
              <Image
                src={pss1}
                alt={"Not Available"}
                className="w-[85%] h-full md:w-full"
              />
            </div>
          </div>

          {/* Multiple Interest Section */}
          <div className="grid grid-cols-2 gap-12 sm:flex-col-reverse sm:flex">
            {/* Placeholder for Image */}
            <div className="h-[600px]">
              <Image
                src={int1}
                alt={"Not Available"}
                className="w-[85%] h-full md:w-full"
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
                    title: "Maturity Payment",
                    text: "Maturity Payment is payable in less than 48hrs, upon confirmation that the investment does not want to be rolled over.",
                  },
                  {
                    img: int3,
                    title: "Investment Rollover",
                    text: "Investment proceeds can be rolled over for another year as the case may be. Significant discounts are sometimes given for rollover.",
                  },
                  {
                    img: int4,
                    title: "Required Documents",
                    text: "The following are the documents required when applying for PSS: Fill the form, Attach passport photograph, Attach valid I.D. card, Evidence of Payment.",
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
