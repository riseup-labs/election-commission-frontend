"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FileText, User, HandHeart, ChartLine } from "lucide-react";
import { InfoCards } from "./InfoCards";
import Link from "next/link";

const Informations = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TabTable />
        <InfoCardGrid />
      </div>
    </div>
  );
};

function TabTable() {
  const [activeTab, setActiveTab] = useState("latest");

  const tabs = [
    { id: "latest", label: "সর্বশেষ", color: "bg-[#009951]" },
    { id: "updates", label: "সাম্প্রতিক আপডেট", color: "bg-[#009951]" },
    { id: "daily", label: "দৈনিক রিপোর্ট", color: "bg-[#009951]" },
    { id: "decisions", label: "বোর্ডের সিদ্ধান্ত", color: "bg-[#009951]" },
    { id: "recruitment", label: "নিয়োগ প্রদান", color: "bg-[#009951]" },
    { id: "establishment", label: "প্রতিষ্ঠা", color: "bg-[#009951]" },
  ];

  const tableData = {
    latest: [
      { id: "01", title: "প্রতিবন্ধী কল্যাণ ভাতা বিতরণ", date: "Feb 13, 2023" },
      { id: "02", title: "সাধারণ ছুটি (মাসিক সমাবেশ)", date: "Feb 13, 2023" },
      { id: "03", title: "বিশেষ খবর", date: "Feb 13, 2023" },
      {
        id: "04",
        title: "মাসিক তালিকা সংশ্লিষ্ট প্রকাশনা",
        date: "Feb 13, 2023",
      },
      {
        id: "05",
        title: "কর্মচারী পদ পূরণের জন্য নিয়োগ বিজ্ঞপ্তি যোদেন",
        date: "Feb 13, 2023",
      },
      { id: "06", title: "আগামী সপ্তাহসাপ্তা চলতি", date: "Feb 13, 2023" },
      {
        id: "07",
        title: "অফিস সংক্রান্ত বিশেষ নির্দেশনা প্রজ্ঞাপন দিশা",
        date: "Feb 13, 2023",
      },
    ],
    updates: [
      { id: "01", title: "নতুন আপডেট তথ্য", date: "Feb 12, 2023" },
      { id: "02", title: "সাম্প্রতিক পরিবর্তন", date: "Feb 12, 2023" },
    ],
    daily: [
      { id: "01", title: "দৈনিক কার্যক্রম রিপোর্ট", date: "Feb 13, 2023" },
    ],
    decisions: [
      { id: "01", title: "বোর্ড সিদ্ধান্ত নং ০১", date: "Feb 10, 2023" },
    ],
    recruitment: [
      { id: "01", title: "নতুন নিয়োগ বিজ্ঞপ্তি", date: "Feb 11, 2023" },
    ],
    establishment: [
      { id: "01", title: "প্রতিষ্ঠান সংক্রান্ত", date: "Feb 09, 2023" },
    ],
  };

  return (
    <div className="overflow-hidden rounded-md bg-[#F9FAFB] text-sm">
      {/* Tabs - Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative shrink-0 px-6 py-4 font-medium transition-all duration-200 hover:bg-slate-50 ${
                activeTab === tab.id ? "text-white" : "text-vlack"
              } cursor-pointer`}
            >
              {/* Background color for active tab */}
              {activeTab === tab.id && (
                <span
                  className={`absolute inset-0 ${tab.color} rounded-t-md`}
                />
              )}

              <span className="relative z-10 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className="divide-y divide-slate-100">
        {tableData[activeTab]?.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 transition-colors duration-200 hover:bg-slate-50 md:gap-6 md:p-5"
          >
            {/* ID/Number */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-100 to-purple-200 text-sm font-semibold text-purple-700">
              {item.id}
            </div>

            {/* Title */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium transition-colors">
                {item.title}
              </p>
            </div>

            {/* Date */}
            <div className="flex shrink-0 items-center gap-2 text-sm">
              <span className="whitespace-nowrap">{item.date}</span>
              <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {(!tableData[activeTab] || tableData[activeTab].length === 0) && (
        <div className="py-16 text-center">
          <p className="text-slate-500">কোন তথ্য পাওয়া যায়নি</p>
        </div>
      )}
    </div>
  );
}

function InfoCardGrid() {
  const cards = [
    {
      id: 1,
      icon: FileText,
      iconBg: "bg-[#F97316]",
      title: "নিবন্ধন করুন",
      description: "নতুন ভোটার নিবন্ধন ও তথ্য হালনাগাদ",
      href: "/registration-process",
    },
    {
      id: 2,
      icon: User,
      iconBg: "bg-[#22C55E]",
      title: "নিবন্ধন প্রক্রিয়া",
      description: "আপনার ভোটার তথ্য ও কেন্দ্র খুঁজুন",
      href: "/registration-process",
    },
    {
      id: 3,
      icon: HandHeart,
      iconBg: "bg-[#A855F7]",
      title: "ভোটার নিবন্ধন সংক্রান্ত ফর্ম",
      description: "সর্বশেষ নির্বাচনের ফলাফল দেখুন",
      href: "/registration-process",
    },
    {
      id: 4,
      icon: ChartLine,
      iconBg: "bg-[#EF4444]",
      title: "ভোটার নিবন্ধন সংক্রান্ত পরিপত্র ও অন্যান্য",
      description: "নতুন ভোটার নিবন্ধন ও তথ্য হালনাগাদ",
      href: "/registration-process",
    },
  ];

  return (
    <div className="w-full bg-[#F6FFF9] rounded-sm p-6 md:p-8">
      {/* Header Section */}
      <div className="mb-6">
        <p className="text-[#15803D] font-semibold mb-4">ভোটার নিবন্ধন সেবা</p>
        <p className="text-sm">আপনার প্রয়োজনীয় সেবা সহজেই পেয়ে যান</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch auto-rows-fr">
        {cards.map((card) => {
          return (
            <div key={card.id} className="shadow-md hover:shadow-lg">
              <Link href={card?.href}>
                <InfoCards info={card} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Informations;
