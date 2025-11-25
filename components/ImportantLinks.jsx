import { Square } from "lucide-react";

const ImportantLinks = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-sm pt-2 pb-3 px-3">
      {/* title */}
      <div>
        <p className="text-[#111827] font-semibold">গুরুত্বপূর্ণ লিংকসমূহ</p>
        <div className="h-1 w-15 bg-[#16A34A] mt-2 rounded-full" />
      </div>

      {/* content */}

      <ul className="bg-white mt-4 rounded">
        {importantLinks.map((notice, i) => (
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

const importantLinks = [
  {
    id: 1,
    title: "জাতীয় পরিচয় নিবন্ধন অনুবিভাগ",
  },
  {
    id: 2,
    title: "NID অনলাইন সেবা",
  },
  {
    id: 3,
    title: "জাতীয় নির্বাচন (২০১৪, ২০১৮ ও ২০২৪) তদন্ত কমিশন কমিশনকমিশন",
  },
];

export default ImportantLinks;
