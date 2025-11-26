import PageTitle from "@/components/PageTitle";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function ElectionCommissioners() {
  return (
    <div>
      <PageTitle
        title={"প্রধান নির্বাচন কমিশনার ও নির্বাচন কমিশনারবৃন্দ"}
        routes={["হোম", "প্রধান নির্বাচন কমিশনার ও নির্বাচন কমিশনারবৃন্দ"]}
      />

      <div className="w-full md:pl-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-3 py-5">
          {/* Title */}
          <p className="text-sm md:text-md font-medium text-[#111827]">
            আপডেট: ১৬ নভেম্বর ২০২৫, ১৬: ৪৮
          </p>

          {/* Search box */}
          <div className="w-full md:w-1/3">
            <InputGroup>
              <InputGroupInput placeholder="অনুসন্ধান করুন ..." />
              <InputGroupAddon>
                <Search className="text-[#374151]" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
