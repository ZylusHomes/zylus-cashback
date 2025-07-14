"use client";

import { useState } from "react";
import Header from "@/components/Menu/menu";
import FooterSection from "@/components/Footer/footer";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";

const Faqs = () => {
  const [selectedTab, setSelectedTab] = useState(
    "Real Estate Cashback Limited"
  );
  
  const [accordionState, setAccordionState] = useState<Record<number, boolean>>(
    {}
  );

  const toggleAccordion = (index: number) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the specific index
    }));
  };

  const tabs = [
    "Real Estate Cashback Limited",
    // "Real Estate Cashback",
    "Property Saving Scheme",
    // "Target Savings",
  ];

  const faqs = [
    // {
    //   id: "Real Estate Cashback Limited",
    //   question: "What is Real Estate CashBack ?",
    //   answer:
    //     "Real Estate Cashback is a Real Estate trading which allows customers invest/buy into real estate development for the purpose of generating passive income. The profit in percentage is 28% for a period of 12months and 14% for 6months.",
    // },
    {
      id: "Real Estate Cashback Limited",
      question: "What company manages Real Estate CashBack ?",
      answer:
        "Real Estate Cashback is an initiative of Real Estate CashBack Cooperative Society Limited.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Is real estate cashback a licensed investment ?",
      answer:
        "Yes, Real estate cashback is a product of Real Estate CashBack Cooperative Society Limitedduly licensed by the Lagos State Ministry of Commerce, Industry & Cooperative with registration number LSCS 18176.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "How competent is the team behind Real Estate Cashback ?",
      answer:
        "Our team are financial experts and real estate professionals that are drivenby the passion to help limit the societal gap between the rich and the poor by creating various investment opportunities for everyone regardless of their social status.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "What will the funds be used for ?",
      answer:
        "The funds is invested in developing commercial and residential properties. We also conduct thorough research on locations prone to quick appreciation and buy properties there. With time,we develop these properties, sell-off, and share the profit with you. We invest only in appreciable and tangible asset.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Can I invest online ?",
      answer:
        "Yes you can by doing the following: Get the online form, Fill your details, Attach evidence of payment, I.D card and passport,Click submit.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Can I invest offline ?",
      answer:
        "Yes, you can invest offline by visiting our Head office located at 168, Awolowo road, Ikoyi, Lagos to pick an investment, make payment and collect receipt.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "What is the minimum & maximum unit of investment ?",
      answer:
        "The minimum unit is 6.25 Sqm which is currently valued at N500, 000. There is no maximum limit to the number of unit an individual can acquired, depending on the present estate cash back investment. You can buy multiple unit of investment.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "What are the document I need to submit ?",
      answer: "Evidence of Payment, Valid I.D card, Passport Photograph",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "What document will I get after investing my funds ?",
      answer:
        "Evidence of Payment, Valid I.D card, Passport Photograph Deed of Agreement, Investment Certificate, A Post-Dated Cheque, Insurance Certificate, Insurance: It covers the exact amount of funds a member invested in case of casualties or the death of the members. The beneficiary will get access to the funds invested irrespective of the situation.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "How Do I know my investment has matured ?",
      answer:
        "You will get a notification from us either through email, SMS or a phone call",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "How will my investment maturity be paid ?",
      answer:
        "You will get a phone call notification from us before the maturity and we will do a transfer to your account.",
    },
    // {
    //   id: "Real Estate Cashback Limited",
    //   question: "Can I get my interest upfront ?",
    //   answer:
    //     "Yes, but you will be charge 4% of the total interest, then 50% of it will be paid to you.",
    // },
    {
      id: "Real Estate Cashback Limited",
      question: "How secure is my investment and data ?",
      answer:
        "Your information is secure with our payment partners, while your investment with us is secured, insured and guaranteed, also upon maturity of your investment, the invested amount and the profit is to be made available to the member by the company, and the investment can also be paid in form property that worth the invested sum.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Can I terminate my investment before maturity date ?",
      answer:
        "Your information is secure with our payment partners, while your investment with us is secured, insured and guaranteed, also upon maturity of your investment, the invested amount and the profit is to be made available to the member by the company, and the investment can also be paid in form property that worth the invested sum.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Can I re-invest my funds after maturity ?",
      answer: "Yes you can.",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Who are your partners on this project ?",
      answer:
        "All our receiving banks such as GTB are our receiving banks: Guarantee Trust Bank (GTB) - Real Estate Cash Back - 0696547068",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "Is there an incentive for this investment",
      answer: "Yes, there is incentive for every member that invest with us",
    },
    {
      id: "Real Estate Cashback Limited",
      question: "How do I contact the company for enquires ?",
      answer:
        "Our office is located at 168, Awolowo road, Ikoyi Lagos. Email: Realestatecashbackltd@gmail.com - Phone Number: 08145404342",
    },
    {
      id: "Property Saving Scheme",
      question: "What is Property Saving Scheme ?",
      answer:
        "It's a saving product specially designed for low and medium-income earners who are willing to make returns through savings. Members save a minimum of twenty-thousand naira (₦20,000) on a monthly basis for a period of one (1) year towards the acquisition of property at the end of the savings duration.",
    },
    {
      id: "Property Saving Scheme",
      question: "Why should I save using Property Saving Scheme ?",
      answer:
        "To generate passive income through real estate savings. Helps you to accumulate funds towards the acquisition of property.",
    },
    {
      id: "Property Saving Scheme",
      question: "What’s the duration of the saving scheme ?",
      answer: "You can save for up to 12 months",
    },
    {
      id: "Property Saving Scheme",
      question: "How safe and secure is PSS ?",
      answer:
        "Your security is our top priority that is why we work with a PCIDSS-compliant payment processor, Paystack to handle your card details which are very safe.",
    },
    // {
    //   id: "Property Saving Scheme",
    //   question:
    //     "What is the interest rate and duration for Property Saving Scheme ?",
    //   answer:
    //     "The interest rate for Property Saving Scheme is 15% interest on annual savings calculated on a pro-rata basis for a duration of 12 months which amounts to one year.",
    // },
    {
      id: "Property Saving Scheme",
      question: "How do I monitor my savings ?",
      answer:
        "You can monitor your savings through our safe and secure portal system. Upon registration as a member of the cooperative scheme, you will be provided with details (Username and Password) which allows you to monitor your savings and dividend every month until maturity. At maturity, both the total contributed and the dividend remains payable to every member.",
    },
    {
      id: "Property Saving Scheme",
      question:
        "What’s the minimum amount a member of the cooperative can save ?",
      answer: "The minimum amount a member can save is N20, 000 every month.",
    },
    {
      id: "Property Saving Scheme",
      question: "How secure is my savings ?",
      answer:
        "All funds committed to the cooperative is safe as they are used for the benefit of the members particularly where financial venture in form of real estate trading is concerned. In this case, the cooperative engage in the acquisition and development of a large expanse of land for building, ownership, and profit maximization. In addition to the above, we partner with CORDRUS CAPITAL, a sec licensed organisation with Fidelity Bond insurance coverage with Axamansard to invest members’ savings and investment with return which would be shared with members as dividend",
    },
    {
      id: "Property Saving Scheme",
      question:
        "Can the subscription to the savings scheme be terminated by either of the two parties ?",
      answer:
        "Yes, a subscription to the saving scheme can be terminated, but this can only be done after aminimum duration of 3 months, with 2 months notification either by mail or physical letter. NOTE: Termination of subscription attracts a charge of 15% on savings.",
    },
    {
      id: "Property Saving Scheme",
      question: "Can corporate organizations become members ?",
      answer: "Yes, corporate organization can become members.",
    },
    {
      id: "Property Saving Scheme",
      question: "Can I use my saving and interest to acquire property (ies) ?",
      answer: "Yes, you can",
    },
    // Add more FAQ entries as needed
  ];

  return (
    <main>
      <Header />
      <div className="flex justify-center items-center w-full mt-[90px]">
        <div className="max-w-[1350px] w-full sm:flex-col sm:h-auto sm:mt-0">
          <div className="w-full flex justify-start items-start border-[1px] border-solid border-[#d6d6d6] rounded-[5px] h-[700px] mx-[0] my-[50px] sm:m-0 sm:h-auto sm:flex-col">
            {/* Tabs */}
            <div className="h-full sm:w-full">
              <div className="flex justify-start items-start flex-col w-[300px] bg-[#e0e0e0] h-full sm:w-full">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full p-[30px] text-[gray] text-[17px] ${
                      selectedTab === tab ? "bg-[white]" : "bg-[#e0e0e0]"
                    }`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="w-full">
              <div className="overflow-y-scroll h-[700px] [border-left:1px_solid_#d6d6d6] sm:h-auto">
                <div className="">
                  <h3 className="text-center p-[20px] text-xl font-bold [border-bottom:1px_solid_#d6d6d6]">
                    {selectedTab.toUpperCase()} FREQUENTLY ASKED QUESTIONS
                  </h3>
                </div>
                {faqs.map((faq, index: number) => (
                  <div key={index} className="">
                    {faq.id === selectedTab && (
                      <div
                        className={`[border-bottom:1px_solid_#d6d6d6] p-[20px] flex justify-between items-center text-[17px] font-semibold`}
                      >
                        <p>{faq.question}</p>
                        <div onClick={() => toggleAccordion(index)}>
                          {accordionState[index] ? (
                            <HiOutlineMinusCircle />
                          ) : (
                            <HiOutlinePlusCircle />
                          )}
                        </div>
                      </div>
                    )}

                    <div
                      className={`${
                        accordionState[index] ? "block" : "hidden"
                      }`}
                    >
                      {faq.id === selectedTab && (
                        <p className="p-[20px] text-[gray]">{faq.answer}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
};

export default Faqs;
