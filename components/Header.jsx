const Header = () => {
  return (
    <div className="bg-[#2C2C2C] sm:h-11 flex items-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        <div className="h-8 flex justify-between items-center gap-4 bg-black/16">
          <p className="text-white text-sm">আজকের পরিদর্শন: 580</p>
          <p className="text-white text-sm">মোট পরিদর্শন: 10254</p>
        </div>
        <div className="h-8 flex justify-between items-center gap-4 bg-black/16">
          <p className="text-white text-sm">৫ কার্তিক, ১৪৩২</p>
          <div className="h-5 w-0.5 hidden md:block bg-white/30" />
          <p className="text-white text-sm">English</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
