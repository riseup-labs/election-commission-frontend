import { FastForward } from "lucide-react";
import React from "react";

const PageTitle = ({ title = "", routes = [] }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-md px-3 md:px-5 py-2">
      <div className="flex items-center gap-3 w-full">
        {/* Icon */}
        <div className="shrink-0 bg-[#009951] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <FastForward className="fill-white stroke-0" size={18} />
        </div>

        {/* Text section */}
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <p className="text-base md:text-lg font-semibold text-[#111827] leading-tight">
            {title}
          </p>

          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-1">
            {routes.map((route, i, arr) => (
              <span
                key={route}
                className={`text-sm ${
                  i < arr.length - 1 ? "text-[#009951]" : "text-[#374151]"
                }`}
              >
                {i > 0 && <span>/ </span>}
                {route}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

// bg-[#F9FAFB]
