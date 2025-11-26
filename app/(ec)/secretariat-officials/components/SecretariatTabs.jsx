const SecretariatTabs = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide my-4">
      <div className="flex min-w-max gap-2">
        {tabs.map((tab, i) => {
          return (
            <button
              key={tab?.id + i}
              className={`bg-[#F2F4F7] text-sm rounded-3xl relative shrink-0 px-3 py-1.5 font-medium transition-all duration-200 hover:bg-[#F2F4F7] cursor-pointer`}
            >
              <span className="relative z-10 whitespace-nowrap">
                {tab?.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const tabs = [
  { id: 1, title: "সব দপ্তর" },
  { id: 2, title: "প্রশাসন ও অর্থ দপ্তর" },
  { id: 3, title: "সংস্থাপন" },
  { id: 4, title: "সংক্ষিপ্ত-১" },
  { id: 5, title: "জনপ্রশাসন ব্যবস্থাপনা অধিদপ্তর-১" },
  { id: 6, title: "জনপ্রশাসন ব্যবস্থাপনা অধিদপ্তর-২" },
  { id: 7, title: "বাজেট" },
  { id: 8, title: "সচিব মহোদয়ের দফতর" },
];

export default SecretariatTabs;
