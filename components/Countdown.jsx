"use client";
import { useEffect, useState } from "react";

const toBanglaNumber = (num) => {
  const digits = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return num === null
    ? null
    : num
        .toString()
        .split("")
        .map((n) => digits[n])
        .join("");
};

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const dateUnits = [
    { value: toBanglaNumber(timeLeft.days), label: "দিন" },
    { value: toBanglaNumber(timeLeft.hours), label: "ঘণ্টা" },
    { value: toBanglaNumber(timeLeft.minutes), label: "মিনিট" },
    { value: toBanglaNumber(timeLeft.seconds), label: "সেকেন্ড" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full">
      {dateUnits.map((units) => (
        <div key={units?.label} className="flex flex-col items-center">
          <div className="bg-black/20 backdrop-blur rounded-t-sm w-full  lg:w-[120px] h-16 sm:h-20 flex items-center justify-center">
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {units?.value === null ? "--" : units?.value}
            </span>
          </div>
          <button className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-white text-sm py-2 px-4 sm:px-6 rounded-b-sm w-full transition-colors">
            {units?.label}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
