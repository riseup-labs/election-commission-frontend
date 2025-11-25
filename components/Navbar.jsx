import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between h-[100px] pt-2">
      <div>
        <Image
          src="/images/logo.png"
          alt="bangladesh election commission logo"
          width={414}
          height={92}
        />
      </div>

      {/* <div className="flex items-end">
        <div className="bg-[#653887] text-white flex h-18">
          <div>
            <p className="text-white/80">
              <span className="text-xl font-bold text-white">৫৯</span> জাতীয়
              সংসদ নির্বাচন
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
