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
        {/* <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="col-span-2 row-span-2">
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px]"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

          <div className="col-start-3">
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px] md:h-full"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

          <div className="col-start-3 row-start-2">
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px] md:h-full"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>
          <div className="row-start-3">4</div>
          <div className="row-start-3">5</div>
          <div className="row-start-3">6</div>
          <div className="row-start-4">7</div>
          <div className="row-start-4">8</div>
          <div>9</div>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
          
          <div className="md:col-span-2 md:row-span-2">
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px]"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

        
          <div>
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px] md:h-full"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

      
          <div>
            <GalleryCard
              image="/images/ec2.jpg"
              height="h-[350px] md:h-full"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

          
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          <div className="md:col-span-2 md:row-span-2">
            <GalleryCard
              image="/images/ec2.jpg"
              aspect="aspect-[4/3]"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="ফাঁকা ব্যালট বক্স"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="ফাঁকা ব্যালট বক্স"
          />

          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="4"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="5"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="6"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="7"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="8"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="9"
          />
        </div> */}

        <div
          className="
  grid 
  grid-cols-1      
  md:grid-cols-2     
  lg:grid-cols-3     
  gap-4 
  auto-rows-auto
"
        >
          <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
            <GalleryCard
              image="/images/ec2.jpg"
              aspect="aspect-[4/3]"
              title="ফাঁকা ব্যালট বক্স"
            />
          </div>

          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="ফাঁকা ব্যালট বক্স"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="ফাঁকা ব্যালট বক্স"
          />

          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="4"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="5"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="6"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="7"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="8"
          />
          <GalleryCard
            image="/images/ec2.jpg"
            aspect="aspect-[4/3]"
            title="9"
          />
        </div>
      </div>
    </div>
  );
}

// const GalleryCard = ({ image, height, title }) => {
//   return (
//     <div className="shadow-md rounded-sm h-full">
//       <div className={`relative ${height}`}>
//         <Image
//           src={image}
//           alt="news"
//           className="object-cover rounded-t-sm"
//           fill
//         />
//       </div>
//       <div className="h-8 flex justify-center">
//         <p className="text-sm">{title}</p>
//       </div>
//     </div>
//   );
// };

const GalleryCard = ({ image, aspect, title }) => {
  return (
    <div className="shadow-md rounded-sm h-full bg-white">
      <div className={`relative w-full ${aspect}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-sm"
        />
      </div>

      <div className="h-8 flex justify-center">
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};
