import { Slogan } from "@/components/Contact";
import ImportantLinks from "@/components/ImportantLinks";
import { InfoCards } from "@/components/InfoCards";

import NoticeBoard from "@/components/NoticeBoard";
import { FileText } from "lucide-react";

export default function EcLayout({ children }) {
  return (
    <div className="container mx-auto pt-6 pb-8">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[8.5fr_3.5fr] lg:grid-cols-[9fr_3fr]">
          <div className="w-full overflow-x-auto">{children}</div>

          <div>
            <div className="mb-4">
              <Slogan />
            </div>
            <div className="mb-4">
              <NoticeBoard />
            </div>

            <div className="mb-4">
              <ImportantLinks />
            </div>

            <div className="bg-[#F9FAFB] rounded-sm p-3">
              <InfoCards
                info={{
                  id: 1,
                  icon: FileText,
                  iconBg: "bg-[#F97316]",
                  title: "নিবন্ধন করুন",
                  description: "নতুন ভোটার নিবন্ধন ও তথ্য হালনাগাদ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
