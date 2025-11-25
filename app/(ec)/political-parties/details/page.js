import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function PartyDetails() {
  return (
    <div>
      <PageTitle
        title={"লিবারেল ডেমোক্রেটিক পার্টি - এলডিপি"}
        routes={["হোম", "নিবন্ধিত রাজনৈতিক দল", "এলডিপি"]}
      />

      <div className="flex justify-center mt-4">
        <div className="w-full md:max-w-3xl">
          <div className="w-full grid grid-cols-12 gap-3 items-stretch">
            <div className="col-span-12 md:col-span-6 rounded bg-[#F9FAFB]">
              <p className="border-b pt-2 pb-1 pl-4">নিবন্ধন</p>
              <div className="p-4 flex flex-col justify-center min-h-[120px]">
                <p>নিবন্ধন নম্বর: ০০১</p>
                <p className="mt-1">নিবন্ধন তারিখ: ২০/১০/২০০৮</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded bg-[#F9FAFB]">
              <p className="border-b pt-2 pb-1 pl-4">নিবন্ধন</p>
              <div className="p-4 flex justify-between items-center min-h-[120px]">
                <p>নিবন্ধন নম্বর: ০০১</p>
                <div className="relative w-15 h-15">
                  <Image
                    src={"/images/umbrella.png"}
                    alt={"umbrella logo"}
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded bg-[#F9FAFB]">
              <div className="p-4 flex flex-col justify-between items-center">
                <div className="relative w-[100px] h-[135px]">
                  <Image
                    src={"/images/member.png"}
                    alt={"umbrella logo"}
                    fill
                  />
                </div>
                <p className="mt-3 text-lg">ডক্টর অলি আহমদ, বীর বিক্রম</p>
                <p className="text-[#15803D] text-sm">প্রেসিডেন্ট</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded bg-[#F9FAFB]">
              <div className="p-4 flex flex-col justify-between items-center">
                <div className="relative w-[100px] h-[135px]">
                  <Image
                    src={"/images/member.png"}
                    alt={"umbrella logo"}
                    fill
                  />
                </div>
                <p className="mt-3 text-lg">ডক্টর অলি আহমদ, বীর বিক্রম</p>
                <p className="text-[#15803D] text-sm">প্রেসিডেন্ট</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// F9FAFB
