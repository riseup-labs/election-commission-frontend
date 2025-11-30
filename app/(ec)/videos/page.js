import PageTitle from "@/components/PageTitle";

export default function Video() {
  return (
    <div>
      <PageTitle
        title="নির্বাচন কমিশনের ভিডিও"
        routes={["হোম", "নির্বাচন কমিশনের ভিডিও"]}
      />

      <div className="w-full mt-4 md:pl-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/C9eSiXpaAio"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {[...new Array(8)].map((_, i) => (
            <div key={i}>
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/C9eSiXpaAio"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
