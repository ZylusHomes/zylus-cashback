import Image from "next/image";

import photo1 from "@/asset/photo1.png";
import photo2 from "@/asset/photo2.png";
import photo3 from "@/asset/photo3.png";
import photo4 from "@/asset/photo4.png";
import photo5 from "@/asset/photo5.png";
import Header from "@/components/Menu/menu";
import FooterSection from "@/components/Footer/footer";

const teamMembers = [
  {
    id: 2,
    img: photo1,
    name: "Dr Oluwatosin Olatujoye",
    role: "President",
  },
  {
    id: 3,
    img: photo2,
    name: "Wasiu Sonekan",
    role: "CEO/President",
  },
  {
    id: 5,
    img: photo3,
    name: "Olubukola Olatujoye",
    role: "",
  },
  {
    id: 6,
    img: photo4,
    name: "Mr Komolafe",
    role: "Treasurer",
  },
  {
    id: 7,
    img: photo5,
    name: "Prosper Emakpor",
    role: "Business Development Officer",
  },
];

export default function Page() {
  return (
    <main>
      <Header />

      <div className="bg-white py-16 mt-[80px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-12 flex justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-900 w-[700px] leading-[40px]">
              We bring a wealth of skills and experience from a wide range of
              background.
            </h2>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-[1fr] sm:gap-0">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center p-6">
                {/* Image */}
                <div className="relative w-[300px] h-[300px] mx-auto mb-4 rounded-lg">
                  <Image
                    src={member.img}
                    alt={member.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                {/* Name */}
                <h4 className="text-[#fff] bg-[#ff5402] p-[9px] rounded-[5px] mx-[auto] my-[5px] max-w-[264px] w-full text-center font-bold">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
