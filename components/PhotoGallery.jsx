import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[#15803D] font-semibold">ফটো গ্যালারী</p>

        <Link
          href="/"
          // href="/photo-gallery"
          className="text-[#15803D] text-sm flex items-center gap-1"
        >
          সব দেখুন
          <ArrowRight className="w-3.5 h-3.5 text-[#15803D]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">
        {/* BIG LEFT CARD */}
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative group overflow-hidden cursor-pointer">
          <GalleryImage height="h-[350px] md:h-[350px] lg:h-full" />
          <GalleryContent />
        </div>

        {/* RIGHT TOP */}
        <div className="relative group overflow-hidden md:h-[250px] lg:col-span-2 lg:col-start-3 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>

        {/* RIGHT MIDDLE */}
        <div className="relative group overflow-hidden md:h-[250px] lg:col-span-2 lg:col-start-3 lg:row-start-2 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>

        {/* BOTTOM FOUR */}
        <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>

        <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>

        <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>

        <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3 cursor-pointer">
          <GalleryImage height="h-[350px] md:h-full" />
          <GalleryContent />
        </div>
      </div>
    </div>
  );
}

const GalleryImage = ({ height = "" }) => (
  <div className={`relative ${height}`}>
    <Image
      src="/images/ec2.jpg"
      alt="news"
      className="object-cover rounded-sm"
      fill
    />
  </div>
);

const GalleryContent = () => {
  return (
    <div className="absolute inset-0 bg-linear-to-t from-black to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
      <p className="text-sm font-semibold mb-2">
        জনাব এ, এম, এম, নাসির উদ্দিন - প্রধান নির্বাচন কমিশনার
      </p>

      <p className="text-sm leading-relaxed">
        জনাব এ এম এম নাসির উদ্দিন ২০২৪ সালের ২১ নভেম্বর তারিখে বাংলাদেশের প্রধান
        নির্বাচন কমিশনার (সিইসি) হিসেবে নিয়োগ লাভ করেন।
      </p>
    </div>
  );
};
