import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between h-[100px] pt-2">
      <div>
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="bangladesh election commission logo"
            width={414}
            height={92}
            className="cursor-pointer"
          />
        </Link>
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

      {/* <div className="mt-4 md:mt-0 w-full md:w-auto">
          <div className="bg-[#653887] text-white py-4 px-6 rounded-l-3xl flex items-center gap-6">

        
            <div className="flex items-center gap-2">
              
              <div>
                <p className="text-lg font-bold">৫১</p>
                <p className="text-xs">জাতীয় সংসদ নির্বাচন</p>
              </div>
            </div>

            <div className="h-10 w-px bg-white/40"></div>

             
            <div className="flex items-center gap-2">
           
              <div>
                <p className="text-lg font-bold">১১.৯ কোটি</p>
                <p className="text-xs">নিবন্ধিত ভোটার</p>
              </div>
            </div>

            <div className="h-10 w-px bg-white/40"></div>

        
            <div className="flex items-center gap-2">
              
              <div>
                <p className="text-lg font-bold">৪২,০০০+</p>
                <p className="text-xs">ভোটকেন্দ্র</p>
              </div>
            </div>

            <div className="h-10 w-px bg-white/40"></div>

           
            <div className="flex items-center gap-2">
              
              <div>
                <p className="text-lg font-bold">৩৯</p>
                <p className="text-xs">নিবন্ধিত রাজনৈতিক দল</p>
              </div>
            </div>

          </div>
        </div> */}
    </div>
  );
};

export default Navbar;
