import { ArrowUpRight } from "lucide-react";

export const InfoCards = ({ info }) => {
  const Icon = info?.icon;
  return (
    <div className="group relative bg-white rounded-md p-4 pb-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
      {/* Arrow Icon */}
      <div className="absolute top-4 right-4">
        <ArrowUpRight className="w-5 h-5 text-[#15803D]" />
      </div>

      {/* Icon */}
      <div
        className={`${info.iconBg} w-12 h-12 rounded-sm flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-md lg:text-lg text-[#15803D] mb-1">{info.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {info.description}
      </p>
    </div>
  );
};
