import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function PoliticalParties() {
  return (
    <div>
      <PageTitle
        title="নিবন্ধিত রাজনৈতিক দল (৫৭)"
        routes={["হোম", "নিবন্ধিত রাজনৈতিক দল"]}
      />

      <div className="w-full mt-4 md:pl-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-2 lg:row-span-2 h-[200px] md:h-[300px] lg:h-[500px] flex flex-col shadow-md">
            <GalleryImage height="h-full" />
            <GalleryContent />
          </div>

          {[...new Array(8)].map((_, i) => (
            <div
              key={i}
              className="shadow-md rounded-md flex flex-col h-[200px] lg:h-[242px]"
            >
              <GalleryImage height="h-full" />
              <GalleryContent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const GalleryImage = ({ height = "" }) => (
  <div className={`relative ${height}`}>
    <Image
      src="/images/ec2.jpg"
      alt="news"
      className="object-cover rounded-t-md"
      fill
    />
  </div>
);

const GalleryContent = () => {
  return (
    <div className="h-10 flex items-center justify-center bg-[#F9FAFB] rounded-b-md">
      <p className="text-sm font-semibold">লোরেম ইপসাম ডলর সিট আমেট</p>
    </div>
  );
};
