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
  return num
    .toString()
    .split("")
    .map((n) => digits[n])
    .join("");
};

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

  return (
    <div className="flex items-center gap-4 text-center">
      {/* Days */}
      <div className="bg-purple-700 text-white px-4 py-2 rounded-md">
        <p className="text-2xl font-bold">{toBanglaNumber(timeLeft.days)}</p>
        <p className="text-sm">দিন</p>
      </div>

      {/* Hours */}
      <div className="bg-purple-700 text-white px-4 py-2 rounded-md">
        <p className="text-2xl font-bold">{toBanglaNumber(timeLeft.hours)}</p>
        <p className="text-sm">ঘণ্টা</p>
      </div>

      {/* Minutes */}
      <div className="bg-purple-700 text-white px-4 py-2 rounded-md">
        <p className="text-2xl font-bold">{toBanglaNumber(timeLeft.minutes)}</p>
        <p className="text-sm">মিনিট</p>
      </div>

      {/* Seconds */}
      <div className="bg-purple-700 text-white px-4 py-2 rounded-md">
        <p className="text-2xl font-bold">{toBanglaNumber(timeLeft.seconds)}</p>
        <p className="text-sm">সেকেন্ড</p>
      </div>
    </div>
  );
}

export default Countdown;
