import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative lg:h-[443px] w-full overflow-hidden bg-[url('/images/visitor-bg.png')] bg-no-repeat bg-cover lg:bg-position-[center_top_-200px] 3xl:bg-position-[center_top_-280px] flex flex-col justify-between">
      {/* background overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section - Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 flex items-center justify-center shrink-0"> */}
              <Image
                src="/images/footer-logo.png"
                alt="footer logo"
                width={100}
                height={100}
              />
              {/* </div> */}
              <h3 className="text-white text-base md:text-lg font-semibold leading-tight">
                বাংলাদেশ নির্বাচন কমিশন
              </h3>
            </div>

            <div className="space-y-2 text-sm text-[#D1D5DB]">
              <p className="leading-relaxed">
                নির্বাচন ভবন, শেরেবাংলা নগর, ঢাকা-১২০৭, বাংলাদেশ
              </p>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+880-2-9183542</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:secretary@bec.gov.bd"
                  className="hover:text-white transition-colors"
                >
                  secretary@bec.gov.bd
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3.5 text-sm text-[#D1D5DB]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  নির্বাচন সমূহ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ভোটার নিবন্ধন
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  রাজনৈতিক দল
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ব্যবহারের শর্তাবলী
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Services Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              সেবাসমুহ
            </h4>
            <ul className="space-y-3.5 text-sm text-[#D1D5DB]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ভোটার তথ্য যাচাই
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  নির্বাচনী ফলাফল
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  প্রার্থী তালিকা
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ডাউনলোড
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  অনলাইন সেবা
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  তথ্য অধিকার
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-[#D1D5DB]">
            All Rights Reserved © 2009 - 2025 Bangladesh Election Commission
          </p>
        </div>
      </div>
    </footer>
  );
}
