import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="containe mx-auto flex justify-between flex-col lg:flex-row lg:h-[70px] pt-2">
      <div className="container mx-auto">
        <div className="px-5 lg:pl22">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="bangladesh election commission logo"
              width={320}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="h-full flex items-end pb-px w-full lg:w-1/2 relative">
        <div className="h-[78px] bg-[#653887] w-full relative">
          {/* curved overlay */}
          <div className="absolute -left-[76px]">
            <div className="h-[78px] w-[78px] relative">
              <Image
                src={"/images/navbar-overlay.svg"}
                alt="navbar overlay"
                className="object-cover"
                fill
              />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
