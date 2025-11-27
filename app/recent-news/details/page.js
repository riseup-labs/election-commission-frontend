import NewsSidebar from "./components/NewsSidebar";

export default function newsDetails() {
  return (
    <div className="container mx-auto pt-6 pb-8">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[8.5fr_3.5fr] lg:grid-cols-[9fr_3fr]">
          <div className="w-full overflow-x-auto">working</div>

          <div>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
