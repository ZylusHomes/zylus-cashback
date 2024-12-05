import Image from "next/image";
// import LoansImg from "/public/assets/loans.png";
import piggy1 from "@/asset/piggy1.png";
import piggy2 from "@/asset/piggy2.png";
import piggy3 from "@/asset/piggy3.png";
import piggy4 from "@/asset/piggy4.png";
import linkIma1 from "@/asset/linkIma1.png";
import linkIma2 from "@/asset/linkIma2.png";
import linkIma3 from "@/asset/linkIma3.png";
import linkIma4 from "@/asset/linkIma4.png";

const financeOptions = [
  {
    id: 1,
    img: piggy1,
    img2: linkIma1,
    title: "Access to Loans",
    text: "Property Activation Loan is a type of loan offered to members of the cooperative where members have access to financing for the initial deposit on a property.",
    btnText: "Loans",
  },
  {
    id: 2,
    img: piggy2,
    img2: linkIma2,
    title: "Profit Sharing",
    text: "Allows every individual to invest monthly on an installment basis for a period of one year to develop a building project for resale and earn a 25% return.",
    btnText: "PSS",
  },
  {
    id: 3,
    img: piggy3,
    img2: linkIma3,
    title: "Home Ownership",
    text: "Real Estate Cashback provides access for members of the cooperative to acquire and develop large expanse of land for building, ownership, and profit maximization.",
    btnText: "Cashback",
  },
  {
    id: 4,
    img: piggy4,
    img2: linkIma4,
    title: "PSS Allows Users to Save",
    text: "PSS allows users to save towards a goal while earning returns on savings.",
    btnText: "PSS",
  },
];

export default function FinanceSection() {
  return (
    <section>
      <div className="px-[0] py-[100px] sm:px-[0] sm:py-[50px]">
        <div className="w-[90vw] max-w-[1350px] mx-[auto] my-[0]">
          <div className="flex justify-center items-center flex-col mx-[0] my-[30px]">
            <h1 className="mb-[30px] text-[38px] font-bold w-[500px] text-center sm:w-[90%] sm:text-[27px] sm:mb-[10px]">
              Have full control over your finances and business.
            </h1>
            <p className="text-lg text-center">
              Earn dividends when you take merit of the investment plans.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(4,_1fr)] gap-[40px] sm:grid-cols-[1fr]">
            {financeOptions.map((option) => (
              <div
                key={option.id}
                className="bg-[#f9f9f9] rounded-[10px] px-[30px] py-[40px]"
              >
                <Image
                  src={option.img}
                  alt={option.title}
                  className="w-[50px]"
                />
                <h3 className="font-bold text-lg mx-[0] my-[30px]">
                  {option.title}
                </h3>
                <p className="text-sm max-w-[280px] text-[#686868] font-medium">
                  {option.text}
                </p>
                <a
                  href="#"
                  className="mt-[70px] text-[#313131] [transition:all_.3s_ease-in-out] flex items-center gap-5"
                >
                  <Image
                    src={option.img2}
                    alt={option.title}
                    className="w-[50px]"
                  />
                  <span className="mr-[15px]">{option.btnText}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
