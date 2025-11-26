"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PartiesTable = () => {
  const router = useRouter();

  return (
    <>
      <Table className="min-w-max">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            {tableHeads.map((head, i) => (
              <TableHead key={i} className="whitespace-nowrap font-semibold">
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ...tableData,
            ...tableData,
            ...tableData,
            ...tableData,
            ...tableData,
            ...tableData,
          ].map((data, i) => {
            return (
              <TableRow
                key={i}
                className="cursor-pointer"
                onClick={() => router.push(`/political-parties/details`)}
              >
                <TableCell>{data?.id}</TableCell>
                <TableCell>{data?.name}</TableCell>
                <TableCell>{data?.date}</TableCell>
                <TableCell>{data?.signName}</TableCell>
                <TableCell>
                  <div className="border w-max p-1 border-[#F5F8FA]">
                    <Image
                      src={data?.signImage}
                      alt={data?.name}
                      width={30}
                      height={30}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

const tableHeads = [
  "নিবন্ধন নম্বর",
  "রাজনৈতিক দলের নাম",
  "নিবন্ধন তারিখ",
  "প্রতীকের নাম",
  "প্রতীক",
];

const tableData = [
  {
    id: "০০১",
    name: "লিবারেল ডেমোক্রেটিক পার্টি - এলডিপি",
    date: "২০/১০/২০০৮",
    signName: "ছাতা",
    signImage: "/images/umbrella.png",
  },
  {
    id: "০০২",
    name: "জাতীয় পার্টি - জেপি",
    date: "২০/১০/২০০৮",
    signName: "ছাতা",
    signImage: "/images/cycle.png",
  },
  {
    id: "০০৩",
    name: "বাংলাদেশের সাম্যবাদী দল (এম.এল)",
    date: "২০/১০/২০০৮",
    signName: "ছাতা",
    signImage: "/images/tire.png",
  },
];

export default PartiesTable;
