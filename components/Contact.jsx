import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="py-15">
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-12 gap-6 items-stretch">
          {/* LEFT LARGE CARD */}
          <div className="col-span-12 lg:col-span-9 bg-[#E9F6EE] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 h-full">
            {/* LEFT TEXT BLOCK */}
            <div className="max-w-md">
              <h2 className="text-xl md:text-3xl font-semibold">
                আপনার কথা বলুন — আমরা শুনছি
              </h2>

              <p className="mt-2 text-sm">জাতীয় নির্বাচন (২০১৪, ২০১৮, ২০২৪)</p>

              <p className="mt-4 leading-relaxed text-sm">
                ২০১৪, ২০১৮, ২০২৪ সালের নির্বাচনের অভিজ্ঞতা ও মতামত সংগ্রহের জন্য
                কমিশন গঠন করা হয়েছে। আপনার কণ্ঠ হোক নীতি ও প্রস্তাবের ভিত্তি।
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">
                <Button
                  className={
                    "text-sm bg-[#009951] hover:bg-[#009951] rounded px-3 cursor-pointer"
                  }
                >
                  অংশগ্রহণ করুন
                </Button>
                <Button
                  variant="outline"
                  className={
                    "text-sm cursor-pointer text-[#009951] hover:text-[#009951] rounded px-3 bg-transparent hover:bg-transparent border-[#009951]"
                  }
                >
                  তথ্য/অভিযোগ প্রদান করুন
                </Button>
              </div>
            </div>

            {/* RIGHT SMALL PANEL */}
            <div className="bg-white rounded py-4 pl-4 pr-2 w-full md:w-82 text-sm">
              <p className="font-semibold mb-3 text-sm">কমিশনের প্রত্যাশা</p>

              <ul className="space-y-2 list-disc marker:text-[#009951] pl-3.5">
                <li>আপনাদের অভিজ্ঞতা জানান — শুনিতে আগ্রহী</li>
                <li>কথা বলা আপনাদের অধিকার — কথা শুনুন</li>
                <li>নিবেদিতভাবে কাজ করে যান — গণতন্ত্র নির্মাণে অংশ নিন</li>
              </ul>
            </div>
          </div>

          {/* RIGHT PURPLE CARD */}
          <div className="col-span-12 lg:col-span-3 h-full flex flex-col">
            {/* TOP PURPLE HEADER */}

            <Slogan />
          </div>
        </div>
      </div>
    </div>
  );
};

export function Slogan() {
  return (
    <>
      <div className="bg-[#6D3BA8] rounded-t-sm py-2 px-3 text-white text-sm lg:text-lg h-auto leading-relaxed">
        <p>সপ্তম জাতীয় ভোটার দিবস-২০২৫ এর জন্য নির্ধারিত প্রদিপাদ্য</p>
      </div>

      {/* BOTTOM PANEL — MUST ALSO BE h-full */}
      <div className="bg-[#F7F2FB] rounded-b-sm h-full flex items-center justify-center">
        <p className="text-xl lg:text-2xl font-semibold py-4 leading-snug text-center">
          তোমার আমার বাংলাদেশে,
          <br />
          ভোট দিব মিলেমিশে
        </p>
      </div>
    </>
  );
}

export default Contact;
