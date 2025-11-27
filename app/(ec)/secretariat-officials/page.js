import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import SecretariatTabs from "./components/SecretariatTabs";

export default function SecretariatOfficials() {
  return (
    <div>
      <PageTitle
        title={"নির্বাচন কমিশন সচিবালয়ের কর্মকর্তাবৃন্দ"}
        routes={["হোম", "নির্বাচন কমিশন সচিবালয়ের কর্মকর্তাবৃন্দ"]}
      />

      <div className="w-full md:pl-4">
        <SecretariatTabs />

        <div className="bg-[#F0FDF4] w-full mb-4 mt-6 px-4 py-2 rounded">
          <p className="font-semibold text-lg md:text-base text-center">
            সচিব মহোদয়ের দপ্তর
          </p>
        </div>

        <Table className="min-w-max scrollbar-hide">
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
                // <TableRow key={i}>
                //   <TableCell>
                //     <Image
                //       src={data?.image}
                //       alt={data?.name}
                //       width={45}
                //       height={45}
                //     />
                //   </TableCell>
                //   <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                //     {data?.name}
                //   </TableCell>
                //   <TableCell>{data?.post}</TableCell>
                //   <TableCell>
                //     {data?.contact?.map((contact) => (
                //       <p key={contact}>{contact}</p>
                //     ))}
                //   </TableCell>
                // </TableRow>

                <TableRow key={i}>
                  <TableCell>
                    <Image
                      // src={data?.image}
                      src={"/images/male-placeholder.png"}
                      alt={data?.name}
                      width={45}
                      height={45}
                    />
                  </TableCell>
                  <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                    {/* {data?.name} */}
                    পুরো নাম
                  </TableCell>
                  <TableCell>
                    {/* {data?.post} */}
                    পদবি ও দপ্তর
                  </TableCell>
                  <TableCell>
                    {/* {data?.contact?.map((contact) => (
                                      <p key={contact}>{contact}</p>
                                    ))} */}
                    abc@gmail.com
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="bg-[#F0FDF4] w-full mb-4 mt-6 px-4 py-2 rounded">
          <p className="font-semibold text-lg md:text-base text-center">
            প্রশাসন ও অর্থ অনুবিভাগ
          </p>
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
                // <TableRow key={i}>
                //   <TableCell>
                //     <Image
                //       src={data?.image}
                //       alt={data?.name}
                //       width={45}
                //       height={45}
                //     />
                //   </TableCell>
                //   <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                //     {data?.name}
                //   </TableCell>
                //   <TableCell className="max-w-[250px] whitespace-normal wrap-break-words">
                //     {data?.post}
                //   </TableCell>
                //   <TableCell>
                //     {data?.contact?.map((contact) => (
                //       <p key={contact}>{contact}</p>
                //     ))}
                //   </TableCell>
                // </TableRow>

                <TableRow key={i}>
                  <TableCell>
                    <Image
                      // src={data?.image}
                      src={"/images/male-placeholder.png"}
                      alt={data?.name}
                      width={45}
                      height={45}
                    />
                  </TableCell>
                  <TableCell className="max-w-[200px] whitespace-normal wrap-break-words">
                    {/* {data?.name} */}
                    পুরো নাম
                  </TableCell>
                  <TableCell>
                    {/* {data?.post} */}
                    পদবি ও দপ্তর
                  </TableCell>
                  <TableCell>
                    {/* {data?.contact?.map((contact) => (
                                      <p key={contact}>{contact}</p>
                                    ))} */}
                    abc@gmail.com
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
    name: "জনাব মোঃ মোখলেছুর রহমান",
    post: "একান্ত সচিব, সচিব মহোদয়ের দপ্তর",
    image: "/images/ashraful.png",
    contact: ["০২-৫৫০০৭৬০০", "pstosecretary.ecs@gmail.com"],
  },
  {
    name: "জনাব কে, এম, আলী নেওয়াজ",
    post: "অতিরিক্ত সচিব, সচিব মহোদয়ের দপ্তর",
    image: "/images/ashraful.png",
    contact: ["০২-৫৫০০৭৬০০", "pstosecretary.ecs@gmail.com"],
  },
];

const tableData2 = [
  {
    name: "জনাব ডি এম আতিকুর রহমান",
    post: "যুগ্মসচিব (প্রশাসন ও অর্থ)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব মোঃ শাহ আলম",
    post: "উপসচিব (সংস্থাপন)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "মোঃ মমতাজ-আল-শিবলী",
    post: "সহকারী সচিব (সংস্থাপন-১)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব ডি এম আতিকুর রহমান",
    post: "যুগ্মসচিব (প্রশাসন ও অর্থ)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব মোঃ শাহ আলম",
    post: "উপসচিব (সংস্থাপন)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "মোঃ মমতাজ-আল-শিবলী",
    post: "সহকারী সচিব (সংস্থাপন-১)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব ডি এম আতিকুর রহমান",
    post: "যুগ্মসচিব (প্রশাসন ও অর্থ)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "জনাব মোঃ শাহ আলম",
    post: "উপসচিব (সংস্থাপন)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
  {
    name: "মোঃ মমতাজ-আল-শিবলী",
    post: "সহকারী সচিব (সংস্থাপন-১)",
    image: "/images/ashraful.png",
    contact: ["02-55007509", "01718588381", "ashrafueo1@gmail.com"],
  },
];
