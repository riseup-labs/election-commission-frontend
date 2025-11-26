import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RecentNews() {
  const news = [
    {
      id: 1,
      day: "৫",
      month: "জানুয়ারি",
      title:
        "জাতিকে একটি সুন্দর, গ্রহণযোগ্য ও স্বচ্ছ নির্বাচন উপহার দিতে চাই: সিইসি",
      link: "/",
      image: "/images/ec2.jpg",
    },
    {
      id: 2,
      day: "৫",
      month: "জানুয়ারি",
      title:
        "জাতিকে একটি সুন্দর, গ্রহণযোগ্য ও স্বচ্ছ নির্বাচন উপহার দিতে চাই: সিইসি",
      link: "/",
      image: "/images/ec2.jpg",
    },
    {
      id: 3,
      day: "৫",
      month: "জানুয়ারি",
      title:
        "জাতিকে একটি সুন্দর, গ্রহণযোগ্য ও স্বচ্ছ নির্বাচন উপহার দিতে চাই: সিইসি",
      link: "/",
      image: "/images/ec2.jpg",
    },
  ];

  return (
    <section className="py-10 bg-[#F9FAFB]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#15803D] font-semibold">সাম্প্রতিক খবর</p>

          <Link
            href="/recent-news"
            className="text-[#15803D] text-sm flex items-center gap-1"
          >
            সব দেখুন
            <ArrowRight className="w-3.5 h-3.5 text-[#15803D]" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              // className="bg-white rounded-sm shadow hover:shadow-lg transition"
              className="relative mb-15"
            >
              <div className="relative h-[325px]">
                <Image
                  src={item.image}
                  alt="news"
                  className="object-cover rounded-sm"
                  // width={489}
                  // height={325}
                  fill
                />
              </div>

              <div className="bg-white rounded-sm shadow hover:shadow-lg w-[90%] absolute z-10 -bottom-15 left-1/2 -translate-x-1/2 p-4 h-[153px] flex flex-col justify-between">
                <p className="font-semibold leading-snug text-sm">
                  {item.title}
                </p>
                <Link
                  href="/"
                  className="text-[#15803D] text-sm flex items-center gap-1"
                >
                  বিস্তারিত দেখুন
                  <ArrowRight className="w-3.5 h-3.5 text-[#15803D]" />
                </Link>
              </div>

              <div>
                <p className="text-sm text-[#15803D]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
