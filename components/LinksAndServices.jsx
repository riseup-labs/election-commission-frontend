import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LinksAndServices() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 py-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/ec1.png"
          alt="Bangladesh Election Commission Logo"
          width={686}
          height={533}
          className="rounded-sm shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-2">
        <p className="text-[#15803D] font-semibold pb-3 mb-5 border-b">
          গুরুত্বপূর্ণ লিংক ও সেবা
        </p>

        {links.map((item) => (
          <div
            key={item?.title}
            className="bg-[#F9FAFB] p-3 rounded-sm flex gap-2 items-center justify-between cursor-pointer"
          >
            <div>
              <p className="text-sm font-semibold mb-3">{item?.title}</p>
              <p className="text-sm">{item?.description}</p>{" "}
            </div>
            <ArrowRight className="w-5 h-5 text-[#374151]" />
          </div>
        ))}
      </div>
    </div>
  );
}

const links = [
  {
    title: "জাতীয় পরিচয় নিবন্ধন অনুবিভাগ",
    description:
      "বাংলাদেশের নাগরিকদের পরিচয় নিবন্ধন, সংরক্ষণ ও ব্যবস্থাপনার কেন্দ্রীয় সংস্থা।",
  },
  {
    title: "NID অনলাইন সেবা",
    description: "নাগরিক সেবাকে সহজ করতে আমাদের ডিজিটাল উদ্যোগ",
  },
  {
    title: "জাতীয় নির্বাচন (২০১৪, ২০১৮ ও ২০২৩) তথ্য কমিশন",
    description: "মুক্ত ও স্বচ্ছ নির্বাচন নিশ্চিতকরণে স্বতন্ত্র উদ্যোগ।",
  },
];
