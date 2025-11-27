"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VisitorStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only one time
    threshold: 0.3, // start when 30% visible
  });

  return (
    <div
      ref={ref}
      className="relative md:h-[443px] w-full overflow-hidden bg-[url('/images/visitor-bg.png')] bg-no-repeat bg-cover lg:bg-position-[center_top_-200px] 3xl:bg-position-[center_top_-280px]"
    >
      {/* background overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      <div className="flex items-center h-full">
        <div className="relative max-w-3xl mx-auto text-center px-4 py-15">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            ওয়েবসাইট পরিদর্শন
          </h2>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-sm shadow-md py-10 px-6">
              <p className="text-4xl font-bold text-green-700">
                {inView ? <CountUp duration={3} start={0} end={580} /> : 0}
              </p>
              <p className="text-gray-600 mt-2 text-sm">আজকের পরিদর্শন</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-sm shadow-md py-10 px-6">
              <p className="text-4xl font-bold text-green-700">
                {inView ? <CountUp duration={3} start={0} end={1025} /> : 0}
              </p>
              <p className="text-gray-600 mt-2 text-sm">এই সপ্তাহে</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-sm shadow-md py-10 px-6">
              <p className="text-4xl font-bold text-green-700">
                {inView ? (
                  <CountUp duration={3} start={100000} end={102456} />
                ) : (
                  0
                )}
              </p>
              <p className="text-gray-600 mt-2 text-sm">মোট পরিদর্শন</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorStats;
