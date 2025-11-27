"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FileText, User, HandHeart, ChartLine } from "lucide-react";
import { InfoCards } from "./InfoCards";
import Link from "next/link";

const Informations = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] gap-6">
        <div className="bg-[#F9FAFB]">
          <TabTable />
        </div>

        <div>
          <InfoCardGrid />
        </div>
      </div>
    </div>
  );
};

function TabTable() {
  const [activeTab, setActiveTab] = useState("latest");

  const tabs = [
    { id: "latest", label: "OCP/ICPV", color: "bg-[#009951]", count: 2 },
    {
      id: "updates",
      label: "সাম্প্রতিক তথ্যসমূহ",
      color: "bg-[#009951]",
      count: 3,
    },
    { id: "daily", label: "নোটিশ বোর্ড", color: "bg-[#009951]", count: 0 },
    {
      id: "decisions",
      label: "ভোটার নিবন্ধন",
      color: "bg-[#009951]",
      count: 0,
    },
    {
      id: "recruitment",
      label: "নির্বাচনী প্রগপন",
      color: "bg-[#009951]",
      count: 0,
    },
    { id: "establishment", label: "ভিডিও", color: "bg-[#009951]", count: 0 },
  ];

  const tableData = {
    latest: [
      {
        id: "০১",
        title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
        date: "Feb 13, 2023",
      },
      {
        id: "০২",
        title: "পোস্টাল ভোটিং (আইটি সাপোর্টেড))",
        date: "Feb 13, 2023",
      },
      { id: "০৩", title: "বিদেশ ভ্রমন", date: "Feb 13, 2023" },
      {
        id: "০৪",
        title: "দ্বাদশ জাতীয় সংসদ নির্বাচনের প্রার্থীগণের হলফনামা",
        date: "Feb 13, 2023",
      },
      {
        id: "০৫",
        title: "রাষ্ট্রপতি পদে নির্বাচিত প্রার্থীর নাম-ঠিকানা সম্বলিত গেজেট",
        date: "Feb 13, 2023",
      },
      { id: "০৬", title: "অফিস আদেশ/অন্যান্য নোটিশ", date: "Feb 13, 2023" },
      {
        id: "0৭",
        title: "রাষ্ট্রপতি পদে নির্বাচিত প্রার্থীর নাম-ঠিকানা সম্বলিত গেজেট",
        date: "Feb 13, 2023",
      },
    ],
    updates: [
      {
        id: "০১",
        title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
        date: "Feb 13, 2023",
      },
      {
        id: "০২",
        title: "পোস্টাল ভোটিং (আইটি সাপোর্টেড))",
        date: "Feb 13, 2023",
      },
      { id: "০৩", title: "বিদেশ ভ্রমন", date: "Feb 13, 2023" },
      {
        id: "০৪",
        title: "দ্বাদশ জাতীয় সংসদ নির্বাচনের প্রার্থীগণের হলফনামা",
        date: "Feb 13, 2023",
      },
    ],
    daily: [
      {
        id: "০১",
        title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
        date: "Feb 13, 2023",
      },
      {
        id: "০২",
        title: "পোস্টাল ভোটিং (আইটি সাপোর্টেড))",
        date: "Feb 13, 2023",
      },
      { id: "০৩", title: "বিদেশ ভ্রমন", date: "Feb 13, 2023" },
    ],
    decisions: [
      {
        id: "০১",
        title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
        date: "Feb 13, 2023",
      },
      {
        id: "০২",
        title: "পোস্টাল ভোটিং (আইটি সাপোর্টেড))",
        date: "Feb 13, 2023",
      },
      { id: "০৩", title: "বিদেশ ভ্রমন", date: "Feb 13, 2023" },
      {
        id: "০৪",
        title: "দ্বাদশ জাতীয় সংসদ নির্বাচনের প্রার্থীগণের হলফনামা",
        date: "Feb 13, 2023",
      },
    ],
    recruitment: [
      {
        id: "০১",
        title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
        date: "Feb 13, 2023",
      },
      {
        id: "০২",
        title: "পোস্টাল ভোটিং (আইটি সাপোর্টেড))",
        date: "Feb 13, 2023",
      },
      { id: "০৩", title: "বিদেশ ভ্রমন", date: "Feb 13, 2023" },
    ],
    establishment: [
      { id: "01", title: "প্রতিষ্ঠান সংক্রান্ত", date: "Feb 09, 2023" },
    ],
  };

  return (
    <div className="overflow-hidden rounded-md bg-[#F9FAFB] text-sm">
      {/* Tabs - Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max border-b-2 border-[#009951] gap-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => activeTab !== tab.id && setActiveTab(tab.id)}
              className={`relative shrink-0 px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-black hover:text-[#009951]"
              } cursor-pointer flex items-center gap-2`}
            >
              {/* Background color for active tab */}
              {activeTab === tab.id ? (
                <span
                  className={`absolute inset-0 ${tab.color} rounded-t-md b`}
                />
              ) : (
                <span
                  className={`absolute inset-0 bg-[#E4E6EF] rounded-t-md b`}
                />
              )}

              <span className="relative z-10 whitespace-nowrap">
                {tab.label}
              </span>
              {tab.count && (
                <div
                  className={` w-4 h-4 relative z-10 flex items-center justify-center rounded-full ${
                    activeTab === tab.id
                      ? "bg-white text-[#FF4444]"
                      : "bg-[#FF4444] text-white"
                  }`}
                >
                  <span className="leading-none text-xs">{tab.count}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className="max-h-[440px] overflow-y-auto p-3 flex flex-col gap-2">
        {tableData[activeTab]?.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 transition-colors duration-200 bg-white hover:shadow-xs md:gap-6 cursor-pointer rounded-md"
          >
            <div className="w-10 h-10 rounded-md bg-[#F1E4FA] flex items-center justify-center text-sm">
              {item.id}
            </div>

            {/* Title */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold transition-colors">
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
