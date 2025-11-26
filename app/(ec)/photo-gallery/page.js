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
          {/* BIG LEFT CARD */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <GalleryImage height="h-[350px] md:h-[350px] lg:h-full" />
            <GalleryContent />
          </div>

          {/* RIGHT TOP */}
          <div className="relative group overflow-hidden md:h-[250px] lg:col-span-2 lg:col-start-3">
            <GalleryImage height="h-[350px] md:h-full" />
            <GalleryContent />
          </div>

          {/* RIGHT MIDDLE */}
          <div className="relative group overflow-hidden md:h-[250px] lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <GalleryImage height="h-[350px] md:h-full" />
            <GalleryContent />
          </div>

          {/* BOTTOM FOUR */}
          <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3">
            <GalleryImage height="h-[350px] md:h-full" />
            <GalleryContent />
          </div>

          <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3">
            <GalleryImage height="h-[350px] md:h-full" />
            <GalleryContent />
          </div>

          <div className="relative group overflow-hidden md:h-[250px] lg:row-start-3">
            <GalleryImage height="h-[350px] md:h-full" />
            <GalleryContent />
          </div>
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
      className="object-cover rounded-sm"
      fill
    />
  </div>
);

const GalleryContent = () => {
  return (
    <div className="h-8 flex justify-center">
      <p className="text-sm">
        {" "}
        নির্বাচন কমিশনার (সিইসি) হিসেবে নিয়োগ লাভ করেন।
      </p>
    </div>
  );
};
