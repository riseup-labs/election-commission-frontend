"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

const Members = () => {
  return (
    <div className="bg-[#F9FAFB] py-15">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <ImageSlider />
          </div>
          <div>
            <div className="mb-4">
              <SectionTitle label="প্রধান নির্বাচন কমিশনার" />
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              <Link href={"/election-commissioners/details"}>
                <MemberCard
                  name="জনাব এ, এম, এম, নাসির উদ্দিন"
                  image="/images/nasir.png"
                  details="জনাব এ এম এম নাসির উদ্দিন ২০২৪ সালের ২১ নভেম্বর তারিখে বাংলাদেশের প্রধান নির্বাচন কমিশনার (সিইসি) হিসেবে নিয়োগ লাভ করেন।"
                />
              </Link>
            </div>
            <div className="my-4">
              <SectionTitle label="নির্বাচন কমিশনার" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {members.map((member) => (
                <MemberCard
                  key={member?.name}
                  name={member?.name}
                  image={member?.image}
                  details={member?.details.slice(0, 110).concat("...")}
                />
              ))}
            </div>

            <div className="my-4">
              <SectionTitle label="নির্বাচন কমিশনার" />
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              <MemberCard
                name="সিনিয়র সচিবের নাম"
                image="/images/akhtar-ahmed-secretary-2.jpeg"
                details="বাংলাদেশ নির্বাচন কমিশন ভবনটি ঢাকার আগারগাঁও এলাকায় অবস্থিত,
                  যা দেশের নির্বাচন পরিচালনা ব্যবস্থার কেন্দ্রীয় প্রশাসনিক
                  কার্যালয় হিসেবে ব্যবহৃত হয়। এখানে জাতীয় ও স্থানীয় নির্বাচনের
                  পরিকল্পনা, পরিচালনা এবং ফলাফল প্রকাশের সমস্ত কার্যক্রম সম্পন্ন
                  হয়।"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ name = "", image = "", details = "" }) => (
  <div className="w-full border-l-4 border-[#653887] rounded-md">
    <div className="min-h-[110px] h-full bg-white rounded p-2 flex gap-3 items-center">
      <div className="w-20 shrink-0">
        <Image
          src={image}
          width={80}
          height={90}
          alt={name}
          className="object-cover rounded"
        />
      </div>

      <div className="w-full h-full">
        <p className="font-semibold py-2 text-sm">{name}</p>
        <p className="text-xs">{details}</p>
      </div>
    </div>
  </div>
);

const SectionTitle = ({ label = "" }) => {
  return (
    <div>
      <p className="text-[#15803D] font-semibold">{label}</p>
      <div className="h-1 w-15 bg-[#16A34A] mt-2 rounded-full" />
    </div>
  );
};

const members = [
  {
    name: "জনাব আব্দুর রহমানেল মাছউদ",
    image: "/images/masud.png",
    details:
      "জনাব আব্দুর রহমানেল মাছউদ ০১ জানুয়ারি ১৯৫৮ সালে ঢাকা জেলার ধামরাই উপজেলার বড় জেঠাইল গ্রামে এক সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন। তাঁর পিতা মরহুম মাওলানা রমযান আলী আরাম নগর আলিয়া মাদ্রাসা, সরিষাবাড়ি ও মাদ্রাসায়ে মুহাম্মাদিয়া আরাবিয়া, যাত্রাবাড়ী, ঢাকা এর অধ্যক্ষ ছিলেন।",
  },
  {
    name: "বেগম তাহমিদা আহমদ",
    image: "/images/tahmida.png",
    details:
      "মহামান্য রাষ্ট্রপতি কর্তৃক ২১ নভেম্বর ২০২৪ তারিখে নির্বাচন কমিশনার হিসেবে বেগম তাহমিদা আহমদ নিয়োগ প্রাপ্ত হয়ে ২৪ নভেম্বর ২০২৪ তারিখে শপথ গ্রহণপূর্বক নির্বাচন কমিশনারের কার্যভার গ্রহণ করেন।",
  },
  {
    name: "জনাব মোঃ আনোয়ারুল ইসলাম সরকার",
    image: "/images/anwarul.png",
    details:
      "জনাব মোঃ আনোয়ারুল ইসলাম সরকার মহামান্য রাষ্ট্রপতি কর্তৃক ২১ নভেম্বর ২০২৪ তারিখে নির্বাচন কমিশনার হিসেবে  নিয়োগ প্রাপ্ত হয়ে ২৪ নভেম্বর ২০২৪ তারিখে শপথ গ্রহণপূর্বক নির্বাচন কমিশনারের কার্যভার গ্রহণ করেন।",
  },

  {
    name: "ব্রিগেডিয়ার জেনারেল আবুল ফজল মো: সানাউল্লাহ (অবসরপ্রাপ্ত)",
    image: "/images/sanaullah.png",
    details:
      "মাননীয় নির্বাচন কমিশনার ব্রিগেডিয়ার জেনারেল আবুল ফজল মোঃ সানাউল্লাহ(অব:) গত ২৪ নভেম্বর ২০২৪ তারিখ নির্বাচন কমিশনার হিসেবে দায়িত্বভার গ্রহণ করেন। তিনি চাঁপাইনবাবগঞ্জ জেলার নাচোলে ১৯৬৮ সালের০১ জুলাই জন্মগ্রহণ করেন। তিনি ১নং নাচোল সরকারী প্রাথমিক বিদ্যালয়, নাচোল পাইলট উচ্চ বিদ্যালয় এবং নাচোল কলেজ থেকে যথাক্রমে প্রাথমিক, মাধ্যমিক  এবং উচ্চ মাধ্যমিক সম্পন্ন করেন। ১৯৮৬ সালের জুলাই মাসে তিনি ১৮তম বিএমএ লং কোর্সে ক্যাডেট হিসেবে বাংলাদেশ মিলিটারী একাডেমীতে যোগদেন এবং ১৯৮৮ সালের জুন মাসে পদাতিক বাহিনীতে কমিশন লাভ করেন। প্রশিক্ষণে সর্ব বিষয়ে সর্বশ্রেষ্ঠক্যাডেট হিসেবেতিনি মহামান্য রাষ্ট্রপতির‘সোর্ড অব অনার’ লাভ করেন।",
  },
];

function ImageSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/ec1.png",
      title: "রাজশাহী সিটি কর্পোরেশন",
      description: "Rajshahi City Corporation Building",
    },
    {
      id: 2,
      image: "/images/ec2.jpg",
      title: "Modern Architecture",
      description: "Contemporary building design",
    },
    {
      id: 3,
      image: "/images/ec1.png",
      title: "Government Complex",
      description: "Administrative headquarters",
    },
    {
      id: 4,
      image: "/images/ec2.jpg",
      title: "City Skyline",
      description: "Urban landscape view",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="shadow-2xl">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-t-lg"
                  priority={slide.id === 1}
                />
              </div>

              <div className="bg-white p-4">
                <p className="font-semibold">বাংলাদেশ নির্বাচন কমিশন</p>
                <p className="text-sm mt-2 pb-2">
                  বাংলাদেশ নির্বাচন কমিশন ভবনটি ঢাকার আগারগাঁও এলাকায় অবস্থিত,
                  যা দেশের নির্বাচন পরিচালনা ব্যবস্থার কেন্দ্রীয় প্রশাসনিক
                  কার্যালয় হিসেবে ব্যবহৃত হয়। এখানে জাতীয় ও স্থানীয় নির্বাচনের
                  পরিকল্পনা, পরিচালনা এবং ফলাফল প্রকাশের সমস্ত কার্যক্রম সম্পন্ন
                  হয়। এছাড়া ভোটার তালিকা প্রস্তুত ও হালনাগাদ, রাজনৈতিক দল
                  নিবন্ধন, নির্বাচনী তদারকি এবং ইলেকট্রনিক ভোটিং সিস্টেম
                  সম্পর্কিত কার্যক্রমও এখান থেকে পরিচালিত হয়।
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styling for Swiper navigation and pagination */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          transition: all 0.3s ease;
          padding: 6px;
          top: 33% !important;
        }

        /* For md screens */
        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            top: 35% !important;
          }
        }

        /* For md screens */
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            top: 40% !important;
          }
        }

        /* For lg screens */
        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            top: 40% !important;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 10px;
        }

        .swiper-pagination-bullet {
          background: #86868636;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #67b878;
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 20px;
            height: 20px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Members;
