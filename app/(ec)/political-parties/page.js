import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function PoliticalParties() {
  return (
    <div>
      <PageTitle
        title="নিবন্ধিত রাজনৈতিক দল (৫৭)"
        routes={["হোম", "নিবন্ধিত রাজনৈতিক দল"]}
      />
      <div className="w-full overflow-x-auto p-4">
        <Table className="min-w-max border rounded-xl shadow-sm">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="whitespace-nowrap">নিবন্ধন নম্বর</TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">নিবন্ধন তারিখ</TableHead>
              <TableHead className="whitespace-nowrap">
                প্রতিষ্ঠানের নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">ছবি</TableHead>
              <TableHead className="whitespace-nowrap">ছবি</TableHead>
              <TableHead className="whitespace-nowrap">ছবি</TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
              <TableHead className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>০০১</TableCell>
              <TableCell>মিসেস এন্টারপ্রাইজ পার্টি - এফডিএস</TableCell>
              <TableCell>২০/১০/২০০৮</TableCell>
              <TableCell>ঢাকা</TableCell>
              <TableCell>
                <Image
                  src="/cycle.png"
                  alt="ছবি"
                  className="w-10 h-10 object-contain"
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>ঢাকা</TableCell> <TableCell>ঢাকা</TableCell>
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>{" "}
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>{" "}
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>০০২</TableCell>
              <TableCell>আরবিক পার্টি - নোস্ক</TableCell>
              <TableCell>২০/১০/২০০৮</TableCell>
              <TableCell>বাংলাদেশ</TableCell>
              <TableCell>
                <Image
                  src="/cycle.png"
                  alt="ছবি"
                  className="w-10 h-10 object-contain"
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>ঢাকা</TableCell> <TableCell>ঢাকা</TableCell>
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>{" "}
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>{" "}
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>
              <TableCell className="whitespace-nowrap">
                ব্যক্তিবর্গের পদবী নাম
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
