import { FastForward } from "lucide-react";
import React from "react";

const PageTitle = ({ title = "", routes = [] }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-md px-3 md:px-5 py-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#009951] w-8 h-8 rounded-full flex items-center justify-center">
            <FastForward className="fill-white stroke-0" size={18} />
          </div>

          <p className="md:text-lg font-semibold pt-1 text-[#111827]">
            {title}
          </p>
        </div>

        <div>
          {routes.map((route, i, arr) => (
            <span
              key={route}
              className={`text-sm text-[${
                i < arr.length-1 ? "#009951" : "#374151"
              }]`}
            >
              {i > 0 && <span> /</span>} {route}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

// bg-[#F9FAFB]
