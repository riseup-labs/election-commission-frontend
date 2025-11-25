const Header = () => {
  return (
    <div className="bg-[#2C2C2C] h-11 flex items-center">
      <div className="container mx-auto flex justify-between">
        <div className="h-8 flex items-center gap-4 bg-black/16">
          <p className="text-white text-sm">আজকের পরিদর্শন: 580</p>
          <p className="text-white text-sm">মোট পরিদর্শন: 10254</p>
        </div>
        <div className="h-8 flex items-center gap-4 bg-black/16">
          <p className="text-white text-sm">৫ কার্তিক, ১৪৩২</p>
          <div className="h-5 w-0.5 bg-white/30" />
          <p className="text-white text-sm">মোট পরিদর্শন: 10254</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
