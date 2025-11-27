import { Square } from "lucide-react";
import Image from "next/image";

const NewsSidebar = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-sm pt-2 pb-3 px-3">
      {/* title */}
      <div>
        <p className="text-[#111827] font-semibold">সাম্প্রতিক</p>
        <div className="h-1 w-15 bg-[#16A34A] mt-2 rounded-full" />
      </div>

      {/* content */}

      <div className="flex flex-col gap-8 mt-4">
        {[...new Array(4)].map((_, i) => (
          <NewsCard
            key={i}
            image="/images/ec2.jpg"
            title="মুন্সীগঞ্জে ঢাকা-চট্টগ্রাম মহাসড়কে ট্রাকে আগুন"
            time="৩ দিন আগে"
          />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ image, title, time }) => {
  return (
    <div className="flex gap-4 items-start w-full cursor-pointer group">
      {/* Fixed Image Box */}
      <div className="w-18 h-12 lg:w-28 lg:h-20 shrink-0 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <p className="text-xs lg:text-sm font-medium leading-snug group-hover:text-[#16A34A]">
          {title}
        </p>

        <p className="text-[#666666] text-xs mt-2">{time}</p>
      </div>
    </div>
  );
};

export default NewsSidebar;
