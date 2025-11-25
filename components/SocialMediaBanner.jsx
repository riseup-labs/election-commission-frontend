import { Facebook, Youtube } from "lucide-react";

export default function SocialMediaBanner() {
  return (
    <div className="bg-[#2d3e50] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Facebook Section */}
          <div className="flex items-center gap-4">
            <div className="bg-[#3b5998] w-20 h-20 flex flex-col items-center justify-center">
              <Facebook className="w-6 h-6 text-white fill-white mb-1" />
              <div className="text-white text-center">
                <div className="text-lg font-bold">29.9K</div>
                <div className="text-sm">Fans</div>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center text-white">
            <h2 className="text-sm font-semibold mb-1">
              সামাজিক যোগাযোগ মাধ্যম
            </h2>
            <p className="text-sm text-gray-300">
              সর্বশেষ তথ্য ও আপডেটের জন্য আমাদের সাথে যুক্ত হন
            </p>
          </div>

          {/* YouTube Section */}
          <div className="flex items-center gap-4">
            <div className="bg-[#ff0000] w-20 h-20 flex flex-col items-center justify-center">
              <Youtube className="w-6 h-6 text-white fill-white mb-1" />
              <div className="text-white text-center">
                <div className="text-lg font-bold">102K</div>
                <div className="text-sm">Subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
