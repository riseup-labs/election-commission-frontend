import { Square } from "lucide-react";

const NoticeBoard = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-sm pt-2 pb-3 px-3">
      {/* title */}
      <div>
        <p className="text-[#111827] font-semibold">নোটিশ বোর্ড</p>
        <div className="h-1 w-15 bg-[#16A34A] mt-2 rounded-full" />
      </div>

      {/* content */}

      <ul className="bg-white mt-4 rounded">
        {notices.map((notice, i) => (
          <li
            key={notice?.id}
            className={`text-sm text-[#111827] flex gap-2 py-2 pl-2.5 ${
              i !== 0 && "border-t"
            } border-slate-100`}
          >
            <div className="h-3 w-3 shrink-0 flex items-center justify-center mt-1">
              <Square className="fill-[#653887] stroke-0 rotate-45 h-2 w-2" />
            </div>
            <span>{notice?.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const notices = [
  {
    id: 1,
    title: "প্রবাসী ভোটারদের ভোটদান বিষয়ক",
  },
  {
    id: 2,
    title: "প্রপোস্টাল ভোটিং (আইটি সাপোর্টেড)",
  },
  {
    id: 3,
    title: "অনলাইনে মনোনয়নপত্র দাখিল",
  },
  {
    id: 4,
    title: "অফিস আদেশ/অন্যান্য নোটিশ",
  },
  {
    id: 5,
    title: "বিদেশ ভ্রমন",
  },
  {
    id: 6,
    title: "নির্বাচনি প্রতিবেদন",
  },
  {
    id: 7,
    title: "অফিস আদেশ/অন্যান্য নোটিশ",
  },
  {
    id: 8,
    title: "নির্বাচনি প্রতিবেদন",
  },
];

export default NoticeBoard;
