import PageTitle from "@/components/PageTitle";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
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
            {tableData.map((data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Image
                      src={data?.image}
                      alt={data?.name}
                      width={45}
                      height={45}
                    />
                  </TableCell>
                  <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                    {data?.name}
                  </TableCell>
                  <TableCell>{data?.post}</TableCell>
                  <TableCell>
                    {data?.contact?.map((contact) => (
                      <p key={contact}>{contact}</p>
                    ))}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="flex justify-center items-center flex-col md:flex-row gap-4 my-6">
          <div className="bg-[#F0FDF4] border border-[#BDF7D2] w-max px-4 py-2 rounded">
            <p className="font-semibold text-lg md:text-base text-[#009951]">
              প্রধান নির্বাচন কমিশনারদের কার্যকাল
            </p>
          </div>
          <div className="bg-[#F0FDF4] border border-[#BDF7D2] w-max px-4 py-2 rounded">
            <p className="font-semibold text-lg md:text-base text-[#009951]">
              নির্বাচন কমিশনারদের কার্যকাল
            </p>
          </div>
        </div>

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
            {tableData2.map((data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Image
                      src={data?.image}
                      alt={data?.name}
                      width={45}
                      height={45}
                    />
                  </TableCell>
                  <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                    {data?.name}
                  </TableCell>
                  <TableCell className="max-w-[250px] whitespace-normal wrap-break-words">
                    {data?.post}
                  </TableCell>
                  <TableCell>
                    {data?.contact?.map((contact) => (
                      <p key={contact}>{contact}</p>
                    ))}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const tableHeads = ["ছবি", "নাম", "পদবি ও দপ্তর", "টেলিফোন/ইমেইল"];

const tableData = [
  {
    name: "জনাব এ, এম, এম, নাসির উদ্দিন",
    post: "প্রধান নির্বাচন কমিশনার",
    image: "/images/nasir.png",
    contact: ["cec@ecs.gov.bd"],
  },
  {
    name: "জনাব আব্দুর রহমানেল মাছউদ",
    post: "নির্বাচন কমিশনার",
    image: "/images/masud.png",
    contact: ["cec@ecs.gov.bd"],
  },

  {
    name: "বেগম তাহমিদা আহমদ",
    post: "নির্বাচন কমিশনার",
    image: "/images/tahmida.png",
    contact: ["cec@ecs.gov.bd"],
  },

  {
    name: "জনাব মোঃ আনোয়ারুল ইসলাম সরকার",
    post: "নির্বাচন কমিশনার",
    image: "/images/anwarul.png",
    contact: ["cec@ecs.gov.bd"],
  },
  {
    name: "ব্রিগেডিয়ার জেনারেল আবুল ফজল মো: সানাউল্লাহ (অবসরপ্রাপ্ত)",
    post: "নির্বাচন কমিশনার",
    image: "/images/sanaullah.png",
    contact: ["cec@ecs.gov.bd"],
  },
];

const tableData2 = [
  {
    name: "জনাব মোহাম্মদ আশ্রাফুল আলম",
    post: "একান্ত সচিব, মাননীয় প্রধান নির্বাচন কমিশনার",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "এস,এম, হাবিবুর রহমান",
    post: "একান্ত সচিব, মাননীয় নির্বাচন কমিশনার (আব্দুর রহমানেল মাছউদ) এর দপ্তর",
    image: "/images/habibur.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "রৌশন আরা বেগম",
    post: "একান্ত সচিব, মাননীয় নির্বাচন কমিশনার (বেগম তাহমিদা আহমদ) এর দপ্তর",
    image: "/images/roushon.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব মোহাম্মদ কামরুজ্জামান",
    post: "একান্ত সচিব, মাননীয় নির্বাচন কমিশনার (মোঃ আনোয়ারুল ইসলাম সরকার) এর দপ্তর",
    image: "/images/kamruzzaman.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "এ এস এম জাকির হোসেন",
    post: "একান্ত সচিব, মাননীয় নির্বাচন কমিশনার (ব্রিগেডিয়ার জেনারেল আবুল ফজল মো: সানাউল্লাহ (অবসরপ্রাপ্ত)) এর দপ্তর",
    image: "/images/jakir.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
];
