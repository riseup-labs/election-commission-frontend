import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
            <div className="col-span-12 md:col-span-6 rounded-md bg-[#F9FAFB]">
              <p className="border-b pt-2.5 pb-1 pl-4 text-sm">নিবন্ধন</p>
              <div className="p-4 flex flex-col justify-center min-h-[120px]">
                <p className="text-sm">নিবন্ধন নম্বর: ০০১</p>
                <p className="mt-1 text-sm">নিবন্ধন তারিখ: ২০/১০/২০০৮</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded-md bg-[#F9FAFB]">
              <p className="border-b pt-2.5 pb-1 pl-4 text-sm">নিবন্ধন</p>
              <div className="p-4 flex justify-between items-center min-h-[120px]">
                <p className="text-sm">নিবন্ধন নম্বর: ০০১</p>
                <div className="relative w-15 h-15">
                  <Image
                    src={"/images/umbrella.png"}
                    alt={"umbrella logo"}
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded-md bg-[#F9FAFB]">
              <div className="p-4 flex flex-col justify-between items-center">
                <div className="relative w-[100px] h-[135px]">
                  <Image src={"/images/nasir.png"} alt={"umbrella logo"} fill />
                </div>
                <p className="mt-3">ডক্টর অলি আহমদ, বীর বিক্রম</p>
                <p className="text-[#15803D] text-sm">প্রেসিডেন্ট</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 rounded-md bg-[#F9FAFB]">
              <div className="p-4 flex flex-col justify-between items-center">
                <div className="relative w-[100px] h-[135px]">
                  <Image src={"/images/nasir.png"} alt={"umbrella logo"} fill />
                </div>
                <p className="mt-3">ডক্টর অলি আহমদ, বীর বিক্রম</p>
                <p className="text-[#15803D] text-sm">প্রেসিডেন্ট</p>
              </div>
            </div>

            <div className="col-span-12 rounded-md bg-[#F9FAFB]">
              <p className="border-b pt-2.5 pb-1 pl-4 text-sm">
                যোগাযোগের তথ্য
              </p>
              <div className="p-4 pr-2">
                {contactInfo.map((info) => (
                  <div
                    key={info?.label}
                    className="w-full grid grid-cols-12 gap-2"
                  >
                    <div className="col-span-6 md:col-span-3 flex justify-between">
                      <p className="text-sm pt-0.5">{info?.label}</p>
                      <p className="text-sm">:</p>
                    </div>
                    <div className="col-span-6 md:col-span-9 flex justify-between">
                      <p className="text-sm pt-0.5">{info?.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Pagination className="w-full flex justify-between py-6">
            {/* Previous Button */}
            <PaginationPrevious
              href="#"
              className="flex items-center gap-1 bg-[#4B465C14] text-black hover:bg-[#4B465C14] hover:text-black rounded px-4 py-2 shadow-none border-none"
            >
              পূর্ববর্তী
            </PaginationPrevious>

            {/* Page Numbers */}
            <PaginationContent className="flex items-center gap-0 text-[#2C2C2C] text-sm">
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-green-600 font-semibold hover:text-green-700"
                  isActive
                >
                  ১
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#" className="hover:text-green-600">
                  ২
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#" className="hover:text-green-600">
                  ৩
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#" className="hover:text-green-600">
                  ৫৫
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>

            {/* Next Button */}
            <PaginationNext
              href="#"
              className="flex items-center gap-1 bg-[#15803D] text-white hover:bg-[#15803D] hover:text-white rounded px-4 py-2 shadow-none border-none"
            >
              পরবর্তী
            </PaginationNext>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    label: "কেন্দ্রীয় কার্যালয়ের ঠিকানা",
    value:
      "মগবাজার গুলফেশী প্লাজা, ৯ম তলা, ৮-বি,৮, শহীদ সাংবাদিক সেলিনা পারভীন সড়ক, (৬৯, আউটার সারকুলার সড়ক) মগবাজার, ঢাকা-১২১৭।",
  },
  { label: "ফোন", value: "৯৮৩৩৭৬৬" },
  { label: "মোবাইল", value: "০১৯৭৯-৪১১৩০৮" },
  { label: "ইমেইল", value: "ldp@gmail.com" },
  { label: "ওয়েব এ্যাড্রেস", value: "www.ldp-bangladesh.org" },
];
