import Image from "next/image";
import React from "react";

const DateAndSocialMedia = () => {
  return (
    <div className="mt-5 flex justify-between bg-red-40 border-b pb-2">
      <p className="text-[#2C2C2C] text-sm">আপডেট: ১৬ নভেম্বর ২০২৫, ১৬: ৪৮</p>

      <div className="flex gap-1.5">
        <Image
          src={"/icons/facebook.svg"}
          alt="facebook logo"
          {...imageProps}
        />
        <Image src={"/icons/x.svg"} alt="x logo" {...imageProps} />
        <Image src={"/icons/share.svg"} alt="share icon" {...imageProps} />
        <Image src={"/icons/print.svg"} alt="print icon" {...imageProps} />
      </div>
    </div>
  );
};

const imageProps = { width: 22, height: 22 };

export default DateAndSocialMedia;
