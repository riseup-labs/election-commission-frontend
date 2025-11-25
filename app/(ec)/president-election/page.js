import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FileText, Search } from "lucide-react";

export default function PresidentElection() {
  return (
    <>
      <PageTitle
        title="রাষ্ট্রপতি নির্বাচন"
        routes={["হোম", "রাষ্ট্রপতি নির্বাচন"]}
      />

      <div className="w-full md:pl-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-3 py-5">
          {/* Title */}
          <p className="text-sm md:text-md font-semibold text-[#111827]">
            রাষ্ট্রপতি নির্বাচন তথ্য ভান্ডার
          </p>

          {/* Search box */}
          <div className="w-full md:w-1/3">
            <InputGroup>
              <InputGroupInput placeholder="অনুসন্ধান করুন ..." />
              <InputGroupAddon>
                <Search className="text-[#374151]" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {lists.map((list) => (
            <div key={list.id}>
              <ListCards list={list} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const lists = [
  {
    id: "০১",
    title: "রাষ্ট্রপতি পদে নির্বাচিত প্রার্থীর নাম-ঠিকানা সম্বলিত গেজেট",
    date: "Feb 13, 2023",
  },
  {
    id: "০২",
    title: "সংবাদ বিজ্ঞপ্তি (রাষ্ট্রপতি পদে নির্বাচিত ঘোষণা)",
    date: "Feb 13, 2023",
  },
  {
    id: "০৩",
    title: "রাষ্ট্রপতি পদে নির্বাচিত প্রার্থীর নাম-ঠিকানা সম্বলিত গেজেট",
    date: "Feb 13, 2023",
  },
  {
    id: "০৪",
    title: "রাষ্ট্রপতি পদে নির্বাচিত প্রার্থীর নাম-ঠিকানা সম্বলিত গেজেট",
    date: "Feb 13, 2023",
  },
  {
    id: "০৫",
    title:
      "একাদশ জাতীয় সংসদের ৩৩ গাইবান্ধা-৫ নির্বাচনি এলাকার শূন্য আসনে উপ-নির্বাচন উপলক্ষে রিটার্নিং অফিসার কর্তৃক মনোনয়নপত্র গ্রহণ/বাতিলাদেশের বিরুদ্ধে সংক্ষুব্ধ পক্ষ কর্তৃক নির্বাচন কমিশনে দাখিলকৃত আপিলের শুনানি প্রসংগে।",
    date: "Feb 13, 2023",
  },
  {
    id: "০৬",
    title: "রাষ্ট্রপতি নির্বাচন, 2018 এর ভোটার তালিকা প্রকাশ",
    date: "Feb 13, 2023",
  },
  {
    id: "০৭",
    title: "রাষ্ট্রপতি নির্বাচন, 2018 এর ভোটার তালিকা প্রকাশ",
    date: "Feb 13, 2023",
  },
  {
    id: "০৮",
    title: "রাষ্ট্রপতি নির্বাচন, 2018 এর ভোটার তালিকা প্রকাশ",
    date: "Feb 13, 2023",
  },
];

export const ListCards = ({ list = {} }) => {
  return (
    <div className="w-full bg-[#F9FAFB] rounded-sm p-2 md:p-3 flex gap-3">
      <div className="w-10 h-10 rounded-md bg-[#F1E4FA] flex items-center justify-center text-sm">
        {list?.id}
      </div>

      <div className="flex items-center justify-between w-full gap-2">
        <div>
          <p className="text-sm font-semibold leading-snug">{list?.title}</p>
          <p className="text-xs text-[#2C2C2C]">{list?.date}</p>
        </div>

        <Button
          size="sm"
          className="bg-[#009951] hover:bg-[#009951] cursor-pointer text-xs rounded-sm text-white hover:text-white hidden lg:flex"
        >
          <FileText /> <span className="pt-1">ডাউনলোড</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="bg-[#009951] hover:bg-[#009951] cursor-pointer text-xs rounded-sm text-white hover:text-white lg:hidden"
        >
          <FileText />
        </Button>
      </div>
    </div>
  );
};
