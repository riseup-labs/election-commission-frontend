import Image from "next/image";

const GalleryImage = ({ height = "" }) => (
  <div className={`relative ${height}`}>
    <Image
      src="/images/ec2.jpg"
      alt="news"
      className="object-cover rounded-t-md"
      fill
    />
  </div>
);

const GalleryContent = ({ text }) => {
  return (
    <div className="h-10 flex items-center justify-center bg-[#165798] rounded-b-md">
      <p className="text-sm font-semibold text-white">{text}</p>
    </div>
  );
};

export default function ECGrid() {
  const items = [
    "ব্যাট্রল ভোটারস ক্লাবের তালিকা",
    "দ্বিতীয় ভোটারের আবেদন সমূহ",
    "ভোটার বাতিলের কারণ",
    "যেই ভোটার ভোট কেটেছে",
    "আমি নির্বাচনে মনোনয়ন",
    "কেউ নেই কেউ ভোটার",
    "মুল ভোটার মডেল",
    "জেলা পর্যায়ে ভোটার তালিকা",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Big Left Card */}
      <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 shadow-md rounded-md bg-white flex flex-col">
        <GalleryImage height="h-[200px] md:h-[350px] lg:h-[420px]" />
        <GalleryContent text="নির্বাচন কমিশনার (সিইসি) হিসেবে নিয়োগ লাভ করেন।" />
      </div>

      {/* Top Right Large Card */}

      {/* 6 Small Cards */}
      {items.map((t, i) => (
        <div key={i} className="shadow-md rounded-md bg-white flex flex-col">
          <GalleryImage height="h-[200px] md:h-[160px] lg:h-[180px]" />
          <GalleryContent text={t} />
        </div>
      ))}
    </div>
  );
}
