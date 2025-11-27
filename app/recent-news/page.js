import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RecentNews() {
  return (
    <div className="container mx-auto pt-6 pb-8">
      <PageTitle title={"সাম্প্রতিক খবর"} routes={["হোম", "সাম্প্রতিক খবর"]} />

      <div className="w-full md:pl-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-3 py-5">
          {/* Title */}
          <p className="text-sm md:text-md font-medium text-[#111827]">
            আপডেট: ১৬ নভেম্বর ২০২৫, ১৬: ৪৮
          </p>

          {/* Search box */}
          <div className="w-full md:w-1/3">
            <InputGroup>
              <InputGroupInput placeholder="অনুসন্ধান করুন ..." />
              <InputGroupAddon>
                <Search className="text-[#374151]" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews.map((news, i) => {
            return (
              <div key={i}>
                <div className={`relative h-45`}>
                  <Image
                    src="/images/ec2.jpg"
                    alt="news"
                    className="object-cover rounded-t-sm"
                    fill
                  />
                </div>
                <div className="border border-t-0 p-3 shadow text-sm  rounded-b-sm">
                  <p className="text-xs text-[#FF4444]">৫ অক্টোবর, ২০২৫</p>
                  <p className="lg:text-lg font-semibold my-2">
                    বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল
                  </p>
                  <p>
                    চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য
                    স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।
                  </p>
                  <Link
                    href={"/recent-news/details"}
                    className="w-full mt-2 rounded border border-[#A1D6BC] text-[#008E48] font-semibold hover:bg-[#008E48] hover:text-white block py-2 px-4 text-center"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const allNews = [
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
  {
    date: "৫ অক্টোবর, ২০২৫",
    title: "বাংলাদেশ নির্বাচন কমিশনের একমাত্র অফিশিয়াল ইউটিউব চ্যানেল",
    desciption:
      "চড়া মূল্যের কারণে গোশত কিনে খাওয়া এখন দরিদ্রদের জন্য স্বপ্নের মতো ব্যাপার হয়ে দাঁড়িয়েছে।",
  },
];
