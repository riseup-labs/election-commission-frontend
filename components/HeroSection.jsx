import Countdown from "./Countdown";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative min-h-[400px] sm:min-h-[500px] lg:h-[443px] w-full overflow-hidden bg-[url('/images/hero-bg.png')] 
        bg-no-repeat bg-cover bg-position-[center_top] m:bg-position-[center_top_-100px] lg:bg-position-[center_top_-180px]"
      >
        {/* background overlay */}
        <div
          className="absolute inset-0 
          bg-linear-to-r
          from-black/95
          via-black/60
          to-black/10
          pointer-events-none"
        ></div>

        <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
          {/* Content Container */}
          <div className="relative flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12">
            {/* Left Section - Title & Description */}
            <div className="lg:max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center lg:text-start">
                স্বচ্ছ ও নিরপেক্ষ নির্বাচনের মাধ্যমে গণতন্ত্র সুদৃঢ়করণ
              </h1>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed text-center lg:text-start">
                বাংলাদেশ নির্বাচন কমিশন একটি স্বাধীন সাংবিধানিক প্রতিষ্ঠান যা
                দেশের সকল নির্বাচন পরিচালনা ও তত্ত্বাবধান করে।
              </p>
            </div>

            {/* Right Section - Election Info & Countdown */}
            <div className="flex flex-col items-center lg:items-end gap-6 sm:gap-8 w-full lg:w-auto">
              <div className="relative w-full flex flex-col items-center justify-center">
                {/* Title */}
                <h2 className="text-white text-lg sm:text-xl font-bold text-center mb-2">
                  আসন্ন নির্বাচন
                </h2>

                {/* Subtitle */}
                <p className="text-white text-sm sm:text-sm text-center mb-4 sm:mb-6">
                  জাতীয় সংসদ নির্বাচন, ১৫ ডিসেম্বর, ২০২৫
                </p>

                {/* Countdown Boxes */}

                <Countdown targetDate="2026-01-15T00:00:00" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <marquee
        behavior="screen"
        direction="rigth"
        className="bg-[#FFE8EC] border-b border-[#FF4444] text-sm py-3"
      >
        📢 জাতীয় সংসদ নির্বাচন (২০১৪, ২০১৮, ২০২৪) অনিয়ম সংগ্রহের জরিপে অংশগ্রহণ
        করুন। আপনার কণ্ঠ হোক নীতি ও প্রস্তাবের ভিত্তি
      </marquee>
    </>
  );
};

export default HeroSection;
