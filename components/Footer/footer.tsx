import Image from "next/image";
import Link from "next/link";
import Logo from "@/asset/logo.png";
import facebook1 from "@/asset/facebook.svg";
import linkedin1 from "@/asset/linkedin.svg";
import twitter from "@/asset/twitter1.svg";

const FooterSection = () => {
  return (
    <div className="bg-[#0b2230]">
      <div className="w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
        <div className="grid grid-cols-[repeat(5,_1fr)] gap-[20px]">
          {/* Logo Section */}
          <div className="mt-[85px] font-semibold pb-[100px] grid1">
            <Image
              src={Logo.src} // Assuming your image is in the public folder
              alt="logo"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
              className="max-w-full"
            />
          </div>

          {/* Products Links */}
          <ul className="mt-[85px] font-semibold pb-[100px] grid2">
            <li className="mb-[16px]">
              <p className="text-[#ff5402] mb-[14px]">Products</p>
            </li>
            <li className="mb-[16px]">
              <Link href="/real-estate" className="text-[#fff]">
                Real Estate Cashback
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/target-savings" className="text-[#fff]">
                Target Savings
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/pdss" className="text-[#fff]">
                PSS
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/faqs" className="text-[#fff]">
                FAQs
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/faqs" className="text-[#fff]">
                Plans
              </Link>
            </li>
          </ul>

          {/* Customer Stories Links */}
          <ul className="mt-[85px] font-semibold pb-[100px] grid3">
            <li className="mb-[16px]">
              <p className="text-[#ff5402] mb-[14px]">Customer Stories</p>
            </li>
            <li className="mb-[16px]">
              <Link href="/gallery" className="text-[#fff]">
                Testimonials
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/gallery" className="text-[#fff]">
                Gallery
              </Link>
            </li>
          </ul>

          {/* Company Links */}
          <ul className="mt-[85px] font-semibold pb-[100px] grid4">
            <li className="mb-[16px]">
              <p className="text-[#ff5402] mb-[14px]">Company</p>
            </li>
            <li className="mb-[16px]">
              <Link href="/about" className="text-[#fff]">
                About Us
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Terms of Service
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/faqs" className="text-[#fff]">
                FAQs
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Terms of Service
              </Link>
            </li>
          </ul>

          {/* Resources Links */}
          <ul className="mt-[85px] font-semibold pb-[100px] grid5">
            <li className="mb-[16px]">
              <p className="text-[#ff5402] mb-[14px]">Resources</p>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Blog
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Documentation
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="#" className="text-[#fff]">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <footer className="flex justify-between items-center pb-[100px]">
          <div className="text-[#fff]">
            Copyright @2024 Real Estate Cashback. All Rights Reserved
          </div>

          {/* Social Icons */}
          <div className="flex gap-[20px]">
            <a href="#" className="fb">
              <Image
                src={facebook1}
                alt={facebook1}
                width={40} // Adjust size as needed
                height={40} // Adjust size as needed
              />
            </a>
            <a href="#" className="linkedIn">
              <Image
                src={linkedin1}
                alt={linkedin1}
                width={40} // Adjust size as needed
                height={40} // Adjust size as needed
              />
            </a>
            <a href="#" className="twitter">
              <Image
                src={twitter} // Assuming the image is in the public folder
                alt="twitterImg"
                width={40} // Adjust size as needed
                height={40} // Adjust size as needed
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSection;
